<?php
/**
 * Unified JSON-LD schema — removes duplicate Organization/LocalBusiness blocks.
 */

if (!defined('ABSPATH')) {
    exit;
}

final class LEDAJANS_SEO_Schema {
    public static function init(): void {
        add_filter('rank_math/json_ld', [self::class, 'filter_rank_math_schema'], 99, 2);
        add_action('wp_head', [self::class, 'remove_third_party_schema'], 0);
        add_action('wp_head', [self::class, 'output_unified_schema'], 99);
    }

    public static function remove_third_party_schema(): void {
        if (!LEDAJANS_SEO_Data::is_front_page() && !LEDAJANS_SEO_Data::is_hub_page()) {
            return;
        }
        remove_all_actions('rank_math/json_ld');
        add_filter('wpseo_json_ld_output', '__return_false');
    }

    public static function filter_rank_math_schema($data, $jsonld): array {
        if (!LEDAJANS_SEO_Data::is_front_page() && !LEDAJANS_SEO_Data::is_hub_page()) {
            return is_array($data) ? $data : [];
        }
        return [];
    }

    public static function output_unified_schema(): void {
        $site = LEDAJANS_SEO_Data::site();
        $url = rtrim($site['url'] ?? 'https://ledajans.com', '/');
        $graph = [
            self::organization_node($site, $url),
            self::local_business_node($site, $url),
            self::website_node($site, $url),
        ];

        if (LEDAJANS_SEO_Data::is_front_page()) {
            $graph[] = self::faq_node(LEDAJANS_SEO_Data::faqs('homepage'));
        }

        if (LEDAJANS_SEO_Data::is_hub_page()) {
            $graph[] = self::service_node($site, $url);
            $graph[] = self::faq_node(LEDAJANS_SEO_Data::faqs('hub'));
        }

        $payload = [
            '@context' => 'https://schema.org',
            '@graph' => $graph,
        ];

        echo '<script type="application/ld+json" id="ledajans-seo-schema">';
        echo wp_json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
        echo '</script>' . "\n";
    }

    private static function organization_node(array $site, string $url): array {
        return [
            '@type' => 'Organization',
            '@id' => $url . '/#organization',
            'name' => $site['brand'] ?? 'LEDAJANS',
            'legalName' => $site['legalName'] ?? '',
            'alternateName' => $site['alternateName'] ?? 'LED Ajans',
            'url' => $url,
            'logo' => [
                '@type' => 'ImageObject',
                'url' => $site['logo'] ?? $url . '/wp-content/uploads/logo.png',
            ],
            'description' => $site['description'] ?? '',
            'telephone' => $site['phone'] ?? '',
            'email' => $site['email'] ?? '',
            'foundingDate' => (string) ($site['foundedYear'] ?? '2001'),
            'sameAs' => array_values(array_filter([
                $site['social']['instagram'] ?? '',
                $site['social']['linkedin'] ?? '',
                $site['social']['youtube'] ?? '',
            ])),
            'address' => self::postal_address($site),
        ];
    }

    private static function local_business_node(array $site, string $url): array {
        $node = [
            '@type' => 'LocalBusiness',
            '@id' => $url . '/#localbusiness',
            'name' => $site['brand'] ?? 'LEDAJANS',
            'url' => $url,
            'image' => $site['logo'] ?? '',
            'telephone' => $site['phone'] ?? '',
            'email' => $site['email'] ?? '',
            'priceRange' => $site['priceRange'] ?? '$$',
            'parentOrganization' => ['@id' => $url . '/#organization'],
            'address' => self::postal_address($site),
            'areaServed' => [
                '@type' => 'Country',
                'name' => 'Türkiye',
            ],
        ];

        if (!empty($site['geo'])) {
            $node['geo'] = [
                '@type' => 'GeoCoordinates',
                'latitude' => $site['geo']['latitude'],
                'longitude' => $site['geo']['longitude'],
            ];
        }

        if (!empty($site['openingHours'])) {
            $node['openingHoursSpecification'] = array_map(static function ($slot) {
                return [
                    '@type' => 'OpeningHoursSpecification',
                    'dayOfWeek' => $slot['days'],
                    'opens' => $slot['opens'],
                    'closes' => $slot['closes'],
                ];
            }, $site['openingHours']);
        }

        return $node;
    }

    private static function website_node(array $site, string $url): array {
        return [
            '@type' => 'WebSite',
            '@id' => $url . '/#website',
            'name' => $site['brand'] ?? 'LEDAJANS',
            'url' => $url,
            'inLanguage' => 'tr-TR',
            'publisher' => ['@id' => $url . '/#organization'],
            'potentialAction' => [
                '@type' => 'SearchAction',
                'target' => [
                    '@type' => 'EntryPoint',
                    'urlTemplate' => $url . '/?s={search_term_string}',
                ],
                'query-input' => 'required name=search_term_string',
            ],
        ];
    }

    private static function service_node(array $site, string $url): array {
        return [
            '@type' => 'Service',
            '@id' => $url . '/led-ekran/#service',
            'name' => 'LED Ekran Satış, Kiralama ve Kurulum',
            'serviceType' => 'LED ekran çözümleri',
            'provider' => ['@id' => $url . '/#organization'],
            'areaServed' => 'Türkiye',
            'url' => $url . '/led-ekran/',
            'description' => 'İç mekan, dış mekan ve rental LED ekran satışı, kiralama ve profesyonel kurulum hizmeti.',
            'offers' => [
                '@type' => 'Offer',
                'priceCurrency' => 'TRY',
                'availability' => 'https://schema.org/InStock',
                'url' => $url . '/iletisim/',
                'description' => 'Proje bazlı LED ekran fiyat teklifi — ücretsiz keşif',
            ],
        ];
    }

    private static function faq_node(array $faqs): array {
        return [
            '@type' => 'FAQPage',
            'mainEntity' => array_map(static function ($faq) {
                return [
                    '@type' => 'Question',
                    'name' => $faq['q'],
                    'acceptedAnswer' => [
                        '@type' => 'Answer',
                        'text' => $faq['a'],
                    ],
                ];
            }, $faqs),
        ];
    }

    private static function postal_address(array $site): array {
        $addr = $site['address'] ?? [];
        return [
            '@type' => 'PostalAddress',
            'streetAddress' => $addr['streetAddress'] ?? '',
            'addressLocality' => $addr['addressLocality'] ?? 'İstanbul',
            'addressRegion' => $addr['addressRegion'] ?? 'İstanbul',
            'addressCountry' => $addr['addressCountry'] ?? 'TR',
        ];
    }
}
