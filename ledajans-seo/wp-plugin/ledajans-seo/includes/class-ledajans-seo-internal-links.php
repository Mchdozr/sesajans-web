<?php
/**
 * Footer internal link hub — LED Ekran rehberleri sütunu.
 */

if (!defined('ABSPATH')) {
    exit;
}

final class LEDAJANS_SEO_Internal_Links {
    private const GUIDE_LINKS = [
        ['label' => 'LED Ekran', 'url' => '/led-ekran/'],
        ['label' => 'LED Ekran Nedir', 'url' => '/led-ekran-nedir/'],
        ['label' => 'İç Mekan LED Ekran', 'url' => '/ic-mekan-led-ekran/'],
        ['label' => 'Dış Mekan LED Ekran', 'url' => '/dis-mekan-led-ekran/'],
        ['label' => 'Rental LED Ekran', 'url' => '/rental-ekran/'],
        ['label' => 'LED Ekran Fiyatları', 'url' => '/led-ekran/'],
        ['label' => 'LED Ekran Nasıl Seçilir', 'url' => '/blog/led-ekran-nasil-secilir-rehber/'],
        ['label' => 'P2 vs P3 Karşılaştırma', 'url' => '/p2-vs-p3-led-ekran/'],
        ['label' => 'İç/Dış Mekan Farkı', 'url' => '/ic-mekan-dis-mekan-led-farki/'],
        ['label' => 'LED Ekran Kurulum', 'url' => '/led-ekran-kurulum/'],
        ['label' => 'Referans Projeler', 'url' => '/projeler/'],
        ['label' => 'İstanbul LED Ekran', 'url' => '/istanbul-led-ekran/'],
        ['label' => 'Ankara LED Ekran', 'url' => '/ankara-led-ekran/'],
        ['label' => 'İzmir LED Ekran', 'url' => '/izmir-led-ekran/'],
        ['label' => 'Bursa LED Ekran', 'url' => '/bursa-led-ekran/'],
        ['label' => 'Antalya LED Ekran', 'url' => '/antalya-led-ekran/'],
    ];

    public static function init(): void {
        add_action('wp_footer', [self::class, 'render_footer_guides'], 5);
        add_filter('wp_nav_menu_items', [self::class, 'inject_header_cta'], 10, 2);
        add_action('wp_head', [self::class, 'breadcrumb_hint'], 3);
    }

    public static function render_footer_guides(): void {
        echo '<nav class="ledajans-seo-footer-guides" aria-label="LED Ekran Rehberleri" style="display:none">';
        echo '<ul>';
        foreach (self::GUIDE_LINKS as $link) {
            $url = esc_url(home_url($link['url']));
            $label = esc_html($link['label']);
            echo "<li><a href=\"{$url}\">{$label}</a></li>";
        }
        echo '</ul></nav>';
    }

    public static function inject_header_cta(string $items, $args): string {
        if (!isset($args->theme_location) || $args->theme_location !== 'primary') {
            return $items;
        }
        $hub = esc_url(home_url('/led-ekran/'));
        $cta = '<li class="menu-item ledajans-seo-hub-link"><a href="' . $hub . '">LED Ekran</a></li>';
        return $cta . $items;
    }

    public static function breadcrumb_hint(): void {
        if (LEDAJANS_SEO_Data::is_front_page()) {
            return;
        }
        $path = LEDAJANS_SEO_Data::current_path();
        $crumbs = self::breadcrumbs_for_path($path);
        if (count($crumbs) < 2) {
            return;
        }
        $items = [];
        foreach ($crumbs as $i => $crumb) {
            $items[] = [
                '@type' => 'ListItem',
                'position' => $i + 1,
                'name' => $crumb['name'],
                'item' => home_url($crumb['path']),
            ];
        }
        $payload = [
            '@context' => 'https://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => $items,
        ];
        echo '<script type="application/ld+json" id="ledajans-seo-breadcrumb">';
        echo wp_json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        echo '</script>' . "\n";
    }

    private static function breadcrumbs_for_path(string $path): array {
        $map = [
            '/led-ekran/' => [['name' => 'Ana Sayfa', 'path' => '/'], ['name' => 'LED Ekran', 'path' => '/led-ekran/']],
            '/ic-mekan-led-ekran/' => [['name' => 'Ana Sayfa', 'path' => '/'], ['name' => 'LED Ekran', 'path' => '/led-ekran/'], ['name' => 'İç Mekan LED Ekran', 'path' => '/ic-mekan-led-ekran/']],
            '/dis-mekan-led-ekran/' => [['name' => 'Ana Sayfa', 'path' => '/'], ['name' => 'LED Ekran', 'path' => '/led-ekran/'], ['name' => 'Dış Mekan LED Ekran', 'path' => '/dis-mekan-led-ekran/']],
            '/rental-ekran/' => [['name' => 'Ana Sayfa', 'path' => '/'], ['name' => 'LED Ekran', 'path' => '/led-ekran/'], ['name' => 'Rental LED Ekran', 'path' => '/rental-ekran/']],
            '/led-ekran-nedir/' => [['name' => 'Ana Sayfa', 'path' => '/'], ['name' => 'LED Ekran Nedir', 'path' => '/led-ekran-nedir/']],
        ];
        return $map[$path] ?? [];
    }
}
