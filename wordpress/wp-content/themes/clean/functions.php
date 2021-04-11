<?php

function custom_setup() {
	add_theme_support( 'post-thumbnails' );
	add_theme_support('title-tag');
  add_theme_support( 'html5', [ 'script', 'style' ] );
	add_image_size( 'header_icon', 43, 43, true );
}
add_action('after_setup_theme', 'custom_setup');



function mb_login_url() {  return home_url(); }
add_filter( 'login_headerurl', 'mb_login_url' );



add_action( 'init', function() {
	register_nav_menu('custom-main-menu',__( 'Custom Main Menu' ));
} );



function alx_thumbnail_upscale( $default, $orig_w, $orig_h, $new_w, $new_h, $crop ){
	if ( !$crop ) return null; // let the wordpress default function handle this

	$aspect_ratio = $orig_w / $orig_h;
	$size_ratio = max($new_w / $orig_w, $new_h / $orig_h);

	$crop_w = round($new_w / $size_ratio);
	$crop_h = round($new_h / $size_ratio);

	$s_x = floor( ($orig_w - $crop_w) / 2 );
	$s_y = floor( ($orig_h - $crop_h) / 2 );

	return array( 0, 0, (int) $s_x, (int) $s_y, (int) $new_w, (int) $new_h, (int) $crop_w, (int) $crop_h );
}
add_filter( 'image_resize_dimensions', 'alx_thumbnail_upscale', 10, 6 );



// create custom function to return nav menu
function custom_wp_menu() {
	return wp_get_nav_menu_items(2);
}



// create new endpoint route
add_action( 'rest_api_init', function () {
	register_rest_route( 'wp/v2', 'menu', array(
			'methods' => 'GET',
			'callback' => 'custom_wp_menu',
	) );
} );



if ( function_exists( 'acf_add_options_page' ) ) {
	acf_add_options_page(
		array(
			'page_title' => 'Szablon',
			'menu_title' => 'Ustawienia Szablonu',
			'menu_slug'  => 'header-options-page',
			'capability' => 'edit_posts',
			'redirect'   => false,
			'show_in_rest' => true
		)
	);
}