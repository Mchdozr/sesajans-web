<?php
/**
 * Performance optimizations — W3TC/Elementor bloat mitigation.
 */

if (!defined('ABSPATH')) {
    exit;
}

final class LEDAJANS_SEO_Performance {
    public static function init(): void {
        add_action('wp_enqueue_scripts', [self::class, 'optimize_assets'], 999);
        add_filter('script_loader_tag', [self::class, 'defer_non_critical_scripts'], 10, 3);
        add_filter('wp_get_attachment_image_attributes', [self::class, 'fix_lazyload_attributes'], 10, 3);
        add_action('wp_head', [self::class, 'preload_lcp_hint'], 2);
        add_filter('w3tc_lazyload_skip', [self::class, 'skip_lcp_lazyload'], 10, 2);
    }

    public static function optimize_assets(): void {
        if (is_admin()) {
            return;
        }

        wp_dequeue_style('wp-block-library');
        wp_dequeue_style('wp-block-library-theme');
        wp_dequeue_style('wc-block-style');
        wp_dequeue_style('global-styles');

        if (LEDAJANS_SEO_Data::is_front_page()) {
            wp_dequeue_script('wp-embed');
        }
    }

    public static function defer_non_critical_scripts(string $tag, string $handle, string $src): string {
        $critical = ['jquery-core', 'jquery', 'elementor-frontend'];
        if (in_array($handle, $critical, true)) {
            return $tag;
        }
        if (str_contains($tag, ' defer') || str_contains($tag, ' async')) {
            return $tag;
        }
        if (str_contains($src, 'elementor') || str_contains($src, 'w3tc')) {
            return str_replace('<script ', '<script defer ', $tag);
        }
        return $tag;
    }

    public static function fix_lazyload_attributes(array $attr, $attachment, $size): array {
        if (!empty($attr['class']) && str_contains($attr['class'], 'ledajans-hero')) {
            unset($attr['loading']);
            $attr['fetchpriority'] = 'high';
        }
        if (!empty($attr['alt']) && str_contains($attr['alt'], 'w3tc_lazyload')) {
            $attr['alt'] = 'LEDAJANS LED ekran çözümleri';
        }
        return $attr;
    }

    public static function preload_lcp_hint(): void {
        if (!LEDAJANS_SEO_Data::is_front_page()) {
            return;
        }
        $site = LEDAJANS_SEO_Data::site();
        $logo = $site['logo'] ?? '';
        if ($logo !== '') {
            echo '<link rel="preload" as="image" href="' . esc_url($logo) . '" fetchpriority="high" />' . "\n";
        }
    }

    public static function skip_lcp_lazyload(bool $skip, $img): bool {
        if (LEDAJANS_SEO_Data::is_front_page()) {
            return true;
        }
        return $skip;
    }
}
