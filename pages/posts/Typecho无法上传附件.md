---
title: Typecho无法上传附件
date: 2018-10-23 01:02:00
---

最近突然发现博客的附件上传功能是无效，很苦恼，于是开始动手检修。

首先肯定是去度娘啦，网上大佬那么多，一搜还真就有一堆。

正好在下面讲一下我的总结和更改步骤。

首先我是找到`var/Typecho/Common.php`这个文件并更改415行左右的一个关于你服务器的函数。
是这样的

    public static function isAppEngine()
    {
        return !empty($_SERVER['HTTP_APPNAME'])                     // SAE
            || !!getenv('HTTP_BAE_ENV_APPID')                       // BAE
            || !!getenv('SERVER_SOFTWARE')                          // BAE 3.0
            || (ini_get('acl.app_id') && class_exists('Alibaba'))   // ACE
            || (isset($_SERVER['SERVER_SOFTWARE']) && strpos($_SERVER['SERVER_SOFTWARE'],'Google App Engine') !== false) // GAE
            ;
    }
然后改为
    public static function isAppEngine()
    {
        return false;
    }
之后重启服务器

结果

无效...
有点尴尬...
于是我继续想办法，突然发现权限没有开启
于是把`usr/uploads`这个文件设置777权限
重启服务器

结果

成功！

教程来源于[phpnot][1]，大家可以去看看。


  [1]: https://www.phpnote.net/index.php/Home/Article/index/id/54#
