<?php
namespace kak\widgets\navmenu;
use yii\helpers\Html;
/**
 * Class Sidebar
 */
class Sidebar extends \yii\base\Widget
{

    public $theme;
    public $items = [];

    public $options = [];
    public function run()
    {

        echo Html::beginTag('div', $this->options);





        echo Html::endTag('div');
    }


}