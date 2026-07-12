<?php
/**
 * Title and meta description overrides for primary SEO pages.
 */

if (!defined('ABSPATH')) {
    exit;
}

final class LEDAJANS_SEO_Meta {
    private const META_MAP = [
        '/' => [
            'title' => 'LED Ekran | Satış, Kiralama ve Kurulum — LEDAJANS',
            'description' => 'LED ekran satış, kiralama ve profesyonel kurulum. İç mekan, dış mekan ve rental çözümler. 25 yıl tecrübe, 2 yıl garanti. Ücretsiz keşif için hemen arayın.',
        ],
        '/led-ekran/' => [
            'title' => 'LED Ekran ve Fiyatları 2026 | İç-Dış Mekan — LEDAJANS',
            'description' => 'LED ekran fiyatları, m² hesaplama ve proje danışmanlığı. İç mekan, dış mekan, rental modeller. 25 yıl tecrübe, 2 yıl garanti. Ücretsiz keşif — Türkiye geneli teklif.',
        ],
        '/bursa-led-ekran/' => [
            'title' => 'Bursa LED Ekran Satış ve Kurulum | LEDAJANS',
            'description' => 'Bursa iç ve dış mekan LED ekran satış, kiralama ve kurulum. OSB, AVM ve fuar projeleri için ücretsiz keşif ve 2 yıl garanti.',
        ],
        '/antalya-led-ekran/' => [
            'title' => 'Antalya LED Ekran Satış ve Kurulum | LEDAJANS',
            'description' => 'Antalya LED ekran çözümleri: otel, AVM, açık hava reklam ve etkinlik ekranları. IP65 dış mekan ve rental LED ekran — ücretsiz keşif.',
        ],
        '/kocaeli-led-ekran/' => [
            'title' => 'Kocaeli LED Ekran Satış ve Kurulum | LEDAJANS',
            'description' => 'Kocaeli ve Gebze bölgesinde LED ekran satış, kurulum ve teknik destek. Sanayi, fuar ve kurumsal projeler için ücretsiz keşif.',
        ],
        '/gaziantep-led-ekran/' => [
            'title' => 'Gaziantep LED Ekran Satış ve Kurulum | LEDAJANS',
            'description' => 'Gaziantep LED ekran satış ve kurulum hizmeti. Mağaza, fabrika ve açık hava reklam panoları için iç/dış mekan çözümler.',
        ],
        '/adana-led-ekran/' => [
            'title' => 'Adana LED Ekran Satış ve Kurulum | LEDAJANS',
            'description' => 'Adana LED ekran satış, kiralama ve kurulum. AVM, stadyum ve kurumsal projeler için P2–P10 LED ekran çözümleri.',
        ],
    ];

    public static function init(): void {
        add_filter('pre_get_document_title', [self::class, 'filter_title'], 20);
        add_filter('rank_math/frontend/title', [self::class, 'filter_rank_math_title'], 20);
        add_filter('rank_math/frontend/description', [self::class, 'filter_rank_math_description'], 20);
        add_action('wp_head', [self::class, 'output_meta_fallback'], 0);
    }

    public static function filter_title(string $title): string {
        $meta = self::meta_for_current_path();
        return $meta['title'] ?? $title;
    }

    public static function filter_rank_math_title(string $title): string {
        $meta = self::meta_for_current_path();
        return $meta['title'] ?? $title;
    }

    public static function filter_rank_math_description(string $description): string {
        $meta = self::meta_for_current_path();
        return $meta['description'] ?? $description;
    }

    public static function output_meta_fallback(): void {
        $meta = self::meta_for_current_path();
        if (empty($meta['description'])) {
            return;
        }
        echo '<meta name="description" content="' . esc_attr($meta['description']) . '" id="ledajans-seo-description" />' . "\n";
    }

    private static function meta_for_current_path(): array {
        $path = LEDAJANS_SEO_Data::current_path();
        return self::META_MAP[$path] ?? [];
    }
}
