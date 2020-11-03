<?php

namespace kak\widgets\navmenu;

use kak\widgets\navmenu\bundles\TabsResponsiveAsset;
use yii\helpers\Html;
use yii\bootstrap\Nav;

class Tabs extends Nav
{
    public function init()
    {
        Html::addCssClass($this->options, 'nav');
        Html::addCssClass($this->options, 'nav-tabs');
        parent::init();
    }

    public function run()
    {
        TabsResponsiveAsset::register($this->getView());
        echo Html::beginTag('div', [
            'class' => 'nav-tabs-responsive'
        ]);
        echo parent::run();
        echo Html::endTag('div');
    }
}