(function(t){function e(e){for(var i,s,o=e[0],l=e[1],c=e[2],h=0,u=[];h<o.length;h++)s=o[h],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&u.push(r[s][0]),r[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(u.length)u.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(i=!1)}i&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},r={app:0},n=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/crow/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("85ec"),r=a.n(i);r.a},4678:function(t,e,a){var i={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=n(t);return a(e)}function n(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=n,t.exports=r,r.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("0cdd");var i=a("2b0e"),r=a("5f5b");a("ab8b"),a("2dd8");i["default"].use(r["a"]);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("b-container",{staticClass:"px-0",attrs:{fluid:""}},[i("b-row",[i("b-col",[i("Crow-navbar")],1)],1)],1),i("b-container",[i("Crow")],1),i("b-container",{staticClass:"px-0",attrs:{fluid:""}},[i("b-row",[i("b-col",[i("hr")])],1),i("b-row",[i("b-col",{staticClass:"text-center"},[t._v(" Made with ❤️ and "),i("img",{attrs:{id:"cr-vue-logo",alt:"Vue logo",src:a("cf05")}}),t._v(" by the "),i("a",{attrs:{href:"https://oscibio.inbo.be/"}},[t._v("Open science lab for biodiversity")])])],1)],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-form-row",{staticClass:"mb-4"},[a("b-col",{staticClass:"mt-4"},[a("b-form",{attrs:{inline:""},on:{submit:function(e){return e.preventDefault(),t.loadData(e)}}},[a("b",[a("label",{attrs:{for:"input-radar"}},[t._v("Radar:")])]),a("b-form-select",{staticClass:"mx-1",attrs:{id:"input-radar",options:t.availableRadars,"value-field":"ODIMCode","text-field":"location",size:"sm"},model:{value:t.selectedRadarODIMCode,callback:function(e){t.selectedRadarODIMCode=e},expression:"selectedRadarODIMCode"}}),a("b-form-text",{staticClass:"mx-2"},[t._v(t._s(t.selectedRadarLocation)+" is located in "+t._s(t.selectedRadarCountry))]),a("b",[a("label",{attrs:{for:"input-selected-date"}},[t._v("Centered around:")])]),a("b-form-input",{staticClass:"mx-1",attrs:{id:"input-selected-date",type:"date",placeholder:"type a date...",size:"sm"},model:{value:t.selectedDate,callback:function(e){t.selectedDate=e},expression:"selectedDate"}}),a("b-form-text",{staticClass:"mx-1"},[t._v("at noon")]),a("b-form-group",{attrs:{label:"Interval","label-cols":"auto","label-class":"font-weight-bold"}},[a("b-form-radio-group",{model:{value:t.intervalInHours,callback:function(e){t.intervalInHours=e},expression:"intervalInHours"}},[a("b-form-radio",{attrs:{value:"24"}},[t._v("24h")]),a("b-form-radio",{attrs:{value:"96"}},[t._v("96h")])],1)],1),a("b-button",{attrs:{size:"sm",type:"submit",variant:"primary"}},[t._v("Load and view radar data")])],1)],1)],1),t.showCharts?a("div",[a("b-row",[a("b-col",[a("v-p-chart",{attrs:{"vtps-data":t.radarVtpsAsArray,"data-temporal-resolution":t.dataTemporalResolution,"style-config":t.VPChartStyle},scopedSlots:t._u([{key:"title",fn:function(){return[a("h3",[t._v("VP Chart")]),a("timeline-chart",{attrs:{periods:t.timePeriods,"style-config":t.TimelineChartStyle,"data-temporal-resolution":t.dataTemporalResolution}})]},proxy:!0}],null,!1,3496443545)})],1)],1),a("b-row",[a("b-col",[a("v-p-i-chart",{attrs:{"vpi-data":t.integratedProfiles,"style-config":t.VPIChartStyle},scopedSlots:t._u([{key:"title",fn:function(){return[a("h3",[t._v("VPI Chart")])]},proxy:!0}],null,!1,3744707762)})],1)],1)],1):t._e()],1)},l=[],c=(a("a4d3"),a("e01a"),a("d28b"),a("99af"),a("4de4"),a("7db0"),a("d81d"),a("4fad"),a("e439"),a("dbb4"),a("b64b"),a("d3b7"),a("3ca3"),a("159b"),a("ddb0"),a("ade3")),d=a("3835"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._t("title"),a("svg",{attrs:{id:"vp-chart"}})],2)},u=[],f=(a("c740"),a("a9e3"),a("6062"),a("2909")),m=a("5698"),p=(a("a434"),a("9129"),a("acd8"),a("e25e"),a("1276"),a("4e82"),a("2ef0")),b=a.n(p),g={dataBaseUrl:"https://crow.weernet.be",availableRadars:[{ODIMCode:"behel",location:"Behel?",country:"Belgium",latitude:51.069199,longitude:5.406138},{ODIMCode:"bejab",location:"Jabbeke",country:"Belgium",latitude:51.1919,longitude:3.0641},{ODIMCode:"bezav",location:"Zaventem",country:"Belgium",latitude:50.9054,longitude:4.4579},{ODIMCode:"bewid",location:"Wideumont",country:"Belgium",latitude:49.9135,longitude:5.5044},{ODIMCode:"nlhrw",location:"Herwijnen",country:"the Netherlands",latitude:51.83708,longitude:5.13797},{ODIMCode:"deess",location:"Essen",country:"Germany",latitude:51.4055,longitude:6.9669},{ODIMCode:"denhb",location:"Neuheilenbach",country:"Germany",latitude:50.1097,longitude:6.5483}].sort((function(t,e){return t.location>e.location?1:-1})),initialRadarODIMCode:"behel",localizedDateFormat:"YYYY/MM/DD",vtpsFormat:{availableHeights:b.a.range(0,4801,200),temporalResolution:300,numHeaderLines:4},VPChartStyle:{margin:{top:0,right:60,bottom:30,left:65},width:1100,height:300,minDensityColor:"#f0f0f0",maxDensityColor:"#dc3545",noDataColor:"white"},VPIChartStyle:{margin:{top:0,right:60,bottom:30,left:65},width:1100,height:300},TimelineChartStyle:{margin:{top:0,right:60,bottom:5,left:65},width:1100,height:30,showXAxis:!1,showTooltip:!0,dayColor:"#dae9fe",twilightColor:"#4771bb",nightColor:"#1e252d"}};function v(t){return 281}function y(t){var e=parseFloat(t);return isNaN(e)?0:e}function j(t){var e=t.split("\n");return e=e.splice(g.vtpsFormat.numHeaderLines),e.pop(),e=e.map((function(t){return{datetime:Date.parse(t.substring(0,4)+"-"+t.substring(4,6)+"-"+t.substring(6,8)+"T"+t.substring(9,11)+":"+t.substring(11,13)),height:parseInt(t.substring(14,18)),dd:parseFloat(t.substring(47,52)),ff:parseFloat(t.substring(41,46)),dens:y(t.substring(76,82)),sd_vvp:parseFloat(t.substring(53,59))}})),e}function D(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1/0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:200,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:2,n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:NaN;if("number"!=typeof e||"number"!=typeof a&&a!=1/0)throw"'altMin'/'altMax' need to be nunmeric";if(!isNaN(n)&&"number"==typeof n)throw"'alpha' needs to be numeric or Nan";a<=e&&console.log("'altMin' should be smaller than 'altMax'");var s=m["e"](t,(function(t){return t.height}));if(e=Math.max(e,s[0]),a=Math.min(a,s[1]+i),t=t.filter((function(t){return t.height>=e&t.height<=a})),t=t.filter((function(t){return t.sd_vvp>=r})),0==t.length)return NaN;var o=t.map((function(t){return t.ff})),l=t.map((function(t){return t.dens})),c=[];c=isNaN(n)?t.map((function(t){return 1+0*t.dd})):t.map((function(t){return Math.cos(t.dd-n)*Math.PI/180}));var d=.001*i*c.map((function(t,e){return t*o[e]*l[e]*3.6})).filter((function(t){return!Number.isNaN(t)})).reduce((function(t,e){return t+e}),0);return d}var C={readVtps:j,integrateProfile:D,metersToFeet:v},x={props:{vtpsData:Array,dataTemporalResolution:Number,styleConfig:Object},data:function(){return{chart:null,margin:this.styleConfig.margin,width:this.styleConfig.width-this.styleConfig.margin.left-this.styleConfig.margin.right,height:this.styleConfig.height-this.styleConfig.margin.top-this.styleConfig.margin.bottom,xAxis:null,yAxisLeft:null,yAxisRight:null}},watch:{vtpsData:function(t){null!=this.chart&&this.chart.remove(),this.createEmptyChart(),this.createAndAddChartAxis(),this.updateChart(t)}},computed:{rectDivider:function(){var t=this.maxDatetime-this.minDatetime;return t/1e3/this.dataTemporalResolution},minDatetime:function(){return this.vtpsData.reduce((function(t,e){return e.timestamp<t?e.timestamp:t}),this.vtpsData[0].timestamp)},maxDatetime:function(){return this.vtpsData.reduce((function(t,e){return e.timestamp>t?e.timestamp:t}),this.vtpsData[0].timestamp)},maxDensity:function(){return this.vtpsData.reduce((function(t,e){return e.dens>t?e.dens:t}),this.vtpsData[this.firstDataIndex].dens)},firstDataIndex:function(){return this.vtpsData.findIndex((function(t){return!1===t.noData}))},distinctHeightsMeters:function(){return Object(f["a"])(new Set(this.vtpsData.map((function(t){return t.height}))))},minHeightInMeters:function(){return this.distinctHeightsMeters[0]},maxHeightInMeters:function(){return this.distinctHeightsMeters[this.distinctHeightsMeters.length-1]},heightRangeInMeters:function(){return[this.minHeightInMeters,this.maxHeightInMeters]},heightRangeInFeet:function(){return this.heightRangeInMeters.map((function(t){return C.metersToFeet(t)}))}},methods:{createEmptyChart:function(){var t=m["k"]("svg#vp-chart").attr("width",this.width+this.margin.left+this.margin.right).attr("height",this.height+this.margin.top+this.margin.bottom).append("g").attr("transform","translate(".concat(this.margin.left,", ").concat(this.margin.top,")"));this.chart=t},createAndAddChartAxis:function(){this.xAxis=m["j"]().domain([this.minDatetime,this.maxDatetime]).range([0,this.width]),this.chart.append("g").attr("transform","translate(0, ".concat(this.height,")")).call(m["a"](this.xAxis).tickSizeOuter(0)),this.yAxisLeft=m["h"]().range([this.height,0]).domain(this.distinctHeightsMeters),this.chart.append("g").call(m["b"](this.yAxisLeft).tickSizeOuter(0)),this.yAxisRight=m["i"]().range([this.height,0]).domain([0,15748.03]),this.chart.append("g").attr("transform","translate(".concat(this.width,", 0)")).call(m["c"](this.yAxisRight).tickSizeOuter(0)),this.chart.append("text").attr("text-anchor","end").attr("transform","rotate(-90)").attr("y",20-this.margin.left).attr("x",-this.margin.top-70).text("Height (meters)"),this.chart.append("text").attr("text-anchor","end").attr("transform","rotate(-90)").attr("y",this.width+55).attr("x",-this.margin.top-70).text("Height (feet)")},updateChart:function(t){var e=m["i"]().range([this.styleConfig.minDensityColor,this.styleConfig.maxDensityColor]).domain([0,this.maxDensity]),a=this.chart.selectAll().data(t,(function(t){return"".concat(t.timestamp," - ").concat(t.height," - ").concat(t.dens)})),i=a.enter().append("rect"),r=a.exit();r.remove();var n=this;a.merge(i).attr("x",(function(t){return n.xAxis(t.timestamp)+1})).attr("y",(function(t){return n.yAxisLeft(t.height)})).attr("width",n.width/n.rectDivider).attr("height",n.yAxisLeft.bandwidth()).style("fill",(function(t){return t.noData?n.styleConfig.noDataColor:e(t.dens)}))}}},w=x,O=a("2877"),M=Object(O["a"])(w,h,u,!1,null,null,null),A=M.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._t("title"),a("svg",{attrs:{id:"vpi-chart"}})],2)},I=[],R={props:{vpiData:Array,styleConfig:Object},data:function(){return{chart:null,margin:this.styleConfig.margin,width:this.styleConfig.width-this.styleConfig.margin.left-this.styleConfig.margin.right,height:this.styleConfig.height-this.styleConfig.margin.top-this.styleConfig.margin.bottom,xAxis:null,yAxis:null}},watch:{vpiData:function(t){null!=this.chart&&this.chart.remove(),this.createEmptyChart(),this.createAndAddChartAxis(),this.updateChart(t)}},computed:{minDatetime:function(){return this.vpiData.reduce((function(t,e){return e.timestamp<t?e.timestamp:t}),this.vpiData[0].timestamp)},maxDatetime:function(){return this.vpiData.reduce((function(t,e){return e.timestamp>t?e.timestamp:t}),this.vpiData[0].timestamp)},maxMTR:function(){return this.vpiData.reduce((function(t,e){return e.mtr>t?e.mtr:t}),this.vpiData[this.firstMTRIndex].mtr)},firstMTRIndex:function(){return this.vpiData.findIndex((function(t){return!isNaN(t.mtr)}))}},methods:{createEmptyChart:function(){var t=m["k"]("svg#vpi-chart").attr("width",this.width+this.margin.left+this.margin.right).attr("height",this.height+this.margin.top+this.margin.bottom).append("g").attr("transform","translate("+this.margin.left+","+this.margin.top+")");this.chart=t},createAndAddChartAxis:function(){this.xAxis=m["j"]().domain([this.minDatetime,this.maxDatetime]).range([0,this.width]),this.chart.append("g").attr("transform","translate(0,"+this.height+")").call(m["a"](this.xAxis).tickSizeOuter(0)),this.yAxis=m["i"]().range([this.height,0]).domain([0,this.maxMTR]),this.chart.append("g").call(m["b"](this.yAxis).tickSizeOuter(0)),this.chart.append("text").attr("text-anchor","end").attr("transform","rotate(-90)").attr("y",20-this.margin.left).attr("x",-this.margin.top-70).text("Migration Traffic Rate")},updateChart:function(t){var e=this;this.chart.append("path").datum(t).attr("fill","none").attr("stroke","steelblue").attr("stroke-width",1.5).attr("d",m["f"]().x((function(t){return e.xAxis(t.timestamp)})).y((function(t){var a=isNaN(t.mtr)?0:t.mtr;return e.yAxis(a)})))}}},_=R,P=Object(O["a"])(_,k,I,!1,null,null,null),S=P.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("svg",{attrs:{id:"timeline-chart"}})])},T=[],Y=(a("b680"),{props:{periods:Array,styleConfig:Object,dataTemporalResolution:Number},data:function(){return{chart:null,margin:this.styleConfig.margin,width:this.styleConfig.width-this.styleConfig.margin.left-this.styleConfig.margin.right,height:this.styleConfig.height-this.styleConfig.margin.top-this.styleConfig.margin.bottom,xAxis:null,tooltip:null}},watch:{periods:{immediate:!0,handler:function(t){this.$nextTick((function(){null!=this.chart&&this.chart.remove(),this.createEmptyChart(),this.createAndAddChartAxis(),this.updateChart(t)}))}}},methods:{createEmptyChart:function(){this.chart=m["k"]("svg#timeline-chart").attr("width",this.width+this.margin.left+this.margin.right).attr("height",this.height+this.margin.top+this.margin.bottom).append("g").attr("transform","translate("+this.margin.left+","+this.margin.top+")"),this.styleConfig.showTooltip&&(this.tooltip=m["k"]("body").append("div").attr("class","tooltip").style("opacity",0))},createAndAddChartAxis:function(){this.xAxis=m["j"]().domain([this.minDatetime,this.maxDatetime]).range([0,this.width]),this.styleConfig.showXAxis&&this.chart.append("g").attr("transform","translate(0,"+this.height+")").call(m["a"](this.xAxis).tickSizeOuter(0))},updateChart:function(t){var e=this.chart.selectAll().data(t),a=e.enter().append("rect"),i=e.exit();i.remove();var r=this,n=e.merge(a).attr("x",(function(t){return r.xAxis(t.timestamp)+1})).attr("y",0).attr("width",r.width/r.rectDivider).attr("height",20).style("fill",(function(t){var e=t.sunAltitude,a=r.styleConfig;return e>=0?a.dayColor:e<0&&e>=-18?a.twilightColor:a.nightColor}));this.styleConfig.showTooltip&&n.on("mouseover",(function(t){r.tooltip.transition().duration(200).style("opacity",.9),r.tooltip.html("<b>Date</b>: ".concat(new Date(t.timestamp/1e3).toISOString()," <br/><b>Sun altitude</b>: ").concat(t.sunAltitude.toFixed(2),"°")).style("left",m["d"].pageX+"px").style("top",m["d"].pageY-50+"px")})).on("mouseout",(function(){r.tooltip.transition().duration(500).style("opacity",0)}))}},computed:{rectDivider:function(){var t=this.maxDatetime-this.minDatetime;return t/1e3/this.dataTemporalResolution},minDatetime:function(){return this.periods[0].timestamp},maxDatetime:function(){return this.periods[this.periods.length-1].timestamp}}}),N=Y,H=Object(O["a"])(N,z,T,!1,null,null,null),V=H.exports,E=a("c1df"),F=a.n(E),L=a("bc3a"),$=a.n(L),B=a("c956"),U=a.n(B);function G(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function J(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?G(Object(a),!0).forEach((function(e){Object(c["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):G(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var X={data:function(){var t=F()().subtract(2,"days");return{selectedDate:t.format(F.a.HTML5_FMT.DATE),intervalInHours:24,selectedRadarODIMCode:g.initialRadarODIMCode,availableRadars:g.availableRadars,showCharts:!1,VPChartStyle:g.VPChartStyle,VPIChartStyle:g.VPIChartStyle,TimelineChartStyle:g.TimelineChartStyle,dataTemporalResolution:g.vtpsFormat.temporalResolution,availableHeights:g.vtpsFormat.availableHeights,radarVtps:{}}},methods:{initializeEmptyData:function(){var t=this,e=F()(this.startDate,"YYYY-MM-DD").hour(0).minute(0).second(0),a=F()(this.endDate,"YYYY-MM-DD").hour(23).minute(59).second(59),i=e.clone(),r=function(){var e={};t.availableHeights.forEach((function(t){e[t]={noData:!0}}));var a={sunAltitude:U.a.getPosition(i.toDate(),t.selectedRadarLatitude,t.selectedRadarLongitude).altitude*(180/Math.PI),heightData:e};t.$set(t.radarVtps,i.toDate().getTime(),a),i.add(t.dataTemporalResolution,"seconds")};while(i.isBefore(a))r()},loadData:function(){this.showCharts=!0,this.initializeEmptyData(),this.populateDataFromCrowServer(this.selectedRadarODIMCode,this.startDate,this.endDate)},storeDataRow:function(t){var e={dd:t.dd,ff:t.ff,dens:t.dens,sd_vvp:t.sd_vvp,noData:!1};this.$set(this.radarVtps[t.datetime].heightData,t.height,e)},populateDataFromCrowServer:function(t,e,a){var i=this,r=F()(e,"YYYY-MM-DD"),n=F()(a,"YYYY-MM-DD").add(1,"days"),s=r.clone();while(s.isBefore(n,"day")){var o=this.buildDataUrl(t,s);$.a.get(o).then((function(t){var e=C.readVtps(t.data),a=!0,r=!1,n=void 0;try{for(var s,o=e[Symbol.iterator]();!(a=(s=o.next()).done);a=!0){var l=s.value;i.storeDataRow(l)}}catch(c){r=!0,n=c}finally{try{a||null==o.return||o.return()}finally{if(r)throw n}}})).catch((function(){})),s.add(1,"days")}},buildDataUrl:function(t,e){return"".concat(g.dataBaseUrl,"/").concat(t,"/").concat(e.format("YYYY"),"/").concat(t,"_vpts_").concat(e.format("YYYYMMDD"),".txt")}},computed:{timePeriods:function(){for(var t=[],e=0,a=Object.entries(this.radarVtps);e<a.length;e++){var i=Object(d["a"])(a[e],2),r=i[0],n=i[1];t.push({timestamp:r,sunAltitude:n.sunAltitude})}return t},selectedDateNoon:function(){return F()(this.selectedDate,"YYYY-MM-DD").hour(12).minute(0).second(0)},startDate:function(){return F()(this.selectedDateNoon).subtract(this.intervalInHours,"hours")},endDate:function(){return F()(this.selectedDateNoon).add(this.intervalInHours,"hours")},selectedRadarLatitude:function(){var t=this;return this.availableRadars.find((function(e){return e.ODIMCode==t.selectedRadarODIMCode})).latitude},selectedRadarLongitude:function(){var t=this;return this.availableRadars.find((function(e){return e.ODIMCode==t.selectedRadarODIMCode})).longitude},selectedRadarLocation:function(){var t=this;return this.availableRadars.find((function(e){return e.ODIMCode==t.selectedRadarODIMCode})).location},selectedRadarCountry:function(){var t=this;return this.availableRadars.find((function(e){return e.ODIMCode==t.selectedRadarODIMCode})).country},radarVtpsAsArray:function(){for(var t=[],e=0,a=Object.entries(this.radarVtps);e<a.length;e++)for(var i=Object(d["a"])(a[e],2),r=i[0],n=i[1],s=0,o=Object.entries(n.heightData);s<o.length;s++){var l=Object(d["a"])(o[s],2),c=l[0],h=l[1],u={timestamp:r,height:c};t.push(J({},u,{},h))}return t},integratedProfiles:function(){var t=m["g"]().key((function(t){return t.timestamp})).entries(this.radarVtpsAsArray),e=t.map((function(t){return{timestamp:t.key,mtr:C.integrateProfile(t.values)}}));return e}},components:{VPChart:A,VPIChart:S,TimelineChart:V}},q=X,W=Object(O["a"])(q,o,l,!1,null,null,null),Z=W.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"danger"}},[a("b-navbar-brand",{attrs:{href:"#"}},[t._v("CROW prototype")]),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{href:"#"}},[t._v("Link")]),a("b-nav-item",{attrs:{href:"#",disabled:""}},[t._v("Disabled")])],1)],1)],1)},Q=[],tt={},et=Object(O["a"])(tt,K,Q,!1,null,null,null),at=et.exports,it={name:"app",components:{Crow:Z,CrowNavbar:at}},rt=it,nt=(a("034f"),Object(O["a"])(rt,n,s,!1,null,null,null)),st=nt.exports;i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(st)}}).$mount("#app")},"85ec":function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.0c8a9e5d.js.map