---
title: 让你的网站支持https（超文本安全传输协议）
date: 2019-03-31 19:41:00
---

https，超文本安全传输协议，顾名思义，可以让你的网站一定程度变得更安全，它不会拖慢速度，而且还有助于SEO。最重要的一点，国内还可以免备案！

下面开始教你如何使用宝塔面板让你的网站支持https！（宝塔面板配置简单，而且别的我也不会弄，主机用户可以问问互联商或者在控制面板查找相应教程 ::aru:shy:: ）
宝塔官网:[https://bt.cn][1]

首先，你只需要去随便申请一个ssl证书，去阿里云，腾讯云等就可以免费申请到ssl证书。
这个一般一天就会通过，然后你可以通过控制台下载你的证书。
* 腾讯云证书申请教程:
[https://cloud.tencent.com/document/product/214/6989][2]
* 阿里云证书申请教程:
[https://m.aliyun.com/yunqi/articles/637307][3]

下面，开始讲如何用宝塔面板配置ssl证书
首先下载已签发的证书，你可以找到一个pem，一个key为后缀的文件。
保存好，可以更改为txt后缀并打开并复制其内容。
然后再宝塔面板找到你要添加ssl的网站，选择设置-SSL即可，按照标注分别粘贴pem和key后缀文件内的内容即可，并选择保存。

最后一步，打开443端口即可。
![ssl证书配置][4]


  [1]: https://bt.cn
  [2]: https://cloud.tencent.com/document/product/214/6989
  [3]: https://m.aliyun.com/yunqi/articles/637307
  [4]: https://www.9ilin.com/usr/uploads/2019/03/2752252394.jpg
