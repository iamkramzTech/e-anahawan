<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_taboan' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'C1%Om_^?<-GuQ,)78gs+ZK+}(3M31u$^!p{4&3o6PhG&Be=(ifVECHnBTZAaLUhm' );
define( 'SECURE_AUTH_KEY',  's7awv2JNYL|~xW@5]kdhs[baBqpfcl?n6~K)Y&_QAMwn ;qqD[L.M0~jy=.Hpj`Z' );
define( 'LOGGED_IN_KEY',    'ORPe[ .%#H?^hj&Z}A21*yewA7K{[]>*MVs*_Z-o<oUc9`Q~m#lArK{Y2/sk+J z' );
define( 'NONCE_KEY',        'm{xw@8FhXxL=l*</IpL59W2)Og&w,admqgaGG9JYZh=nH o92.q($t`|O^p)5T{ ' );
define( 'AUTH_SALT',        ']ZfQ&~:}>RLpMzKmR-di&zF]Pcw/rR5+;<yuLOp*iT{5H_auO/~2&vR;QBw*$]{.' );
define( 'SECURE_AUTH_SALT', '@Sb9Mj}3[_w.Jopg+]$KTV|fOE*Q[)Z_-^8xve>TY5P!*beYe-jB.5yq4JiZV]8=' );
define( 'LOGGED_IN_SALT',   'e!dLvsA(>1bG!xzBigGiDz.J6m3CM<L0Wr{?eDT1S-eV%8=`R!&T&({Slj(e|d=<' );
define( 'NONCE_SALT',       ':m,er-%V:o@=@=T^Y+|6wfZ$L!>$;L@fx?jibySb TalTX.{mRfhja@e2er=fSb{' );

/**#@-*/

/**
 * WordPress database table prefix.
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

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
