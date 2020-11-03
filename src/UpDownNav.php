<?php
namespace kak\widgets\navmenu;

use kak\widgets\navmenu\bundles\NavUpDownAsset;
use yii\helpers\Html;
use yii\base\Widget;
use yii\helpers\Json;

class UpDownNav extends Widget
{
    /**
     * @var string
     */
    public $icon = '<svg  width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" version="1.1" role="img"><path d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm8.412 19.523c-.517.512-1.355.512-1.872 0L16 13.516l-6.54 6.01c-.518.51-1.356.51-1.873 0-.516-.513-.517-1.343 0-1.855l7.476-7.326c.517-.512 1.356-.512 1.873 0l7.476 7.327c.516.513.516 1.342 0 1.854z"></path></svg>';
    /** @var string title hint for hover  */
    public $labelDown = 'Down';
    /** @var string title hint for hover */
    public $labelUp = 'Up';
    /** @var float scroll speed (animation) */
    public $delay = 700;
    /** @var int when scrolling at what scroll position to show the widget */
    public $scrollPos = 700;

    public function run()
    {
        $id = $this->getId();
        $view = $this->getView();
        NavUpDownAsset::register($view);

        $view->registerJs('jQuery(\'#%s\', %s)', $id, Json::htmlEncode([
            'labelDown' => $this->labelDown,
            'labelUp' => $this->labelUp,
            'delay' => $this->delay,
            'scrollPos' => $this->scrollPos,
        ]));

        echo Html::a($this->icon, [
            'id' => $id,
            'class' => 'hidden kak-updown-nav'
        ]);

    }
}