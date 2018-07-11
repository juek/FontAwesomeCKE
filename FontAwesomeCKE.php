<?php 
defined('is_running') or die('Not an entry point...');

class FontAwesomeCKE {

  /* action hook */
  static function GetHead() {
    global $page, $addonRelativeCode;
    \gp\tool::LoadComponents('fontawesome');
    if( \gp\tool::LoggedIn() ){
      $page->css_admin[] = $addonRelativeCode . '/FontAwesomeCKE.css';
    }
  }

  /* filter hook */
  static function CKEditor_Plugins($plugins) {
    global $addonRelativeCode;
    $plugins['widget']          = $addonRelativeCode . '/CKEditor_plugins/widget-4.5.11/';
    $plugins['widgetselection'] = $addonRelativeCode . '/CKEditor_plugins/widgetselection-4.6.2/';
    $plugins['lineutils']       = $addonRelativeCode . '/CKEditor_plugins/lineutils-4.5.11/';
    $plugins['fontawesome']     = $addonRelativeCode . '/CKEditor_plugins/fontawesome-1.3/';
    return $plugins;
  }

}
