<?php

namespace kak\widgets\navmenu;
use yii\web\AssetBundle;

class NavMenuAsset extends AssetBundle
{
    public $sourcePath = '@vendor/kak/navmenu/assets';

    public $css = [
        'css/navmenu-styles.css'
    ];

    public $js = [
        'js/navmenu.js'
    ];

    public function init()
    {
        parent::init();
    }
}