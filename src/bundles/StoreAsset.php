<?php
namespace kak\widgets\navmenu\bundles;
use yii\web\AssetBundle;

class StoreAsset extends AssetBundle
{
    public $sourcePath = '@bower/store.js/dist';
    public $depends = [
        'yii\web\JqueryAsset'
    ];
    public $js = [
        'store.legacy.min.js'
    ];

}