<?php
/**
 * 301 redirects and canonical overrides for keyword cannibalization.
 */

if (!defined('ABSPATH')) {
    exit;
}

final class LEDAJANS_SEO_Redirects {
    public static function init(): void {
        add_action('template_redirect', [self::class, 'handle_redirects'], 1);
        add_action('wp_head', [self::class, 'output_canonical_override'], 1);
        add_filter('wp_robots', [self::class, 'noindex_thin_paths']);
    }

    public static function handle_redirects(): void {
        if (is_admin()) {
            return;
        }

        $path = LEDAJANS_SEO_Data::current_path();
        $redirects = LEDAJANS_SEO_Data::redirects();
        $rules = $redirects['301'] ?? [];

        foreach ($rules as $rule) {
            $from = $rule['from'] ?? '';
            if ($from === $path) {
                $to = home_url($rule['to'] ?? '/');
                wp_safe_redirect($to, 301);
                exit;
            }
        }
    }

    public static function output_canonical_override(): void {
        $path = LEDAJANS_SEO_Data::current_path();
        $redirects = LEDAJANS_SEO_Data::redirects();
        $overrides = $redirects['canonical_overrides'] ?? [];

        foreach ($overrides as $override) {
            if (($override['path'] ?? '') === $path) {
                $canonical = esc_url($override['canonical'] ?? '');
                if ($canonical !== '') {
                    echo '<link rel="canonical" href="' . $canonical . '" id="ledajans-seo-canonical" />' . "\n";
                }
                return;
            }
        }
    }

    public static function noindex_thin_paths(array $robots): array {
        $path = LEDAJANS_SEO_Data::current_path();
        $thin_paths = [
            '/blog/led-ekran-4/',
            '/blog/led-ekran-5/',
            '/blog/led-ekran-6/',
            '/blog/led-ekran-7/',
            '/blog/led-ekran-10/',
            '/de/blog/led-ekran-10/',
        ];

        if (in_array($path, $thin_paths, true)) {
            $robots['noindex'] = true;
            $robots['nofollow'] = true;
        }

        return $robots;
    }
}
