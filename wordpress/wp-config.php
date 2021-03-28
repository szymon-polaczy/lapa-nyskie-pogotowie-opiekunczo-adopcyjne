<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */


define('FS_METHOD','direct');

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'lapa_nysa' );

/** MySQL database username */
define( 'DB_USER', 'lapa_nysa' );

/** MySQL database password */
define( 'DB_PASSWORD', '2jRCtZesRrMF3rfvNu&' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'NF)10BQ%Fvd@AB;f7ymzGs+HU ^fR`z$^GhABSFjls9F.Yk]&cqnc&B+v;6U<*$R' );
define( 'SECURE_AUTH_KEY',  '/[kG-}Y6bxO a}bscQ7gZ%OAG1Cu=ML-L~C&@*!c@gNNVPj^^ij9!8R.oaJ)*V@P' );
define( 'LOGGED_IN_KEY',    'Bh?SGHIZjEqS2h>[Z, <5e_M(rB7P#HWW]$7q )F?Bx+9P)ZNV6w5)evYE3E[+u`' );
define( 'NONCE_KEY',        'nK7bqVDkfo]%;yG9J;el6z{Fs/m ^X15UvVn8(i,cD|%O1P)%fQoiKjP(wg)f *v' );
define( 'AUTH_SALT',        'kiaaiP=FC[#koiP6~SuP6@>?~$zdv^MZRd)NU}{J<l9:tI:h!N-k.e;l_2&}H0C]' );
define( 'SECURE_AUTH_SALT', ')b}K~=I]-53Rn2ZfHyFhM&xg@(Sh$rdw6qy%/=wfNcITuT=}9s*wCF +2kKr-L+#' );
define( 'LOGGED_IN_SALT',   '&!@xx8y0XIO+#f5o, I#7Q=L%gGn#l}T?AQ<FazYh>bG*HydK;-!D-8hQkls9sqk' );
define( 'NONCE_SALT',       '3csT|K~~>a!*~r+{!RZf:ICZmhId]D8&Gd$Qm%pl+Sa*<fMbZ&Cu9GeB3E[%0!{0' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
