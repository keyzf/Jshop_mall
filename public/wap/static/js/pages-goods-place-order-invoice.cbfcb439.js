(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-place-order-invoice"],{"037d":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("ac6a");var a={data:function(){return{radioItems:[{name:"个人或事业单位",value:"2"},{name:"企业",value:"3"}],type:"3",name:"",code:"",isShow:!1,chequeLisit:[]}},onLoad:function(){var e,t=getCurrentPages(),i=t[t.length-2];void 0!=i&&(e=i.invoice,e&&e.hasOwnProperty("type")&&"1"!==e.type&&(this.name=e.name,this.code=e.code,this.type=e.type))},methods:{radioChange:function(e){var t=this;this.radioItems.forEach(function(i){i.value===e.target.value&&(t.type=i.value)})},notNeedInvoice:function(){var e={type:"1",name:"不开发票",code:""};this.setPageData(e)},saveInvoice:function(){if(!this.name)return this.$common.errorToShow("请输入发票抬头"),!1;if("3"===this.type&&!this.code)return this.$common.errorToShow("请输入发票税号信息"),!1;var e={type:this.type,name:this.name};e["code"]="3"===this.type?this.code:"",this.setPageData(e)},setPageData:function(e){var t=getCurrentPages(),i=t[t.length-2];void 0!=i&&(this.$store.commit("invoice",e),uni.navigateBack({delta:1}))},getCheque:function(e){var t=this,i=e.detail.value;if(""!=i){var a={name:i};this.$api.getTaxInfo(a,function(e){e.status?0!=e.data.length&&(t.isShow=!0,t.chequeLisit=e.data):t.$common.errorToShow(e.msg)})}else this.isShow=!1},chooseCheque:function(e){this.name=e.name,this.code=e.code,this.isShow=!1,this.type="3"}}};t.default=a},5867:function(e,t,i){"use strict";i.r(t);var a=i("e65a"),n=i("6bf3");for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);i("7e8f");var l,c=i("f0c5"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"78e7d46e",null,!1,a["a"],l);t["default"]=o.exports},"6bce":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".invoice-type .uni-list-cell[data-v-78e7d46e]{display:inline-block;font-size:%?26?%;color:#333;position:relative;margin-left:%?50?%}.invoice-type .uni-list-cell>uni-view[data-v-78e7d46e]{display:inline-block}.invoice-type-icon[data-v-78e7d46e]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.invoice-type-c[data-v-78e7d46e]{margin-left:%?50?%;line-height:2}.cell-item-ft .cell-bd-input[data-v-78e7d46e]{text-align:right;width:%?500?%}.button-bottom .btn[data-v-78e7d46e]{width:100%}.cheque[data-v-78e7d46e]{overflow:visible}.cheque-content[data-v-78e7d46e]{position:absolute;left:%?-10?%;top:%?90?%;z-index:2;width:100%;background-color:#fff;box-shadow:0 0 .666667vw .4vw rgba(0,0,0,.13);border-radius:%?10?%;padding:%?20?%}.tips-item[data-v-78e7d46e]{margin-bottom:%?20?%}.tips-name[data-v-78e7d46e]{font-size:%?32?%;line-height:%?35?%;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:%?10?%}.sub-div[data-v-78e7d46e]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?20?%;font-size:%?24?%;line-height:%?20?%;color:#999}.num[data-v-78e7d46e]{display:inline-block}",""])},"6bf3":function(e,t,i){"use strict";i.r(t);var a=i("037d"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);t["default"]=n.a},"7e8f":function(e,t,i){"use strict";var a=i("cd98"),n=i.n(a);n.a},cd98:function(e,t,i){var a=i("6bce");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("20b325b0",a,!0,{sourceMap:!1,shadowMode:!1})},e65a:function(e,t,i){"use strict";var a,n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"content-top"},[i("v-uni-view",{staticClass:"cell-group margin-cell-group"},[i("v-uni-view",{staticClass:"cell-item"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[e._v("发票类型")])],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-view",{staticClass:"uni-form-item uni-column invoice-type"},[i("v-uni-radio-group",{staticClass:"uni-list",on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.radioChange.apply(void 0,arguments)}}},e._l(e.radioItems,function(t,a){return i("v-uni-label",{key:a,staticClass:"uni-list-cell uni-list-cell-pd"},[i("v-uni-view",{staticClass:"invoice-type-icon"},[i("v-uni-radio",{attrs:{id:t.name,value:t.value,checked:t.value==e.type}})],1),i("v-uni-view",{staticClass:"invoice-type-c"},[i("v-uni-label",{staticClass:"label-2-text",attrs:{for:t.name}},[i("v-uni-text",[e._v(e._s(t.name||""))])],1)],1)],1)}),1)],1)],1)],1),i("v-uni-view",{staticClass:"cell-item cheque"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[e._v("发票抬头")])],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-input",{staticClass:"cell-bd-input",attrs:{placeholder:"抬头名称"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.getCheque.apply(void 0,arguments)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"cheque-content"},e._l(e.chequeLisit,function(t,a){return i("v-uni-view",{key:a,staticClass:"tips-item",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.chooseCheque(t)}}},[i("v-uni-view",{staticClass:"tips-name"},[e._v(e._s(t.name||""))]),i("v-uni-view",{staticClass:"sub-div"},[i("v-uni-view",{staticClass:"tax-no"},[e._v(e._s(t.code||""))]),i("v-uni-view",{staticClass:"tips-num"},[i("v-uni-view",{staticClass:"num"},[e._v(e._s(t.frequency||""))]),e._v("人使用过")],1)],1)],1)}),1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"3"===e.type,expression:"type === '3'"}],staticClass:"cell-item"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[e._v("税号")])],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-input",{staticClass:"cell-bd-input",attrs:{placeholder:"纳税人识别号"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1)],1)],1),i("v-uni-view",{staticClass:"cell-group margin-cell-group"},[i("v-uni-view",{staticClass:"cell-item"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[e._v("发票内容")])],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-view",{staticClass:"cell-ft-view"},[e._v("明细")])],1)],1)],1),i("v-uni-view",{staticClass:"cell-group margin-cell-group"},[i("v-uni-view",{staticClass:"cell-item right-img",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.notNeedInvoice.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[e._v("本次不开具发票")])],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/right.png"}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"button-bottom"},[i("v-uni-button",{staticClass:"btn btn-square btn-b",attrs:{"hover-class":"btn-hover2"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.saveInvoice.apply(void 0,arguments)}}},[e._v("保存")])],1)],1)},s=[];i.d(t,"b",function(){return n}),i.d(t,"c",function(){return s}),i.d(t,"a",function(){return a})}}]);