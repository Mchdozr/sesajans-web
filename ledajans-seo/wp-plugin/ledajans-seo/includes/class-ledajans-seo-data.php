<?php
/**
 * JSON data loader for LEDAJANS SEO plugin.
 */

if (!defined('ABSPATH')) {
    exit;
}

final class LEDAJANS_SEO_Data {
    private static ?array $site = null;
    private static ?array $faqs = null;
    private static ?array $redirects = null;

    public static function init(): void {
        // no-op bootstrap
    }

    public static function site(): array {
        if (self::$site === null) {
            self::$site = self::load_json('site.json');
        }
        return self::$site;
    }

    public static function faqs(string $context = 'homepage'): array {
        if (self::$faqs === null) {
            self::$faqs = self::load_json('faqs.json');
        }
        return self::$faqs[$context] ?? [];
    }

    public static function redirects(): array {
        if (self::$redirects === null) {
            self::$redirects = self::load_json('redirects.json');
        }
        return self::$redirects;
    }

    public static function current_path(): string {
        $uri = isset($_SERVER['REQUEST_URI']) ? wp_unslash($_SERVER['REQUEST_URI']) : '/';
        $path = wp_parse_url($uri, PHP_URL_PATH);
        if (!is_string($path) || $path === '') {
            return '/';
        }
        $path = '/' . trim($path, '/') . (str_ends_with($path, '/') || $path === '/' ? '/' : '/');
        if ($path !== '/' && !str_ends_with($path, '/')) {
            $path .= '/';
        }
        return $path;
    }

    public static function is_front_page(): bool {
        return is_front_page() || is_home();
    }

    public static function is_hub_page(): bool {
        return self::current_path() === '/led-ekran/';
    }

    private static function load_json(string $filename): array {
        $path = LEDAJANS_SEO_DIR . 'data/' . $filename;
        if (!file_exists($path)) {
            return [];
        }
        $raw = file_get_contents($path);
        if ($raw === false) {
            return [];
        }
        $decoded = json_decode($raw, true);
        return is_array($decoded) ? $decoded : [];
    }
}
