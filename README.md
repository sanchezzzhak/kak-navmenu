# kak-navmenu
Sidebar, TopMenu widgets for Yii2

Preview
-----------

Installation
------------
The preferred way to install this extension is through [composer](http://getcomposer.org/download/).

Either run

```
php composer.phar require --prefer-dist kak/navmenu "*"
```

or add

```
"kak/navmenu": "*"
```

to the require section of your `composer.json` file.

Usage Sidebar
-----
Once the extension is installed, simply use it in your code by  :
```php
use kak\widgets\navmenu\Sidebar;
use yii\web\View;
use yii\web\Controller;
/**
 * @var $this View 
 * @var $context Controller 
*/
$context =  $this->context;
?>
<body>
<div class="wrap">
    <!-- $this->render('_top-menu') -->
    <!-- $this->render('_alerts') -->
    <!-- $this->render('_breadcrumbs') -->

    <?= Sidebar::widget([
            'theme' => Sidebar::THEME_BLACK,
            'items' => [[
                   'active' =>  $context->id === 'rbac' && $context->action->id === 'index',
                   'label' => 'RBAC', 
                   'url' => ['/rbac'],
                   'icon' => 'fa fa-shield'
                ],[
                   'items' => [/* ... */] 
                ]]
        ]);?>
    <div class="content wrap-sidebar-page-content"> <!-- <-- add class "wrap-sidebar-page-content" -->
        <div class="container-fluid">
             <?= $content ?>
        </div>
        or 
        <div class="container">
            <?= $content ?>
        </div>
    </div> 

    <!-- $this->render('_footer') -->
</div>   
```

Usage TopMenu
-----



