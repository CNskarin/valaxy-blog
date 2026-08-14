---
title: handsome主题魔改
date: 2018-12-16 12:03:00
---

本站用了handsome模板也有一段时间了，当时魔改时候花了不少时间找一些大佬写的自定义代码什么的，今天我也就分享出来吧。
1. CSS自定义代码
```
html.bg{
background-image:
-moz-radial-gradient(-20% 140%, ellipse , rgba(143,192,193,.6) 30%,rgba(255,255,227,0) 50%),
-moz-radial-gradient(60% 40%,ellipse, #d9e3e5 10%,rgba(44,70,76,.0) 60%),
-moz-linear-gradient(-45deg, rgba(143,181,158,.8) -10%,rgba(213,232,211,.8) 80% )
;
background-image:
-o-radial-gradient(-20% 140%, ellipse , rgba(143,192,193,.6) 30%,rgba(255,255,227,0) 50%),
-o-radial-gradient(60% 40%,ellipse, #d9e3e5 10%,rgba(44,70,76,.0) 60%),
-o-linear-gradient(-45deg, rgba(143,181,158,.8) -10%,rgba(213,232,211,.8) 80% )
;
background-image:
-ms-radial-gradient(-20% 140%, ellipse , rgba(143,192,193,.6) 30%,rgba(255,255,227,0) 50%),
-ms-radial-gradient(60% 40%,ellipse, #d9e3e5 10%,rgba(44,70,76,.0) 60%),
-ms-linear-gradient(-45deg, rgba(143,181,158,.8) -10%,rgba(213,232,211,.8) 80% )
;
background-image:
-webkit-radial-gradient(-20% 140%, ellipse , rgba(143,192,193,.6) 30%,rgba(255,255,227,0) 50%),
-webkit-radial-gradient(60% 40%,ellipse, #d9e3e5 10%,rgba(44,70,76,.0) 60%),
-webkit-linear-gradient(-45deg, rgba(143,181,158,.8) -10%,rgba(213,232,211,.8) 80% )
;
}
/\*scrollbar\*/
\*::-webkit-scrollbar{width:8px!important;height:8px!important}\*::-webkit-scrollbar-thumb{border-radius:4px;background-color:#999!important}\*::-webkit-scrollbar-track-piece{background:#eee!important}\*::-webkit-scrollbar-thumb:hover{background-color:#777!important}\*::-webkit-scrollbar-thumb:active{background-color:#555!important}
/\*app&toc\*/
@media screen and (min-width:992px) and (max-width:1599px){#tag\_toc.fixed{width:239px}}@media screen and (min-width:1600px){.app.container{width:1500px}.app.container .app-aside,.app.container .app-header{max-width:1500px}.app-aside-fixed .aside-wrap{width:249px}.app-aside,.navbar-header{width:249px}.app-content,.app-footer,.navbar-collapse{margin-left:249px}.app-aside-fixed .aside-wrap .navi-wrap>\*{width:249px}.asideBar{width:300px!important}#tag\_toc.fixed{width:299px}}#sidebar>section:not(#tag\_toc){opacity:1}.ophide{opacity:0!important}
/\*header\*/
.navbar-header{height:51px;box-shadow:-2px 2px 2px rgba(0,0,0,.05),0px 1px 0 rgba(0,0,0,.05)}#header>.collapse{box-shadow:2px 2px 2px rgba(0,0,0,.05),0px 1px 0 rgba(0,0,0,.05)}
/\*main\*/
.panel-small .post-meta{padding:25px 30px 15px 25px!important}.panel-small .pos50t-meta{padding-left:25px;padding-right:25px}.b-light{border-color: #bbb4}.tip:before{margin-top:0!important}.wrapper-md .panel,.wrapper-md .panel-small{transition:all .2s;box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2)!important;}.wrapper-md .panel:hover,.wrapper-md .panel-small:hover{box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.3)!important;}.list-group-item{background-color:rgba(255,255,255,.8)}.thumb-lg{width:130px}#widget-tabs-4-comments .list-group-item,#tag\_toc,#post-panel,#sidebar,#post-content{background-color:transparent!important}#alllayout.app-aside-folded .tooltip{display:none!important}#bg{background-image:url(/usr/img/bg/homepage\_bg1.jpg);background-size:cover;background-position:right bottom;background-repeat:no-repeat;position:fixed;z-index:-1;top:50px;left:0;right:0;bottom:0;transition:all .3s}.standpage{width:100%;height:calc(100% - 50px);position:fixed;top:50px;left:0}.standpage,aside,aside \*{transition:all .3s}@media screen and (min-width:768px){.topButton.panel.panel-default{display:none}#bg,.standpage{left:200px}.standpage{height:calc(100% - 101px);width:calc(100% - 200px)}.app-aside-folded #bg,.app-aside-folded .standpage{left:60px}.app-aside-folded .standpage{width:calc(100% - 60px)}}@media screen and (min-width:1600px){#bg,.standpage{left:249px}.standpage{width:calc(100% - 249px)}}.wrapper-md>#comments,.wrapper-md>.blog-post,.wrapper-md>.breadcrumb,.m-t-lg.m-b-lg,.wrapper-md>.no\_search\_result{max-width:800px;margin-left:auto;margin-right:auto}.wrapper-md .panel,.wrapper-md .panel-small,.wrapper-md>#comments,.wrapper-md>.breadcrumb{background-color:rgba(255,255,255,.9)}.wrapper-md article,.wrapper-md>#comments{border-radius:5px;overflow:hidden}.bg-auto:before{bottom:51px}@media screen and (max-width:991px){#bg{background-image:url(/usr/img/bg/homepage\_bg2.jpg)!important;background-position:center center!important}aside.col.no-border-xs{border:0;opacity:1!important;background-color:rgba(255,255,255,.8)}}@media screen and (min-width:992px){aside.col.w-md.b-l{background-color:rgba(255,255,255,.7)}aside.col.w-md.b-l:hover{background-color:#fff}}header.wrapper-md{background-color:rgba(246,248,248,.93)!important}.blog-post>.panel,.blog-post>.panel-small{border:0;border-radius:5px}#index-post-img,#index-post-img-small{border-top-left-radius:5px;border-top-right-radius:5px;overflow:hidden}.blog-post>.panel #index-post-img .item-thumb,.panel-small #index-post-img-small .item-thumb-small,.index-post-title a{transition:all .2s}.blog-post>.panel:hover #index-post-img .item-thumb,.blog-post>.panel-small:hover #index-post-img-small .item-thumb-small{transform:scale(1.05)}#footer>.wrapper{background-color:rgba(237,241,242,.8)}.streamline{margin-left:20px;padding-right:10px}.streamline .comment-body{position:relative}.streamline .comment-body .m-l-lg:before{background-color:rgba(255,255,255,.9);content:" ";position:absolute;width:calc(100% + 10px);height:calc(100% + 20px);top:-10px;left:0;z-index:-1;border-radius:2px;box-shadow:0 0 2px 2px rgba(0,0,0,.125)}aside.col.w-md.no-border-xs{transition:all .3s}.visible-xs-inline{display:inline-block!important}@media screen and (min-width:768px) and (max-width:1140px){.visible-xs-inline{display:none!important}}.tocify-item{background-color:rgba(255,255,255,.8)}.tocify-item.active{color:#7266ba;font-weight:700}/\*kotori\*/#kotori{position:absolute;left:-15px;bottom:-15px;max-height:110px;transition:all .3s}#kotori:hover{left:0;bottom:0}#kotori.hidekotori{left:-110px;bottom:-110px}@media screen and (max-width:767px){#kotori{display:none}.blog-post>.panel:hover #index-post-img .item-thumb{transform:none!important}}.index-post-title a:hover{color:#2ebaae}.wrapper-md .comment-list .comment-parent,.wrapper-md .comment-list .comment-children{border-top-width:1px;border-top-style:solid;border-top-color:#ddd;padding-top:10px}.max-img{max-height:400px}.navi-wrap .navi.clearfix>ul.nav{padding-bottom:100px}.app-aside-folded.navi-wrap{max-height:calc(100% - 50px)}.lg-backdrop{background-color:rgba(0,0,0,.8)}.skPlayer-name{font-family: "Source Sans Pro","Hiragino Sans GB","Microsoft Yahei",SimSun,Helvetica,Arial,Sans-serif}html.fancybox-enabled{overflow-y:auto}.fancybox-bg{background-color:rgba(0,0,0,.95)}.fancybox-arrow:after{background-color:rgba(0,0,0,.8)}.blog-post .post-meta.wrapper-lg{padding-top:15px}.share,.yellow,.red,.lblue,.green{background-position-y: 50%}.timeline .tl-date{color:#fff;text-shadow: 0 0 4px #000}body.modal-open{overflow-y: auto;padding-right: 0 !important}.reply2view{background-color:transparent;border:solid 1px #bbb}#content{transition:all .3s}.OwO .OwO-logo{height:28px}#postpage pre{transition:all 0.2s}#tag\_toc.fixed #toc{width:100%}.page-navigator .next a,.page-navigator .prev a{height:31px}.page-navigator>li:last-child>a,.page-navigator>li:last-child>span{border-top-right-radius: 4px;border-bottom-right-radius: 4px}
/\*comments\*/
#comments pre code{display:inline}.wrapper-md>#comments{border:solid 1px #fff;padding:10px 30px 20px 30px}
/\*img\*/
img[mw400]{max-width:400px!important;width:100%}.mw400{max-width:400px}
/\*category-spread\*/
#category-spread-btn{cursor:pointer}#category-spread-list{height:411px;overflow-y:hidden}#category-spread-list.no-spread{height:165px}
/\*avatar\*/
#aside-user span.avatar{animation-timing-function:cubic-bezier(0,0,.07,1)!important;border:0 solid}#aside-user span.avatar:hover{transform:rotate(360deg) scale(1.2);border-width:5px;animation:avatar .5s}@keyframes avatar{from{transform:rotate(0) scale(1);border-width:0}to{transform:rotate(360deg) scale(1.2);border-width:5px}}
/\*search\*/
#searchform{margin-right: -10px}
/\*gallery\*/
.compensate-for-scrollbar,.compensate-for-scrollbar #header{padding-right:8px}.compensate-for-scrollbar #bg{transition-duration:0s;margin-right:8px}
/\*experimental modify 2018-03-20\*/
@media screen and (min-width:1200px){#post-panel .blog-post{position:relative}#post-panel .panel{overflow:hidden}#post-panel .panel .post-meta{position:relative;margin-top:-300px;height:300px;padding-top:133px!important;padding-bottom:0!important;background-color:rgba(0,0,0,.3);color:#fff!important;transition:all .3s}#post-panel .panel .post-meta,#post-panel .panel-small .post-meta{border-radius:5px}#post-panel .panel .post-meta \*,#post-panel .panel-small .post-meta \*{color:#fff!important}#post-panel .panel .post-meta>h2,#post-panel .panel-small .post-meta>h2{text-align:center;text-shadow:0 0 3px #fff}#post-panel .panel .post-meta>p,#post-panel .panel .post-meta>div,#post-panel .panel-small .post-meta>p,#post-panel .panel-small .post-meta>div{transition:all .3s;transform:translateY(-10px);opacity:0}#post-panel .panel .post-meta>.text-muted,#post-panel .panel-small .post-meta>.text-muted{position:absolute;bottom:20px}#post-panel .panel .post-meta>.line{position:absolute;bottom:40px;width:740px}#post-panel .panel-small .post-meta>.line{position:absolute;bottom:40px;width:350px}#post-panel .panel .post-meta>.summary{position:absolute;bottom:60px;width:740px}#post-panel .panel-small .post-meta>.summary{position:absolute;bottom:60px;width:350px}#post-panel .panel-small{display:inline-block;height:300px;width:calc(50% - 10px);margin-right:20px}#post-panel .panel-small+.panel-small{margin-right:0}#post-panel .panel-small .index-img-small,#post-panel .panel-small .index-img-small .item-thumb-small{height:100%;width:100%}#post-panel .panel-small .post-meta{position:absolute;height:300px;width:calc(50% - 10px);padding:133px 20px 0 20px!important;background-color:rgba(0,0,0,.3);color:#fff!important;transition:all .3s}#post-panel .panel:hover .post-meta,#post-panel .panel-small:hover .post-meta{background-color:rgba(0,0,0,.6)}#post-panel .panel:hover .post-meta>p,#post-panel .panel:hover .post-meta>div,#post-panel .panel-small:hover .post-meta>p,#post-panel .panel-small:hover .post-meta>div{opacity:1;transform:translateY(0)}#post-panel .panel:hover .post-meta,#post-panel .panel-small:hover .post-meta{padding-top:80px!important}#post-panel .ahover{display:block;position:absolute;top:0;left:0;right:0;bottom:0}}header.bg-light.wrapper-md{margin-top:30px;background-color:transparent!important;border:0;text-align:center;text-shadow:0 0 3px #000}header.wrapper-md \*{color:#fff}header.wrapper-md h1{font-size:32px}header.wrapper-md h1{font-weight:bold!important}
/\* 站点动态时间轴 \*/
#teamnewslist ol{list-style:none;margin-left: 36px;padding-left: 14px;border-left: 2px solid #eee;font-size: 18px;color: #666;}
#teamnewslist b{font-size: 12px;font-weight: normal;color: #999;display: block;position: relative;margin-bottom:5px;}
#teamnewslist b::after{position: absolute;top: 6px;left: -22px;content: '';width: 14px;height: 14px;border-radius: 50%;background-color: #fff;border: 2px solid #ccc;box-shadow: 2px 2px 0 rgba(255,255,255,1), -2px -2px 0 rgba(255,255,255,1)}
#teamnewslist li{list-style:none;margin: 0 0 20px 0;line-height: 100%;}
#teamnewslist li:hover{color: #555;}
#teamnewslist li:hover b::after{border-color: #C01E22;}
#teamnewslist li:hover b{color: #C01E22;}
#圆角大小可修改15px数值 /\*首页文章版式圆角化\*/ .panel{ border: none; border-radius: 5px; } .panel-small{ border: none; border-radius: 5px; } .item-thumb{ border-radius: 5px; }
/\*文章标题居中\*/
.panel h2{
text-align: center;
}
.post-item-foot-icon{
text-align: center;
}
#转动快慢和头像大小自行修改数值
/\*首页头像自动旋转\*/
.thumb-lg{
width:130px;
}
.avatar{
-webkit-transition: 0.4s;
-webkit-transition: -webkit-transform 0.4s ease-out;
transition: transform 0.4s ease-out;
-moz-transition: -moz-transform 0.4s ease-out;
}
.avatar:hover{
transform: rotateZ(360deg);
-webkit-transform: rotateZ(360deg);
-moz-transform: rotateZ(360deg);
}
#aside-user span.avatar{
animation-timing-function:cubic-bezier(0,0,.07,1)!important;
border:0 solid
}
#aside-user span.avatar:hover{
transform:rotate(360deg) scale(1.2);
border-width:5px;
animation:avatar .5s
}
#放大的时间和大小自行修改以下数值
/\*首页文章图片获取焦点放大\*/
.item-thumb{
cursor: pointer;
transition: all 0.6s;
}
.item-thumb:hover{
transform: scale(1.05);
}
.item-thumb-small{
cursor: pointer;
transition: all 0.6s;
}
.item-thumb-small:hover{
transform: scale(1.05);
}
```
2. JavaScript自定义代码
```
/\*compensate-for-scrollbar\*/
var cfsFlag=true;
function cfs(){if(cfsFlag){cfsFlag=false;$('body.compensate-for-scrollbar #bg').attr("style","transition-duration:0s");setTimeout('$("#bg").attr("style","");cfsFlag=true',2000)}}
/\*setSthInterval\*/
function setSth(){if($('body.compensate-for-scrollbar').length>0){cfs()}$('#tag\_toc.fixed').length>0&&$(window).width()>=992?$('#sidebar>section:not(#tag\_toc)').addClass('ophide'):$('#sidebar>section:not(#tag\_toc)').removeClass('ophide');var preMH=400;if(document.body.clientHeight>550){preMH=document.body.clientHeight-150}$('#postpage pre').css("max-height",preMH);$('#toc').css("max-height",document.body.clientHeight-110);var sbChildren=$("#sidebar").children();if(sbChildren.length>0){var sbLast=$(sbChildren[sbChildren.length-1]);var screenTop=$(window).scrollTop();var sbLastBottom=sbLast.offset().top+sbLast.height();var judge=screenTop-sbLastBottom;var aside=$("aside.col.w-md.no-border-xs");if(judge>0){aside.css("opacity","0")}else{aside.css("opacity","1")}}if($(document).scrollTop()<300){$("#kotori").addClass("hidekotori")}else{$("#kotori").removeClass("hidekotori")}}setInterval("setSth()",300);
/\*tittle\*/
var OriginTitile=document.title;var titleTime;document.addEventListener("visibilitychange",function(){if(document.hidden){OriginTitile=document.title;document.title="|･ω･｀)你看不见我……你看不见我……你看不见我……";clearTimeout(titleTime)}else{document.title="\_(:3」」还是被发现了";titleTime=setTimeout(function(){document.title=OriginTitile},2000)}});
/\*reinitIframe\*/
function reinitIframe(){if(document.getElementById("aboutPage")){var iframe=document.getElementById("aboutPage");var mainc=iframe.contentWindow.document.getElementById("mainc");try{var height=mainc.scrollHeight;iframe.style.height=height+"px"}catch(ex){}}}window.setInterval("reinitIframe()",300);
/\*goToTop\*/
$("#kotori").click(function(){$("body,html").animate({scrollTop:0},600)});
/\*need pjax\*/
function needpjax(){/\*category-spread\*/$('#category-spread-btn').click(function(){var csl=$('#category-spread-list');if(csl.hasClass('no-spread')){csl.removeClass('no-spread');$('#category-spread-hint').html('（点击关闭）')}else{csl.addClass('no-spread');$('#category-spread-hint').html('（点击展开）')}});
/\*百度推送\*/
(function(){var bp = document.createElement('script');var curProtocol = window.location.protocol.split(':')[0];if (curProtocol === 'https') {bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';}else {bp.src = 'https://push.zhanzhang.baidu.com/push.js';}var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(bp, s);})();
/\*documentReady\*/
$(document).ready(function(){$("article img[mw400]").parents(".max-img").addClass("mw400");$("article img:not([max])").parent("a").wrap('');$("article a").each(function(){var reg=/^#.\*/;var ah=$(this).attr("href");if(reg.test(ah)){$(this).attr("target","\_self");$(this).click(function(){$('.tocify-item[data-unique="'+ah.substr(1)+'"]').click()})}if(!$(this).attr("class")&&!$(this).attr("target")){$(this).attr("target","\_blank")}});editormdSupport()})}needpjax();
```
源代码在哪里找到的已经忘了，不过肯定不是我原创的啦。
补充:背景请在`/usr/themes/handsome/component/headnav.php`加上以下代码。
``````
然后在`根目录/usr/img/bg`文件夹内上传图片(无此路径请自行创建)。
PE端背景是homepage\_bg2.jpg
PC端背景是homepage\_bg1.jpg
!!!

5.0以上的请将背景代码放到自定义body尾部的地方。

!!!
突然想起原文地址，可以去看看[链接地址][1]
[1]: https://www.hcyacg.com/html/mogai.html
