# kak-navmenu
Sidebar, TopMenu widgets for Yii2

Preview
-----------

Installation
------------
The preferred way to install this extension is through [composer](http://getcomposer.org/download/).

Either run

```
php composer.phar require --prefer-dist kak/navmenu "dev-master"
```

or add

```
"kak/navmenu": "dev-master"
```

to the require section of your `composer.json` file.

Usage Sidebar
-----
Once the extension is installed, simply use it in your code by  :
```php

<body>
<div class="wrap">
    <!-- top menu -->
        <!-- ... -->   
  
    <?php echo \kak\widgets\navmenu\Sidebar::widget([
            'items' => [],
        ]);
    ?>
</div>
<div class="content wrap-sidebar-page-content"> <!-- <-- add class "wrap-sidebar-page-content" -->
    content page
</div>    
```

Usage TopMenu
-----



