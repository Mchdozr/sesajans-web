<?php
/**
 * Server-side blog rendering for homepage — replaces AJAX "Yükleniyor..." block.
 */

if (!defined('ABSPATH')) {
    exit;
}

final class LEDAJANS_SEO_Homepage_Blog {
    public static function init(): void {
        add_shortcode('ledajans_home_blog', [self::class, 'render_shortcode']);
        add_filter('the_content', [self::class, 'inject_blog_on_homepage'], 20);
        add_action('wp_footer', [self::class, 'replace_ajax_blog_script'], 50);
    }

    public static function render_shortcode($atts = []): string {
        $atts = shortcode_atts(['count' => 6], $atts, 'ledajans_home_blog');
        $count = max(3, min(12, (int) $atts['count']));
        return self::render_posts($count);
    }

    public static function inject_blog_on_homepage(string $content): string {
        if (!LEDAJANS_SEO_Data::is_front_page() || !in_the_loop() || !is_main_query()) {
            return $content;
        }
        if (str_contains($content, 'ledajans-seo-home-blog')) {
            return $content;
        }
        if (!str_contains($content, 'Yükleniyor')) {
            return $content;
        }
        $blog_html = self::render_posts(6);
        $replacement = '<section class="ledajans-seo-home-blog" aria-label="LED Ekran Blog">' . $blog_html . '</section>';
        return preg_replace(
            '/<section[^>]*blog[^>]*>.*?Yükleniyor.*?<\/section>/is',
            $replacement,
            $content,
            1
        ) ?? ($content . $replacement);
    }

    public static function replace_ajax_blog_script(): void {
        if (!LEDAJANS_SEO_Data::is_front_page()) {
            return;
        }
        ?>
        <script id="ledajans-seo-blog-fix">
        (function () {
          var loading = document.body.innerText.indexOf('Yükleniyor') !== -1;
          var container = document.querySelector('.ledajans-seo-home-blog');
          if (loading && !container) {
            var sections = document.querySelectorAll('section');
            sections.forEach(function (section) {
              if (section.innerText.indexOf('Yükleniyor') !== -1 && section.innerText.indexOf('Blog') !== -1) {
                section.setAttribute('data-ledajans-blog-pending', '1');
              }
            });
          }
        })();
        </script>
        <?php
    }

    private static function render_posts(int $count): string {
        $query = new WP_Query([
            'post_type' => 'post',
            'post_status' => 'publish',
            'posts_per_page' => $count,
            'orderby' => 'date',
            'order' => 'DESC',
            'no_found_rows' => true,
            'ignore_sticky_posts' => true,
        ]);

        if (!$query->have_posts()) {
            return '<p><a href="' . esc_url(home_url('/blog/')) . '">LED ekran rehberlerini inceleyin</a></p>';
        }

        ob_start();
        echo '<div class="ledajans-seo-blog-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.25rem">';
        while ($query->have_posts()) {
            $query->the_post();
            $permalink = get_permalink();
            $title = get_the_title();
            $date = get_the_date('j F Y');
            $excerpt = wp_trim_words(get_the_excerpt(), 22, '…');
            $thumb = get_the_post_thumbnail(
                get_the_ID(),
                'medium',
                [
                    'alt' => $title . ' — LED ekran rehberi görseli',
                    'loading' => 'lazy',
                    'decoding' => 'async',
                ]
            );
            echo '<article class="ledajans-seo-blog-card" style="border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;background:#fff">';
            if ($thumb) {
                echo '<a href="' . esc_url($permalink) . '">' . $thumb . '</a>';
            }
            echo '<div style="padding:1rem">';
            echo '<time datetime="' . esc_attr(get_the_date('c')) . '" style="font-size:.8rem;color:#6b7280">' . esc_html($date) . '</time>';
            echo '<h3 style="font-size:1rem;margin:.5rem 0"><a href="' . esc_url($permalink) . '">' . esc_html($title) . '</a></h3>';
            echo '<p style="font-size:.9rem;color:#374151;margin:0 0 .75rem">' . esc_html($excerpt) . '</p>';
            echo '<a href="' . esc_url($permalink) . '" style="font-size:.85rem;font-weight:600">Devamını oku →</a>';
            echo '</div></article>';
        }
        echo '</div>';
        wp_reset_postdata();
        return (string) ob_get_clean();
    }
}
