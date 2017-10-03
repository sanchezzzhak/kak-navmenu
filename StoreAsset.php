<?php
namespace kak\widgets\navmenu;
use yii\web\AssetBundle;

class StoreAsset extends AssetBundle
{
    public $sourcePath = '@vendor/bower/store.js/dist';
    public $depends = [
        'yii\web\JqueryAsset'
    ];
    public $js = [
        'store.legacy.min.js'
    ];

}