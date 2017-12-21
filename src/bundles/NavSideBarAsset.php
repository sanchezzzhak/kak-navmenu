<?php

namespace kak\widgets\navmenu\bundles;
use yii\web\AssetBundle;

class NavSideBarAsset extends AssetBundle
{
    public $sourcePath = '@vendor/kak/navmenu/assets';

    public $css = [
        'css/nav-sidebar.css'
    ];

    public $js = [
        'js/nav-sidebar.js'
    ];

}