<?php
namespace kak\widgets\navmenu;

use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\helpers\Html;

class TopMenu extends NavBar
{
    public $theme;
    public $encodeLabels = false;
    public $items;


    public $menuControl = true;

    public function init()
    {
        echo Html::beginTag('nav', ['class' => 'kak-nav-menu']);
        parent::init();

    }


    public function run()
    {


        $this->items[] = [
            'label' => '<<<',
            'options' => [
                'class' => 'menu-control menu-control-left'
            ]
        ];
        $this->items[] = [
            'label' => '>>>',
            'options' => [
                'class' => 'menu-control menu-control-right'
            ]
        ];

        echo  Nav::widget([
            'items' => $this->items,
            'options' => ['class' => 'navbar-nav navbar-right'],
            'encodeLabels' => $this->encodeLabels
        ]);

        parent::run();
        echo Html::endTag('nav');
    }
}