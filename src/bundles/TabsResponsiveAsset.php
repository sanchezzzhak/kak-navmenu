<?php

namespace kak\widgets\navmenu\bundles;
use yii\web\AssetBundle;

class TabsResponsiveAsset extends AssetBundle
{
    public $sourcePath = '@vendor/kak/navmenu/assets';

    public $css = [
        'css/tabs-responsive.css'
    ];

    public $js = [
        'js/tabs-responsive.js'
    ];
    public $depends = [
        'yii\web\JqueryAsset'
    ];
}