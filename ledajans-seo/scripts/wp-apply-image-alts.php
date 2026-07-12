<?php
/**
 * WP-CLI: Apply LED ekran optimized alt texts to media library.
 *
 * Usage (on WordPress server):
 *   wp eval-file ledajans-seo/scripts/wp-apply-image-alts.php
 */

if (!defined('ABSPATH') && !class_exists('WP_CLI')) {
    fwrite(STDERR, "Run via WP-CLI on WordPress server.\n");
    exit(1);
}

$data_path = dirname(__DIR__) . '/data/image-alts.json';
if (!file_exists($data_path)) {
    WP_CLI::error("image-alts.json not found at {$data_path}");
}

$alts = json_decode(file_get_contents($data_path), true);
$updated = 0;

foreach ($alts['products'] ?? [] as $product) {
    $posts = get_posts([
        'post_type' => 'any',
        'name' => $product['slug'],
        'posts_per_page' => 1,
    ]);
    if (empty($posts)) {
        continue;
    }
    $thumb_id = get_post_thumbnail_id($posts[0]->ID);
    if ($thumb_id) {
        update_post_meta($thumb_id, '_wp_attachment_image_alt', $product['alt']);
        $updated++;
        WP_CLI::log("Product alt: {$product['slug']}");
    }
}

foreach ($alts['projects'] ?? [] as $project) {
    $posts = get_posts([
        'post_type' => 'portfolio',
        'name' => $project['slug'],
        'posts_per_page' => 1,
        'post_status' => 'any',
    ]);
    if (empty($posts)) {
        $posts = get_posts([
            'post_type' => 'any',
            's' => $project['title'],
            'posts_per_page' => 1,
        ]);
    }
    if (empty($posts)) {
        continue;
    }
    $thumb_id = get_post_thumbnail_id($posts[0]->ID);
    if ($thumb_id) {
        update_post_meta($thumb_id, '_wp_attachment_image_alt', $project['alt']);
        $updated++;
        WP_CLI::log("Project alt: {$project['slug']}");
    }
}

WP_CLI::success("Updated {$updated} image alt texts.");

// WebP note
WP_CLI::log("WebP: Enable ShortPixel or Imagify → WebP conversion, quality " . ($alts['webp_rules']['quality'] ?? 82));
