(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-share-jump"],{"0061":function(t,a,e){var o=e("f247");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("9990d2e8",o,!0,{sourceMap:!1,shadowMode:!1})},"23b0":function(t,a,e){"use strict";var o,i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"bg"},[e("v-uni-image",{staticClass:"img",attrs:{src:t.url+"static/images/welfarepro/bg_img.jpg",mode:""}})],1),t.hasHb?e("v-uni-view",{staticClass:"red"},[e("v-uni-view",{staticClass:"red_bgi"},[e("v-uni-image",{staticClass:"img",attrs:{src:t.url+"static/images/welfarepro/red.png",mode:""}})],1),e("v-uni-view",{staticClass:"del",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goPage(1)}}},[e("v-uni-image",{staticClass:"del_icon",attrs:{src:t.url+"static/images/welfarepro/del_jump.png",mode:""}})],1),e("v-uni-view",{staticClass:"word"},[e("v-uni-view",{staticClass:"title"},[t._v("恭喜您:")]),e("v-uni-view",{staticClass:"content"},[t._v("您有一个红包待领取")])],1),e("v-uni-view",{staticClass:"btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.receive(1)}}},[e("v-uni-image",{staticClass:"btn_icon",attrs:{src:t.url+"static/images/welfarepro/red_btn.png",mode:""}}),e("v-uni-view",{staticClass:"btn_word"},[t._v("立即领取")])],1)],1):t._e(),t.hasCoupon?e("v-uni-view",{staticClass:"red"},[e("v-uni-view",{staticClass:"red_bgi"},[e("v-uni-image",{staticClass:"img",attrs:{src:t.url+"static/images/welfarepro/coupon_bgi.png",mode:""}})],1),e("v-uni-view",{staticClass:"del",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goPage(2)}}},[e("v-uni-image",{staticClass:"del_icon",attrs:{src:t.url+"static/images/welfarepro/del_jump.png",mode:""}})],1),e("v-uni-view",{staticClass:"word coupon"},[e("v-uni-view",{staticClass:"title"},[t._v("恭喜您:")]),e("v-uni-view",{staticClass:"content"},[t._v("您有一个优惠券待领取")])],1),e("v-uni-view",{staticClass:"btn coupon_btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.receive(2)}}},[e("v-uni-image",{staticClass:"btn_icon",attrs:{src:t.url+"static/images/welfarepro/coupon_btn.png",mode:""}}),e("v-uni-view",{staticClass:"btn_word"},[t._v("立即领取")])],1)],1):t._e()],1)},n=[];e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return o}))},"44c3":function(t,a,e){"use strict";e.r(a);var o=e("23b0"),i=e("ca1c");for(var n in i)"default"!==n&&function(t){e.d(a,t,(function(){return i[t]}))}(n);e("7ec7");var s,r=e("f0c5"),d=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"11576026",null,!1,o["a"],s);a["default"]=d.exports},"7ec7":function(t,a,e){"use strict";var o=e("0061"),i=e.n(o);i.a},abec:function(t,a,e){"use strict";e("c975"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=e("a9e0"),i={data:function(){return{hasHb:!1,hasCoupon:!1,data:{},welfarepro:["hb","coupon"],url:""}},onLoad:function(t){this.url=o.apiBaseUrl,t.scene?this.deshare(t.scene):this.gotoIndex()},methods:{deshare:function(t){var a=this;this.$api.deshare({code:t},(function(t){t.status?(a.saveInviteCode(t.data.userShareCode),a.data=t.data,t.data.welfarepro&&0!=t.data.welfarepro.length?t.data.welfarepro.indexOf("hb")>-1?a.hasHb=!0:t.data.welfarepro.indexOf("coupon")>-1&&(a.hasCoupon=!0):a.goPage()):a.$common.errorToShow("失败",(function(){a.gotoIndex()}))}))},receive:function(t){var a=this,e={userShareCode:this.data.userShareCode};1==t?this.$api.getShareHb(e,(function(t){t.status?a.$common.successToShow(t.msg,(function(){a.hasHb=!1,a.data.welfarepro.indexOf("coupon")>-1?a.hasCoupon=!0:a.goPage()})):a.$common.errorToShow(t.msg,(function(){a.hasHb=!1,a.data.welfarepro.indexOf("coupon")>-1?a.hasCoupon=!0:a.goPage()}))})):2==t&&this.$api.getShareCoupon(e,(function(t){t.status?a.$common.successToShow(t.msg,(function(){a.hasCoupon=!1,a.goPage()})):a.$common.errorToShow(t.msg,(function(){a.hasCoupon=!1,a.goPage()}))}))},goPage:function(t){if(1==t)this.data.welfarepro.indexOf("coupon")>-1&&(this.hasCoupon=!0);else switch(console.log(this.data),this.data.page){case"1":this.gotoIndex();break;case"2":this.gotoGoods(this.data.params.goods_id);break;case"3":this.gotoPinTuan(this.data.params.goods_id);break;case"4":this.gotoStore(this.data.params.store);break;case"5":this.gotoArticle(this.data.params.article_id,this.data.params.article_type);break;case"6":this.gotoInvitationGroup(this.data.params.goods_id,this.data.params.group_id,this.data.params.team_id);break;case"7":this.gotoCustom(this.data.params.page_code);break;case"8":this.gotoForm(this.data.params.id);break;case"9":this.gotoGroup(this.data.params.goods_id,this.data.params.group_id);break;case"10":this.gotoBargain(this.data.params.id,this.data.params.type,this.data.params.record_id);break;default:this.gotoIndex();break}},saveInviteCode:function(t){t&&""!=t&&this.$db.set("invitecode",t)},gotoIndex:function(){uni.switchTab({url:"/pages/index/index"})},gotoGoods:function(t){if(t&&""!=t){var a="/pages/goods/index/index?id="+t;this.$common.redirectTo(a)}else this.gotoIndex()},gotoArticle:function(t,a){if(t&&""!=t){var e="/pages/article/index?id="+t+"&id_type="+a;this.$common.redirectTo(e)}else this.gotoIndex()},gotoPinTuan:function(t){if(t&&""!=t){var a="/pages/goods/index/pintuan?id="+t;this.$common.redirectTo(a)}else this.gotoIndex()},gotoGroup:function(t,a){if(t&&""!=t){var e="/pages/goods/index/group?id="+t+"&group_id="+a;this.$common.redirectTo(e)}else this.gotoIndex()},gotoInvitationGroup:function(t,a,e){if(t&&""!=t&&a&&""!=a&&e&&""!=e){var o="/pages/goods/index/pintuan?id="+t+"&team_id="+e;this.$common.redirectTo(o)}else this.gotoIndex()},gotoCustom:function(t){if(t&&""!=t){var a="/pages/index/custom?page_code="+t;this.$common.redirectTo(a)}else this.gotoIndex()},gotoStore:function(t){if(t&&""!=t){var a="/pages/member/distribution/my_store?store="+t;this.$common.redirectTo(a)}else this.gotoIndex()},gotoForm:function(t){if(t&&""!=t){var a="/pages/form/detail/form?id="+t;this.$common.redirectTo(a)}else this.gotoIndex()},gotoBargain:function(t,a,e){if(t&&""!=t&&a&&e&&0!=e){var o="/pages/bargain/index?id="+t+"&type="+a+"&record_id="+e;this.$common.redirectTo(o)}else this.gotoIndex()}}};a.default=i},ca1c:function(t,a,e){"use strict";e.r(a);var o=e("abec"),i=e.n(o);for(var n in o)"default"!==n&&function(t){e.d(a,t,(function(){return o[t]}))}(n);a["default"]=i.a},f247:function(t,a,e){var o=e("24fb");a=o(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-11576026]{width:100%;height:100%}uni-page-body .container[data-v-11576026]{position:relative;width:100%;height:100%}uni-page-body .container .bg[data-v-11576026]{width:100%;height:100%}uni-page-body .container .bg uni-image[data-v-11576026]{width:100%;height:100%}uni-page-body .container .red[data-v-11576026]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:90%;height:70%}uni-page-body .container .red .red_bgi[data-v-11576026]{width:100%;height:100%}uni-page-body .container .red .red_bgi .img[data-v-11576026]{width:100%;height:100%}uni-page-body .container .red .del[data-v-11576026]{position:absolute;top:%?30?%;right:%?30?%}uni-page-body .container .red .del .del_icon[data-v-11576026]{width:%?60?%;height:%?60?%}uni-page-body .container .red .word[data-v-11576026]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:80%}uni-page-body .container .red .word .title[data-v-11576026]{font-size:%?38?%;color:#dd991e}uni-page-body .container .red .word .content[data-v-11576026]{font-size:%?60?%;font-weight:550;color:#fcee50;margin-top:%?30?%}uni-page-body .container .red .btn[data-v-11576026]{position:absolute;top:75%;left:25%;width:65%}uni-page-body .container .red .btn .btn_icon[data-v-11576026]{width:100%;height:%?140?%}uni-page-body .container .red .btn .btn_word[data-v-11576026]{font-size:%?40?%;font-weight:550;color:#fcee50;position:absolute;top:13%;left:22%}uni-page-body .container .red .coupon[data-v-11576026]{top:32%;left:62%}uni-page-body .container .red .coupon .title[data-v-11576026]{color:#fff}uni-page-body .container .red .coupon .content[data-v-11576026]{color:#fff;font-size:%?46?%}uni-page-body .container .red .coupon_btn[data-v-11576026]{top:75%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:50%}uni-page-body .container .red .coupon_btn .btn_icon[data-v-11576026]{width:100%;height:%?100?%}uni-page-body .container .red .coupon_btn .btn_word[data-v-11576026]{font-size:%?40?%;font-weight:550;color:#fff;position:absolute;top:45%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}',""]),t.exports=a}}]);