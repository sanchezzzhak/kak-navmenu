<?php

namespace kak\widgets\navmenu;

use yii\helpers\Html;
use yii\helpers\Url;
use yii\helpers\ArrayHelper;

/**
 * Class Sidebar
 */
class Sidebar extends \yii\base\Widget
{
    const THEME_BLACK = 'theme-black';
    const THEME_GRAY = 'theme-gray';

    public $theme;
    public $items = [];

    public $options = [];

    public $countOptions = ['class' => 'badge-danger'];
    public $templateLabel = '{icon} {label} {count}';

    public function run()
    {
        $this->initOptions();

        echo Html::beginTag('div', $this->options);
        echo Html::beginTag('div', [
            'class' => '',
            'data-height' => '100%',
            'data-scrollbar' => 'true',
            'style' => 'overflow: hidden; width: auto; height: 100%'
        ]);
        echo '<nav><ul class="nav">';
        foreach ($this->items as $item) {
            echo $this->renderNavItem($item);
        }
        echo $this->renderMinifyBtn();

        echo '</ul></nav>';

        echo Html::endTag('div');
        echo Html::endTag('div');
        echo Html::tag('div','',['class' => 'kak-nav-sidebar-bg']);

    }


    private function initOptions()
    {
        Html::addCssClass($this->countOptions, 'badge');

        if (!empty($this->theme)) {
            Html::addCssClass($this->options, $this->theme);
        }
        Html::addCssClass($this->options, 'kak-nav-sidebar');

        bundles\SlimScrollAsset::register($this->getView());
        bundles\StoreAsset::register($this->getView());
        bundles\NavSideBarAsset::register($this->getView());

        switch ($this->theme) {
            case self::THEME_BLACK:
                bundles\NavSideBarThemeBlackAsset::register($this->getView());
                break;
            case self::THEME_GRAY:
                bundles\NavSideBarThemeGrayAsset::register($this->getView());
                break;    
        }


    }


    private function renderMinifyBtn()
    {
        $html = '<a href="javascript:;" class="sidebar-minify-btn" data-click="sidebar-minify"><i class="fa fa-angle-double-left"></i></a>';
        return Html::tag('li', $html);
    }

    private function renderNavItemLabel($item)
    {
        $cnt = ArrayHelper::getValue($item, 'count', ArrayHelper::getValue($item, 'cnt', 0));
        $icon = ArrayHelper::getValue($item, 'icon', '');
        $label = ArrayHelper::getValue($item, 'label', '');

        $countHtml = $cnt > 0 ? Html::tag('span', $cnt, $this->countOptions) : '';
        $labelHtml = Html::tag('span', $label);
        $iconHtml = !empty($icon) ? Html::tag('i', '', ['class' => $icon]) : '';

        return strtr($this->templateLabel, [
            '{icon}' => $iconHtml,
            '{label}' => $labelHtml,
            '{count}' => $countHtml
        ]);;
    }


    private function renderNavItem($item)
    {

        $active = ArrayHelper::getValue($item, 'active', 0);

        $subItems = ArrayHelper::getValue($item, 'items', []);
        $hasSubItems = count($subItems);
        $url = Url::to(ArrayHelper::getValue($item, 'url', 'javascript:;'));

        $linkHtml = $this->renderNavItemLabel($item);

        $itemOptions = [];
        if ($hasSubItems) {
            Html::addCssClass($itemOptions, 'has-sub');
            $linkHtml .= '<b class="caret pull-right"></b>';
        }
        if ($active) {
            Html::addCssClass($itemOptions, 'active');
        }
        $html = Html::beginTag('li', $itemOptions);
        $html .= Html::a($linkHtml, $url);
        if ($hasSubItems) {
            $html .= '<ul class="sub-menu">';
            foreach ($subItems as $sumItem) {
                $html .= $this->renderNavItem($sumItem);
            }
            $html .= '</ul>';
        }

        $html .= Html::endTag('li');
        return $html;
    }


}