<?php 

namespace kak\widgets\navmenu\bundles;

use yii\web\AssetBundle;

class NavUpDownAsset extends AssetBundle
{
    public $sourcePath = '@vendor/kak/navmenu/assets';

    public $css = [
        'css/nav-updown.css'
    ];

    public $js = [
        'js/nav-updown.js'
    ];
}