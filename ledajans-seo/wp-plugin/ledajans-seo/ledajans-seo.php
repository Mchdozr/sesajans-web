<?php
/**
 * Plugin Name: LEDAJANS SEO Fixes
 * Plugin URI: https://ledajans.com
 * Description: LED ekran anahtar kelimesi SEO geri kazanım planı — birleşik schema, redirect, performans, iç link ve statik blog.
 * Version: 1.0.0
 * Author: LEDAJANS
 * Author URI: https://ledajans.com
 * License: GPL-2.0-or-later
 * Text Domain: ledajans-seo
 */

if (!defined('ABSPATH')) {
    exit;
}

define('LEDAJANS_SEO_VERSION', '1.0.0');
define('LEDAJANS_SEO_DIR', plugin_dir_path(__FILE__));
define('LEDAJANS_SEO_URL', plugin_dir_url(__FILE__));

require_once LEDAJANS_SEO_DIR . 'includes/class-ledajans-seo-data.php';
require_once LEDAJANS_SEO_DIR . 'includes/class-ledajans-seo-schema.php';
require_once LEDAJANS_SEO_DIR . 'includes/class-ledajans-seo-redirects.php';
require_once LEDAJANS_SEO_DIR . 'includes/class-ledajans-seo-performance.php';
require_once LEDAJANS_SEO_DIR . 'includes/class-ledajans-seo-internal-links.php';
require_once LEDAJANS_SEO_DIR . 'includes/class-ledajans-seo-homepage-blog.php';
require_once LEDAJANS_SEO_DIR . 'includes/class-ledajans-seo-meta.php';

final class LEDAJANS_SEO_Plugin {
    public static function init(): void {
        LEDAJANS_SEO_Data::init();
        LEDAJANS_SEO_Schema::init();
        LEDAJANS_SEO_Redirects::init();
        LEDAJANS_SEO_Performance::init();
        LEDAJANS_SEO_Internal_Links::init();
        LEDAJANS_SEO_Homepage_Blog::init();
        LEDAJANS_SEO_Meta::init();
    }
}

add_action('plugins_loaded', ['LEDAJANS_SEO_Plugin', 'init']);

register_activation_hook(__FILE__, function (): void {
    flush_rewrite_rules();
});

register_deactivation_hook(__FILE__, function (): void {
    flush_rewrite_rules();
});
