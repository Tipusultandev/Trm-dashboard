<?php 
    /**
     * Plugin Name:       Trm dashboard
     * Plugin URI:        https://rextheme.com/
     * Description:      Trm dashboard for content information this plugin.
     * Version:           1.10.3
     * Requires at least: 5.2
     * Requires PHP:      7.2
     * Author:            Rextheme
     * Author URI:        https://author.example.com/
     * License:           GPL v2 or later
     * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
     * Update URI:        https://example.com/my-plugin/
     * Text Domain:       trm-dashboard
     * Domain Path:       /languages
     */

     function awesome_custom_block_resister(){
        wp_enqueue_script( 'awesome-custom-block', plugin_dir_url( __FILE__ ) . 'awesome-block.js',array('wp-blocks','wp-i18n','wp-editor'),true,false);
     }

     add_action('enqueue_block_editor_assets','awesome_custom_block_resister');

?>