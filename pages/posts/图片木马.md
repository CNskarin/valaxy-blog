---
title: 图片木马
date: 2019-07-04 11:16:00
---

利用图片和木马代码生成一个带木马的图片之后上传目标主机上之后，必须要以对应语言的方式执行木马才能上木马上线，只是打开图片链接是没有用的。

所以 图片木马执行的前提是目标主机有 相应的执行漏洞才行。

利用解析漏洞

一、IIS 5.x/6.0解析漏洞

IIS 6.0解析利用方法有两种

1.目录解析

<!-- more -->

/xx.asp/xx.jpg

2.文件解析

wooyun.asp;.jpg

第一种，在网站下建立文件夹的名字为 .asp、.asa 的文件夹，其目录内的任何扩展名的文件都被IIS当作asp文件来解析并执行。

例如创建目录 wooyun.asp，那么

/wooyun.asp/1.jpg

将被当作asp文件来执行。假设黑阔可以控制上传文件夹路径,就可以不管你上传后你的图片改不改名都能拿shell了。

第二种，在IIS6.0下，分号后面的不被解析，也就是说

wooyun.asp;.jpg

会被服务器看成是wooyun.asp还有IIS6.0 默认的可执行文件除了asp还包含这三种

/wooyun.asa

/wooyun.cer

/wooyun.cdx

二、IIS 7.0/IIS 7.5/ Nginx <8.03畸形解析漏洞

Nginx解析漏洞这个伟大的漏洞是我国安全组织80sec发现的…

在默认Fast-CGI开启状况下,黑阔上传一个名字为wooyun.jpg，内容为

');?>

的文件，然后访问wooyun.jpg/.php,在这个目录下就会生成一句话木马 shell.php

三、Nginx <8.03 空字节代码执行漏洞

影响版:0.5.,0.6., 0.7 <= 0.7.65, 0.8 <= 0.8.37

Nginx在图片中嵌入PHP代码然后通过访问

xxx.jpg%00.php

来执行其中的代码

四、Apache解析漏洞

Apache 是从右到左开始判断解析,如果为不可识别解析,就再往左判断.

比如 wooyun.php.owf.rar “.owf”和”.rar” 这两种后缀是apache不可识别解析,apache就会把wooyun.php.owf.rar解析成php.

如何判断是不是合法的后缀就是这个漏洞的利用关键,测试时可以尝试上传一个wooyun.php.rara.jpg.png…（把你知道的常见后缀都写上…）去测试是否是合法后缀

五、其他

在windows环境下，xx.jpg[空格] 或xx.jpg. 这两类文件都是不允许存在的，若这样命名，windows会默认除去空格或点,黑客可以通过抓包，在文件名后加一个空格或者点绕过黑名单.若上传成功，空格和点都会被windows自动消除,这样也可以getshell。

如果在Apache中.htaccess可被执行.且可被上传.那可以尝试在.htaccess中写入:

SetHandler application/x-httpd-php

然后再上传shell.jpg的木马, 这样shell.jpg就可解析为php文件。

原文转自：[链接][1]


  [1]: https://blog.csdn.net/weixin_34162695/article/details/87203496

