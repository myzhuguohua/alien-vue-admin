(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d237ef2"],{fcdc:function(t,a,s){"use strict";s.r(a);var r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"app-container"},[s("el-card",{staticClass:"cc-mar-b-10"},[t._v("\n    使用图表需要安装: v-charts echarts\n    "),s("el-link",{attrs:{href:"https://v-charts.js.org/#/",type:"primary"}},[t._v("v-charts 文档")])],1),t._v(" "),s("el-row",{attrs:{gutter:10}},[s("el-col",{attrs:{sm:24,lg:12}},[s("el-card",{staticClass:"cc-mar-b-10"},[s("ve-bar",{attrs:{data:t.getChartData(7),colors:t.vchartColor}})],1)],1),t._v(" "),s("el-col",{attrs:{sm:24,lg:12}},[s("el-card",{staticClass:"cc-mar-b-10"},[s("ve-bar",{attrs:{data:t.getChartData(7),settings:t.chartSettings,colors:t.vchartColor}})],1)],1),t._v(" "),s("el-col",{attrs:{sm:24,lg:12}},[s("el-card",{staticClass:"cc-mar-b-10"},[s("ve-bar",{attrs:{data:t.getChartData(7),settings:t.chartShowLineSettings,colors:t.vchartColor}})],1)],1),t._v(" "),s("el-col",{attrs:{sm:24,lg:12}},[s("el-card",{staticClass:"cc-mar-b-10"},[s("ve-bar",{attrs:{data:t.getChartData(7),settings:t.chartStackSettings,colors:t.vchartColor}})],1)],1)],1)],1)},c=[],e=s("ed08"),o={components:{},data:function(){return this.vchartColor=["#95a2ff","#fa8080","#ffc076","#fae768","#87e885","#3cb9fc","#73abf5","#cb9bff","#434348","#90ed7d","#f7a35c","#8085e9​​​​​​​"],this.chartSettings={dimension:["日期"],metrics:["访问用户"]},this.chartShowLineSettings={xAxisType:["KMB","KMB"],xAxisName:["下单用户","访问用户"],axisSite:{top:["访问用户"]}},this.chartStackSettings={stack:{xxx:["访问用户","下单用户"]}},this.chartShowNumtExtend={series:{label:{show:!0,position:"top"}}},{chartData:{columns:["日期","访问用户","下单用户","下单率"],rows:[{"日期":"1/1","访问用户":1393,"下单用户":1093,"下单率":.32},{"日期":"1/2","访问用户":3530,"下单用户":3230,"下单率":.26},{"日期":"1/3","访问用户":2923,"下单用户":2623,"下单率":.76},{"日期":"1/4","访问用户":1723,"下单用户":1423,"下单率":.49},{"日期":"1/5","访问用户":3792,"下单用户":3492,"下单率":.323},{"日期":"1/6","访问用户":4593,"下单用户":4293,"下单率":.78}]}}},computed:{},mounted:function(){},methods:{getChartData:function(t){for(var a=[],s=["日期","访问用户","下单用户","下单率"],r=0;r<t;r++)a.push({"日期":"1/"+(1+r),"访问用户":Object(e["f"])(1e3,6e3),"下单用户":Object(e["f"])(1e3,6e3),"下单率":Object(e["f"])(1,30)});return{rows:a,columns:s}}}},l=o,n=s("2877"),i=Object(n["a"])(l,r,c,!1,null,"53894ed7",null);a["default"]=i.exports}}]);