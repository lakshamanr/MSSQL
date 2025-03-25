!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.QP=e():t.QP=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1);function i(t,e){for(var n=[],r=0;r<t.length;r++)t[r].nodeName===e&&n.push(t[r]);return n}function s(t,e,n){var r=t.querySelector('[StatementId="'+e+'"]');if(!n)return r;for(var i=r.getElementsByTagName("RelOp"),s=0;s<i.length;s++){var a=i[s];if(a.attributes.NodeId&&a.attributes.NodeId.value==n)return a}return null}var a=function(){function t(t){if(this.element=t,!this.element)throw new Error("element cannot be null");if("RelOp"!=this.element.tagName)throw new Error("element must be a RelOp element")}return Object.defineProperty(t.prototype,"estimatedRows",{get:function(){return parseFloat(this.element.attributes.EstimateRows.value)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"estimatedRowSize",{get:function(){return parseInt(this.element.attributes.AvgRowSize.value)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"estimatedDataSize",{get:function(){return Math.round(this.estimatedRowSize*this.estimatedRows)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"runtimeCountersPerThread",{get:function(){var t=i(this.element.childNodes,"RunTimeInformation");return 0==t.length?[]:i(t[0].childNodes,"RunTimeCountersPerThread")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"actualRows",{get:function(){return 0==this.runtimeCountersPerThread.length?null:this.runtimeCountersPerThread.reduce(function(t,e){return t+parseFloat(e.attributes.ActualRows.value)},0)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"actualRowsRead",{get:function(){return 0!=this.runtimeCountersPerThread.length&&this.runtimeCountersPerThread[0].attributes.ActualRowsRead?this.runtimeCountersPerThread.reduce(function(t,e){return t+parseFloat(e.attributes.ActualRowsRead.value)},0):null},enumerable:!0,configurable:!0}),t}();e.RelOp=a;var l=function(){function t(t){if(this.element=t,!this.element)throw new Error("element cannot be null");if("qp-node"!=this.element.className)throw new Error("element must have class qp-node")}return Object.defineProperty(t.prototype,"children",{get:function(){return[].slice.call(r.findAncestor(this.element,"qp-tr").children[1].children).map(function(e){return new t(e.children[0].children[0].children[0])})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"nodeId",{get:function(){var t=this.element.attributes["data-node-id"];return t&&t.value},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"statementId",{get:function(){return r.findAncestorP(this.element,function(t){return t.hasAttribute("data-statement-id")}).attributes["data-statement-id"].value},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"queryPlanXml",{get:function(){var t=r.findAncestor(this.element,"qp-root");return null==t?null:t.parentElement.xml},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"nodeXml",{get:function(){return null==this.queryPlanXml?null:s(this.queryPlanXml,this.statementId,this.nodeId)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"relOp",{get:function(){var t=this.nodeXml;return t&&"RelOp"==t.tagName?new a(this.nodeXml):null},enumerable:!0,configurable:!0}),t}();e.Node=l;var o=function(){function t(t){if(this.element=t,!this.element)throw new Error("element cannot be null");if("polyline"!=this.element.nodeName)throw new Error("element must be a polyline")}return Object.defineProperty(t.prototype,"nodeId",{get:function(){var t=this.element.attributes["data-node-id"];return t&&t.value},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"statementId",{get:function(){return this.element.attributes["data-statement-id"].value},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"queryPlanXml",{get:function(){return r.findAncestor(this.element,"qp-root").parentElement.xml},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"nodeXml",{get:function(){return s(this.queryPlanXml,this.statementId,this.nodeId)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"relOp",{get:function(){var t=this.nodeXml;return t&&"RelOp"==t.tagName?new a(this.nodeXml):null},enumerable:!0,configurable:!0}),t}();e.Line=o},function(t,e,n){"use strict";function r(t,e){if(null===t)return null;for(;(t=t.parentElement)&&t&&!e(t););return t}function i(t,e){return(" "+t.className+" ").indexOf(" "+e+" ")>-1}Object.defineProperty(e,"__esModule",{value:!0}),e.findAncestor=function(t,e){return r(t,function(t){return i(t,e)})},e.findAncestorP=r,e.hasClass=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=n(4);e.drawLines=i.drawLines;var s=n(6),a=n(0);e.Node=a.Node;var l=n(7);e.showPlan=function(t,e,n){n=function(t,e){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=e[r]);for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r]);return n}(n,{jsTooltips:!0}),r.setContentsUsingXslt(t,e,l),t.xml=(new DOMParser).parseFromString(e,"text/xml"),i.drawLines(t),n.jsTooltips&&s.initTooltip(t)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setContentsUsingXslt=function(t,e,n){if(window.ActiveXObject||"ActiveXObject"in window){var r=new ActiveXObject("Microsoft.xmlDOM");r.async=!1,r.loadXML(n);var i=new ActiveXObject("Microsoft.xmlDOM");i.async=!1,i.loadXML(e);var s=i.transformNode(r);t.innerHTML=s}else if(document.implementation&&document.implementation.createDocument){var a=new DOMParser,l=new XSLTProcessor;l.importStylesheet(a.parseFromString(n,"text/xml")),s=l.transformToFragment(a.parseFromString(e,"text/xml"),document),t.innerHTML="",t.appendChild(s)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(5),i=n(0),s=5;function a(t,e){for(var n=[],r=-(t.reduce(function(t,e){return t+e},0)+(t.length-1)*e)/2,i=0;i<t.length;i++){var s=r+t[i];n.push((s+r)/2),r=s+e}return n}function l(t){var e=0;return null!=t.relOp&&(e=null==t.relOp.actualRows?t.relOp.estimatedRows:t.relOp.actualRows),Math.max(2,Math.min(Math.floor(Math.log(e>0?e:1)),12))}function o(t,e,n){var r=n.children,i=r.map(l);!function(t,e){t.element.parentElement.parentElement.style.paddingRight=e+"px"}(n,i.reduce(function(t,e){return t+e},0)+s*(r.length-1));for(var o=a(i,s),u=0;u<r.length;u++)h(t,e,n,r[u],i[u],o[u])}function h(t,e,n,r,i,s){var a=n.element.getBoundingClientRect(),l=r.element.getBoundingClientRect(),o=a.right,h=(a.top+a.bottom)/2,c=l.left,m=(l.top+l.bottom)/2;Math.abs(m-h)<5&&(m=h);var p=o/2+c/2;!function(t,e,n,r,i,s,a){var l=u(e,n,r,i),o=t.polyline(l).fill("#E3E3E3").stroke({color:"#505050",width:.5}).data("statement-id",a);s&&o.data("node-id",s)}(t,{x:o-e.left+1,y:h-e.top+s},{x:l.left-e.left-1,y:m-e.top},p-e.left-s,i,r.nodeId,r.statementId)}function u(t,e,n,r){var i=r/2;return[[t.x,t.y],[t.x+i+2,t.y-(i+2)],[t.x+i+2,t.y-i],[n+(t.y<=e.y?i:-i),t.y-i],[n+(t.y<=e.y?i:-i),e.y-i],[e.x,e.y-i],[e.x,e.y+i],[n+(t.y<=e.y?-i:i),e.y+i],[n+(t.y<=e.y?-i:i),t.y+i],[t.x+i+2,t.y+i],[t.x+i+2,t.y+i+2],[t.x,t.y]]}e.drawLines=function(t){for(var e=t.querySelector(".qp-root"),n=r(e),s=e.getBoundingClientRect(),a=e.querySelectorAll(".qp-node"),l=0;l<a.length;l++)o(n,s,new i.Node(a[l]))},e.thicknessesToOffsets=a,e.nodeToThickness=l,e.arrowPath=u},function(t,e,n){var r;
/*!
* svg.js - A lightweight library for manipulating and animating SVG.
* @version 2.6.2
* https://svgdotjs.github.io/
*
* @copyright Wout Fierens <wout@mick-wout.com>
* @license MIT
*
* BUILT: Mon Jun 05 2017 11:33:23 GMT+0200 (Mitteleuropäische Sommerzeit)
*/!function(i,s){void 0===(r=function(){return function(t,e){var n=this.SVG=function(t){if(n.supported)return t=new n.Doc(t),n.parser.draw||n.prepare(),t};if(n.ns="http://www.w3.org/2000/svg",n.xmlns="http://www.w3.org/2000/xmlns/",n.xlink="http://www.w3.org/1999/xlink",n.svgjs="http://svgjs.com/svgjs",n.supported=!!e.createElementNS&&!!e.createElementNS(n.ns,"svg").createSVGRect,!n.supported)return!1;n.did=1e3,n.eid=function(t){return"Svgjs"+u(t)+n.did++},n.create=function(t){var n=e.createElementNS(this.ns,t);return n.setAttribute("id",this.eid(t)),n},n.extend=function(){var t,e,r,i;for(t=[].slice.call(arguments),e=t.pop(),i=t.length-1;i>=0;i--)if(t[i])for(r in e)t[i].prototype[r]=e[r];n.Set&&n.Set.inherit&&n.Set.inherit()},n.invent=function(t){var e="function"==typeof t.create?t.create:function(){this.constructor.call(this,n.create(t.create))};return t.inherit&&(e.prototype=new t.inherit),t.extend&&n.extend(e,t.extend),t.construct&&n.extend(t.parent||n.Container,t.construct),e},n.adopt=function(e){return e?e.instance?e.instance:((r="svg"==e.nodeName?e.parentNode instanceof t.SVGElement?new n.Nested:new n.Doc:"linearGradient"==e.nodeName?new n.Gradient("linear"):"radialGradient"==e.nodeName?new n.Gradient("radial"):n[u(e.nodeName)]?new(n[u(e.nodeName)]):new n.Element(e)).type=e.nodeName,r.node=e,e.instance=r,r instanceof n.Doc&&r.namespace().defs(),r.setData(JSON.parse(e.getAttribute("svgjs:data"))||{}),r):null;var r},n.prepare=function(){var t=e.getElementsByTagName("body")[0],r=(t?new n.Doc(t):n.adopt(e.documentElement).nested()).size(2,0);n.parser={body:t||e.documentElement,draw:r.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").node,poly:r.polyline().node,path:r.path().node,native:n.create("svg")}},n.parser={native:n.create("svg")},e.addEventListener("DOMContentLoaded",function(){n.parser.draw||n.prepare()},!1),n.regex={numberAndUnit:/^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,hex:/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,rgb:/rgb\((\d+),(\d+),(\d+)\)/,reference:/#([a-z0-9\-_]+)/i,transforms:/\)\s*,?\s*/,whitespace:/\s/g,isHex:/^#[a-f0-9]{3,6}$/i,isRgb:/^rgb\(/,isCss:/[^:]+:[^;]+;?/,isBlank:/^(\s+)?$/,isNumber:/^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,isPercent:/^-?[\d\.]+%$/,isImage:/\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,delimiter:/[\s,]+/,hyphen:/([^e])\-/gi,pathLetters:/[MLHVCSQTAZ]/gi,isPathLetter:/[MLHVCSQTAZ]/i,numbersWithDots:/((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,dots:/\./g},n.utils={map:function(t,e){var n,r=t.length,i=[];for(n=0;n<r;n++)i.push(e(t[n]));return i},filter:function(t,e){var n,r=t.length,i=[];for(n=0;n<r;n++)e(t[n])&&i.push(t[n]);return i},radians:function(t){return t%360*Math.PI/180},degrees:function(t){return 180*t/Math.PI%360},filterSVGElements:function(e){return this.filter(e,function(e){return e instanceof t.SVGElement})}},n.defaults={attrs:{"fill-opacity":1,"stroke-opacity":1,"stroke-width":0,"stroke-linejoin":"miter","stroke-linecap":"butt",fill:"#000000",stroke:"#000000",opacity:1,x:0,y:0,cx:0,cy:0,width:0,height:0,r:0,rx:0,ry:0,offset:0,"stop-opacity":1,"stop-color":"#000000","font-size":16,"font-family":"Helvetica, Arial, sans-serif","text-anchor":"start"}},n.Color=function(t){var e;this.r=0,this.g=0,this.b=0,t&&("string"==typeof t?n.regex.isRgb.test(t)?(e=n.regex.rgb.exec(t.replace(n.regex.whitespace,"")),this.r=parseInt(e[1]),this.g=parseInt(e[2]),this.b=parseInt(e[3])):n.regex.isHex.test(t)&&(e=n.regex.hex.exec(function(t){return 4==t.length?["#",t.substring(1,2),t.substring(1,2),t.substring(2,3),t.substring(2,3),t.substring(3,4),t.substring(3,4)].join(""):t}(t)),this.r=parseInt(e[1],16),this.g=parseInt(e[2],16),this.b=parseInt(e[3],16)):"object"==typeof t&&(this.r=t.r,this.g=t.g,this.b=t.b))},n.extend(n.Color,{toString:function(){return this.toHex()},toHex:function(){return"#"+c(this.r)+c(this.g)+c(this.b)},toRgb:function(){return"rgb("+[this.r,this.g,this.b].join()+")"},brightness:function(){return this.r/255*.3+this.g/255*.59+this.b/255*.11},morph:function(t){return this.destination=new n.Color(t),this},at:function(t){return this.destination?(t=t<0?0:t>1?1:t,new n.Color({r:~~(this.r+(this.destination.r-this.r)*t),g:~~(this.g+(this.destination.g-this.g)*t),b:~~(this.b+(this.destination.b-this.b)*t)})):this}}),n.Color.test=function(t){return t+="",n.regex.isHex.test(t)||n.regex.isRgb.test(t)},n.Color.isRgb=function(t){return t&&"number"==typeof t.r&&"number"==typeof t.g&&"number"==typeof t.b},n.Color.isColor=function(t){return n.Color.isRgb(t)||n.Color.test(t)},n.Array=function(t,e){0==(t=(t||[]).valueOf()).length&&e&&(t=e.valueOf()),this.value=this.parse(t)},n.extend(n.Array,{morph:function(t){if(this.destination=this.parse(t),this.value.length!=this.destination.length){for(var e=this.value[this.value.length-1],n=this.destination[this.destination.length-1];this.value.length>this.destination.length;)this.destination.push(n);for(;this.value.length<this.destination.length;)this.value.push(e)}return this},settle:function(){for(var t=0,e=this.value.length,n=[];t<e;t++)-1==n.indexOf(this.value[t])&&n.push(this.value[t]);return this.value=n},at:function(t){if(!this.destination)return this;for(var e=0,r=this.value.length,i=[];e<r;e++)i.push(this.value[e]+(this.destination[e]-this.value[e])*t);return new n.Array(i)},toString:function(){return this.value.join(" ")},valueOf:function(){return this.value},parse:function(t){return t=t.valueOf(),Array.isArray(t)?t:this.split(t)},split:function(t){return t.trim().split(n.regex.delimiter).map(parseFloat)},reverse:function(){return this.value.reverse(),this},clone:function(){var t=new this.constructor;return t.value=function t(e){var n=e.slice(0);for(var r=n.length;r--;)Array.isArray(n[r])&&(n[r]=t(n[r]));return n}(this.value),t}}),n.PointArray=function(t,e){n.Array.call(this,t,e||[[0,0]])},n.PointArray.prototype=new n.Array,n.PointArray.prototype.constructor=n.PointArray,n.extend(n.PointArray,{toString:function(){for(var t=0,e=this.value.length,n=[];t<e;t++)n.push(this.value[t].join(","));return n.join(" ")},toLine:function(){return{x1:this.value[0][0],y1:this.value[0][1],x2:this.value[1][0],y2:this.value[1][1]}},at:function(t){if(!this.destination)return this;for(var e=0,r=this.value.length,i=[];e<r;e++)i.push([this.value[e][0]+(this.destination[e][0]-this.value[e][0])*t,this.value[e][1]+(this.destination[e][1]-this.value[e][1])*t]);return new n.PointArray(i)},parse:function(t){var e=[];if(t=t.valueOf(),Array.isArray(t)){if(Array.isArray(t[0]))return t}else t=t.trim().split(n.regex.delimiter).map(parseFloat);t.length%2!=0&&t.pop();for(var r=0,i=t.length;r<i;r+=2)e.push([t[r],t[r+1]]);return e},move:function(t,e){var n=this.bbox();if(t-=n.x,e-=n.y,!isNaN(t)&&!isNaN(e))for(var r=this.value.length-1;r>=0;r--)this.value[r]=[this.value[r][0]+t,this.value[r][1]+e];return this},size:function(t,e){var n,r=this.bbox();for(n=this.value.length-1;n>=0;n--)r.width&&(this.value[n][0]=(this.value[n][0]-r.x)*t/r.width+r.x),r.height&&(this.value[n][1]=(this.value[n][1]-r.y)*e/r.height+r.y);return this},bbox:function(){return n.parser.poly.setAttribute("points",this.toString()),n.parser.poly.getBBox()}});for(var r={M:function(t,e,n){return e.x=n.x=t[0],e.y=n.y=t[1],["M",e.x,e.y]},L:function(t,e){return e.x=t[0],e.y=t[1],["L",t[0],t[1]]},H:function(t,e){return e.x=t[0],["H",t[0]]},V:function(t,e){return e.y=t[0],["V",t[0]]},C:function(t,e){return e.x=t[4],e.y=t[5],["C",t[0],t[1],t[2],t[3],t[4],t[5]]},S:function(t,e){return e.x=t[2],e.y=t[3],["S",t[0],t[1],t[2],t[3]]},Q:function(t,e){return e.x=t[2],e.y=t[3],["Q",t[0],t[1],t[2],t[3]]},T:function(t,e){return e.x=t[0],e.y=t[1],["T",t[0],t[1]]},Z:function(t,e,n){return e.x=n.x,e.y=n.y,["Z"]},A:function(t,e){return e.x=t[5],e.y=t[6],["A",t[0],t[1],t[2],t[3],t[4],t[5],t[6]]}},i="mlhvqtcsaz".split(""),s=0,a=i.length;s<a;++s)r[i[s]]=function(t){return function(e,n,i){if("H"==t)e[0]=e[0]+n.x;else if("V"==t)e[0]=e[0]+n.y;else if("A"==t)e[5]=e[5]+n.x,e[6]=e[6]+n.y;else for(var s=0,a=e.length;s<a;++s)e[s]=e[s]+(s%2?n.y:n.x);return r[t](e,n,i)}}(i[s].toUpperCase());n.PathArray=function(t,e){n.Array.call(this,t,e||[["M",0,0]])},n.PathArray.prototype=new n.Array,n.PathArray.prototype.constructor=n.PathArray,n.extend(n.PathArray,{toString:function(){return function(t){for(var e=0,n=t.length,r="";e<n;e++)r+=t[e][0],null!=t[e][1]&&(r+=t[e][1],null!=t[e][2]&&(r+=" ",r+=t[e][2],null!=t[e][3]&&(r+=" ",r+=t[e][3],r+=" ",r+=t[e][4],null!=t[e][5]&&(r+=" ",r+=t[e][5],r+=" ",r+=t[e][6],null!=t[e][7]&&(r+=" ",r+=t[e][7])))));return r+" "}(this.value)},move:function(t,e){var n=this.bbox();if(t-=n.x,e-=n.y,!isNaN(t)&&!isNaN(e))for(var r,i=this.value.length-1;i>=0;i--)"M"==(r=this.value[i][0])||"L"==r||"T"==r?(this.value[i][1]+=t,this.value[i][2]+=e):"H"==r?this.value[i][1]+=t:"V"==r?this.value[i][1]+=e:"C"==r||"S"==r||"Q"==r?(this.value[i][1]+=t,this.value[i][2]+=e,this.value[i][3]+=t,this.value[i][4]+=e,"C"==r&&(this.value[i][5]+=t,this.value[i][6]+=e)):"A"==r&&(this.value[i][6]+=t,this.value[i][7]+=e);return this},size:function(t,e){var n,r,i=this.bbox();for(n=this.value.length-1;n>=0;n--)"M"==(r=this.value[n][0])||"L"==r||"T"==r?(this.value[n][1]=(this.value[n][1]-i.x)*t/i.width+i.x,this.value[n][2]=(this.value[n][2]-i.y)*e/i.height+i.y):"H"==r?this.value[n][1]=(this.value[n][1]-i.x)*t/i.width+i.x:"V"==r?this.value[n][1]=(this.value[n][1]-i.y)*e/i.height+i.y:"C"==r||"S"==r||"Q"==r?(this.value[n][1]=(this.value[n][1]-i.x)*t/i.width+i.x,this.value[n][2]=(this.value[n][2]-i.y)*e/i.height+i.y,this.value[n][3]=(this.value[n][3]-i.x)*t/i.width+i.x,this.value[n][4]=(this.value[n][4]-i.y)*e/i.height+i.y,"C"==r&&(this.value[n][5]=(this.value[n][5]-i.x)*t/i.width+i.x,this.value[n][6]=(this.value[n][6]-i.y)*e/i.height+i.y)):"A"==r&&(this.value[n][1]=this.value[n][1]*t/i.width,this.value[n][2]=this.value[n][2]*e/i.height,this.value[n][6]=(this.value[n][6]-i.x)*t/i.width+i.x,this.value[n][7]=(this.value[n][7]-i.y)*e/i.height+i.y);return this},equalCommands:function(t){var e,r,i;for(t=new n.PathArray(t),i=this.value.length===t.value.length,e=0,r=this.value.length;i&&e<r;e++)i=this.value[e][0]===t.value[e][0];return i},morph:function(t){return t=new n.PathArray(t),this.equalCommands(t)?this.destination=t:this.destination=null,this},at:function(t){if(!this.destination)return this;var e,r,i,s,a=this.value,l=this.destination.value,o=[],h=new n.PathArray;for(e=0,r=a.length;e<r;e++){for(o[e]=[a[e][0]],i=1,s=a[e].length;i<s;i++)o[e][i]=a[e][i]+(l[e][i]-a[e][i])*t;"A"===o[e][0]&&(o[e][4]=+(0!=o[e][4]),o[e][5]=+(0!=o[e][5]))}return h.value=o,h},parse:function(t){if(t instanceof n.PathArray)return t.valueOf();var e,i={M:2,L:2,H:1,V:1,C:6,S:4,Q:4,T:2,A:7,Z:0};t="string"==typeof t?t.replace(n.regex.numbersWithDots,o).replace(n.regex.pathLetters," $& ").replace(n.regex.hyphen,"$1 -").trim().split(n.regex.delimiter):t.reduce(function(t,e){return[].concat.call(t,e)},[]);var s=[],a=new n.Point,l=new n.Point,h=0,u=t.length;do{n.regex.isPathLetter.test(t[h])?(e=t[h],++h):"M"==e?e="L":"m"==e&&(e="l"),s.push(r[e].call(null,t.slice(h,h+=i[e.toUpperCase()]).map(parseFloat),a,l))}while(u>h);return s},bbox:function(){return n.parser.path.setAttribute("d",this.toString()),n.parser.path.getBBox()}}),n.Number=n.invent({create:function(t,e){this.value=0,this.unit=e||"","number"==typeof t?this.value=isNaN(t)?0:isFinite(t)?t:t<0?-3.4e38:3.4e38:"string"==typeof t?(e=t.match(n.regex.numberAndUnit))&&(this.value=parseFloat(e[1]),"%"==e[5]?this.value/=100:"s"==e[5]&&(this.value*=1e3),this.unit=e[5]):t instanceof n.Number&&(this.value=t.valueOf(),this.unit=t.unit)},extend:{toString:function(){return("%"==this.unit?~~(1e8*this.value)/1e6:"s"==this.unit?this.value/1e3:this.value)+this.unit},toJSON:function(){return this.toString()},valueOf:function(){return this.value},plus:function(t){return t=new n.Number(t),new n.Number(this+t,this.unit||t.unit)},minus:function(t){return t=new n.Number(t),new n.Number(this-t,this.unit||t.unit)},times:function(t){return t=new n.Number(t),new n.Number(this*t,this.unit||t.unit)},divide:function(t){return t=new n.Number(t),new n.Number(this/t,this.unit||t.unit)},to:function(t){var e=new n.Number(this);return"string"==typeof t&&(e.unit=t),e},morph:function(t){return this.destination=new n.Number(t),t.relative&&(this.destination.value+=this.value),this},at:function(t){return this.destination?new n.Number(this.destination).minus(this).times(t).plus(this):this}}}),n.Element=n.invent({create:function(t){this._stroke=n.defaults.attrs.stroke,this._event=null,this.dom={},(this.node=t)&&(this.type=t.nodeName,this.node.instance=this,this._stroke=t.getAttribute("stroke")||this._stroke)},extend:{x:function(t){return this.attr("x",t)},y:function(t){return this.attr("y",t)},cx:function(t){return null==t?this.x()+this.width()/2:this.x(t-this.width()/2)},cy:function(t){return null==t?this.y()+this.height()/2:this.y(t-this.height()/2)},move:function(t,e){return this.x(t).y(e)},center:function(t,e){return this.cx(t).cy(e)},width:function(t){return this.attr("width",t)},height:function(t){return this.attr("height",t)},size:function(t,e){var r=m(this,t,e);return this.width(new n.Number(r.width)).height(new n.Number(r.height))},clone:function(e,r){this.writeDataToDom();var i=function e(r){for(var i=r.childNodes.length-1;i>=0;i--)r.childNodes[i]instanceof t.SVGElement&&e(r.childNodes[i]);return n.adopt(r).id(n.eid(r.nodeName))}(this.node.cloneNode(!0));return e?e.add(i):this.after(i),i},remove:function(){return this.parent()&&this.parent().removeElement(this),this},replace:function(t){return this.after(t).remove(),t},addTo:function(t){return t.put(this)},putIn:function(t){return t.add(this)},id:function(t){return this.attr("id",t)},inside:function(t,e){var n=this.bbox();return t>n.x&&e>n.y&&t<n.x+n.width&&e<n.y+n.height},show:function(){return this.style("display","")},hide:function(){return this.style("display","none")},visible:function(){return"none"!=this.style("display")},toString:function(){return this.attr("id")},classes:function(){var t=this.attr("class");return null==t?[]:t.trim().split(n.regex.delimiter)},hasClass:function(t){return-1!=this.classes().indexOf(t)},addClass:function(t){if(!this.hasClass(t)){var e=this.classes();e.push(t),this.attr("class",e.join(" "))}return this},removeClass:function(t){return this.hasClass(t)&&this.attr("class",this.classes().filter(function(e){return e!=t}).join(" ")),this},toggleClass:function(t){return this.hasClass(t)?this.removeClass(t):this.addClass(t)},reference:function(t){return n.get(this.attr(t))},parent:function(e){var r=this;if(!r.node.parentNode)return null;if(r=n.adopt(r.node.parentNode),!e)return r;for(;r&&r.node instanceof t.SVGElement;){if("string"==typeof e?r.matches(e):r instanceof e)return r;r=n.adopt(r.node.parentNode)}},doc:function(){return this instanceof n.Doc?this:this.parent(n.Doc)},parents:function(t){var e=[],n=this;do{if(!(n=n.parent(t))||!n.node)break;e.push(n)}while(n.parent);return e},matches:function(t){return function(t,e){return(t.matches||t.matchesSelector||t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||t.oMatchesSelector).call(t,e)}(this.node,t)},native:function(){return this.node},svg:function(t){var r=e.createElement("svg");if(!(t&&this instanceof n.Parent))return r.appendChild(t=e.createElement("svg")),this.writeDataToDom(),t.appendChild(this.node.cloneNode(!0)),r.innerHTML.replace(/^<svg>/,"").replace(/<\/svg>$/,"");r.innerHTML="<svg>"+t.replace(/\n/,"").replace(/<(\w+)([^<]+?)\/>/g,"<$1$2></$1>")+"</svg>";for(var i=0,s=r.firstChild.childNodes.length;i<s;i++)this.node.appendChild(r.firstChild.firstChild);return this},writeDataToDom:function(){if(this.each||this.lines){var t=this.each?this:this.lines();t.each(function(){this.writeDataToDom()})}return this.node.removeAttribute("svgjs:data"),Object.keys(this.dom).length&&this.node.setAttribute("svgjs:data",JSON.stringify(this.dom)),this},setData:function(t){return this.dom=t,this},is:function(t){return function(t,e){return t instanceof e}(this,t)}}}),n.easing={"-":function(t){return t},"<>":function(t){return-Math.cos(t*Math.PI)/2+.5},">":function(t){return Math.sin(t*Math.PI/2)},"<":function(t){return 1-Math.cos(t*Math.PI/2)}},n.morph=function(t){return function(e,r){return new n.MorphObj(e,r).at(t)}},n.Situation=n.invent({create:function(t){this.init=!1,this.reversed=!1,this.reversing=!1,this.duration=new n.Number(t.duration).valueOf(),this.delay=new n.Number(t.delay).valueOf(),this.start=+new Date+this.delay,this.finish=this.start+this.duration,this.ease=t.ease,this.loop=0,this.loops=!1,this.animations={},this.attrs={},this.styles={},this.transforms=[],this.once={}}}),n.FX=n.invent({create:function(t){this._target=t,this.situations=[],this.active=!1,this.situation=null,this.paused=!1,this.lastPos=0,this.pos=0,this.absPos=0,this._speed=1},extend:{animate:function(t,e,r){"object"==typeof t&&(e=t.ease,r=t.delay,t=t.duration);var i=new n.Situation({duration:t||1e3,delay:r||0,ease:n.easing[e||"-"]||e});return this.queue(i),this},delay:function(t){var e=new n.Situation({duration:t,delay:0,ease:n.easing["-"]});return this.queue(e)},target:function(t){return t&&t instanceof n.Element?(this._target=t,this):this._target},timeToAbsPos:function(t){return(t-this.situation.start)/(this.situation.duration/this._speed)},absPosToTime:function(t){return this.situation.duration/this._speed*t+this.situation.start},startAnimFrame:function(){this.stopAnimFrame(),this.animationFrame=t.requestAnimationFrame(function(){this.step()}.bind(this))},stopAnimFrame:function(){t.cancelAnimationFrame(this.animationFrame)},start:function(){return!this.active&&this.situation&&(this.active=!0,this.startCurrent()),this},startCurrent:function(){return this.situation.start=+new Date+this.situation.delay/this._speed,this.situation.finish=this.situation.start+this.situation.duration/this._speed,this.initAnimations().step()},queue:function(t){return("function"==typeof t||t instanceof n.Situation)&&this.situations.push(t),this.situation||(this.situation=this.situations.shift()),this},dequeue:function(){return this.stop(),this.situation=this.situations.shift(),this.situation&&(this.situation instanceof n.Situation?this.start():this.situation.call(this)),this},initAnimations:function(){var t,e,r,i=this.situation;if(i.init)return this;for(t in i.animations)for(r=this.target()[t](),Array.isArray(r)||(r=[r]),Array.isArray(i.animations[t])||(i.animations[t]=[i.animations[t]]),e=r.length;e--;)i.animations[t][e]instanceof n.Number&&(r[e]=new n.Number(r[e])),i.animations[t][e]=r[e].morph(i.animations[t][e]);for(t in i.attrs)i.attrs[t]=new n.MorphObj(this.target().attr(t),i.attrs[t]);for(t in i.styles)i.styles[t]=new n.MorphObj(this.target().style(t),i.styles[t]);return i.initialTransformation=this.target().matrixify(),i.init=!0,this},clearQueue:function(){return this.situations=[],this},clearCurrent:function(){return this.situation=null,this},stop:function(t,e){var n=this.active;return this.active=!1,e&&this.clearQueue(),t&&this.situation&&(!n&&this.startCurrent(),this.atEnd()),this.stopAnimFrame(),this.clearCurrent()},reset:function(){if(this.situation){var t=this.situation;this.stop(),this.situation=t,this.atStart()}return this},finish:function(){for(this.stop(!0,!1);this.dequeue().situation&&this.stop(!0,!1););return this.clearQueue().clearCurrent(),this},atStart:function(){return this.at(0,!0)},atEnd:function(){return!0===this.situation.loops&&(this.situation.loops=this.situation.loop+1),"number"==typeof this.situation.loops?this.at(this.situation.loops,!0):this.at(1,!0)},at:function(t,e){var n=this.situation.duration/this._speed;return this.absPos=t,e||(this.situation.reversed&&(this.absPos=1-this.absPos),this.absPos+=this.situation.loop),this.situation.start=+new Date-this.absPos*n,this.situation.finish=this.situation.start+n,this.step(!0)},speed:function(t){return 0===t?this.pause():t?(this._speed=t,this.at(this.absPos,!0)):this._speed},loop:function(t,e){var n=this.last();return n.loops=null==t||t,n.loop=0,e&&(n.reversing=!0),this},pause:function(){return this.paused=!0,this.stopAnimFrame(),this},play:function(){return this.paused?(this.paused=!1,this.at(this.absPos,!0)):this},reverse:function(t){var e=this.last();return e.reversed=void 0===t?!e.reversed:t,this},progress:function(t){return t?this.situation.ease(this.pos):this.pos},after:function(t){var e=this.last();return this.target().on("finished.fx",function n(r){r.detail.situation==e&&(t.call(this,e),this.off("finished.fx",n))}),this._callStart()},during:function(t){var e=this.last(),r=function(r){r.detail.situation==e&&t.call(this,r.detail.pos,n.morph(r.detail.pos),r.detail.eased,e)};return this.target().off("during.fx",r).on("during.fx",r),this.after(function(){this.off("during.fx",r)}),this._callStart()},afterAll:function(t){var e=function e(n){t.call(this),this.off("allfinished.fx",e)};return this.target().off("allfinished.fx",e).on("allfinished.fx",e),this._callStart()},duringAll:function(t){var e=function(e){t.call(this,e.detail.pos,n.morph(e.detail.pos),e.detail.eased,e.detail.situation)};return this.target().off("during.fx",e).on("during.fx",e),this.afterAll(function(){this.off("during.fx",e)}),this._callStart()},last:function(){return this.situations.length?this.situations[this.situations.length-1]:this.situation},add:function(t,e,n){return this.last()[n||"animations"][t]=e,this._callStart()},step:function(t){var e,n,r;(t||(this.absPos=this.timeToAbsPos(+new Date)),!1!==this.situation.loops)?(e=Math.max(this.absPos,0),n=Math.floor(e),!0===this.situation.loops||n<this.situation.loops?(this.pos=e-n,r=this.situation.loop,this.situation.loop=n):(this.absPos=this.situation.loops,this.pos=1,r=this.situation.loop-1,this.situation.loop=this.situation.loops),this.situation.reversing&&(this.situation.reversed=this.situation.reversed!=Boolean((this.situation.loop-r)%2))):(this.absPos=Math.min(this.absPos,1),this.pos=this.absPos);this.pos<0&&(this.pos=0),this.situation.reversed&&(this.pos=1-this.pos);var i=this.situation.ease(this.pos);for(var s in this.situation.once)s>this.lastPos&&s<=i&&(this.situation.once[s].call(this.target(),this.pos,i),delete this.situation.once[s]);return this.active&&this.target().fire("during",{pos:this.pos,eased:i,fx:this,situation:this.situation}),this.situation?(this.eachAt(),1==this.pos&&!this.situation.reversed||this.situation.reversed&&0==this.pos?(this.stopAnimFrame(),this.target().fire("finished",{fx:this,situation:this.situation}),this.situations.length||(this.target().fire("allfinished"),this.situations.length||(this.target().off(".fx"),this.active=!1)),this.active?this.dequeue():this.clearCurrent()):!this.paused&&this.active&&this.startAnimFrame(),this.lastPos=i,this):this},eachAt:function(){var t,e,r,i=this,s=this.target(),a=this.situation;for(t in a.animations)r=[].concat(a.animations[t]).map(function(t){return"string"!=typeof t&&t.at?t.at(a.ease(i.pos),i.pos):t}),s[t].apply(s,r);for(t in a.attrs)r=[t].concat(a.attrs[t]).map(function(t){return"string"!=typeof t&&t.at?t.at(a.ease(i.pos),i.pos):t}),s.attr.apply(s,r);for(t in a.styles)r=[t].concat(a.styles[t]).map(function(t){return"string"!=typeof t&&t.at?t.at(a.ease(i.pos),i.pos):t}),s.style.apply(s,r);if(a.transforms.length){for(r=a.initialTransformation,t=0,e=a.transforms.length;t<e;t++){var l=a.transforms[t];l instanceof n.Matrix?r=l.relative?r.multiply((new n.Matrix).morph(l).at(a.ease(this.pos))):r.morph(l).at(a.ease(this.pos)):(l.relative||l.undo(r.extract()),r=r.multiply(l.at(a.ease(this.pos))))}s.matrix(r)}return this},once:function(t,e,n){var r=this.last();return n||(t=r.ease(t)),r.once[t]=e,this},_callStart:function(){return setTimeout(function(){this.start()}.bind(this),0),this}},parent:n.Element,construct:{animate:function(t,e,r){return(this.fx||(this.fx=new n.FX(this))).animate(t,e,r)},delay:function(t){return(this.fx||(this.fx=new n.FX(this))).delay(t)},stop:function(t,e){return this.fx&&this.fx.stop(t,e),this},finish:function(){return this.fx&&this.fx.finish(),this},pause:function(){return this.fx&&this.fx.pause(),this},play:function(){return this.fx&&this.fx.play(),this},speed:function(t){if(this.fx){if(null==t)return this.fx.speed();this.fx.speed(t)}return this}}}),n.MorphObj=n.invent({create:function(t,e){return n.Color.isColor(e)?new n.Color(t).morph(e):n.regex.numberAndUnit.test(e)?new n.Number(t).morph(e):(this.value=t,void(this.destination=e))},extend:{at:function(t,e){return e<1?this.value:this.destination},valueOf:function(){return this.value}}}),n.extend(n.FX,{attr:function(t,e,n){if("object"==typeof t)for(var r in t)this.attr(r,t[r]);else this.add(t,e,"attrs");return this},style:function(t,e){if("object"==typeof t)for(var n in t)this.style(n,t[n]);else this.add(t,e,"styles");return this},x:function(t,e){if(this.target()instanceof n.G)return this.transform({x:t},e),this;var r=new n.Number(t);return r.relative=e,this.add("x",r)},y:function(t,e){if(this.target()instanceof n.G)return this.transform({y:t},e),this;var r=new n.Number(t);return r.relative=e,this.add("y",r)},cx:function(t){return this.add("cx",new n.Number(t))},cy:function(t){return this.add("cy",new n.Number(t))},move:function(t,e){return this.x(t).y(e)},center:function(t,e){return this.cx(t).cy(e)},size:function(t,e){var r;this.target()instanceof n.Text?this.attr("font-size",t):(t&&e||(r=this.target().bbox()),t||(t=r.width/r.height*e),e||(e=r.height/r.width*t),this.add("width",new n.Number(t)).add("height",new n.Number(e)));return this},width:function(t){return this.add("width",new n.Number(t))},height:function(t){return this.add("height",new n.Number(t))},plot:function(t,e,n,r){return 4==arguments.length?this.plot([t,e,n,r]):this.add("plot",new(this.target().morphArray)(t))},leading:function(t){return this.target().leading?this.add("leading",new n.Number(t)):this},viewbox:function(t,e,r,i){return this.target()instanceof n.Container&&this.add("viewbox",new n.ViewBox(t,e,r,i)),this},update:function(t){if(this.target()instanceof n.Stop){if("number"==typeof t||t instanceof n.Number)return this.update({offset:arguments[0],color:arguments[1],opacity:arguments[2]});null!=t.opacity&&this.attr("stop-opacity",t.opacity),null!=t.color&&this.attr("stop-color",t.color),null!=t.offset&&this.attr("offset",t.offset)}return this}}),n.Box=n.invent({create:function(t,e,r,i){if(!("object"!=typeof t||t instanceof n.Element))return n.Box.call(this,null!=t.left?t.left:t.x,null!=t.top?t.top:t.y,t.width,t.height);4==arguments.length&&(this.x=t,this.y=e,this.width=r,this.height=i),x(this)},extend:{merge:function(t){var e=new this.constructor;return e.x=Math.min(this.x,t.x),e.y=Math.min(this.y,t.y),e.width=Math.max(this.x+this.width,t.x+t.width)-e.x,e.height=Math.max(this.y+this.height,t.y+t.height)-e.y,x(e)},transform:function(t){var e,r=1/0,i=-1/0,s=1/0,a=-1/0,l=[new n.Point(this.x,this.y),new n.Point(this.x2,this.y),new n.Point(this.x,this.y2),new n.Point(this.x2,this.y2)];return l.forEach(function(e){e=e.transform(t),r=Math.min(r,e.x),i=Math.max(i,e.x),s=Math.min(s,e.y),a=Math.max(a,e.y)}),(e=new this.constructor).x=r,e.width=i-r,e.y=s,e.height=a-s,x(e),e}}}),n.BBox=n.invent({create:function(t){if(n.Box.apply(this,[].slice.call(arguments)),t instanceof n.Element){var r;try{if(e.documentElement.contains){if(!e.documentElement.contains(t.node))throw new Exception("Element not in the dom")}else{for(var i=t.node;i.parentNode;)i=i.parentNode;if(i!=e)throw new Exception("Element not in the dom")}r=t.node.getBBox()}catch(e){if(t instanceof n.Shape){var s=t.clone(n.parser.draw.instance).show();r=s.node.getBBox(),s.remove()}else r={x:t.node.clientLeft,y:t.node.clientTop,width:t.node.clientWidth,height:t.node.clientHeight}}n.Box.call(this,r)}},inherit:n.Box,parent:n.Element,construct:{bbox:function(){return new n.BBox(this)}}}),n.BBox.prototype.constructor=n.BBox,n.extend(n.Element,{tbox:function(){return console.warn("Use of TBox is deprecated and mapped to RBox. Use .rbox() instead."),this.rbox(this.doc())}}),n.RBox=n.invent({create:function(t){n.Box.apply(this,[].slice.call(arguments)),t instanceof n.Element&&n.Box.call(this,t.node.getBoundingClientRect())},inherit:n.Box,parent:n.Element,extend:{addOffset:function(){return this.x+=t.pageXOffset,this.y+=t.pageYOffset,this}},construct:{rbox:function(t){return t?new n.RBox(this).transform(t.screenCTM().inverse()):new n.RBox(this).addOffset()}}}),n.RBox.prototype.constructor=n.RBox,n.Matrix=n.invent({create:function(t){var e,r=d([1,0,0,1,0,0]);for(t=t instanceof n.Element?t.matrixify():"string"==typeof t?d(t.split(n.regex.delimiter).map(parseFloat)):6==arguments.length?d([].slice.call(arguments)):Array.isArray(t)?d(t):"object"==typeof t?t:r,e=v.length-1;e>=0;--e)this[v[e]]=null!=t[v[e]]?t[v[e]]:r[v[e]]},extend:{extract:function(){var t=p(this,0,1),e=p(this,1,0),r=180/Math.PI*Math.atan2(t.y,t.x)-90;return{x:this.e,y:this.f,transformedX:(this.e*Math.cos(r*Math.PI/180)+this.f*Math.sin(r*Math.PI/180))/Math.sqrt(this.a*this.a+this.b*this.b),transformedY:(this.f*Math.cos(r*Math.PI/180)+this.e*Math.sin(-r*Math.PI/180))/Math.sqrt(this.c*this.c+this.d*this.d),skewX:-r,skewY:180/Math.PI*Math.atan2(e.y,e.x),scaleX:Math.sqrt(this.a*this.a+this.b*this.b),scaleY:Math.sqrt(this.c*this.c+this.d*this.d),rotation:r,a:this.a,b:this.b,c:this.c,d:this.d,e:this.e,f:this.f,matrix:new n.Matrix(this)}},clone:function(){return new n.Matrix(this)},morph:function(t){return this.destination=new n.Matrix(t),this},at:function(t){if(!this.destination)return this;var e=new n.Matrix({a:this.a+(this.destination.a-this.a)*t,b:this.b+(this.destination.b-this.b)*t,c:this.c+(this.destination.c-this.c)*t,d:this.d+(this.destination.d-this.d)*t,e:this.e+(this.destination.e-this.e)*t,f:this.f+(this.destination.f-this.f)*t});return e},multiply:function(t){return new n.Matrix(this.native().multiply(function(t){t instanceof n.Matrix||(t=new n.Matrix(t));return t}(t).native()))},inverse:function(){return new n.Matrix(this.native().inverse())},translate:function(t,e){return new n.Matrix(this.native().translate(t||0,e||0))},scale:function(t,e,r,i){return 1==arguments.length?e=t:3==arguments.length&&(i=r,r=e,e=t),this.around(r,i,new n.Matrix(t,0,0,e,0,0))},rotate:function(t,e,r){return t=n.utils.radians(t),this.around(e,r,new n.Matrix(Math.cos(t),Math.sin(t),-Math.sin(t),Math.cos(t),0,0))},flip:function(t,e){return"x"==t?this.scale(-1,1,e,0):"y"==t?this.scale(1,-1,0,e):this.scale(-1,-1,t,null!=e?e:t)},skew:function(t,e,r,i){return 1==arguments.length?e=t:3==arguments.length&&(i=r,r=e,e=t),t=n.utils.radians(t),e=n.utils.radians(e),this.around(r,i,new n.Matrix(1,Math.tan(e),Math.tan(t),1,0,0))},skewX:function(t,e,n){return this.skew(t,0,e,n)},skewY:function(t,e,n){return this.skew(0,t,e,n)},around:function(t,e,r){return this.multiply(new n.Matrix(1,0,0,1,t||0,e||0)).multiply(r).multiply(new n.Matrix(1,0,0,1,-t||0,-e||0))},native:function(){for(var t=n.parser.native.createSVGMatrix(),e=v.length-1;e>=0;e--)t[v[e]]=this[v[e]];return t},toString:function(){return"matrix("+this.a+","+this.b+","+this.c+","+this.d+","+this.e+","+this.f+")"}},parent:n.Element,construct:{ctm:function(){return new n.Matrix(this.node.getCTM())},screenCTM:function(){if(this instanceof n.Nested){var t=this.rect(1,1),e=t.node.getScreenCTM();return t.remove(),new n.Matrix(e)}return new n.Matrix(this.node.getScreenCTM())}}}),n.Point=n.invent({create:function(t,e){var n;n=Array.isArray(t)?{x:t[0],y:t[1]}:"object"==typeof t?{x:t.x,y:t.y}:null!=t?{x:t,y:null!=e?e:t}:{x:0,y:0},this.x=n.x,this.y=n.y},extend:{clone:function(){return new n.Point(this)},morph:function(t,e){return this.destination=new n.Point(t,e),this},at:function(t){if(!this.destination)return this;var e=new n.Point({x:this.x+(this.destination.x-this.x)*t,y:this.y+(this.destination.y-this.y)*t});return e},native:function(){var t=n.parser.native.createSVGPoint();return t.x=this.x,t.y=this.y,t},transform:function(t){return new n.Point(this.native().matrixTransform(t.native()))}}}),n.extend(n.Element,{point:function(t,e){return new n.Point(t,e).transform(this.screenCTM().inverse())}}),n.extend(n.Element,{attr:function(t,e,r){if(null==t){for(t={},e=this.node.attributes,r=e.length-1;r>=0;r--)t[e[r].nodeName]=n.regex.isNumber.test(e[r].nodeValue)?parseFloat(e[r].nodeValue):e[r].nodeValue;return t}if("object"==typeof t)for(e in t)this.attr(e,t[e]);else if(null===e)this.node.removeAttribute(t);else{if(null==e)return null==(e=this.node.getAttribute(t))?n.defaults.attrs[t]:n.regex.isNumber.test(e)?parseFloat(e):e;"stroke-width"==t?this.attr("stroke",parseFloat(e)>0?this._stroke:null):"stroke"==t&&(this._stroke=e),"fill"!=t&&"stroke"!=t||(n.regex.isImage.test(e)&&(e=this.doc().defs().image(e,0,0)),e instanceof n.Image&&(e=this.doc().defs().pattern(0,0,function(){this.add(e)}))),"number"==typeof e?e=new n.Number(e):n.Color.isColor(e)?e=new n.Color(e):Array.isArray(e)&&(e=new n.Array(e)),"leading"==t?this.leading&&this.leading(e):"string"==typeof r?this.node.setAttributeNS(r,t,e.toString()):this.node.setAttribute(t,e.toString()),!this.rebuild||"font-size"!=t&&"x"!=t||this.rebuild(t,e)}return this}}),n.extend(n.Element,{transform:function(t,e){var r,i;if("object"!=typeof t)return r=new n.Matrix(this).extract(),"string"==typeof t?r[t]:r;if(r=new n.Matrix(this),e=!!e||!!t.relative,null!=t.a)r=e?r.multiply(new n.Matrix(t)):new n.Matrix(t);else if(null!=t.rotation)f(t,this),r=e?r.rotate(t.rotation,t.cx,t.cy):r.rotate(t.rotation-r.extract().rotation,t.cx,t.cy);else if(null!=t.scale||null!=t.scaleX||null!=t.scaleY){if(f(t,this),t.scaleX=null!=t.scale?t.scale:null!=t.scaleX?t.scaleX:1,t.scaleY=null!=t.scale?t.scale:null!=t.scaleY?t.scaleY:1,!e){var s=r.extract();t.scaleX=1*t.scaleX/s.scaleX,t.scaleY=1*t.scaleY/s.scaleY}r=r.scale(t.scaleX,t.scaleY,t.cx,t.cy)}else if(null!=t.skew||null!=t.skewX||null!=t.skewY){if(f(t,this),t.skewX=null!=t.skew?t.skew:null!=t.skewX?t.skewX:0,t.skewY=null!=t.skew?t.skew:null!=t.skewY?t.skewY:0,!e){var s=r.extract();r=r.multiply((new n.Matrix).skew(s.skewX,s.skewY,t.cx,t.cy).inverse())}r=r.skew(t.skewX,t.skewY,t.cx,t.cy)}else t.flip?("x"==t.flip||"y"==t.flip?t.offset=null==t.offset?this.bbox()["c"+t.flip]:t.offset:null==t.offset?(i=this.bbox(),t.flip=i.cx,t.offset=i.cy):t.flip=t.offset,r=(new n.Matrix).flip(t.flip,t.offset)):null==t.x&&null==t.y||(e?r=r.translate(t.x,t.y):(null!=t.x&&(r.e=t.x),null!=t.y&&(r.f=t.y)));return this.attr("transform",r)}}),n.extend(n.FX,{transform:function(t,e){var r,i,s=this.target();return"object"!=typeof t?(r=new n.Matrix(s).extract(),"string"==typeof t?r[t]:r):(e=!!e||!!t.relative,null!=t.a?r=new n.Matrix(t):null!=t.rotation?(f(t,s),r=new n.Rotate(t.rotation,t.cx,t.cy)):null!=t.scale||null!=t.scaleX||null!=t.scaleY?(f(t,s),t.scaleX=null!=t.scale?t.scale:null!=t.scaleX?t.scaleX:1,t.scaleY=null!=t.scale?t.scale:null!=t.scaleY?t.scaleY:1,r=new n.Scale(t.scaleX,t.scaleY,t.cx,t.cy)):null!=t.skewX||null!=t.skewY?(f(t,s),t.skewX=null!=t.skewX?t.skewX:0,t.skewY=null!=t.skewY?t.skewY:0,r=new n.Skew(t.skewX,t.skewY,t.cx,t.cy)):t.flip?("x"==t.flip||"y"==t.flip?t.offset=null==t.offset?s.bbox()["c"+t.flip]:t.offset:null==t.offset?(i=s.bbox(),t.flip=i.cx,t.offset=i.cy):t.flip=t.offset,r=(new n.Matrix).flip(t.flip,t.offset)):null==t.x&&null==t.y||(r=new n.Translate(t.x,t.y)),r?(r.relative=e,this.last().transforms.push(r),this._callStart()):this)}}),n.extend(n.Element,{untransform:function(){return this.attr("transform",null)},matrixify:function(){var t=(this.attr("transform")||"").split(n.regex.transforms).slice(0,-1).map(function(t){var e=t.trim().split("(");return[e[0],e[1].split(n.regex.delimiter).map(function(t){return parseFloat(t)})]}).reduce(function(t,e){return"matrix"==e[0]?t.multiply(d(e[1])):t[e[0]].apply(t,e[1])},new n.Matrix);return t},toParent:function(t){if(this==t)return this;var e=this.screenCTM(),n=t.screenCTM().inverse();return this.addTo(t).untransform().transform(n.multiply(e)),this},toDoc:function(){return this.toParent(this.doc())}}),n.Transformation=n.invent({create:function(t,e){if(arguments.length>1&&"boolean"!=typeof e)return this.constructor.call(this,[].slice.call(arguments));if(Array.isArray(t))for(var n=0,r=this.arguments.length;n<r;++n)this[this.arguments[n]]=t[n];else if("object"==typeof t)for(var n=0,r=this.arguments.length;n<r;++n)this[this.arguments[n]]=t[this.arguments[n]];this.inversed=!1,!0===e&&(this.inversed=!0)},extend:{arguments:[],method:"",at:function(t){for(var e=[],r=0,i=this.arguments.length;r<i;++r)e.push(this[this.arguments[r]]);var s=this._undo||new n.Matrix;return s=(new n.Matrix).morph(n.Matrix.prototype[this.method].apply(s,e)).at(t),this.inversed?s.inverse():s},undo:function(t){for(var e=0,r=this.arguments.length;e<r;++e)t[this.arguments[e]]=void 0===this[this.arguments[e]]?0:t[this.arguments[e]];return t.cx=this.cx,t.cy=this.cy,this._undo=new(n[u(this.method)])(t,!0).at(1),this}}}),n.Translate=n.invent({parent:n.Matrix,inherit:n.Transformation,create:function(t,e){this.constructor.apply(this,[].slice.call(arguments))},extend:{arguments:["transformedX","transformedY"],method:"translate"}}),n.Rotate=n.invent({parent:n.Matrix,inherit:n.Transformation,create:function(t,e){this.constructor.apply(this,[].slice.call(arguments))},extend:{arguments:["rotation","cx","cy"],method:"rotate",at:function(t){var e=(new n.Matrix).rotate((new n.Number).morph(this.rotation-(this._undo?this._undo.rotation:0)).at(t),this.cx,this.cy);return this.inversed?e.inverse():e},undo:function(t){return this._undo=t,this}}}),n.Scale=n.invent({parent:n.Matrix,inherit:n.Transformation,create:function(t,e){this.constructor.apply(this,[].slice.call(arguments))},extend:{arguments:["scaleX","scaleY","cx","cy"],method:"scale"}}),n.Skew=n.invent({parent:n.Matrix,inherit:n.Transformation,create:function(t,e){this.constructor.apply(this,[].slice.call(arguments))},extend:{arguments:["skewX","skewY","cx","cy"],method:"skew"}}),n.extend(n.Element,{style:function(t,e){if(0==arguments.length)return this.node.style.cssText||"";if(arguments.length<2)if("object"==typeof t)for(e in t)this.style(e,t[e]);else{if(!n.regex.isCss.test(t))return this.node.style[h(t)];for(t=t.split(/\s*;\s*/).filter(function(t){return!!t}).map(function(t){return t.split(/\s*:\s*/)});e=t.pop();)this.style(e[0],e[1])}else this.node.style[h(t)]=null===e||n.regex.isBlank.test(e)?"":e;return this}}),n.Parent=n.invent({create:function(t){this.constructor.call(this,t)},inherit:n.Element,extend:{children:function(){return n.utils.map(n.utils.filterSVGElements(this.node.childNodes),function(t){return n.adopt(t)})},add:function(t,e){return null==e?this.node.appendChild(t.node):t.node!=this.node.childNodes[e]&&this.node.insertBefore(t.node,this.node.childNodes[e]),this},put:function(t,e){return this.add(t,e),t},has:function(t){return this.index(t)>=0},index:function(t){return[].slice.call(this.node.childNodes).indexOf(t.node)},get:function(t){return n.adopt(this.node.childNodes[t])},first:function(){return this.get(0)},last:function(){return this.get(this.node.childNodes.length-1)},each:function(t,e){var r,i,s=this.children();for(r=0,i=s.length;r<i;r++)s[r]instanceof n.Element&&t.apply(s[r],[r,s]),e&&s[r]instanceof n.Container&&s[r].each(t,e);return this},removeElement:function(t){return this.node.removeChild(t.node),this},clear:function(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return delete this._defs,this},defs:function(){return this.doc().defs()}}}),n.extend(n.Parent,{ungroup:function(t,e){return 0===e||this instanceof n.Defs||this.node==n.parser.draw?this:(t=t||(this instanceof n.Doc?this:this.parent(n.Parent)),e=e||1/0,this.each(function(){return this instanceof n.Defs?this:this instanceof n.Parent?this.ungroup(t,e-1):this.toParent(t)}),this.node.firstChild||this.remove(),this)},flatten:function(t,e){return this.ungroup(t,e)}}),n.Container=n.invent({create:function(t){this.constructor.call(this,t)},inherit:n.Parent}),n.ViewBox=n.invent({create:function(t){var e,r,i,s,a,l,o,h=1,u=1,c=/[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?/gi;if(t instanceof n.Element){for(l=t,o=t,a=(t.attr("viewBox")||"").match(c),t.bbox,i=new n.Number(t.width()),s=new n.Number(t.height());"%"==i.unit;)h*=i.value,i=new n.Number(l instanceof n.Doc?l.parent().offsetWidth:l.parent().width()),l=l.parent();for(;"%"==s.unit;)u*=s.value,s=new n.Number(o instanceof n.Doc?o.parent().offsetHeight:o.parent().height()),o=o.parent();this.x=0,this.y=0,this.width=i*h,this.height=s*u,this.zoom=1,a&&(e=parseFloat(a[0]),r=parseFloat(a[1]),i=parseFloat(a[2]),s=parseFloat(a[3]),this.zoom=this.width/this.height>i/s?this.height/s:this.width/i,this.x=e,this.y=r,this.width=i,this.height=s)}else t="string"==typeof t?t.match(c).map(function(t){return parseFloat(t)}):Array.isArray(t)?t:"object"==typeof t?[t.x,t.y,t.width,t.height]:4==arguments.length?[].slice.call(arguments):[0,0,0,0],this.x=t[0],this.y=t[1],this.width=t[2],this.height=t[3]},extend:{toString:function(){return this.x+" "+this.y+" "+this.width+" "+this.height},morph:function(t,e,r,i){return this.destination=new n.ViewBox(t,e,r,i),this},at:function(t){return this.destination?new n.ViewBox([this.x+(this.destination.x-this.x)*t,this.y+(this.destination.y-this.y)*t,this.width+(this.destination.width-this.width)*t,this.height+(this.destination.height-this.height)*t]):this}},parent:n.Container,construct:{viewbox:function(t,e,r,i){return 0==arguments.length?new n.ViewBox(this):this.attr("viewBox",new n.ViewBox(t,e,r,i))}}}),["click","dblclick","mousedown","mouseup","mouseover","mouseout","mousemove","touchstart","touchmove","touchleave","touchend","touchcancel"].forEach(function(t){n.Element.prototype[t]=function(e){return n.on(this.node,t,e),this}}),n.listeners=[],n.handlerMap=[],n.listenerId=0,n.on=function(t,e,r,i,s){var a=r.bind(i||t.instance||t),l=(n.handlerMap.indexOf(t)+1||n.handlerMap.push(t))-1,o=e.split(".")[0],h=e.split(".")[1]||"*";n.listeners[l]=n.listeners[l]||{},n.listeners[l][o]=n.listeners[l][o]||{},n.listeners[l][o][h]=n.listeners[l][o][h]||{},r._svgjsListenerId||(r._svgjsListenerId=++n.listenerId),n.listeners[l][o][h][r._svgjsListenerId]=a,t.addEventListener(o,a,s||!1)},n.off=function(t,e,r){var i=n.handlerMap.indexOf(t),s=e&&e.split(".")[0],a=e&&e.split(".")[1],l="";if(-1!=i)if(r){if("function"==typeof r&&(r=r._svgjsListenerId),!r)return;n.listeners[i][s]&&n.listeners[i][s][a||"*"]&&(t.removeEventListener(s,n.listeners[i][s][a||"*"][r],!1),delete n.listeners[i][s][a||"*"][r])}else if(a&&s){if(n.listeners[i][s]&&n.listeners[i][s][a]){for(r in n.listeners[i][s][a])n.off(t,[s,a].join("."),r);delete n.listeners[i][s][a]}}else if(a)for(e in n.listeners[i])for(l in n.listeners[i][e])a===l&&n.off(t,[e,a].join("."));else if(s){if(n.listeners[i][s]){for(l in n.listeners[i][s])n.off(t,[s,l].join("."));delete n.listeners[i][s]}}else{for(e in n.listeners[i])n.off(t,e);delete n.listeners[i],delete n.handlerMap[i]}},n.extend(n.Element,{on:function(t,e,r,i){return n.on(this.node,t,e,r,i),this},off:function(t,e){return n.off(this.node,t,e),this},fire:function(e,n){return e instanceof t.Event?this.node.dispatchEvent(e):this.node.dispatchEvent(e=new t.CustomEvent(e,{detail:n,cancelable:!0})),this._event=e,this},event:function(){return this._event}}),n.Defs=n.invent({create:"defs",inherit:n.Container}),n.G=n.invent({create:"g",inherit:n.Container,extend:{x:function(t){return null==t?this.transform("x"):this.transform({x:t-this.x()},!0)},y:function(t){return null==t?this.transform("y"):this.transform({y:t-this.y()},!0)},cx:function(t){return null==t?this.gbox().cx:this.x(t-this.gbox().width/2)},cy:function(t){return null==t?this.gbox().cy:this.y(t-this.gbox().height/2)},gbox:function(){var t=this.bbox(),e=this.transform();return t.x+=e.x,t.x2+=e.x,t.cx+=e.x,t.y+=e.y,t.y2+=e.y,t.cy+=e.y,t}},construct:{group:function(){return this.put(new n.G)}}}),n.extend(n.Element,{siblings:function(){return this.parent().children()},position:function(){return this.parent().index(this)},next:function(){return this.siblings()[this.position()+1]},previous:function(){return this.siblings()[this.position()-1]},forward:function(){var t=this.position()+1,e=this.parent();return e.removeElement(this).add(this,t),e instanceof n.Doc&&e.node.appendChild(e.defs().node),this},backward:function(){var t=this.position();return t>0&&this.parent().removeElement(this).add(this,t-1),this},front:function(){var t=this.parent();return t.node.appendChild(this.node),t instanceof n.Doc&&t.node.appendChild(t.defs().node),this},back:function(){return this.position()>0&&this.parent().removeElement(this).add(this,0),this},before:function(t){t.remove();var e=this.position();return this.parent().add(t,e),this},after:function(t){t.remove();var e=this.position();return this.parent().add(t,e+1),this}}),n.Mask=n.invent({create:function(){this.constructor.call(this,n.create("mask")),this.targets=[]},inherit:n.Container,extend:{remove:function(){for(var t=this.targets.length-1;t>=0;t--)this.targets[t]&&this.targets[t].unmask();return this.targets=[],this.parent().removeElement(this),this}},construct:{mask:function(){return this.defs().put(new n.Mask)}}}),n.extend(n.Element,{maskWith:function(t){return this.masker=t instanceof n.Mask?t:this.parent().mask().add(t),this.masker.targets.push(this),this.attr("mask",'url("#'+this.masker.attr("id")+'")')},unmask:function(){return delete this.masker,this.attr("mask",null)}}),n.ClipPath=n.invent({create:function(){this.constructor.call(this,n.create("clipPath")),this.targets=[]},inherit:n.Container,extend:{remove:function(){for(var t=this.targets.length-1;t>=0;t--)this.targets[t]&&this.targets[t].unclip();return this.targets=[],this.parent().removeElement(this),this}},construct:{clip:function(){return this.defs().put(new n.ClipPath)}}}),n.extend(n.Element,{clipWith:function(t){return this.clipper=t instanceof n.ClipPath?t:this.parent().clip().add(t),this.clipper.targets.push(this),this.attr("clip-path",'url("#'+this.clipper.attr("id")+'")')},unclip:function(){return delete this.clipper,this.attr("clip-path",null)}}),n.Gradient=n.invent({create:function(t){this.constructor.call(this,n.create(t+"Gradient")),this.type=t},inherit:n.Container,extend:{at:function(t,e,r){return this.put(new n.Stop).update(t,e,r)},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},fill:function(){return"url(#"+this.id()+")"},toString:function(){return this.fill()},attr:function(t,e,r){return"transform"==t&&(t="gradientTransform"),n.Container.prototype.attr.call(this,t,e,r)}},construct:{gradient:function(t,e){return this.defs().gradient(t,e)}}}),n.extend(n.Gradient,n.FX,{from:function(t,e){return"radial"==(this._target||this).type?this.attr({fx:new n.Number(t),fy:new n.Number(e)}):this.attr({x1:new n.Number(t),y1:new n.Number(e)})},to:function(t,e){return"radial"==(this._target||this).type?this.attr({cx:new n.Number(t),cy:new n.Number(e)}):this.attr({x2:new n.Number(t),y2:new n.Number(e)})}}),n.extend(n.Defs,{gradient:function(t,e){return this.put(new n.Gradient(t)).update(e)}}),n.Stop=n.invent({create:"stop",inherit:n.Element,extend:{update:function(t){return("number"==typeof t||t instanceof n.Number)&&(t={offset:arguments[0],color:arguments[1],opacity:arguments[2]}),null!=t.opacity&&this.attr("stop-opacity",t.opacity),null!=t.color&&this.attr("stop-color",t.color),null!=t.offset&&this.attr("offset",new n.Number(t.offset)),this}}}),n.Pattern=n.invent({create:"pattern",inherit:n.Container,extend:{fill:function(){return"url(#"+this.id()+")"},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},toString:function(){return this.fill()},attr:function(t,e,r){return"transform"==t&&(t="patternTransform"),n.Container.prototype.attr.call(this,t,e,r)}},construct:{pattern:function(t,e,n){return this.defs().pattern(t,e,n)}}}),n.extend(n.Defs,{pattern:function(t,e,r){return this.put(new n.Pattern).update(r).attr({x:0,y:0,width:t,height:e,patternUnits:"userSpaceOnUse"})}}),n.Doc=n.invent({create:function(t){t&&("svg"==(t="string"==typeof t?e.getElementById(t):t).nodeName?this.constructor.call(this,t):(this.constructor.call(this,n.create("svg")),t.appendChild(this.node),this.size("100%","100%")),this.namespace().defs())},inherit:n.Container,extend:{namespace:function(){return this.attr({xmlns:n.ns,version:"1.1"}).attr("xmlns:xlink",n.xlink,n.xmlns).attr("xmlns:svgjs",n.svgjs,n.xmlns)},defs:function(){var t;this._defs||((t=this.node.getElementsByTagName("defs")[0])?this._defs=n.adopt(t):this._defs=new n.Defs,this.node.appendChild(this._defs.node));return this._defs},parent:function(){return"#document"==this.node.parentNode.nodeName?null:this.node.parentNode},spof:function(t){var e=this.node.getScreenCTM();return e&&this.style("left",-e.e%1+"px").style("top",-e.f%1+"px"),this},remove:function(){return this.parent()&&this.parent().removeChild(this.node),this},clear:function(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return delete this._defs,n.parser.draw.parentNode||this.node.appendChild(n.parser.draw),this}}}),n.Shape=n.invent({create:function(t){this.constructor.call(this,t)},inherit:n.Element}),n.Bare=n.invent({create:function(t,e){if(this.constructor.call(this,n.create(t)),e)for(var r in e.prototype)"function"==typeof e.prototype[r]&&(this[r]=e.prototype[r])},inherit:n.Element,extend:{words:function(t){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return this.node.appendChild(e.createTextNode(t)),this}}}),n.extend(n.Parent,{element:function(t,e){return this.put(new n.Bare(t,e))}}),n.Symbol=n.invent({create:"symbol",inherit:n.Container,construct:{symbol:function(){return this.put(new n.Symbol)}}}),n.Use=n.invent({create:"use",inherit:n.Shape,extend:{element:function(t,e){return this.attr("href",(e||"")+"#"+t,n.xlink)}},construct:{use:function(t,e){return this.put(new n.Use).element(t,e)}}}),n.Rect=n.invent({create:"rect",inherit:n.Shape,construct:{rect:function(t,e){return this.put(new n.Rect).size(t,e)}}}),n.Circle=n.invent({create:"circle",inherit:n.Shape,construct:{circle:function(t){return this.put(new n.Circle).rx(new n.Number(t).divide(2)).move(0,0)}}}),n.extend(n.Circle,n.FX,{rx:function(t){return this.attr("r",t)},ry:function(t){return this.rx(t)}}),n.Ellipse=n.invent({create:"ellipse",inherit:n.Shape,construct:{ellipse:function(t,e){return this.put(new n.Ellipse).size(t,e).move(0,0)}}}),n.extend(n.Ellipse,n.Rect,n.FX,{rx:function(t){return this.attr("rx",t)},ry:function(t){return this.attr("ry",t)}}),n.extend(n.Circle,n.Ellipse,{x:function(t){return null==t?this.cx()-this.rx():this.cx(t+this.rx())},y:function(t){return null==t?this.cy()-this.ry():this.cy(t+this.ry())},cx:function(t){return null==t?this.attr("cx"):this.attr("cx",t)},cy:function(t){return null==t?this.attr("cy"):this.attr("cy",t)},width:function(t){return null==t?2*this.rx():this.rx(new n.Number(t).divide(2))},height:function(t){return null==t?2*this.ry():this.ry(new n.Number(t).divide(2))},size:function(t,e){var r=m(this,t,e);return this.rx(new n.Number(r.width).divide(2)).ry(new n.Number(r.height).divide(2))}}),n.Line=n.invent({create:"line",inherit:n.Shape,extend:{array:function(){return new n.PointArray([[this.attr("x1"),this.attr("y1")],[this.attr("x2"),this.attr("y2")]])},plot:function(t,e,r,i){return null==t?this.array():(t=void 0!==e?{x1:t,y1:e,x2:r,y2:i}:new n.PointArray(t).toLine(),this.attr(t))},move:function(t,e){return this.attr(this.array().move(t,e).toLine())},size:function(t,e){var n=m(this,t,e);return this.attr(this.array().size(n.width,n.height).toLine())}},construct:{line:function(t,e,r,i){return n.Line.prototype.plot.apply(this.put(new n.Line),null!=t?[t,e,r,i]:[0,0,0,0])}}}),n.Polyline=n.invent({create:"polyline",inherit:n.Shape,construct:{polyline:function(t){return this.put(new n.Polyline).plot(t||new n.PointArray)}}}),n.Polygon=n.invent({create:"polygon",inherit:n.Shape,construct:{polygon:function(t){return this.put(new n.Polygon).plot(t||new n.PointArray)}}}),n.extend(n.Polyline,n.Polygon,{array:function(){return this._array||(this._array=new n.PointArray(this.attr("points")))},plot:function(t){return null==t?this.array():this.clear().attr("points","string"==typeof t?t:this._array=new n.PointArray(t))},clear:function(){return delete this._array,this},move:function(t,e){return this.attr("points",this.array().move(t,e))},size:function(t,e){var n=m(this,t,e);return this.attr("points",this.array().size(n.width,n.height))}}),n.extend(n.Line,n.Polyline,n.Polygon,{morphArray:n.PointArray,x:function(t){return null==t?this.bbox().x:this.move(t,this.bbox().y)},y:function(t){return null==t?this.bbox().y:this.move(this.bbox().x,t)},width:function(t){var e=this.bbox();return null==t?e.width:this.size(t,e.height)},height:function(t){var e=this.bbox();return null==t?e.height:this.size(e.width,t)}}),n.Path=n.invent({create:"path",inherit:n.Shape,extend:{morphArray:n.PathArray,array:function(){return this._array||(this._array=new n.PathArray(this.attr("d")))},plot:function(t){return null==t?this.array():this.clear().attr("d","string"==typeof t?t:this._array=new n.PathArray(t))},clear:function(){return delete this._array,this},move:function(t,e){return this.attr("d",this.array().move(t,e))},x:function(t){return null==t?this.bbox().x:this.move(t,this.bbox().y)},y:function(t){return null==t?this.bbox().y:this.move(this.bbox().x,t)},size:function(t,e){var n=m(this,t,e);return this.attr("d",this.array().size(n.width,n.height))},width:function(t){return null==t?this.bbox().width:this.size(t,this.bbox().height)},height:function(t){return null==t?this.bbox().height:this.size(this.bbox().width,t)}},construct:{path:function(t){return this.put(new n.Path).plot(t||new n.PathArray)}}}),n.Image=n.invent({create:"image",inherit:n.Shape,extend:{load:function(e){if(!e)return this;var r=this,i=new t.Image;return n.on(i,"load",function(){var t=r.parent(n.Pattern);null!==t&&(0==r.width()&&0==r.height()&&r.size(i.width,i.height),t&&0==t.width()&&0==t.height()&&t.size(r.width(),r.height()),"function"==typeof r._loaded&&r._loaded.call(r,{width:i.width,height:i.height,ratio:i.width/i.height,url:e}))}),n.on(i,"error",function(t){"function"==typeof r._error&&r._error.call(r,t)}),this.attr("href",i.src=this.src=e,n.xlink)},loaded:function(t){return this._loaded=t,this},error:function(t){return this._error=t,this}},construct:{image:function(t,e,r){return this.put(new n.Image).load(t).size(e||0,r||e||0)}}}),n.Text=n.invent({create:function(){this.constructor.call(this,n.create("text")),this.dom.leading=new n.Number(1.3),this._rebuild=!0,this._build=!1,this.attr("font-family",n.defaults.attrs["font-family"])},inherit:n.Shape,extend:{x:function(t){return null==t?this.attr("x"):this.attr("x",t)},y:function(t){var e=this.attr("y"),n="number"==typeof e?e-this.bbox().y:0;return null==t?"number"==typeof e?e-n:e:this.attr("y","number"==typeof t?t+n:t)},cx:function(t){return null==t?this.bbox().cx:this.x(t-this.bbox().width/2)},cy:function(t){return null==t?this.bbox().cy:this.y(t-this.bbox().height/2)},text:function(t){if(void 0===t){for(var t="",e=this.node.childNodes,r=0,i=e.length;r<i;++r)0!=r&&3!=e[r].nodeType&&1==n.adopt(e[r]).dom.newLined&&(t+="\n"),t+=e[r].textContent;return t}if(this.clear().build(!0),"function"==typeof t)t.call(this,this);else for(var r=0,s=(t=t.split("\n")).length;r<s;r++)this.tspan(t[r]).newLine();return this.build(!1).rebuild()},size:function(t){return this.attr("font-size",t).rebuild()},leading:function(t){return null==t?this.dom.leading:(this.dom.leading=new n.Number(t),this.rebuild())},lines:function(){var t=(this.textPath&&this.textPath()||this).node,e=n.utils.map(n.utils.filterSVGElements(t.childNodes),function(t){return n.adopt(t)});return new n.Set(e)},rebuild:function(t){if("boolean"==typeof t&&(this._rebuild=t),this._rebuild){var e=this,r=0,i=this.dom.leading*new n.Number(this.attr("font-size"));this.lines().each(function(){this.dom.newLined&&(e.textPath()||this.attr("x",e.attr("x")),"\n"==this.text()?r+=i:(this.attr("dy",i+r),r=0))}),this.fire("rebuild")}return this},build:function(t){return this._build=!!t,this},setData:function(t){return this.dom=t,this.dom.leading=new n.Number(t.leading||1.3),this}},construct:{text:function(t){return this.put(new n.Text).text(t)},plain:function(t){return this.put(new n.Text).plain(t)}}}),n.Tspan=n.invent({create:"tspan",inherit:n.Shape,extend:{text:function(t){return null==t?this.node.textContent+(this.dom.newLined?"\n":""):("function"==typeof t?t.call(this,this):this.plain(t),this)},dx:function(t){return this.attr("dx",t)},dy:function(t){return this.attr("dy",t)},newLine:function(){var t=this.parent(n.Text);return this.dom.newLined=!0,this.dy(t.dom.leading*t.attr("font-size")).attr("x",t.x())}}}),n.extend(n.Text,n.Tspan,{plain:function(t){return!1===this._build&&this.clear(),this.node.appendChild(e.createTextNode(t)),this},tspan:function(t){var e=(this.textPath&&this.textPath()||this).node,r=new n.Tspan;return!1===this._build&&this.clear(),e.appendChild(r.node),r.text(t)},clear:function(){for(var t=(this.textPath&&this.textPath()||this).node;t.hasChildNodes();)t.removeChild(t.lastChild);return this},length:function(){return this.node.getComputedTextLength()}}),n.TextPath=n.invent({create:"textPath",inherit:n.Parent,parent:n.Text,construct:{morphArray:n.PathArray,path:function(t){for(var e=new n.TextPath,r=this.doc().defs().path(t);this.node.hasChildNodes();)e.node.appendChild(this.node.firstChild);return this.node.appendChild(e.node),e.attr("href","#"+r,n.xlink),this},array:function(){var t=this.track();return t?t.array():null},plot:function(t){var e=this.track(),n=null;return e&&(n=e.plot(t)),null==t?n:this},track:function(){var t=this.textPath();if(t)return t.reference("href")},textPath:function(){if(this.node.firstChild&&"textPath"==this.node.firstChild.nodeName)return n.adopt(this.node.firstChild)}}}),n.Nested=n.invent({create:function(){this.constructor.call(this,n.create("svg")),this.style("overflow","visible")},inherit:n.Container,construct:{nested:function(){return this.put(new n.Nested)}}}),n.A=n.invent({create:"a",inherit:n.Container,extend:{to:function(t){return this.attr("href",t,n.xlink)},show:function(t){return this.attr("show",t,n.xlink)},target:function(t){return this.attr("target",t)}},construct:{link:function(t){return this.put(new n.A).to(t)}}}),n.extend(n.Element,{linkTo:function(t){var e=new n.A;return"function"==typeof t?t.call(e,e):e.to(t),this.parent().put(e).put(this)}}),n.Marker=n.invent({create:"marker",inherit:n.Container,extend:{width:function(t){return this.attr("markerWidth",t)},height:function(t){return this.attr("markerHeight",t)},ref:function(t,e){return this.attr("refX",t).attr("refY",e)},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},toString:function(){return"url(#"+this.id()+")"}},construct:{marker:function(t,e,n){return this.defs().marker(t,e,n)}}}),n.extend(n.Defs,{marker:function(t,e,r){return this.put(new n.Marker).size(t,e).ref(t/2,e/2).viewbox(0,0,t,e).attr("orient","auto").update(r)}}),n.extend(n.Line,n.Polyline,n.Polygon,n.Path,{marker:function(t,e,r,i){var s=["marker"];return"all"!=t&&s.push(t),s=s.join("-"),t=arguments[1]instanceof n.Marker?arguments[1]:this.doc().marker(e,r,i),this.attr(s,t)}});var l={stroke:["color","width","opacity","linecap","linejoin","miterlimit","dasharray","dashoffset"],fill:["color","opacity","rule"],prefix:function(t,e){return"color"==e?t:t+"-"+e}};function o(t,e,r,i){return r+i.replace(n.regex.dots," .")}function h(t){return t.toLowerCase().replace(/-(.)/g,function(t,e){return e.toUpperCase()})}function u(t){return t.charAt(0).toUpperCase()+t.slice(1)}function c(t){var e=t.toString(16);return 1==e.length?"0"+e:e}function m(t,e,n){if(null==e||null==n){var r=t.bbox();null==e?e=r.width/r.height*n:null==n&&(n=r.height/r.width*e)}return{width:e,height:n}}function p(t,e,n){return{x:e*t.a+n*t.c+0,y:e*t.b+n*t.d+0}}function d(t){return{a:t[0],b:t[1],c:t[2],d:t[3],e:t[4],f:t[5]}}function f(t,e){t.cx=null==t.cx?e.bbox().cx:t.cx,t.cy=null==t.cy?e.bbox().cy:t.cy}function x(t){return null==t.x&&(t.x=0,t.y=0,t.width=0,t.height=0),t.w=t.width,t.h=t.height,t.x2=t.x+t.width,t.y2=t.y+t.height,t.cx=t.x+t.width/2,t.cy=t.y+t.height/2,t}["fill","stroke"].forEach(function(t){var e,r={};r[t]=function(r){if(void 0===r)return this;if("string"==typeof r||n.Color.isRgb(r)||r&&"function"==typeof r.fill)this.attr(t,r);else for(e=l[t].length-1;e>=0;e--)null!=r[l[t][e]]&&this.attr(l.prefix(t,l[t][e]),r[l[t][e]]);return this},n.extend(n.Element,n.FX,r)}),n.extend(n.Element,n.FX,{rotate:function(t,e,n){return this.transform({rotation:t,cx:e,cy:n})},skew:function(t,e,n,r){return 1==arguments.length||3==arguments.length?this.transform({skew:t,cx:e,cy:n}):this.transform({skewX:t,skewY:e,cx:n,cy:r})},scale:function(t,e,n,r){return 1==arguments.length||3==arguments.length?this.transform({scale:t,cx:e,cy:n}):this.transform({scaleX:t,scaleY:e,cx:n,cy:r})},translate:function(t,e){return this.transform({x:t,y:e})},flip:function(t,e){return e="number"==typeof t?t:e,this.transform({flip:t||"both",offset:e})},matrix:function(t){return this.attr("transform",new n.Matrix(6==arguments.length?[].slice.call(arguments):t))},opacity:function(t){return this.attr("opacity",t)},dx:function(t){return this.x(new n.Number(t).plus(this instanceof n.FX?0:this.x()),!0)},dy:function(t){return this.y(new n.Number(t).plus(this instanceof n.FX?0:this.y()),!0)},dmove:function(t,e){return this.dx(t).dy(e)}}),n.extend(n.Rect,n.Ellipse,n.Circle,n.Gradient,n.FX,{radius:function(t,e){var r=(this._target||this).type;return"radial"==r||"circle"==r?this.attr("r",new n.Number(t)):this.rx(t).ry(null==e?t:e)}}),n.extend(n.Path,{length:function(){return this.node.getTotalLength()},pointAt:function(t){return this.node.getPointAtLength(t)}}),n.extend(n.Parent,n.Text,n.Tspan,n.FX,{font:function(t,e){if("object"==typeof t)for(e in t)this.font(e,t[e]);return"leading"==t?this.leading(e):"anchor"==t?this.attr("text-anchor",e):"size"==t||"family"==t||"weight"==t||"stretch"==t||"variant"==t||"style"==t?this.attr("font-"+t,e):this.attr(t,e)}}),n.Set=n.invent({create:function(t){Array.isArray(t)?this.members=t:this.clear()},extend:{add:function(){var t,e,n=[].slice.call(arguments);for(t=0,e=n.length;t<e;t++)this.members.push(n[t]);return this},remove:function(t){var e=this.index(t);return e>-1&&this.members.splice(e,1),this},each:function(t){for(var e=0,n=this.members.length;e<n;e++)t.apply(this.members[e],[e,this.members]);return this},clear:function(){return this.members=[],this},length:function(){return this.members.length},has:function(t){return this.index(t)>=0},index:function(t){return this.members.indexOf(t)},get:function(t){return this.members[t]},first:function(){return this.get(0)},last:function(){return this.get(this.members.length-1)},valueOf:function(){return this.members},bbox:function(){if(0==this.members.length)return new n.RBox;var t=this.members[0].rbox(this.members[0].doc());return this.each(function(){t=t.merge(this.rbox(this.doc()))}),t}},construct:{set:function(t){return new n.Set(t)}}}),n.FX.Set=n.invent({create:function(t){this.set=t}}),n.Set.inherit=function(){var t=[];for(var e in n.Shape.prototype)"function"==typeof n.Shape.prototype[e]&&"function"!=typeof n.Set.prototype[e]&&t.push(e);for(var e in t.forEach(function(t){n.Set.prototype[t]=function(){for(var e=0,r=this.members.length;e<r;e++)this.members[e]&&"function"==typeof this.members[e][t]&&this.members[e][t].apply(this.members[e],arguments);return"animate"==t?this.fx||(this.fx=new n.FX.Set(this)):this}}),t=[],n.FX.prototype)"function"==typeof n.FX.prototype[e]&&"function"!=typeof n.FX.Set.prototype[e]&&t.push(e);t.forEach(function(t){n.FX.Set.prototype[t]=function(){for(var e=0,n=this.set.members.length;e<n;e++)this.set.members[e].fx[t].apply(this.set.members[e].fx,arguments);return this}})},n.extend(n.Element,{data:function(t,e,n){if("object"==typeof t)for(e in t)this.data(e,t[e]);else if(arguments.length<2)try{return JSON.parse(this.attr("data-"+t))}catch(e){return this.attr("data-"+t)}else this.attr("data-"+t,null===e?null:!0===n||"string"==typeof e||"number"==typeof e?e:JSON.stringify(e));return this}}),n.extend(n.Element,{remember:function(t,e){if("object"==typeof arguments[0])for(var e in t)this.remember(e,t[e]);else{if(1==arguments.length)return this.memory()[t];this.memory()[t]=e}return this},forget:function(){if(0==arguments.length)this._memory={};else for(var t=arguments.length-1;t>=0;t--)delete this.memory()[arguments[t]];return this},memory:function(){return this._memory||(this._memory={})}}),n.get=function(t){var r=e.getElementById(function(t){var e=t.toString().match(n.regex.reference);if(e)return e[1]}(t)||t);return n.adopt(r)},n.select=function(t,r){return new n.Set(n.utils.map((r||e).querySelectorAll(t),function(t){return n.adopt(t)}))},n.extend(n.Parent,{select:function(t){return n.select(t,this.node)}});var v="abcdef".split("");if("function"!=typeof t.CustomEvent){var y=function(t,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var r=e.createEvent("CustomEvent");return r.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),r};y.prototype=t.Event.prototype,t.CustomEvent=y}return function(e){for(var n=0,r=["moz","webkit"],i=0;i<r.length&&!t.requestAnimationFrame;++i)e.requestAnimationFrame=e[r[i]+"RequestAnimationFrame"],e.cancelAnimationFrame=e[r[i]+"CancelAnimationFrame"]||e[r[i]+"CancelRequestAnimationFrame"];e.requestAnimationFrame=e.requestAnimationFrame||function(t){var r=(new Date).getTime(),i=Math.max(0,16-(r-n)),s=e.setTimeout(function(){t(r+i)},i);return n=r+i,s},e.cancelAnimationFrame=e.cancelAnimationFrame||e.clearTimeout}(t),n}(i,i.document)}.call(e,n,e,t))||(t.exports=r)}("undefined"!=typeof window?window:this)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i=n(0),s=500,a=null,l=null,o=0,h=0;function u(t,e){t.addEventListener("mouseover",function(){return function(t,e){if(null!=a)return;a=window.setTimeout(function(){var n=e(t);null!=n&&function(t,e){m();var n=h,r=function(){var t=document.body,e=document.documentElement;return Math.max(t.scrollHeight,t.offsetHeight,e.clientHeight,e.scrollHeight,e.offsetHeight)}();r-(n+e.offsetHeight)<10&&(n=r-(e.offsetHeight+10));n<10&&(n=10);l=e,document.body.appendChild(l),l.style.left=o+"px",l.style.top=n+"px",l.addEventListener("mouseout",function(e){c(t,e)})}(t,n)},s)}(t,e)}),t.addEventListener("mouseout",function(e){return c(t,e)})}function c(t,e){var n=e.toElement||e.relatedTarget;n!=t&&n!=l&&(r.findAncestorP(n,function(e){return e==t})||r.findAncestorP(n,function(t){return t==l})||(window.clearTimeout(a),a=null,m()))}function m(){null!=l&&(document.body.removeChild(l),l=null)}function p(t){if(null==t.relOp)return null;var e=new DOMParser,n=null!=t.relOp.actualRows?"<tr>\n            <th>Actual Number of Rows</th>\n            <td>"+t.relOp.actualRows+"</td>\n        </tr>":"",r=null!=t.relOp.actualRowsRead?"<tr>\n            <th>Number of Rows Read</th>\n            <td>"+t.relOp.actualRowsRead+"</td>\n        </tr>":"";return e.parseFromString('\n        <div class="qp-tt"><table><tbody>\n        '+n+"\n        "+r+"\n        <tr>\n            <th>Estimated Number of Rows</th>\n            <td>"+t.relOp.estimatedRows+"</td>\n        </tr>\n        <tr>\n            <th>Estimated Row Size</th>\n            <td>"+d(t.relOp.estimatedRowSize)+"</td>\n        </tr>\n        <tr>\n            <th>Estimated Data Size</th>\n            <td>"+d(t.relOp.estimatedDataSize)+"</td>\n        </tr>\n        </tbody></tabke></div>\n    ","text/html").getElementsByClassName("qp-tt")[0]}function d(t){if(t>=1e4){var e=t/1024;if(e>=1e4){var n=e/1024;return Math.round(n)+" MB"}return Math.round(e)+" KB"}return t+" B"}e.initTooltip=function(t){!function(t){t.querySelector(".qp-root").className+=" qp-noCssTooltip"}(t),document.onmousemove=function(t){o=t.pageX,h=t.pageY};for(var e=t.querySelectorAll(".qp-node"),n=0;n<e.length;n++)u(e[n],function(t){return t.querySelector(".qp-tt").cloneNode(!0)});var r=t.getElementsByTagName("polyline"),s=function(t){var e=new i.Line(r[t]);u(e.element,function(t){return p(e)})};for(n=0;n<r.length;n++)s(n)},e.buildLineTooltip=p,e.convertSize=d},function(t,e){t.exports='<?xml version="1.0" encoding="utf-8"?>\r\n<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"\r\n  xmlns:msxsl="urn:schemas-microsoft-com:xslt"\r\n  xmlns:exslt="http://exslt.org/common"\r\n  xmlns:s="http://schemas.microsoft.com/sqlserver/2004/07/showplan"\r\n  exclude-result-prefixes="msxsl s xsl">\r\n  <xsl:output method="html" indent="no" omit-xml-declaration="yes" />\r\n\r\n  \x3c!-- Disable built-in recursive processing templates --\x3e\r\n  <xsl:template match="*|/|text()|@*" mode="NodeLabel" />\r\n  <xsl:template match="*|/|text()|@*" mode="NodeLabel2" />\r\n  <xsl:template match="*|/|text()|@*" mode="ToolTipDescription" />\r\n  <xsl:template match="*|/|text()|@*" mode="ToolTipDetails" />\r\n\r\n  \x3c!-- Default template --\x3e\r\n  <xsl:template match="/">\r\n    <xsl:apply-templates select="s:ShowPlanXML" />\r\n  </xsl:template>\r\n\r\n  \x3c!-- Outermost div that contains all statement plans. --\x3e\r\n  <xsl:template match="s:ShowPlanXML">\r\n    <div class="qp-root">\r\n      <xsl:apply-templates select="s:BatchSequence/s:Batch/s:Statements/*" mode="Statement" />  \r\n    </div>\r\n  </xsl:template>\r\n\r\n  <xsl:template match="s:BatchSequence/s:Batch/s:Statements/*" mode="Statement">\r\n    <div class="qp-statement-header">\r\n      <div class="qp-statement-header-row">\r\n        <div><xsl:value-of select="@StatementText" /></div>\r\n      </div>\r\n      <xsl:apply-templates select="s:QueryPlan/s:MissingIndexes/s:MissingIndexGroup" mode="MissingIndex" />\r\n    </div>\r\n    <xsl:apply-templates select="." mode="QpTr" />\r\n  </xsl:template>\r\n\r\n  <xsl:template match="s:MissingIndexGroup" mode="MissingIndex">\r\n    <div class="qp-statement-header-row missing-index">\r\n      <div>Missing Index (Impact <xsl:value-of select="@Impact" />): <xsl:apply-templates select="s:MissingIndex" mode="CreateIndex" /></div>\r\n    </div>\r\n  </xsl:template>\r\n\r\n  \x3c!-- This template produces the "CREATE INDEX ..." text --\x3e\r\n  <xsl:template match="s:MissingIndex" mode="CreateIndex">CREATE NONCLUSTERED INDEX [&lt;Name of Missing Index, sysname,>] ON <xsl:value-of select="@Schema" />.<xsl:value-of select="@Table" /> (<xsl:for-each select="s:ColumnGroup[@Usage!=\'INCLUDE\']/s:Column">\r\n  <xsl:value-of select="@Name" />\r\n  <xsl:if test="position() != last()">,</xsl:if>\r\n</xsl:for-each>)\r\n<xsl:if test="s:ColumnGroup[@Usage=\'INCLUDE\']"> INCLUDE (<xsl:for-each select="s:ColumnGroup[@Usage=\'INCLUDE\']/s:Column">\r\n  <xsl:value-of select="@Name" />\r\n  <xsl:if test="position() != last()">,</xsl:if>\r\n</xsl:for-each>)</xsl:if>\r\n  </xsl:template>\r\n  \r\n  \x3c!-- Each node has a parent qp-tr element which contains / positions the node and its children --\x3e\r\n  <xsl:template match="s:RelOp|s:StmtSimple|s:StmtUseDb|s:StmtCond|s:StmtCursor|s:Operation" mode="QpTr">\r\n    <div class="qp-tr">\r\n      <xsl:if test="@StatementId">\r\n        <xsl:attribute name="data-statement-id"><xsl:value-of select="@StatementId" /></xsl:attribute>\r\n      </xsl:if>\r\n      <div>\r\n        <div class="qp-node-outer">\r\n          <div class="qp-node">\r\n            <xsl:if test="@NodeId">\r\n              <xsl:attribute name="data-node-id"><xsl:value-of select="@NodeId" /></xsl:attribute>\r\n            </xsl:if>\r\n            <xsl:call-template name="NodeIcon" />\r\n            <div><xsl:apply-templates select="." mode="NodeLabel" /></div>\r\n            <xsl:apply-templates select="." mode="NodeLabel2" />\r\n            <xsl:apply-templates select="." mode="NodeCostLabel" />\r\n            <xsl:call-template name="ToolTip" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div><xsl:apply-templates select="*/*" mode="QpTr" /></div>\r\n    </div>\r\n  </xsl:template>\r\n\r\n  \x3c!-- Writes the tool tip --\x3e\r\n  <xsl:template name="ToolTip">\r\n    <div class="qp-tt">\r\n      <div class="qp-tt-header"><xsl:apply-templates select="." mode="NodeLabel" /></div>\r\n      <div><xsl:apply-templates select="." mode="ToolTipDescription" /></div>\r\n      <xsl:call-template name="ToolTipGrid" />\r\n      <xsl:apply-templates select="* | @* | */* | */@*" mode="ToolTipDetails" />\r\n      <xsl:choose>\r\n        <xsl:when test="s:QueryPlan">\r\n          <xsl:apply-templates select="s:QueryPlan" mode="QueryPlanToolTipDetails" />\r\n        </xsl:when>\r\n        <xsl:otherwise>\r\n          <xsl:call-template name="ToolTipDetails" />\r\n        </xsl:otherwise>\r\n      </xsl:choose>\r\n    </div>\r\n  </xsl:template>\r\n\r\n  <xsl:template match="s:QueryPlan" mode="QueryPlanToolTipDetails">\r\n    <xsl:call-template name="ToolTipDetails" />\r\n  </xsl:template>\r\n\r\n  \x3c!-- Writes the grid of node properties to the tool tip --\x3e\r\n  <xsl:template name="ToolTipGrid">\r\n    <table>\r\n    \r\n      <xsl:call-template name="ToolTipRow">\r\n        <xsl:with-param name="Condition" select="s:QueryPlan/@CachedPlanSize" />\r\n        <xsl:with-param name="Label">Cached plan size</xsl:with-param>\r\n        <xsl:with-param name="Value" select="concat(s:QueryPlan/@CachedPlanSize, \' KB\')" />\r\n      </xsl:call-template>\r\n\r\n      <xsl:call-template name="ToolTipRow">\r\n        <xsl:with-param name="Condition" select="@PhysicalOp" />\r\n        <xsl:with-param name="Label">Physical Operation</xsl:with-param>\r\n        <xsl:with-param name="Value">          \r\n          <xsl:apply-templates select="." mode="PhysicalOperation" />\r\n        </xsl:with-param>\r\n      </xsl:call-template>\r\n\r\n      <xsl:call-template name="ToolTipRow">\r\n        <xsl:with-param name="Condition" select="@LogicalOp" />\r\n        <xsl:with-param name="Label">Logical Operation</xsl:with-param>\r\n        <xsl:with-param name="Value">          \r\n          <xsl:apply-templates select="." mode="LogicalOperation" />\r\n        </xsl:with-param>\r\n      </xsl:call-template>\r\n\r\n      <xsl:call-template name="ToolTipRow">\r\n        <xsl:with-param name="Condition" select="s:RunTimeInformation/s:RunTimeCountersPerThread/@ActualJoinType" />\r\n        <xsl:with-param name="Label">Actual Join Type</xsl:with-param>\r\n        <xsl:with-param name="Value">\r\n          <xsl:value-of select="s:RunTimeInformation/s:RunTimeCountersPerThread/@ActualJoinType" />\r\n        </xsl:with-param>\r\n      </xsl:call-template>\r\n\r\n      <xsl:call-template name="ToolTipRow">\r\n        <xsl:with-param name="Condition" select="s:RunTimeInformation" />\r\n        <xsl:with-param name="Label">Actual Execution Mode</xsl:with-param>\r\n        <xsl:with-param name="Value">\r\n          <xsl:choose>\r\n            <xsl:when test="s:RunTimeInformation/s:RunTimeCountersPerThread/@ActualExecutionMode">\r\n              <xsl:value-of select="s:RunTimeInformation/s:RunTimeCountersPerThread/@ActualExecutionMode" />\r\n            </xsl:when>\r\n            <xsl:otherwise>Row</xsl:otherwise>\r\n          </xsl:choose>\r\n        </xsl:with-param>\r\n      </xsl:call-template>\r\n\r\n      <xsl:call-template name="ToolTipRow">\r\n        <xsl:with-param name="Label">Estimated Join Type</xsl:with-param>\r\n        <xsl:with-param name="Value" select="@EstimatedJoinType" />\r\n      </xsl:call-template>\r\n\r\n      <xsl:call-template name="ToolTipRow">\r\n        <xsl:with-param name="Condition" select="@IsAdaptive" />\r\n        <xsl:with-param name="Label">Is Adaptive</xsl:with-param>\r\n        <xsl:with-param name="Value">\r\n          <xsl:choose>\r\n            <xsl:when test="@IsAdaptive = \'true\'">True</xsl:when>\r\n            <xsl:otherwise>False</xsl:otherwise>\r\n          </xsl:choose>\r\n        </xsl:with-param>\r\n      </xsl:call-template>\r\n\r\n      <xsl:call-template name="ToolTipRow">\r\n        <xsl:with-param name="Label">Estimated Execution Mode</xsl:with-param>\r\n        <xsl:with-param name="Value" select="@EstimatedExecutionMode" />\r\n      </xsl:call-template>\r\n\r\n      <xsl:call-template name="ToolTipRow">\r\n        <xsl:with-param name="Label">Storage</xsl:with-param>\r\n        <xsl:with-param name="Value" select="s:IndexScan/@Storage|s:TableScan/@Storage" />\r\n      </xsl:call-template>\r\n\r\n      <xsl:call-template name="ToolTipRow">\r\n        <xsl:with-param name="Label">Number of Rows Read</xsl:with-param>\r\n        <xsl:with-param name="Value" select="sum(s:RunTimeInformation/s:RunTimeCountersPerThread/@ActualRowsRead)" />\r\n      </xsl:call-template>\r\n\r\n      <xsl:call-template name="ToolTipRow">\r\n        <xsl:with-param name="Condition" select="@AdaptiveThresholdRows" />\r\n        <xsl:with-param name="Label">Adaptive Threshold Rows</xsl:with-param>\r\n        <xsl:with-param name="Value">\r\n          <xsl:value-of select="@AdaptiveThresholdRows" />\r\n        </xsl:with-param>\r\n      </xsl:call-template>\r\n      \r\n      <xsl:call-template name="ToolTipRow">\r\n        <xsl:with-param name="Condition" select="s:RunTimeInformation" />\r\n        <xsl:with-param name="Label">Actual Number of Rows</xsl:with-param>\r\n        <xsl:with-param name="Value" select="sum(s:RunTimeInformation/s:RunTimeCountersPerThread/@ActualRows)" />\r\n      </xsl:call-template>\r\n\r\n      <xsl:call-template name="ToolTipRow">\r\n        <xsl:with-param name="Condition" select="s:RunTimeInformation" />\r\n        <xsl:with-param name="Label">Actual Number of Batches</xsl:with-param>\r\n        <xsl:with-param name="Value" select="sum(s:RunTimeInformation/s:RunTimeCountersPerThread/@Batches)" />\r\n      </xsl:call-template>\r\n\r\n      <xsl:call-template name="ToolTipRow">\r\n        <xsl:with-param name="Label">Estimated Operator Cost</xsl:with-param>\r\n        <xsl:with-param name="Value">\r\n          <xsl:variable name="EstimatedOperatorCost">\r\n            <xsl:call-template name="EstimatedOperatorCost" />\r\n          </xsl:variable>\r\n          <xsl:variable name="TotalCost">\r\n            <xsl:value-of select="ancestor::s:QueryPlan/s:RelOp/@EstimatedTotalSubtreeCost" />\r\n          </xsl:variable>\r\n          <xsl:variable name="Percentage">\r\n            <xsl:choose>\r\n              <xsl:when test="$TotalCost > 0"><xsl:value-of select="number($EstimatedOperatorCost) div number($TotalCost)" /></xsl:when>\r\n              <xsl:otherwise>0</xsl:otherwise>\r\n            </xsl:choose>\r\n          </xsl:variable>\r\n          <xsl:call-template name="round">\r\n            <xsl:with-param name="value" select="$EstimatedOperatorCost" />\r\n          </xsl:call-template> (<xsl:value-of select="format-number($Percentage, \'0%\')" />)</xsl:with-param>\r\n      </xsl:call-template>\r\n\r\n      <xsl:call-template name="ToolTipRow">\r\n        <xsl:with-param name="Condition" select="@EstimateIO" />\r\n        <xsl:with-param name="Label">Estimated I/O Cost</xsl:with-param>\r\n        <xsl:with-param name="Value">\r\n          <xsl:call-template name="round">\r\n            <xsl:with-param name="value" select="@EstimateIO" />\r\n          </xsl:call-template>\r\n        </xsl:with-param>\r\n      </xsl:call-template>\r\n\r\n      <xsl:call-template name="ToolTipRow">\r\n        <xsl:with-param name="Condition" select="@EstimateCPU" />\r\n        <xsl:with-param name="Label">Estimated CPU Cost</xsl:with-param>\r\n        <xsl:with-param name="Value">\r\n          <xsl:call-template name="round">\r\n            <xsl:with-param name="value" select="@EstimateCPU" />\r\n          </xsl:call-template>\r\n        </xsl:with-param>\r\n      </xsl:call-template>\r\n\r\n      <xsl:call-template name="ToolTipRow">\r\n        <xsl:with-param name="Condition" select="@StatementSubTreeCost | @EstimatedTotalSubtreeCost" />\r\n        <xsl:with-param name="Label">Estimated Subtree Cost</xsl:with-param>\r\n        <xsl:with-param name="Value">\r\n          <xsl:call-template name="round">\r\n            <xsl:with-param name="value" select="@StatementSubTreeCost | @EstimatedTotalSubtreeCost" />\r\n          </xsl:call-template>\r\n        </xsl:with-param>\r\n      </xsl:call-template>\r\n\r\n      <xsl:call-template name="ToolTipRow">\r\n        <xsl:with-param name="Label">Estimated Number of Executions</xsl:with-param>\r\n        <xsl:with-param name="Value" select="@EstimateRebinds + 1" />\r\n      </xsl:call-template>\r\n\r\n      <xsl:call-template name="ToolTipRow">\r\n        <xsl:with-param name="Label">Number of Executions</xsl:with-param>\r\n        <xsl:with-param name="Value" select="sum(s:RunTimeInformation/s:RunTimeCountersPerThread/@ActualExecutions)" />\r\n      </xsl:call-template>\r\n\r\n      <xsl:call-template name="ToolTipRow">\r\n        <xsl:with-param name="Label">Degree of Parallelism</xsl:with-param>\r\n        <xsl:with-param name="Value" select="s:QueryPlan/@DegreeOfParallelism" />\r\n      </xsl:call-template>\r\n\r\n      <xsl:call-template name="ToolTipRow">\r\n        <xsl:with-param name="Label">Memory Grant</xsl:with-param>\r\n        <xsl:with-param name="Value" select="s:QueryPlan/@MemoryGrant" />\r\n      </xsl:call-template>\r\n\r\n      <xsl:call-template name="ToolTipRow">\r\n        <xsl:with-param name="Label">Estimated Number of Rows to be Read</xsl:with-param>\r\n        <xsl:with-param name="Value" select="@EstimatedRowsRead" />\r\n      </xsl:call-template>\r\n\r\n      <xsl:call-template name="ToolTipRow">\r\n        <xsl:with-param name="Label">Estimated Number of Rows</xsl:with-param>\r\n        <xsl:with-param name="Value" select="@StatementEstRows | @EstimateRows" />\r\n      </xsl:call-template>\r\n\r\n      <xsl:call-template name="ToolTipRow">\r\n        <xsl:with-param name="Condition" select="@AvgRowSize" />\r\n        <xsl:with-param name="Label">Estimated Row Size</xsl:with-param>\r\n        <xsl:with-param name="Value" select="concat(@AvgRowSize, \' B\')" />\r\n      </xsl:call-template>\r\n\r\n      <xsl:call-template name="ToolTipRow">\r\n        <xsl:with-param name="Condition" select="s:RunTimeInformation" />\r\n        <xsl:with-param name="Label">Actual Rebinds</xsl:with-param>\r\n        <xsl:with-param name="Value" select="sum(s:RunTimeInformation/s:RunTimeCountersPerThread/@ActualRebinds)" />\r\n      </xsl:call-template>\r\n\r\n      <xsl:call-template name="ToolTipRow">\r\n        <xsl:with-param name="Condition" select="s:RunTimeInformation" />\r\n        <xsl:with-param name="Label">Actual Rewinds</xsl:with-param>\r\n        <xsl:with-param name="Value" select="sum(s:RunTimeInformation/s:RunTimeCountersPerThread/@ActualRewinds)" />\r\n      </xsl:call-template>\r\n\r\n      <xsl:call-template name="ToolTipRow">\r\n        <xsl:with-param name="Condition" select="s:IndexScan/@Ordered" />\r\n        <xsl:with-param name="Label">Ordered</xsl:with-param>\r\n        <xsl:with-param name="Value">\r\n          <xsl:choose>\r\n            <xsl:when test="s:IndexScan/@Ordered = \'true\'">True</xsl:when>\r\n            <xsl:when test="s:IndexScan/@Ordered = 1">True</xsl:when>\r\n            <xsl:otherwise>False</xsl:otherwise>\r\n          </xsl:choose>\r\n        </xsl:with-param>\r\n      </xsl:call-template>\r\n\r\n      <xsl:call-template name="ToolTipRow">\r\n        <xsl:with-param name="Label">Partitioning Type</xsl:with-param>\r\n        <xsl:with-param name="Value" select="s:Parallelism/@PartitioningType" />\r\n      </xsl:call-template>\r\n\r\n      <xsl:call-template name="ToolTipRow">\r\n        <xsl:with-param name="Label">Node ID</xsl:with-param>\r\n        <xsl:with-param name="Value" select="@NodeId" />\r\n      </xsl:call-template>\r\n\r\n    </table>\r\n  </xsl:template>\r\n\r\n  \x3c!-- Gets the Physical Operation --\x3e\r\n  <xsl:template match="s:RelOp" mode="PhysicalOperation">\r\n    <xsl:value-of select="@PhysicalOp" />\r\n  </xsl:template>\r\n  <xsl:template match="s:RelOp[s:IndexScan/@Lookup]" mode="PhysicalOperation">Key Lookup</xsl:template>\r\n  \r\n  \x3c!-- Gets the Logical Operation --\x3e\r\n  <xsl:template match="s:RelOp" mode="LogicalOperation">\r\n    <xsl:value-of select="@LogicalOp" />\r\n  </xsl:template>\r\n  <xsl:template match="s:RelOp[s:IndexScan/@Lookup]" mode="LogicalOperation">Key Lookup</xsl:template>\r\n  \r\n  \x3c!-- Calculates the estimated operator cost. --\x3e\r\n  <xsl:template name="EstimatedOperatorCost">\r\n    <xsl:variable name="EstimatedTotalSubtreeCost">\r\n      <xsl:call-template name="convertSciToNumString">\r\n        <xsl:with-param name="inputVal">\r\n          <xsl:choose>\r\n            <xsl:when test="@EstimatedTotalSubtreeCost"><xsl:value-of select="@EstimatedTotalSubtreeCost" /></xsl:when>\r\n            <xsl:otherwise>0</xsl:otherwise>\r\n          </xsl:choose>\r\n        </xsl:with-param>\r\n      </xsl:call-template>\r\n    </xsl:variable>\r\n    <xsl:variable name="ChildEstimatedSubtreeCost">\r\n      <xsl:for-each select="*/s:RelOp">\r\n        <value>\r\n          <xsl:call-template name="convertSciToNumString">\r\n            <xsl:with-param name="inputVal" select="@EstimatedTotalSubtreeCost" />\r\n          </xsl:call-template>\r\n        </value>\r\n      </xsl:for-each>\r\n    </xsl:variable>\r\n    <xsl:variable name="TotalChildEstimatedSubtreeCost">\r\n      <xsl:choose>\r\n        <xsl:when test="function-available(\'exslt:node-set\')">\r\n          <xsl:value-of select=\'sum(exslt:node-set($ChildEstimatedSubtreeCost)/value)\' />\r\n        </xsl:when>\r\n        <xsl:when test="function-available(\'msxsl:node-set\')">\r\n          <xsl:value-of select=\'sum(msxsl:node-set($ChildEstimatedSubtreeCost)/value)\' />\r\n        </xsl:when>\r\n      </xsl:choose>\r\n    </xsl:variable>\r\n    <xsl:choose>\r\n      <xsl:when test="number($EstimatedTotalSubtreeCost) - number($TotalChildEstimatedSubtreeCost) &lt; 0">0</xsl:when>\r\n      <xsl:otherwise>\r\n        <xsl:value-of select="number($EstimatedTotalSubtreeCost) - number($TotalChildEstimatedSubtreeCost)" />\r\n      </xsl:otherwise>\r\n    </xsl:choose>\r\n  </xsl:template>\r\n\r\n  \x3c!-- Renders a row in the tool tip details table. --\x3e\r\n  <xsl:template name="ToolTipRow">\r\n    <xsl:param name="Label" />\r\n    <xsl:param name="Value" />\r\n    <xsl:param name="Condition" select="$Value" />\r\n    <xsl:if test="$Condition">\r\n      <tr>\r\n        <th><xsl:value-of select="$Label" /></th>\r\n        <td><xsl:value-of select="$Value" /></td>\r\n      </tr>\r\n    </xsl:if>\r\n  </xsl:template>\r\n\r\n  \x3c!-- Prints the name of an object. --\x3e\r\n  <xsl:template match="s:Object | s:ColumnReference" mode="ObjectName">\r\n    <xsl:param name="ExcludeDatabaseName" select="false()" />\r\n    <xsl:choose>\r\n      <xsl:when test="$ExcludeDatabaseName">\r\n        <xsl:for-each select="@Table | @Index | @Column | @Alias">\r\n          <xsl:value-of select="." />\r\n          <xsl:if test="position() != last()">.</xsl:if>\r\n        </xsl:for-each>\r\n      </xsl:when>\r\n      <xsl:otherwise>\r\n        <xsl:for-each select="@Database | @Schema | @Table | @Index | @Column | @Alias">\r\n          <xsl:value-of select="." />\r\n          <xsl:if test="position() != last()">.</xsl:if>\r\n        </xsl:for-each>\r\n      </xsl:otherwise>\r\n    </xsl:choose>\r\n  </xsl:template>\r\n  \r\n  <xsl:template match="s:Object | s:ColumnReference" mode="ObjectNameNoAlias">\r\n    <xsl:for-each select="@Database | @Schema | @Table | @Index | @Column">\r\n      <xsl:value-of select="." />\r\n      <xsl:if test="position() != last()">.</xsl:if>\r\n    </xsl:for-each>\r\n  </xsl:template>\r\n\r\n  \x3c!-- Displays the node cost label. --\x3e    \r\n  <xsl:template match="s:RelOp" mode="NodeCostLabel">\r\n    <xsl:variable name="EstimatedOperatorCost"><xsl:call-template name="EstimatedOperatorCost" /></xsl:variable>\r\n    <xsl:variable name="TotalCost"><xsl:value-of select="ancestor::s:QueryPlan/s:RelOp/@EstimatedTotalSubtreeCost" /></xsl:variable>\r\n    <div>Cost: <xsl:value-of select="format-number(number($EstimatedOperatorCost) div number($TotalCost), \'0%\')" /></div>\r\n  </xsl:template>\r\n\r\n  \x3c!-- Dont show the node cost for statements. --\x3e\r\n  <xsl:template match="s:StmtSimple|s:StmtUseDb" mode="NodeCostLabel" />\r\n\r\n  <xsl:template match="s:StmtCursor|s:Operation|s:StmtCond" mode="NodeCostLabel">\r\n    <div>Cost: 0%</div>\r\n  </xsl:template>\r\n\r\n  \x3c!-- \r\n  ================================\r\n  Tool tip detail sections\r\n  ================================\r\n  The following section contains templates used for writing the detail sections at the bottom of the tool tip,\r\n  for example listing outputs, or information about the object to which an operator applies.\r\n  --\x3e\r\n\r\n  <xsl:template match="*/s:Object" mode="ToolTipDetails">\r\n    \x3c!-- TODO: Make sure this works all the time --\x3e\r\n    <div class="qp-bold">Object</div>\r\n    <div><xsl:apply-templates select="." mode="ObjectName" /></div>\r\n  </xsl:template>\r\n\r\n  <xsl:template match="s:SetPredicate[s:ScalarOperator/@ScalarString]" mode="ToolTipDetails">\r\n    <div class="qp-bold">Predicate</div>\r\n    <div><xsl:value-of select="s:ScalarOperator/@ScalarString" /></div>\r\n  </xsl:template>\r\n\r\n  <xsl:template match="s:Predicate[s:ScalarOperator/@ScalarString]" mode="ToolTipDetails">\r\n    <div class="qp-bold">Predicate</div>\r\n    <div><xsl:value-of select="s:ScalarOperator/@ScalarString" /></div>\r\n  </xsl:template>\r\n\r\n  <xsl:template match="s:TopExpression[s:ScalarOperator/@ScalarString]" mode="ToolTipDetails">\r\n    <div class="qp-bold">Top Expression</div>\r\n    <div><xsl:value-of select="s:ScalarOperator/@ScalarString" /></div>\r\n  </xsl:template>\r\n\r\n  <xsl:template match="s:OutputList[count(s:ColumnReference) > 0]" mode="ToolTipDetails">\r\n    <div class="qp-bold">Output List</div>\r\n    <xsl:for-each select="s:ColumnReference">\r\n      <div><xsl:apply-templates select="." mode="ObjectName" /></div>\r\n    </xsl:for-each>\r\n  </xsl:template>\r\n  \r\n  <xsl:template match="s:AdaptiveJoin/s:HashKeysProbe" mode="ToolTipDetails">\r\n    <div class="qp-bold">Hash Keys Probe</div>\r\n    <xsl:for-each select="s:ColumnReference">\r\n      <div><xsl:apply-templates select="." mode="ObjectNameNoAlias" /></div>\r\n    </xsl:for-each>\r\n  </xsl:template>\r\n  \r\n  <xsl:template match="s:AdaptiveJoin/s:OuterReferences" mode="ToolTipDetails">\r\n    <div class="qp-bold">Outer References</div>\r\n    <xsl:for-each select="s:ColumnReference">\r\n      <div><xsl:apply-templates select="." mode="ObjectNameNoAlias" /></div>\r\n    </xsl:for-each>\r\n  </xsl:template>\r\n\r\n  <xsl:template match="s:NestedLoops/s:OuterReferences[count(s:ColumnReference) > 0]" mode="ToolTipDetails">\r\n    <div class="qp-bold">Outer References</div>\r\n    <xsl:for-each select="s:ColumnReference">\r\n      <div><xsl:apply-templates select="." mode="ObjectName" /></div>\r\n    </xsl:for-each>\r\n  </xsl:template>\r\n\r\n  <xsl:template match="@StatementText" mode="ToolTipDetails">\r\n    <div class="qp-bold">Statement</div>\r\n    <div><xsl:value-of select="." /></div>\r\n  </xsl:template>\r\n  \r\n  <xsl:template match="s:StmtSimple/s:StoredProc" mode="ToolTipDetails">\r\n    <div class="qp-bold">Procedure Name</div>\r\n    <div><xsl:value-of select="@ProcName" /></div>\r\n  </xsl:template>\r\n\r\n  <xsl:template match="s:Sort/s:OrderBy[count(s:OrderByColumn/s:ColumnReference) > 0]" mode="ToolTipDetails">\r\n    <div class="qp-bold">Order By</div>\r\n    <xsl:for-each select="s:OrderByColumn">\r\n      <div>\r\n        <xsl:apply-templates select="s:ColumnReference" mode="ObjectName" />\r\n        <xsl:choose>\r\n          <xsl:when test="@Ascending = \'true\'"> Ascending</xsl:when>\r\n          <xsl:when test="@Ascending = 1"> Ascending</xsl:when>\r\n          <xsl:otherwise> Descending</xsl:otherwise>\r\n        </xsl:choose>\r\n      </div>\r\n    </xsl:for-each>\r\n  </xsl:template>\r\n\r\n  \x3c!-- \r\n  Seek Predicates Tooltip\r\n  --\x3e\r\n\r\n  <xsl:template match="s:SeekPredicates" mode="ToolTipDetails">\r\n    <div class="qp-bold">Seek Predicates</div>\r\n    <div>\r\n      <xsl:for-each select="s:SeekPredicateNew/s:SeekKeys">\r\n        <xsl:call-template name="SeekKeyDetail">\r\n          <xsl:with-param name="position" select="position()" />\r\n        </xsl:call-template>\r\n        <xsl:if test="position() != last()">, </xsl:if>\r\n      </xsl:for-each>\r\n    </div>\r\n  </xsl:template>\r\n\r\n  \x3c!-- Turns out using apply-templates for this was a bad idea, but its too big a change to fix it all right now. This is probably\r\n  the template that should contain tooltip details, I\'ll try to refactor more stuff into here over time, maybe. --\x3e\r\n  <xsl:template name="ToolTipDetails">\r\n    <xsl:variable name="relop" select="." />\r\n    <xsl:if test="s:Warnings">\r\n      <div class="qp-bold">Warnings</div>\r\n      <div>\r\n        <xsl:if test="s:Warnings/@NoJoinPredicate=1 or s:Warnings/@NoJoinPredicate=true"><div>No Join Predicate</div></xsl:if>\r\n        <xsl:for-each select="s:UnmatchedIndexes/s:Parameterization/s:Object">\r\n          <div>Unmatched index: <xsl:apply-templates select="." mode="ObjectNameNoAlias" /></div>\r\n        </xsl:for-each>\r\n        <xsl:for-each select="s:Warnings/s:SpillToTempDb">\r\n          <div>Operator used tempdb to spill data during execution with spill level <xsl:value-of select="@SpillLevel" /> and <xsl:value-of select="@SpilledThreadCount" /> spilled thread(s)</div>\r\n        </xsl:for-each>\r\n        <xsl:for-each select="s:Warnings/s:ColumnsWithNoStatistics/s:ColumnReference">\r\n          <div>Columns With No Statistics: <xsl:apply-templates select="." mode="ObjectNameNoAlias" /></div>\r\n        </xsl:for-each>\r\n        <xsl:for-each select="s:Warnings/s:Wait">\r\n          <div>The query had to wait <xsl:value-of select="@WaitTime" /> seconds for <xsl:value-of select="@WaitType" /> during execution.</div>\r\n        </xsl:for-each>\r\n        <xsl:for-each select="s:Warnings/s:PlanAffectingConvert">\r\n          <div>Type conversion in expression (<xsl:value-of select="@Expression" />) may affect "<xsl:value-of select="@ConvertIssue" />" in query plan choice.</div>\r\n        </xsl:for-each>\r\n        <xsl:for-each select="s:Warnings/s:SortSpillDetails">\r\n          <div><xsl:value-of select="$relop/@LogicalOp" /> wrote <xsl:value-of select="@WritesToTempDb" /> pages to and read <xsl:value-of select="@ReadsFromTempDb" /> pages from tempdb with granted memory <xsl:value-of select="@GrantedMemoryKb" />KB and used memory <xsl:value-of select="@UsedMemoryKb" />KB.</div>\r\n        </xsl:for-each>\r\n        <xsl:for-each select="s:Warnings/s:MemoryGrantWarning">\r\n          <div>The query memory grant detected "<xsl:value-of select="@GrantWarningKind" />", which may impact the reliability. Grant size: Initial <xsl:value-of select="@RequestedMemory" /> KB, Final <xsl:value-of select="@GrantedMemory" /> KB, Used <xsl:value-of select="@MaxUsedMemory" /> KB.</div>\r\n        </xsl:for-each>\r\n        <xsl:for-each select="s:Warnings/s:HashSpillDetails">\r\n          <div>Hash wrote <xsl:value-of select="@WritesToTempDb" /> pages to and read <xsl:value-of select="@ReadsFromTempDb" /> pages from tempdb with granted memory <xsl:value-of select="@GrantedMemoryKb" />KB and used memory <xsl:value-of select="@UsedMemoryKb" />KB.</div>\r\n        </xsl:for-each>\r\n      </div>\r\n    </xsl:if>\r\n  </xsl:template>\r\n\r\n  <xsl:template name="SeekKeyDetail">\r\n    <xsl:param name="position" />Seek Keys[<xsl:value-of select="$position" />]: <xsl:for-each select="s:Prefix|s:StartRange|s:EndRange">\r\n      <xsl:choose>\r\n        <xsl:when test="self::s:Prefix">Prefix: </xsl:when>\r\n        <xsl:when test="self::s:StartRange">Start: </xsl:when>\r\n        <xsl:when test="self::s:EndRange">End: </xsl:when>\r\n      </xsl:choose>\r\n      <xsl:for-each select="s:RangeColumns/s:ColumnReference">\r\n        <xsl:apply-templates select="." mode="ObjectNameNoAlias" />\r\n        <xsl:if test="position() != last()">, </xsl:if>\r\n      </xsl:for-each>\r\n      <xsl:choose>\r\n        <xsl:when test="@ScanType = \'EQ\'"> = </xsl:when>\r\n        <xsl:when test="@ScanType = \'LT\'"> &lt; </xsl:when>\r\n        <xsl:when test="@ScanType = \'GT\'"> > </xsl:when>\r\n        <xsl:when test="@ScanType = \'LE\'"> &lt;= </xsl:when>\r\n        <xsl:when test="@ScanType = \'GE\'"> >= </xsl:when>\r\n      </xsl:choose>\r\n      <xsl:for-each select="s:RangeExpressions/s:ScalarOperator">Scalar Operator(<xsl:value-of select="@ScalarString" />)<xsl:if test="position() != last()">, </xsl:if>\r\n      </xsl:for-each>\r\n      <xsl:if test="position() != last()">, </xsl:if>\r\n    </xsl:for-each>\r\n  </xsl:template>\r\n\r\n  <xsl:template name="NodeIcon">\r\n    <xsl:variable name="iconName">\r\n      <xsl:choose>\r\n        \x3c!-- Use the logical operation to determine the icon for the "Parallelism" operators. --\x3e\r\n        <xsl:when test="@PhysicalOp = \'Parallelism\'"><xsl:value-of select="translate(@LogicalOp, \' \', \'\')" /></xsl:when>\r\n        <xsl:when test="s:CursorPlan/@CursorActualType"><xsl:value-of select="s:CursorPlan/@CursorActualType" /></xsl:when>\r\n        <xsl:when test="@OperationType"><xsl:value-of select="@OperationType" /></xsl:when>\r\n        <xsl:when test="s:IndexScan/@Lookup">KeyLookup</xsl:when>\r\n        <xsl:when test="s:IndexScan/@Storage = \'ColumnStore\'">ColumnStoreIndexScan</xsl:when>\r\n        <xsl:when test="s:ScalarInsert/s:Object/@Storage = \'ColumnStore\'">ColumnStoreIndexInsert</xsl:when>\r\n        <xsl:when test="s:Update/s:Object/@Storage = \'ColumnStore\'">ColumnStoreIndex<xsl:value-of select="@LogicalOp" /></xsl:when>\r\n        <xsl:when test="s:TableValuedFunction">TableValuedFunction</xsl:when>\r\n        \x3c!-- Use the physical operation to determine icon if it is present. --\x3e\r\n        <xsl:when test="@PhysicalOp"><xsl:value-of select="translate(@PhysicalOp, \' \', \'\')" /></xsl:when>\r\n        \x3c!-- Matches all statements. --\x3e\r\n        <xsl:when test="local-name() = \'StmtSimple\'">Statement</xsl:when>\r\n        <xsl:when test="local-name() = \'StmtCursor\'">StmtCursor</xsl:when>\r\n        <xsl:when test="local-name() = \'StmtCond\'">StmtCond</xsl:when>\r\n        \x3c!-- Fallback - show the Bitmap icon. --\x3e\r\n        <xsl:otherwise>Catchall</xsl:otherwise>\r\n      </xsl:choose>\r\n    </xsl:variable>\r\n    <xsl:variable name="executionMode">\r\n      <xsl:choose>\r\n        <xsl:when test="s:RunTimeInformation/s:RunTimeCountersPerThread/@ActualExecutionMode">\r\n          <xsl:value-of select="s:RunTimeInformation/s:RunTimeCountersPerThread/@ActualExecutionMode" />\r\n        </xsl:when>\r\n        <xsl:otherwise><xsl:value-of select="@EstimatedExecutionMode" /></xsl:otherwise>\r\n      </xsl:choose>\r\n    </xsl:variable>\r\n    <xsl:element name="div">\r\n      <xsl:attribute name="class">qp-icon-<xsl:value-of select="$iconName" /></xsl:attribute>\r\n      <xsl:if test="s:Warnings or s:QueryPlan/s:Warnings"><div class="qp-iconwarn" /></xsl:if>\r\n      <xsl:if test="@Parallel=\'1\' or @Parallel=\'true\'"><div class="qp-iconpar" /></xsl:if>\r\n      <xsl:if test="$executionMode=\'Batch\'"><div class="qp-iconbatch" /></xsl:if>\r\n    </xsl:element>\r\n  </xsl:template>\r\n\r\n  \x3c!-- \r\n  ================================\r\n  Node labels\r\n  ================================\r\n  The following section contains templates used to determine the first (main) label for a node.\r\n  --\x3e\r\n\r\n  <xsl:template match="s:RelOp[s:ScalarInsert/s:Object/@Storage=\'ColumnStore\']" mode="NodeLabel">Columnstore Index Insert</xsl:template>\r\n  <xsl:template match="s:RelOp[s:Update/s:Object/@Storage=\'ColumnStore\']" mode="NodeLabel">Columnstore Index <xsl:value-of select="@LogicalOp"/></xsl:template>\r\n  <xsl:template match="s:RelOp[s:IndexScan]" mode="NodeLabel">\r\n    <xsl:choose>\r\n      <xsl:when test="s:IndexScan/@Storage=\'ColumnStore\'">Columnstore Index Scan</xsl:when>\r\n      <xsl:when test="s:IndexScan/@Lookup and s:IndexScan/s:Object/@IndexKind=\'Clustered\'">Key Lookup</xsl:when>\r\n      <xsl:when test="s:IndexScan/@Lookup">RID Lookup</xsl:when>\r\n      <xsl:otherwise><xsl:value-of select="@PhysicalOp" /></xsl:otherwise>\r\n    </xsl:choose>\r\n    <xsl:if test="s:IndexScan/s:Object/@IndexKind"> (<xsl:value-of select="s:IndexScan/s:Object/@IndexKind" />)</xsl:if>\r\n  </xsl:template>\r\n\r\n  <xsl:template match="s:RelOp" mode="NodeLabel">\r\n    <xsl:value-of select="@PhysicalOp" />\r\n  </xsl:template>\r\n\r\n  <xsl:template match="*[@StatementType]" mode="NodeLabel">\r\n    <xsl:value-of select="@StatementType" />\r\n  </xsl:template>\r\n  \r\n  <xsl:template match="*[s:StoredProc]" mode="NodeLabel">Stored Procedure</xsl:template>\r\n\r\n  <xsl:template match="*[s:CursorPlan/@CursorActualType = \'Dynamic\']" mode="NodeLabel">Dynamic</xsl:template>\r\n  <xsl:template match="*[s:CursorPlan/@CursorActualType = \'FastForward\']" mode="NodeLabel">Fast Forward</xsl:template>\r\n  <xsl:template match="*[s:CursorPlan/@CursorActualType = \'Keyset\']" mode="NodeLabel">Keyset</xsl:template>\r\n  <xsl:template match="*[s:CursorPlan/@CursorActualType = \'SnapShot\']" mode="NodeLabel">Snapshot</xsl:template>  \r\n\r\n  <xsl:template match="*[@OperationType = \'FetchQuery\']" mode="NodeLabel">Fetch Query</xsl:template>\r\n  <xsl:template match="*[@OperationType = \'PopulateQuery\']" mode="NodeLabel">Population Query</xsl:template>\r\n  <xsl:template match="*[@OperationType = \'RefreshQuery\']" mode="NodeLabel">Refresh Query</xsl:template>\r\n\r\n  \x3c!--\r\n  ================================\r\n  Node alternate labels\r\n  ================================\r\n  The following section contains templates used to determine the second label to be displayed for a node.\r\n  --\x3e\r\n\r\n  \x3c!-- Display the object for any node that has one --\x3e\r\n  <xsl:template match="*[*/s:Object]" mode="NodeLabel2">\r\n    <xsl:variable name="ObjectName">\r\n      <xsl:apply-templates select="*/s:Object" mode="ObjectName">\r\n        <xsl:with-param name="ExcludeDatabaseName" select="true()" />\r\n      </xsl:apply-templates>\r\n    </xsl:variable>\r\n    <div>\r\n      <xsl:value-of select="substring($ObjectName, 0, 36)" />\r\n      <xsl:if test="string-length($ObjectName) >= 36">…</xsl:if>\r\n    </div>\r\n  </xsl:template>\r\n\r\n  \x3c!-- Display the logical operation for any node where it is not the same as the physical operation. --\x3e\r\n  <xsl:template match="s:RelOp[@LogicalOp != @PhysicalOp]" mode="NodeLabel2">\r\n    <div>(<xsl:value-of select="@LogicalOp" />)</div>\r\n  </xsl:template>\r\n\r\n  \x3c!-- Disable the default template --\x3e\r\n  <xsl:template match="*" mode="NodeLabel2" />\r\n\r\n  \x3c!-- \r\n  ================================\r\n  Tool tip descriptions\r\n  ================================\r\n  The following section contains templates used for writing the description shown in the tool tip.\r\n  --\x3e\r\n\r\n  <xsl:template match="*[@PhysicalOp = \'Table Insert\']" mode="ToolTipDescription">Insert input rows into the table specified in Argument field.</xsl:template>\r\n  <xsl:template match="*[@PhysicalOp = \'Compute Scalar\']" mode="ToolTipDescription">Compute new values from existing values in a row.</xsl:template>\r\n  <xsl:template match="*[@PhysicalOp = \'Sort\']" mode="ToolTipDescription">Sort the input.</xsl:template>\r\n  <xsl:template match="*[@PhysicalOp = \'Clustered Index Scan\']" mode="ToolTipDescription">Scanning a clustered index, entirely or only a range.</xsl:template>\r\n  <xsl:template match="*[@PhysicalOp = \'Stream Aggregate\']" mode="ToolTipDescription">Compute summary values for groups of rows in a suitably sorted stream.</xsl:template>\r\n  <xsl:template match="*[@PhysicalOp = \'Hash Match\']" mode="ToolTipDescription">Use each row from the top input to build a hash table, and each row from the bottom input to probe into the hash table, outputting all matching rows.</xsl:template>\r\n  <xsl:template match="*[@PhysicalOp = \'Bitmap\']" mode="ToolTipDescription">Bitmap.</xsl:template>\r\n  <xsl:template match="*[@PhysicalOp = \'Clustered Index Seek\']" mode="ToolTipDescription">Scanning a particular range of rows from a clustered index.</xsl:template>\r\n  <xsl:template match="*[@PhysicalOp = \'Index Seek\']" mode="ToolTipDescription">Scan a particular range of rows from a nonclustered index.</xsl:template>\r\n  <xsl:template match="*[@PhysicalOp = \'Adaptive Join\']" mode="ToolTipDescription">Chooses dynamically between hash join and nested loops.</xsl:template>\r\n  <xsl:template match="*[@PhysicalOp = \'Index Spool\']" mode="ToolTipDescription">Reformats the data from the input into a temporary index, which is then used for seeking with the supplied seek predicate.</xsl:template>\r\n  <xsl:template match="*[s:IndexScan/@Lookup]" mode="ToolTipDescription">Uses a supplied clustering key to lookup on a table that has a clustered index.</xsl:template>\r\n\r\n  <xsl:template match="*[@PhysicalOp = \'Parallelism\' and @LogicalOp=\'Repartition Streams\']" mode="ToolTipDescription">Repartition Streams.</xsl:template>\r\n  <xsl:template match="*[@PhysicalOp = \'Parallelism\']" mode="ToolTipDescription">An operation involving parallelism.</xsl:template>\r\n  \r\n  <xsl:template match="*[s:TableScan]" mode="ToolTipDescription">Scan rows from a table.</xsl:template>\r\n  <xsl:template match="*[s:NestedLoops]" mode="ToolTipDescription">For each row in the top (outer) input, scan the bottom (inner) input, and output matching rows.</xsl:template>\r\n  <xsl:template match="*[s:Top]" mode="ToolTipDescription">Select the first few rows based on a sort order.</xsl:template>\r\n  \r\n  <xsl:template match="*[@OperationType=\'FetchQuery\']" mode="ToolTipDescription">The query used to retrieve rows when a fetch is issued against a cursor.</xsl:template>\r\n  <xsl:template match="*[@OperationType=\'PopulateQuery\']" mode="ToolTipDescription">The query used to populate a cursor\'s work table when the cursor is opened.</xsl:template>\r\n  <xsl:template match="*[s:CursorPlan/@CursorActualType=\'FastForward\']" mode="ToolTipDescription">Fast Forward.</xsl:template>\r\n  <xsl:template match="*[s:CursorPlan/@CursorActualType=\'Dynamic\']" mode="ToolTipDescription">Cursor that can see all changes made by others.</xsl:template>\r\n  <xsl:template match="*[s:CursorPlan/@CursorActualType=\'Keyset\']" mode="ToolTipDescription">Cursor that can see updates made by others, but not inserts.</xsl:template>\r\n  <xsl:template match="*[s:CursorPlan/@CursorActualType=\'SnapShot\']" mode="ToolTipDescription">A cursor that does not see changes made by others.</xsl:template>\r\n\r\n  \x3c!-- \r\n  ================================\r\n  Number handling\r\n  ================================\r\n  The following section contains templates used for handling numbers (scientific notation, rounding etc...)\r\n  --\x3e\r\n\r\n  \x3c!-- Outputs a number rounded to 7 decimal places - to be used for displaying all numbers.\r\n  This template accepts numbers in scientific notation. --\x3e\r\n  <xsl:template name="round">\r\n    <xsl:param name="value" select="0" />\r\n    <xsl:variable name="number">\r\n      <xsl:call-template name="convertSciToNumString">\r\n        <xsl:with-param name="inputVal" select="$value" />\r\n      </xsl:call-template>\r\n    </xsl:variable>\r\n    <xsl:value-of select="format-number(round(number($number) * 10000000) div 10000000, \'0.#######\')" />\r\n  </xsl:template>\r\n  \r\n  \x3c!-- Template for handling of scientific numbers\r\n  See: http://www.orm-designer.com/article/xslt-convert-scientific-notation-to-decimal-number --\x3e\r\n  <xsl:variable name="max-exp">\r\n    <xsl:value-of select="\'0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\'" />\r\n  </xsl:variable>\r\n\r\n  <xsl:template name="convertSciToNumString">\r\n    <xsl:param name="inputVal" select="0" />\r\n\r\n    <xsl:variable name="numInput">\r\n      <xsl:value-of select="translate(string($inputVal),\'e\',\'E\')" />\r\n    </xsl:variable>\r\n\r\n    <xsl:choose>\r\n      <xsl:when test="number($numInput) = $numInput">\r\n        <xsl:value-of select="$numInput" />\r\n      </xsl:when> \r\n      <xsl:otherwise>\r\n        \x3c!-- ==== Mantisa ==== --\x3e\r\n        <xsl:variable name="numMantisa">\r\n          <xsl:value-of select="number(substring-before($numInput,\'E\'))" />\r\n        </xsl:variable>\r\n\r\n        \x3c!-- ==== Exponent ==== --\x3e\r\n        <xsl:variable name="numExponent">\r\n          <xsl:choose>\r\n            <xsl:when test="contains($numInput,\'E+\')">\r\n              <xsl:value-of select="substring-after($numInput,\'E+\')" />\r\n            </xsl:when>\r\n            <xsl:otherwise>\r\n              <xsl:value-of select="substring-after($numInput,\'E\')" />\r\n            </xsl:otherwise>\r\n          </xsl:choose>\r\n        </xsl:variable>\r\n\r\n        \x3c!-- ==== Coefficient ==== --\x3e\r\n        <xsl:variable name="numCoefficient">\r\n          <xsl:choose>\r\n            <xsl:when test="$numExponent > 0">\r\n              <xsl:text>1</xsl:text>\r\n              <xsl:value-of select="substring($max-exp, 1, number($numExponent))" />\r\n            </xsl:when>\r\n            <xsl:when test="$numExponent &lt; 0">\r\n              <xsl:text>0.</xsl:text>\r\n              <xsl:value-of select="substring($max-exp, 1, -number($numExponent)-1)" />\r\n              <xsl:text>1</xsl:text>\r\n            </xsl:when>\r\n            <xsl:otherwise>1</xsl:otherwise>\r\n          </xsl:choose>\r\n        </xsl:variable>\r\n        <xsl:value-of select="number($numCoefficient) * number($numMantisa)" />\r\n      </xsl:otherwise>\r\n    </xsl:choose>\r\n  </xsl:template>\r\n</xsl:stylesheet>\r\n'}])});
;/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(ie,e){"use strict";var oe=[],r=Object.getPrototypeOf,ae=oe.slice,g=oe.flat?function(e){return oe.flat.call(e)}:function(e){return oe.concat.apply([],e)},s=oe.push,se=oe.indexOf,n={},i=n.toString,ue=n.hasOwnProperty,o=ue.toString,a=o.call(Object),le={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},C=ie.document,u={type:!0,src:!0,nonce:!0,noModule:!0};function m(e,t,n){var r,i,o=(n=n||C).createElement("script");if(o.text=e,t)for(r in u)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e}var t="3.7.1",l=/HTML$/i,ce=function(e,t){return new ce.fn.init(e,t)};function c(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!v(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function fe(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}ce.fn=ce.prototype={jquery:t,constructor:ce,length:0,toArray:function(){return ae.call(this)},get:function(e){return null==e?ae.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=ce.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return ce.each(this,e)},map:function(n){return this.pushStack(ce.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(ae.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(ce.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(ce.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:oe.sort,splice:oe.splice},ce.extend=ce.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||v(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(ce.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||ce.isPlainObject(n)?n:{},i=!1,a[t]=ce.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},ce.extend({expando:"jQuery"+(t+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==i.call(e))&&(!(t=r(e))||"function"==typeof(n=ue.call(t,"constructor")&&t.constructor)&&o.call(n)===a)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){m(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(c(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},text:function(e){var t,n="",r=0,i=e.nodeType;if(!i)while(t=e[r++])n+=ce.text(t);return 1===i||11===i?e.textContent:9===i?e.documentElement.textContent:3===i||4===i?e.nodeValue:n},makeArray:function(e,t){var n=t||[];return null!=e&&(c(Object(e))?ce.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:se.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!l.test(t||n&&n.nodeName||"HTML")},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(c(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:le}),"function"==typeof Symbol&&(ce.fn[Symbol.iterator]=oe[Symbol.iterator]),ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var pe=oe.pop,de=oe.sort,he=oe.splice,ge="[\\x20\\t\\r\\n\\f]",ve=new RegExp("^"+ge+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ge+"+$","g");ce.contains=function(e,t){var n=t&&t.parentNode;return e===n||!(!n||1!==n.nodeType||!(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};var f=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function p(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}ce.escapeSelector=function(e){return(e+"").replace(f,p)};var ye=C,me=s;!function(){var e,b,w,o,a,T,r,C,d,i,k=me,S=ce.expando,E=0,n=0,s=W(),c=W(),u=W(),h=W(),l=function(e,t){return e===t&&(a=!0),0},f="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",t="(?:\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",p="\\["+ge+"*("+t+")(?:"+ge+"*([*^$|!~]?=)"+ge+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+t+"))|)"+ge+"*\\]",g=":("+t+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+p+")*)|.*)\\)|)",v=new RegExp(ge+"+","g"),y=new RegExp("^"+ge+"*,"+ge+"*"),m=new RegExp("^"+ge+"*([>+~]|"+ge+")"+ge+"*"),x=new RegExp(ge+"|>"),j=new RegExp(g),A=new RegExp("^"+t+"$"),D={ID:new RegExp("^#("+t+")"),CLASS:new RegExp("^\\.("+t+")"),TAG:new RegExp("^("+t+"|[*])"),ATTR:new RegExp("^"+p),PSEUDO:new RegExp("^"+g),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ge+"*(even|odd|(([+-]|)(\\d*)n|)"+ge+"*(?:([+-]|)"+ge+"*(\\d+)|))"+ge+"*\\)|)","i"),bool:new RegExp("^(?:"+f+")$","i"),needsContext:new RegExp("^"+ge+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ge+"*((?:-\\d)?\\d*)"+ge+"*\\)|)(?=[^-]|$)","i")},N=/^(?:input|select|textarea|button)$/i,q=/^h\d$/i,L=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,H=/[+~]/,O=new RegExp("\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\([^\\r\\n\\f])","g"),P=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},M=function(){V()},R=J(function(e){return!0===e.disabled&&fe(e,"fieldset")},{dir:"parentNode",next:"legend"});try{k.apply(oe=ae.call(ye.childNodes),ye.childNodes),oe[ye.childNodes.length].nodeType}catch(e){k={apply:function(e,t){me.apply(e,ae.call(t))},call:function(e){me.apply(e,ae.call(arguments,1))}}}function I(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(V(e),e=e||T,C)){if(11!==p&&(u=L.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return k.call(n,a),n}else if(f&&(a=f.getElementById(i))&&I.contains(e,a)&&a.id===i)return k.call(n,a),n}else{if(u[2])return k.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&e.getElementsByClassName)return k.apply(n,e.getElementsByClassName(i)),n}if(!(h[t+" "]||d&&d.test(t))){if(c=t,f=e,1===p&&(x.test(t)||m.test(t))){(f=H.test(t)&&U(e.parentNode)||e)==e&&le.scope||((s=e.getAttribute("id"))?s=ce.escapeSelector(s):e.setAttribute("id",s=S)),o=(l=Y(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+Q(l[o]);c=l.join(",")}try{return k.apply(n,f.querySelectorAll(c)),n}catch(e){h(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return re(t.replace(ve,"$1"),e,n,r)}function W(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function F(e){return e[S]=!0,e}function $(e){var t=T.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function B(t){return function(e){return fe(e,"input")&&e.type===t}}function _(t){return function(e){return(fe(e,"input")||fe(e,"button"))&&e.type===t}}function z(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&R(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function X(a){return F(function(o){return o=+o,F(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function U(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function V(e){var t,n=e?e.ownerDocument||e:ye;return n!=T&&9===n.nodeType&&n.documentElement&&(r=(T=n).documentElement,C=!ce.isXMLDoc(T),i=r.matches||r.webkitMatchesSelector||r.msMatchesSelector,r.msMatchesSelector&&ye!=T&&(t=T.defaultView)&&t.top!==t&&t.addEventListener("unload",M),le.getById=$(function(e){return r.appendChild(e).id=ce.expando,!T.getElementsByName||!T.getElementsByName(ce.expando).length}),le.disconnectedMatch=$(function(e){return i.call(e,"*")}),le.scope=$(function(){return T.querySelectorAll(":scope")}),le.cssHas=$(function(){try{return T.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),le.getById?(b.filter.ID=function(e){var t=e.replace(O,P);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(O,P);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},b.find.CLASS=function(e,t){if("undefined"!=typeof t.getElementsByClassName&&C)return t.getElementsByClassName(e)},d=[],$(function(e){var t;r.appendChild(e).innerHTML="<a id='"+S+"' href='' disabled='disabled'></a><select id='"+S+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+ge+"*(?:value|"+f+")"),e.querySelectorAll("[id~="+S+"-]").length||d.push("~="),e.querySelectorAll("a#"+S+"+*").length||d.push(".#.+[+~]"),e.querySelectorAll(":checked").length||d.push(":checked"),(t=T.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),r.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&d.push(":enabled",":disabled"),(t=T.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||d.push("\\["+ge+"*name"+ge+"*="+ge+"*(?:''|\"\")")}),le.cssHas||d.push(":has"),d=d.length&&new RegExp(d.join("|")),l=function(e,t){if(e===t)return a=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!le.sortDetached&&t.compareDocumentPosition(e)===n?e===T||e.ownerDocument==ye&&I.contains(ye,e)?-1:t===T||t.ownerDocument==ye&&I.contains(ye,t)?1:o?se.call(o,e)-se.call(o,t):0:4&n?-1:1)}),T}for(e in I.matches=function(e,t){return I(e,null,null,t)},I.matchesSelector=function(e,t){if(V(e),C&&!h[t+" "]&&(!d||!d.test(t)))try{var n=i.call(e,t);if(n||le.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){h(t,!0)}return 0<I(t,T,null,[e]).length},I.contains=function(e,t){return(e.ownerDocument||e)!=T&&V(e),ce.contains(e,t)},I.attr=function(e,t){(e.ownerDocument||e)!=T&&V(e);var n=b.attrHandle[t.toLowerCase()],r=n&&ue.call(b.attrHandle,t.toLowerCase())?n(e,t,!C):void 0;return void 0!==r?r:e.getAttribute(t)},I.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ce.uniqueSort=function(e){var t,n=[],r=0,i=0;if(a=!le.sortStable,o=!le.sortStable&&ae.call(e,0),de.call(e,l),a){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)he.call(e,n[r],1)}return o=null,e},ce.fn.uniqueSort=function(){return this.pushStack(ce.uniqueSort(ae.apply(this)))},(b=ce.expr={cacheLength:50,createPseudo:F,match:D,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(O,P),e[3]=(e[3]||e[4]||e[5]||"").replace(O,P),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||I.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&I.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return D.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&j.test(n)&&(t=Y(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(O,P).toLowerCase();return"*"===e?function(){return!0}:function(e){return fe(e,t)}},CLASS:function(e){var t=s[e+" "];return t||(t=new RegExp("(^|"+ge+")"+e+"("+ge+"|$)"))&&s(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=I.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(v," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(d,e,t,h,g){var v="nth"!==d.slice(0,3),y="last"!==d.slice(-4),m="of-type"===e;return 1===h&&0===g?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u=v!==y?"nextSibling":"previousSibling",l=e.parentNode,c=m&&e.nodeName.toLowerCase(),f=!n&&!m,p=!1;if(l){if(v){while(u){o=e;while(o=o[u])if(m?fe(o,c):1===o.nodeType)return!1;s=u="only"===d&&!s&&"nextSibling"}return!0}if(s=[y?l.firstChild:l.lastChild],y&&f){p=(a=(r=(i=l[S]||(l[S]={}))[d]||[])[0]===E&&r[1])&&r[2],o=a&&l.childNodes[a];while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if(1===o.nodeType&&++p&&o===e){i[d]=[E,a,p];break}}else if(f&&(p=a=(r=(i=e[S]||(e[S]={}))[d]||[])[0]===E&&r[1]),!1===p)while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if((m?fe(o,c):1===o.nodeType)&&++p&&(f&&((i=o[S]||(o[S]={}))[d]=[E,p]),o===e))break;return(p-=g)===h||p%h==0&&0<=p/h}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||I.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?F(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=se.call(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:F(function(e){var r=[],i=[],s=ne(e.replace(ve,"$1"));return s[S]?F(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:F(function(t){return function(e){return 0<I(t,e).length}}),contains:F(function(t){return t=t.replace(O,P),function(e){return-1<(e.textContent||ce.text(e)).indexOf(t)}}),lang:F(function(n){return A.test(n||"")||I.error("unsupported lang: "+n),n=n.replace(O,P).toLowerCase(),function(e){var t;do{if(t=C?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=ie.location&&ie.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===r},focus:function(e){return e===function(){try{return T.activeElement}catch(e){}}()&&T.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:z(!1),disabled:z(!0),checked:function(e){return fe(e,"input")&&!!e.checked||fe(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return q.test(e.nodeName)},input:function(e){return N.test(e.nodeName)},button:function(e){return fe(e,"input")&&"button"===e.type||fe(e,"button")},text:function(e){var t;return fe(e,"input")&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:X(function(){return[0]}),last:X(function(e,t){return[t-1]}),eq:X(function(e,t,n){return[n<0?n+t:n]}),even:X(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:X(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:X(function(e,t,n){var r;for(r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:X(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=B(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=_(e);function G(){}function Y(e,t){var n,r,i,o,a,s,u,l=c[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=y.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=m.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(ve," ")}),a=a.slice(n.length)),b.filter)!(r=D[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?I.error(e):c(e,s).slice(0)}function Q(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function J(a,e,t){var s=e.dir,u=e.next,l=u||s,c=t&&"parentNode"===l,f=n++;return e.first?function(e,t,n){while(e=e[s])if(1===e.nodeType||c)return a(e,t,n);return!1}:function(e,t,n){var r,i,o=[E,f];if(n){while(e=e[s])if((1===e.nodeType||c)&&a(e,t,n))return!0}else while(e=e[s])if(1===e.nodeType||c)if(i=e[S]||(e[S]={}),u&&fe(e,u))e=e[s]||e;else{if((r=i[l])&&r[0]===E&&r[1]===f)return o[2]=r[2];if((i[l]=o)[2]=a(e,t,n))return!0}return!1}}function K(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Z(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function ee(d,h,g,v,y,e){return v&&!v[S]&&(v=ee(v)),y&&!y[S]&&(y=ee(y,e)),F(function(e,t,n,r){var i,o,a,s,u=[],l=[],c=t.length,f=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)I(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),p=!d||!e&&h?f:Z(f,u,d,n,r);if(g?g(p,s=y||(e?d:c||v)?[]:t,n,r):s=p,v){i=Z(s,l),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(s[l[o]]=!(p[l[o]]=a))}if(e){if(y||d){if(y){i=[],o=s.length;while(o--)(a=s[o])&&i.push(p[o]=a);y(null,s=[],i,r)}o=s.length;while(o--)(a=s[o])&&-1<(i=y?se.call(e,a):u[o])&&(e[i]=!(t[i]=a))}}else s=Z(s===t?s.splice(c,s.length):s),y?y(null,t,s,r):k.apply(t,s)})}function te(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=J(function(e){return e===i},a,!0),l=J(function(e){return-1<se.call(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!=w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[J(K(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return ee(1<s&&K(c),1<s&&Q(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ve,"$1"),t,s<n&&te(e.slice(s,n)),n<r&&te(e=e.slice(n)),n<r&&Q(e))}c.push(t)}return K(c)}function ne(e,t){var n,v,y,m,x,r,i=[],o=[],a=u[e+" "];if(!a){t||(t=Y(e)),n=t.length;while(n--)(a=te(t[n]))[S]?i.push(a):o.push(a);(a=u(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=E+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==T||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==T||(V(o),n=!C);while(s=v[a++])if(s(o,t||T,n)){k.call(r,o);break}i&&(E=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=pe.call(r));f=Z(f)}k.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&ce.uniqueSort(r)}return i&&(E=h,w=p),c},m?F(r):r))).selector=e}return a}function re(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&Y(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&C&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(O,P),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=D.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(O,P),H.test(o[0].type)&&U(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&Q(o)))return k.apply(n,r),n;break}}}return(l||ne(e,c))(r,t,!C,n,!t||H.test(e)&&U(t.parentNode)||t),n}G.prototype=b.filters=b.pseudos,b.setFilters=new G,le.sortStable=S.split("").sort(l).join("")===S,V(),le.sortDetached=$(function(e){return 1&e.compareDocumentPosition(T.createElement("fieldset"))}),ce.find=I,ce.expr[":"]=ce.expr.pseudos,ce.unique=ce.uniqueSort,I.compile=ne,I.select=re,I.setDocument=V,I.tokenize=Y,I.escape=ce.escapeSelector,I.getText=ce.text,I.isXML=ce.isXMLDoc,I.selectors=ce.expr,I.support=ce.support,I.uniqueSort=ce.uniqueSort}();var d=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&ce(e).is(n))break;r.push(e)}return r},h=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},b=ce.expr.match.needsContext,w=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function T(e,n,r){return v(n)?ce.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?ce.grep(e,function(e){return e===n!==r}):"string"!=typeof n?ce.grep(e,function(e){return-1<se.call(n,e)!==r}):ce.filter(n,e,r)}ce.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?ce.find.matchesSelector(r,e)?[r]:[]:ce.find.matches(e,ce.grep(t,function(e){return 1===e.nodeType}))},ce.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(ce(e).filter(function(){for(t=0;t<r;t++)if(ce.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)ce.find(e,i[t],n);return 1<r?ce.uniqueSort(n):n},filter:function(e){return this.pushStack(T(this,e||[],!1))},not:function(e){return this.pushStack(T(this,e||[],!0))},is:function(e){return!!T(this,"string"==typeof e&&b.test(e)?ce(e):e||[],!1).length}});var k,S=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(ce.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||k,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:S.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof ce?t[0]:t,ce.merge(this,ce.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:C,!0)),w.test(r[1])&&ce.isPlainObject(t))for(r in t)v(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=C.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(ce):ce.makeArray(e,this)}).prototype=ce.fn,k=ce(C);var E=/^(?:parents|prev(?:Until|All))/,j={children:!0,contents:!0,next:!0,prev:!0};function A(e,t){while((e=e[t])&&1!==e.nodeType);return e}ce.fn.extend({has:function(e){var t=ce(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(ce.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&ce(e);if(!b.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&ce.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?ce.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?se.call(ce(e),this[0]):se.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ce.uniqueSort(ce.merge(this.get(),ce(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ce.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return d(e,"parentNode")},parentsUntil:function(e,t,n){return d(e,"parentNode",n)},next:function(e){return A(e,"nextSibling")},prev:function(e){return A(e,"previousSibling")},nextAll:function(e){return d(e,"nextSibling")},prevAll:function(e){return d(e,"previousSibling")},nextUntil:function(e,t,n){return d(e,"nextSibling",n)},prevUntil:function(e,t,n){return d(e,"previousSibling",n)},siblings:function(e){return h((e.parentNode||{}).firstChild,e)},children:function(e){return h(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(fe(e,"template")&&(e=e.content||e),ce.merge([],e.childNodes))}},function(r,i){ce.fn[r]=function(e,t){var n=ce.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=ce.filter(t,n)),1<this.length&&(j[r]||ce.uniqueSort(n),E.test(r)&&n.reverse()),this.pushStack(n)}});var D=/[^\x20\t\r\n\f]+/g;function N(e){return e}function q(e){throw e}function L(e,t,n,r){var i;try{e&&v(i=e.promise)?i.call(e).done(t).fail(n):e&&v(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}ce.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},ce.each(e.match(D)||[],function(e,t){n[t]=!0}),n):ce.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){ce.each(e,function(e,t){v(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==x(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return ce.each(arguments,function(e,t){var n;while(-1<(n=ce.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<ce.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},ce.extend({Deferred:function(e){var o=[["notify","progress",ce.Callbacks("memory"),ce.Callbacks("memory"),2],["resolve","done",ce.Callbacks("once memory"),ce.Callbacks("once memory"),0,"resolved"],["reject","fail",ce.Callbacks("once memory"),ce.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return ce.Deferred(function(r){ce.each(o,function(e,t){var n=v(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&v(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,v(t)?s?t.call(e,l(u,o,N,s),l(u,o,q,s)):(u++,t.call(e,l(u,o,N,s),l(u,o,q,s),l(u,o,N,o.notifyWith))):(a!==N&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){ce.Deferred.exceptionHook&&ce.Deferred.exceptionHook(e,t.error),u<=i+1&&(a!==q&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(ce.Deferred.getErrorHook?t.error=ce.Deferred.getErrorHook():ce.Deferred.getStackHook&&(t.error=ce.Deferred.getStackHook()),ie.setTimeout(t))}}return ce.Deferred(function(e){o[0][3].add(l(0,e,v(r)?r:N,e.notifyWith)),o[1][3].add(l(0,e,v(t)?t:N)),o[2][3].add(l(0,e,v(n)?n:q))}).promise()},promise:function(e){return null!=e?ce.extend(e,a):a}},s={};return ce.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=ae.call(arguments),o=ce.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?ae.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(L(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||v(i[t]&&i[t].then)))return o.then();while(t--)L(i[t],a(t),o.reject);return o.promise()}});var H=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ce.Deferred.exceptionHook=function(e,t){ie.console&&ie.console.warn&&e&&H.test(e.name)&&ie.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},ce.readyException=function(e){ie.setTimeout(function(){throw e})};var O=ce.Deferred();function P(){C.removeEventListener("DOMContentLoaded",P),ie.removeEventListener("load",P),ce.ready()}ce.fn.ready=function(e){return O.then(e)["catch"](function(e){ce.readyException(e)}),this},ce.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--ce.readyWait:ce.isReady)||(ce.isReady=!0)!==e&&0<--ce.readyWait||O.resolveWith(C,[ce])}}),ce.ready.then=O.then,"complete"===C.readyState||"loading"!==C.readyState&&!C.documentElement.doScroll?ie.setTimeout(ce.ready):(C.addEventListener("DOMContentLoaded",P),ie.addEventListener("load",P));var M=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n))for(s in i=!0,n)M(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,v(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(ce(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},R=/^-ms-/,I=/-([a-z])/g;function W(e,t){return t.toUpperCase()}function F(e){return e.replace(R,"ms-").replace(I,W)}var $=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function B(){this.expando=ce.expando+B.uid++}B.uid=1,B.prototype={cache:function(e){var t=e[this.expando];return t||(t={},$(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[F(t)]=n;else for(r in t)i[F(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][F(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(F):(t=F(t))in r?[t]:t.match(D)||[]).length;while(n--)delete r[t[n]]}(void 0===t||ce.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!ce.isEmptyObject(t)}};var _=new B,z=new B,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,U=/[A-Z]/g;function V(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(U,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:X.test(i)?JSON.parse(i):i)}catch(e){}z.set(e,t,n)}else n=void 0;return n}ce.extend({hasData:function(e){return z.hasData(e)||_.hasData(e)},data:function(e,t,n){return z.access(e,t,n)},removeData:function(e,t){z.remove(e,t)},_data:function(e,t,n){return _.access(e,t,n)},_removeData:function(e,t){_.remove(e,t)}}),ce.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=z.get(o),1===o.nodeType&&!_.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=F(r.slice(5)),V(o,r,i[r]));_.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){z.set(this,n)}):M(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=z.get(o,n))?t:void 0!==(t=V(o,n))?t:void 0;this.each(function(){z.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){z.remove(this,e)})}}),ce.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=_.get(e,t),n&&(!r||Array.isArray(n)?r=_.access(e,t,ce.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=ce.queue(e,t),r=n.length,i=n.shift(),o=ce._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){ce.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return _.get(e,n)||_.access(e,n,{empty:ce.Callbacks("once memory").add(function(){_.remove(e,[t+"queue",n])})})}}),ce.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?ce.queue(this[0],t):void 0===n?this:this.each(function(){var e=ce.queue(this,t,n);ce._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&ce.dequeue(this,t)})},dequeue:function(e){return this.each(function(){ce.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=ce.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=_.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var G=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Y=new RegExp("^(?:([+-])=|)("+G+")([a-z%]*)$","i"),Q=["Top","Right","Bottom","Left"],J=C.documentElement,K=function(e){return ce.contains(e.ownerDocument,e)},Z={composed:!0};J.getRootNode&&(K=function(e){return ce.contains(e.ownerDocument,e)||e.getRootNode(Z)===e.ownerDocument});var ee=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&K(e)&&"none"===ce.css(e,"display")};function te(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return ce.css(e,t,"")},u=s(),l=n&&n[3]||(ce.cssNumber[t]?"":"px"),c=e.nodeType&&(ce.cssNumber[t]||"px"!==l&&+u)&&Y.exec(ce.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)ce.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,ce.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ne={};function re(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=_.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ee(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ne[s])||(o=a.body.appendChild(a.createElement(s)),u=ce.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ne[s]=u)))):"none"!==n&&(l[c]="none",_.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}ce.fn.extend({show:function(){return re(this,!0)},hide:function(){return re(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ee(this)?ce(this).show():ce(this).hide()})}});var xe,be,we=/^(?:checkbox|radio)$/i,Te=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ce=/^$|^module$|\/(?:java|ecma)script/i;xe=C.createDocumentFragment().appendChild(C.createElement("div")),(be=C.createElement("input")).setAttribute("type","radio"),be.setAttribute("checked","checked"),be.setAttribute("name","t"),xe.appendChild(be),le.checkClone=xe.cloneNode(!0).cloneNode(!0).lastChild.checked,xe.innerHTML="<textarea>x</textarea>",le.noCloneChecked=!!xe.cloneNode(!0).lastChild.defaultValue,xe.innerHTML="<option></option>",le.option=!!xe.lastChild;var ke={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Se(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&fe(e,t)?ce.merge([e],n):n}function Ee(e,t){for(var n=0,r=e.length;n<r;n++)_.set(e[n],"globalEval",!t||_.get(t[n],"globalEval"))}ke.tbody=ke.tfoot=ke.colgroup=ke.caption=ke.thead,ke.th=ke.td,le.option||(ke.optgroup=ke.option=[1,"<select multiple='multiple'>","</select>"]);var je=/<|&#?\w+;/;function Ae(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))ce.merge(p,o.nodeType?[o]:o);else if(je.test(o)){a=a||f.appendChild(t.createElement("div")),s=(Te.exec(o)||["",""])[1].toLowerCase(),u=ke[s]||ke._default,a.innerHTML=u[1]+ce.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;ce.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<ce.inArray(o,r))i&&i.push(o);else if(l=K(o),a=Se(f.appendChild(o),"script"),l&&Ee(a),n){c=0;while(o=a[c++])Ce.test(o.type||"")&&n.push(o)}return f}var De=/^([^.]*)(?:\.(.+)|)/;function Ne(){return!0}function qe(){return!1}function Le(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Le(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=qe;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return ce().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=ce.guid++)),e.each(function(){ce.event.add(this,t,i,r,n)})}function He(e,r,t){t?(_.set(e,r,!1),ce.event.add(e,r,{namespace:!1,handler:function(e){var t,n=_.get(this,r);if(1&e.isTrigger&&this[r]){if(n)(ce.event.special[r]||{}).delegateType&&e.stopPropagation();else if(n=ae.call(arguments),_.set(this,r,n),this[r](),t=_.get(this,r),_.set(this,r,!1),n!==t)return e.stopImmediatePropagation(),e.preventDefault(),t}else n&&(_.set(this,r,ce.event.trigger(n[0],n.slice(1),this)),e.stopPropagation(),e.isImmediatePropagationStopped=Ne)}})):void 0===_.get(e,r)&&ce.event.add(e,r,Ne)}ce.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.get(t);if($(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&ce.find.matchesSelector(J,i),n.guid||(n.guid=ce.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof ce&&ce.event.triggered!==e.type?ce.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(D)||[""]).length;while(l--)d=g=(s=De.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=ce.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=ce.event.special[d]||{},c=ce.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&ce.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),ce.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.hasData(e)&&_.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(D)||[""]).length;while(l--)if(d=g=(s=De.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=ce.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||ce.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)ce.event.remove(e,d+t[l],n,r,!0);ce.isEmptyObject(u)&&_.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=ce.event.fix(e),l=(_.get(this,"events")||Object.create(null))[u.type]||[],c=ce.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=ce.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((ce.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<ce(i,this).index(l):ce.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(ce.Event.prototype,t,{enumerable:!0,configurable:!0,get:v(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[ce.expando]?e:new ce.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click",!0),!1},trigger:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click"),!0},_default:function(e){var t=e.target;return we.test(t.type)&&t.click&&fe(t,"input")&&_.get(t,"click")||fe(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},ce.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},ce.Event=function(e,t){if(!(this instanceof ce.Event))return new ce.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ne:qe,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&ce.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[ce.expando]=!0},ce.Event.prototype={constructor:ce.Event,isDefaultPrevented:qe,isPropagationStopped:qe,isImmediatePropagationStopped:qe,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ne,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ne,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ne,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},ce.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},ce.event.addProp),ce.each({focus:"focusin",blur:"focusout"},function(r,i){function o(e){if(C.documentMode){var t=_.get(this,"handle"),n=ce.event.fix(e);n.type="focusin"===e.type?"focus":"blur",n.isSimulated=!0,t(e),n.target===n.currentTarget&&t(n)}else ce.event.simulate(i,e.target,ce.event.fix(e))}ce.event.special[r]={setup:function(){var e;if(He(this,r,!0),!C.documentMode)return!1;(e=_.get(this,i))||this.addEventListener(i,o),_.set(this,i,(e||0)+1)},trigger:function(){return He(this,r),!0},teardown:function(){var e;if(!C.documentMode)return!1;(e=_.get(this,i)-1)?_.set(this,i,e):(this.removeEventListener(i,o),_.remove(this,i))},_default:function(e){return _.get(e.target,r)},delegateType:i},ce.event.special[i]={setup:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i);n||(C.documentMode?this.addEventListener(i,o):e.addEventListener(r,o,!0)),_.set(t,i,(n||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i)-1;n?_.set(t,i,n):(C.documentMode?this.removeEventListener(i,o):e.removeEventListener(r,o,!0),_.remove(t,i))}}}),ce.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){ce.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||ce.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),ce.fn.extend({on:function(e,t,n,r){return Le(this,e,t,n,r)},one:function(e,t,n,r){return Le(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,ce(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=qe),this.each(function(){ce.event.remove(this,e,n,t)})}});var Oe=/<script|<style|<link/i,Pe=/checked\s*(?:[^=]|=\s*.checked.)/i,Me=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Re(e,t){return fe(e,"table")&&fe(11!==t.nodeType?t:t.firstChild,"tr")&&ce(e).children("tbody")[0]||e}function Ie(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function We(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Fe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(_.hasData(e)&&(s=_.get(e).events))for(i in _.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)ce.event.add(t,i,s[i][n]);z.hasData(e)&&(o=z.access(e),a=ce.extend({},o),z.set(t,a))}}function $e(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=v(d);if(h||1<f&&"string"==typeof d&&!le.checkClone&&Pe.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),$e(t,r,i,o)});if(f&&(t=(e=Ae(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=ce.map(Se(e,"script"),Ie)).length;c<f;c++)u=e,c!==p&&(u=ce.clone(u,!0,!0),s&&ce.merge(a,Se(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,ce.map(a,We),c=0;c<s;c++)u=a[c],Ce.test(u.type||"")&&!_.access(u,"globalEval")&&ce.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?ce._evalUrl&&!u.noModule&&ce._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):m(u.textContent.replace(Me,""),u,l))}return n}function Be(e,t,n){for(var r,i=t?ce.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||ce.cleanData(Se(r)),r.parentNode&&(n&&K(r)&&Ee(Se(r,"script")),r.parentNode.removeChild(r));return e}ce.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=K(e);if(!(le.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ce.isXMLDoc(e)))for(a=Se(c),r=0,i=(o=Se(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&we.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||Se(e),a=a||Se(c),r=0,i=o.length;r<i;r++)Fe(o[r],a[r]);else Fe(e,c);return 0<(a=Se(c,"script")).length&&Ee(a,!f&&Se(e,"script")),c},cleanData:function(e){for(var t,n,r,i=ce.event.special,o=0;void 0!==(n=e[o]);o++)if($(n)){if(t=n[_.expando]){if(t.events)for(r in t.events)i[r]?ce.event.remove(n,r):ce.removeEvent(n,r,t.handle);n[_.expando]=void 0}n[z.expando]&&(n[z.expando]=void 0)}}}),ce.fn.extend({detach:function(e){return Be(this,e,!0)},remove:function(e){return Be(this,e)},text:function(e){return M(this,function(e){return void 0===e?ce.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return $e(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Re(this,e).appendChild(e)})},prepend:function(){return $e(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Re(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(ce.cleanData(Se(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ce.clone(this,e,t)})},html:function(e){return M(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Oe.test(e)&&!ke[(Te.exec(e)||["",""])[1].toLowerCase()]){e=ce.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(ce.cleanData(Se(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return $e(this,arguments,function(e){var t=this.parentNode;ce.inArray(this,n)<0&&(ce.cleanData(Se(this)),t&&t.replaceChild(e,this))},n)}}),ce.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){ce.fn[e]=function(e){for(var t,n=[],r=ce(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),ce(r[o])[a](t),s.apply(n,t.get());return this.pushStack(n)}});var _e=new RegExp("^("+G+")(?!px)[a-z%]+$","i"),ze=/^--/,Xe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=ie),t.getComputedStyle(e)},Ue=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ve=new RegExp(Q.join("|"),"i");function Ge(e,t,n){var r,i,o,a,s=ze.test(t),u=e.style;return(n=n||Xe(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace(ve,"$1")||void 0),""!==a||K(e)||(a=ce.style(e,t)),!le.pixelBoxStyles()&&_e.test(a)&&Ve.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function Ye(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",J.appendChild(u).appendChild(l);var e=ie.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),J.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=C.createElement("div"),l=C.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",le.clearCloneStyle="content-box"===l.style.backgroundClip,ce.extend(le,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=C.createElement("table"),t=C.createElement("tr"),n=C.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="box-sizing:content-box;border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",J.appendChild(e).appendChild(t).appendChild(n),r=ie.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,J.removeChild(e)),a}}))}();var Qe=["Webkit","Moz","ms"],Je=C.createElement("div").style,Ke={};function Ze(e){var t=ce.cssProps[e]||Ke[e];return t||(e in Je?e:Ke[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Qe.length;while(n--)if((e=Qe[n]+t)in Je)return e}(e)||e)}var et=/^(none|table(?!-c[ea]).+)/,tt={position:"absolute",visibility:"hidden",display:"block"},nt={letterSpacing:"0",fontWeight:"400"};function rt(e,t,n){var r=Y.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function it(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0,l=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=ce.css(e,n+Q[a],!0,i)),r?("content"===n&&(u-=ce.css(e,"padding"+Q[a],!0,i)),"margin"!==n&&(u-=ce.css(e,"border"+Q[a]+"Width",!0,i))):(u+=ce.css(e,"padding"+Q[a],!0,i),"padding"!==n?u+=ce.css(e,"border"+Q[a]+"Width",!0,i):s+=ce.css(e,"border"+Q[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u+l}function ot(e,t,n){var r=Xe(e),i=(!le.boxSizingReliable()||n)&&"border-box"===ce.css(e,"boxSizing",!1,r),o=i,a=Ge(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(_e.test(a)){if(!n)return a;a="auto"}return(!le.boxSizingReliable()&&i||!le.reliableTrDimensions()&&fe(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===ce.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===ce.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+it(e,t,n||(i?"border":"content"),o,r,a)+"px"}function at(e,t,n,r,i){return new at.prototype.init(e,t,n,r,i)}ce.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ge(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=F(t),u=ze.test(t),l=e.style;if(u||(t=Ze(s)),a=ce.cssHooks[t]||ce.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=Y.exec(n))&&i[1]&&(n=te(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(ce.cssNumber[s]?"":"px")),le.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=F(t);return ze.test(t)||(t=Ze(s)),(a=ce.cssHooks[t]||ce.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Ge(e,t,r)),"normal"===i&&t in nt&&(i=nt[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),ce.each(["height","width"],function(e,u){ce.cssHooks[u]={get:function(e,t,n){if(t)return!et.test(ce.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?ot(e,u,n):Ue(e,tt,function(){return ot(e,u,n)})},set:function(e,t,n){var r,i=Xe(e),o=!le.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===ce.css(e,"boxSizing",!1,i),s=n?it(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-it(e,u,"border",!1,i)-.5)),s&&(r=Y.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=ce.css(e,u)),rt(0,t,s)}}}),ce.cssHooks.marginLeft=Ye(le.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Ge(e,"marginLeft"))||e.getBoundingClientRect().left-Ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),ce.each({margin:"",padding:"",border:"Width"},function(i,o){ce.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+Q[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(ce.cssHooks[i+o].set=rt)}),ce.fn.extend({css:function(e,t){return M(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Xe(e),i=t.length;a<i;a++)o[t[a]]=ce.css(e,t[a],!1,r);return o}return void 0!==n?ce.style(e,t,n):ce.css(e,t)},e,t,1<arguments.length)}}),((ce.Tween=at).prototype={constructor:at,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||ce.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ce.cssNumber[n]?"":"px")},cur:function(){var e=at.propHooks[this.prop];return e&&e.get?e.get(this):at.propHooks._default.get(this)},run:function(e){var t,n=at.propHooks[this.prop];return this.options.duration?this.pos=t=ce.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):at.propHooks._default.set(this),this}}).init.prototype=at.prototype,(at.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=ce.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){ce.fx.step[e.prop]?ce.fx.step[e.prop](e):1!==e.elem.nodeType||!ce.cssHooks[e.prop]&&null==e.elem.style[Ze(e.prop)]?e.elem[e.prop]=e.now:ce.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=at.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ce.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},ce.fx=at.prototype.init,ce.fx.step={};var st,ut,lt,ct,ft=/^(?:toggle|show|hide)$/,pt=/queueHooks$/;function dt(){ut&&(!1===C.hidden&&ie.requestAnimationFrame?ie.requestAnimationFrame(dt):ie.setTimeout(dt,ce.fx.interval),ce.fx.tick())}function ht(){return ie.setTimeout(function(){st=void 0}),st=Date.now()}function gt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=Q[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function vt(e,t,n){for(var r,i=(yt.tweeners[t]||[]).concat(yt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function yt(o,e,t){var n,a,r=0,i=yt.prefilters.length,s=ce.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=st||ht(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:ce.extend({},e),opts:ce.extend(!0,{specialEasing:{},easing:ce.easing._default},t),originalProperties:e,originalOptions:t,startTime:st||ht(),duration:t.duration,tweens:[],createTween:function(e,t){var n=ce.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=F(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=ce.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=yt.prefilters[r].call(l,o,c,l.opts))return v(n.stop)&&(ce._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return ce.map(c,vt,l),v(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),ce.fx.timer(ce.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}ce.Animation=ce.extend(yt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return te(n.elem,e,Y.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(D);for(var n,r=0,i=e.length;r<i;r++)n=e[r],yt.tweeners[n]=yt.tweeners[n]||[],yt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ee(e),v=_.get(e,"fxshow");for(r in n.queue||(null==(a=ce._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,ce.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ft.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||ce.style(e,r)}if((u=!ce.isEmptyObject(t))||!ce.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=_.get(e,"display")),"none"===(c=ce.css(e,"display"))&&(l?c=l:(re([e],!0),l=e.style.display||l,c=ce.css(e,"display"),re([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===ce.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=_.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&re([e],!0),p.done(function(){for(r in g||re([e]),_.remove(e,"fxshow"),d)ce.style(e,r,d[r])})),u=vt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?yt.prefilters.unshift(e):yt.prefilters.push(e)}}),ce.speed=function(e,t,n){var r=e&&"object"==typeof e?ce.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t};return ce.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in ce.fx.speeds?r.duration=ce.fx.speeds[r.duration]:r.duration=ce.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){v(r.old)&&r.old.call(this),r.queue&&ce.dequeue(this,r.queue)},r},ce.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ee).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=ce.isEmptyObject(t),o=ce.speed(e,n,r),a=function(){var e=yt(this,ce.extend({},t),o);(i||_.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=ce.timers,r=_.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&pt.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||ce.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=_.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=ce.timers,o=n?n.length:0;for(t.finish=!0,ce.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),ce.each(["toggle","show","hide"],function(e,r){var i=ce.fn[r];ce.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(gt(r,!0),e,t,n)}}),ce.each({slideDown:gt("show"),slideUp:gt("hide"),slideToggle:gt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){ce.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),ce.timers=[],ce.fx.tick=function(){var e,t=0,n=ce.timers;for(st=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||ce.fx.stop(),st=void 0},ce.fx.timer=function(e){ce.timers.push(e),ce.fx.start()},ce.fx.interval=13,ce.fx.start=function(){ut||(ut=!0,dt())},ce.fx.stop=function(){ut=null},ce.fx.speeds={slow:600,fast:200,_default:400},ce.fn.delay=function(r,e){return r=ce.fx&&ce.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=ie.setTimeout(e,r);t.stop=function(){ie.clearTimeout(n)}})},lt=C.createElement("input"),ct=C.createElement("select").appendChild(C.createElement("option")),lt.type="checkbox",le.checkOn=""!==lt.value,le.optSelected=ct.selected,(lt=C.createElement("input")).value="t",lt.type="radio",le.radioValue="t"===lt.value;var mt,xt=ce.expr.attrHandle;ce.fn.extend({attr:function(e,t){return M(this,ce.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){ce.removeAttr(this,e)})}}),ce.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?ce.prop(e,t,n):(1===o&&ce.isXMLDoc(e)||(i=ce.attrHooks[t.toLowerCase()]||(ce.expr.match.bool.test(t)?mt:void 0)),void 0!==n?null===n?void ce.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=ce.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!le.radioValue&&"radio"===t&&fe(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(D);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),mt={set:function(e,t,n){return!1===t?ce.removeAttr(e,n):e.setAttribute(n,n),n}},ce.each(ce.expr.match.bool.source.match(/\w+/g),function(e,t){var a=xt[t]||ce.find.attr;xt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=xt[o],xt[o]=r,r=null!=a(e,t,n)?o:null,xt[o]=i),r}});var bt=/^(?:input|select|textarea|button)$/i,wt=/^(?:a|area)$/i;function Tt(e){return(e.match(D)||[]).join(" ")}function Ct(e){return e.getAttribute&&e.getAttribute("class")||""}function kt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(D)||[]}ce.fn.extend({prop:function(e,t){return M(this,ce.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[ce.propFix[e]||e]})}}),ce.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&ce.isXMLDoc(e)||(t=ce.propFix[t]||t,i=ce.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=ce.find.attr(e,"tabindex");return t?parseInt(t,10):bt.test(e.nodeName)||wt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),le.optSelected||(ce.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),ce.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ce.propFix[this.toLowerCase()]=this}),ce.fn.extend({addClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).addClass(t.call(this,e,Ct(this)))}):(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).removeClass(t.call(this,e,Ct(this)))}):arguments.length?(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return v(t)?this.each(function(e){ce(this).toggleClass(t.call(this,e,Ct(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=kt(t),this.each(function(){if(s)for(o=ce(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=Ct(this))&&_.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":_.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+Tt(Ct(n))+" ").indexOf(t))return!0;return!1}});var St=/\r/g;ce.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=v(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,ce(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=ce.map(t,function(e){return null==e?"":e+""})),(r=ce.valHooks[this.type]||ce.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=ce.valHooks[t.type]||ce.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(St,""):null==e?"":e:void 0}}),ce.extend({valHooks:{option:{get:function(e){var t=ce.find.attr(e,"value");return null!=t?t:Tt(ce.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!fe(n.parentNode,"optgroup"))){if(t=ce(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=ce.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<ce.inArray(ce.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),ce.each(["radio","checkbox"],function(){ce.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<ce.inArray(ce(e).val(),t)}},le.checkOn||(ce.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Et=ie.location,jt={guid:Date.now()},At=/\?/;ce.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new ie.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||ce.error("Invalid XML: "+(n?ce.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Dt=/^(?:focusinfocus|focusoutblur)$/,Nt=function(e){e.stopPropagation()};ce.extend(ce.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||C],d=ue.call(e,"type")?e.type:e,h=ue.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||C,3!==n.nodeType&&8!==n.nodeType&&!Dt.test(d+ce.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[ce.expando]?e:new ce.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:ce.makeArray(t,[e]),c=ce.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!y(n)){for(s=c.delegateType||d,Dt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||C)&&p.push(a.defaultView||a.parentWindow||ie)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(_.get(o,"events")||Object.create(null))[e.type]&&_.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&$(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!$(n)||u&&v(n[d])&&!y(n)&&((a=n[u])&&(n[u]=null),ce.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Nt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Nt),ce.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=ce.extend(new ce.Event,n,{type:e,isSimulated:!0});ce.event.trigger(r,null,t)}}),ce.fn.extend({trigger:function(e,t){return this.each(function(){ce.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ce.event.trigger(e,t,n,!0)}});var qt=/\[\]$/,Lt=/\r?\n/g,Ht=/^(?:submit|button|image|reset|file)$/i,Ot=/^(?:input|select|textarea|keygen)/i;function Pt(n,e,r,i){var t;if(Array.isArray(e))ce.each(e,function(e,t){r||qt.test(n)?i(n,t):Pt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==x(e))i(n,e);else for(t in e)Pt(n+"["+t+"]",e[t],r,i)}ce.param=function(e,t){var n,r=[],i=function(e,t){var n=v(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!ce.isPlainObject(e))ce.each(e,function(){i(this.name,this.value)});else for(n in e)Pt(n,e[n],t,i);return r.join("&")},ce.fn.extend({serialize:function(){return ce.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ce.prop(this,"elements");return e?ce.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ce(this).is(":disabled")&&Ot.test(this.nodeName)&&!Ht.test(e)&&(this.checked||!we.test(e))}).map(function(e,t){var n=ce(this).val();return null==n?null:Array.isArray(n)?ce.map(n,function(e){return{name:t.name,value:e.replace(Lt,"\r\n")}}):{name:t.name,value:n.replace(Lt,"\r\n")}}).get()}});var Mt=/%20/g,Rt=/#.*$/,It=/([?&])_=[^&]*/,Wt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ft=/^(?:GET|HEAD)$/,$t=/^\/\//,Bt={},_t={},zt="*/".concat("*"),Xt=C.createElement("a");function Ut(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(D)||[];if(v(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Vt(t,i,o,a){var s={},u=t===_t;function l(e){var r;return s[e]=!0,ce.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Gt(e,t){var n,r,i=ce.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&ce.extend(!0,e,r),e}Xt.href=Et.href,ce.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":zt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":ce.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Gt(Gt(e,ce.ajaxSettings),t):Gt(ce.ajaxSettings,e)},ajaxPrefilter:Ut(Bt),ajaxTransport:Ut(_t),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=ce.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?ce(y):ce.event,x=ce.Deferred(),b=ce.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Wt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace($t,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(D)||[""],null==v.crossDomain){r=C.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Xt.protocol+"//"+Xt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=ce.param(v.data,v.traditional)),Vt(Bt,v,t,T),h)return T;for(i in(g=ce.event&&v.global)&&0==ce.active++&&ce.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ft.test(v.type),f=v.url.replace(Rt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Mt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(At.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(It,"$1"),o=(At.test(f)?"&":"?")+"_="+jt.guid+++o),v.url=f+o),v.ifModified&&(ce.lastModified[f]&&T.setRequestHeader("If-Modified-Since",ce.lastModified[f]),ce.etag[f]&&T.setRequestHeader("If-None-Match",ce.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+zt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Vt(_t,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=ie.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&ie.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<ce.inArray("script",v.dataTypes)&&ce.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(ce.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(ce.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--ce.active||ce.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return ce.get(e,t,n,"json")},getScript:function(e,t){return ce.get(e,void 0,t,"script")}}),ce.each(["get","post"],function(e,i){ce[i]=function(e,t,n,r){return v(t)&&(r=r||n,n=t,t=void 0),ce.ajax(ce.extend({url:e,type:i,dataType:r,data:t,success:n},ce.isPlainObject(e)&&e))}}),ce.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),ce._evalUrl=function(e,t,n){return ce.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){ce.globalEval(e,t,n)}})},ce.fn.extend({wrapAll:function(e){var t;return this[0]&&(v(e)&&(e=e.call(this[0])),t=ce(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return v(n)?this.each(function(e){ce(this).wrapInner(n.call(this,e))}):this.each(function(){var e=ce(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=v(t);return this.each(function(e){ce(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){ce(this).replaceWith(this.childNodes)}),this}}),ce.expr.pseudos.hidden=function(e){return!ce.expr.pseudos.visible(e)},ce.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},ce.ajaxSettings.xhr=function(){try{return new ie.XMLHttpRequest}catch(e){}};var Yt={0:200,1223:204},Qt=ce.ajaxSettings.xhr();le.cors=!!Qt&&"withCredentials"in Qt,le.ajax=Qt=!!Qt,ce.ajaxTransport(function(i){var o,a;if(le.cors||Qt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Yt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&ie.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),ce.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),ce.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return ce.globalEval(e),e}}}),ce.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),ce.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=ce("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),C.head.appendChild(r[0])},abort:function(){i&&i()}}});var Jt,Kt=[],Zt=/(=)\?(?=&|$)|\?\?/;ce.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Kt.pop()||ce.expando+"_"+jt.guid++;return this[e]=!0,e}}),ce.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Zt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Zt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Zt,"$1"+r):!1!==e.jsonp&&(e.url+=(At.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||ce.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=ie[r],ie[r]=function(){o=arguments},n.always(function(){void 0===i?ce(ie).removeProp(r):ie[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Kt.push(r)),o&&v(i)&&i(o[0]),o=i=void 0}),"script"}),le.createHTMLDocument=((Jt=C.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Jt.childNodes.length),ce.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(le.createHTMLDocument?((r=(t=C.implementation.createHTMLDocument("")).createElement("base")).href=C.location.href,t.head.appendChild(r)):t=C),o=!n&&[],(i=w.exec(e))?[t.createElement(i[1])]:(i=Ae([e],t,o),o&&o.length&&ce(o).remove(),ce.merge([],i.childNodes)));var r,i,o},ce.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=Tt(e.slice(s)),e=e.slice(0,s)),v(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&ce.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?ce("<div>").append(ce.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},ce.expr.pseudos.animated=function(t){return ce.grep(ce.timers,function(e){return t===e.elem}).length},ce.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=ce.css(e,"position"),c=ce(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=ce.css(e,"top"),u=ce.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),v(t)&&(t=t.call(e,n,ce.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},ce.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){ce.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===ce.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===ce.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=ce(e).offset()).top+=ce.css(e,"borderTopWidth",!0),i.left+=ce.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-ce.css(r,"marginTop",!0),left:t.left-i.left-ce.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===ce.css(e,"position"))e=e.offsetParent;return e||J})}}),ce.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;ce.fn[t]=function(e){return M(this,function(e,t,n){var r;if(y(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),ce.each(["top","left"],function(e,n){ce.cssHooks[n]=Ye(le.pixelPosition,function(e,t){if(t)return t=Ge(e,n),_e.test(t)?ce(e).position()[n]+"px":t})}),ce.each({Height:"height",Width:"width"},function(a,s){ce.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){ce.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return M(this,function(e,t,n){var r;return y(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?ce.css(e,t,i):ce.style(e,t,n,i)},s,n?e:void 0,n)}})}),ce.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ce.fn[t]=function(e){return this.on(t,e)}}),ce.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){ce.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var en=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;ce.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return r=ae.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(ae.call(arguments)))}).guid=e.guid=e.guid||ce.guid++,i},ce.holdReady=function(e){e?ce.readyWait++:ce.ready(!0)},ce.isArray=Array.isArray,ce.parseJSON=JSON.parse,ce.nodeName=fe,ce.isFunction=v,ce.isWindow=y,ce.camelCase=F,ce.type=x,ce.now=Date.now,ce.isNumeric=function(e){var t=ce.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},ce.trim=function(e){return null==e?"":(e+"").replace(en,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return ce});var tn=ie.jQuery,nn=ie.$;return ce.noConflict=function(e){return ie.$===ce&&(ie.$=nn),e&&ie.jQuery===ce&&(ie.jQuery=tn),ce},"undefined"==typeof e&&(ie.jQuery=ie.$=ce),ce});

;// svg-pan-zoom v3.6.1
// https://github.com/ariutta/svg-pan-zoom
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var SvgUtils = require("./svg-utilities");

module.exports = {
  enable: function(instance) {
    // Select (and create if necessary) defs
    var defs = instance.svg.querySelector("defs");
    if (!defs) {
      defs = document.createElementNS(SvgUtils.svgNS, "defs");
      instance.svg.appendChild(defs);
    }

    // Check for style element, and create it if it doesn't exist
    var styleEl = defs.querySelector("style#svg-pan-zoom-controls-styles");
    if (!styleEl) {
      var style = document.createElementNS(SvgUtils.svgNS, "style");
      style.setAttribute("id", "svg-pan-zoom-controls-styles");
      style.setAttribute("type", "text/css");
      style.textContent =
        ".svg-pan-zoom-control { cursor: pointer; fill: black; fill-opacity: 0.333; } .svg-pan-zoom-control:hover { fill-opacity: 0.8; } .svg-pan-zoom-control-background { fill: white; fill-opacity: 0.5; } .svg-pan-zoom-control-background { fill-opacity: 0.8; }";
      defs.appendChild(style);
    }

    // Zoom Group
    var zoomGroup = document.createElementNS(SvgUtils.svgNS, "g");
    zoomGroup.setAttribute("id", "svg-pan-zoom-controls");
    zoomGroup.setAttribute(
      "transform",
      "translate(" +
        (instance.width - 70) +
        " " +
        (instance.height - 76) +
        ") scale(0.75)"
    );
    zoomGroup.setAttribute("class", "svg-pan-zoom-control");

    // Control elements
    zoomGroup.appendChild(this._createZoomIn(instance));
    zoomGroup.appendChild(this._createZoomReset(instance));
    zoomGroup.appendChild(this._createZoomOut(instance));

    // Finally append created element
    instance.svg.appendChild(zoomGroup);

    // Cache control instance
    instance.controlIcons = zoomGroup;
  },

  _createZoomIn: function(instance) {
    var zoomIn = document.createElementNS(SvgUtils.svgNS, "g");
    zoomIn.setAttribute("id", "svg-pan-zoom-zoom-in");
    zoomIn.setAttribute("transform", "translate(30.5 5) scale(0.015)");
    zoomIn.setAttribute("class", "svg-pan-zoom-control");
    zoomIn.addEventListener(
      "click",
      function() {
        instance.getPublicInstance().zoomIn();
      },
      false
    );
    zoomIn.addEventListener(
      "touchstart",
      function() {
        instance.getPublicInstance().zoomIn();
      },
      false
    );

    var zoomInBackground = document.createElementNS(SvgUtils.svgNS, "rect"); // TODO change these background space fillers to rounded rectangles so they look prettier
    zoomInBackground.setAttribute("x", "0");
    zoomInBackground.setAttribute("y", "0");
    zoomInBackground.setAttribute("width", "1500"); // larger than expected because the whole group is transformed to scale down
    zoomInBackground.setAttribute("height", "1400");
    zoomInBackground.setAttribute("class", "svg-pan-zoom-control-background");
    zoomIn.appendChild(zoomInBackground);

    var zoomInShape = document.createElementNS(SvgUtils.svgNS, "path");
    zoomInShape.setAttribute(
      "d",
      "M1280 576v128q0 26 -19 45t-45 19h-320v320q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-320h-320q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h320v-320q0 -26 19 -45t45 -19h128q26 0 45 19t19 45v320h320q26 0 45 19t19 45zM1536 1120v-960 q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"
    );
    zoomInShape.setAttribute("class", "svg-pan-zoom-control-element");
    zoomIn.appendChild(zoomInShape);

    return zoomIn;
  },

  _createZoomReset: function(instance) {
    // reset
    var resetPanZoomControl = document.createElementNS(SvgUtils.svgNS, "g");
    resetPanZoomControl.setAttribute("id", "svg-pan-zoom-reset-pan-zoom");
    resetPanZoomControl.setAttribute("transform", "translate(5 35) scale(0.4)");
    resetPanZoomControl.setAttribute("class", "svg-pan-zoom-control");
    resetPanZoomControl.addEventListener(
      "click",
      function() {
        instance.getPublicInstance().reset();
      },
      false
    );
    resetPanZoomControl.addEventListener(
      "touchstart",
      function() {
        instance.getPublicInstance().reset();
      },
      false
    );

    var resetPanZoomControlBackground = document.createElementNS(
      SvgUtils.svgNS,
      "rect"
    ); // TODO change these background space fillers to rounded rectangles so they look prettier
    resetPanZoomControlBackground.setAttribute("x", "2");
    resetPanZoomControlBackground.setAttribute("y", "2");
    resetPanZoomControlBackground.setAttribute("width", "182"); // larger than expected because the whole group is transformed to scale down
    resetPanZoomControlBackground.setAttribute("height", "58");
    resetPanZoomControlBackground.setAttribute(
      "class",
      "svg-pan-zoom-control-background"
    );
    resetPanZoomControl.appendChild(resetPanZoomControlBackground);

    var resetPanZoomControlShape1 = document.createElementNS(
      SvgUtils.svgNS,
      "path"
    );
    resetPanZoomControlShape1.setAttribute(
      "d",
      "M33.051,20.632c-0.742-0.406-1.854-0.609-3.338-0.609h-7.969v9.281h7.769c1.543,0,2.701-0.188,3.473-0.562c1.365-0.656,2.048-1.953,2.048-3.891C35.032,22.757,34.372,21.351,33.051,20.632z"
    );
    resetPanZoomControlShape1.setAttribute(
      "class",
      "svg-pan-zoom-control-element"
    );
    resetPanZoomControl.appendChild(resetPanZoomControlShape1);

    var resetPanZoomControlShape2 = document.createElementNS(
      SvgUtils.svgNS,
      "path"
    );
    resetPanZoomControlShape2.setAttribute(
      "d",
      "M170.231,0.5H15.847C7.102,0.5,0.5,5.708,0.5,11.84v38.861C0.5,56.833,7.102,61.5,15.847,61.5h154.384c8.745,0,15.269-4.667,15.269-10.798V11.84C185.5,5.708,178.976,0.5,170.231,0.5z M42.837,48.569h-7.969c-0.219-0.766-0.375-1.383-0.469-1.852c-0.188-0.969-0.289-1.961-0.305-2.977l-0.047-3.211c-0.03-2.203-0.41-3.672-1.142-4.406c-0.732-0.734-2.103-1.102-4.113-1.102h-7.05v13.547h-7.055V14.022h16.524c2.361,0.047,4.178,0.344,5.45,0.891c1.272,0.547,2.351,1.352,3.234,2.414c0.731,0.875,1.31,1.844,1.737,2.906s0.64,2.273,0.64,3.633c0,1.641-0.414,3.254-1.242,4.84s-2.195,2.707-4.102,3.363c1.594,0.641,2.723,1.551,3.387,2.73s0.996,2.98,0.996,5.402v2.32c0,1.578,0.063,2.648,0.19,3.211c0.19,0.891,0.635,1.547,1.333,1.969V48.569z M75.579,48.569h-26.18V14.022h25.336v6.117H56.454v7.336h16.781v6H56.454v8.883h19.125V48.569z M104.497,46.331c-2.44,2.086-5.887,3.129-10.34,3.129c-4.548,0-8.125-1.027-10.731-3.082s-3.909-4.879-3.909-8.473h6.891c0.224,1.578,0.662,2.758,1.316,3.539c1.196,1.422,3.246,2.133,6.15,2.133c1.739,0,3.151-0.188,4.236-0.562c2.058-0.719,3.087-2.055,3.087-4.008c0-1.141-0.504-2.023-1.512-2.648c-1.008-0.609-2.607-1.148-4.796-1.617l-3.74-0.82c-3.676-0.812-6.201-1.695-7.576-2.648c-2.328-1.594-3.492-4.086-3.492-7.477c0-3.094,1.139-5.664,3.417-7.711s5.623-3.07,10.036-3.07c3.685,0,6.829,0.965,9.431,2.895c2.602,1.93,3.966,4.73,4.093,8.402h-6.938c-0.128-2.078-1.057-3.555-2.787-4.43c-1.154-0.578-2.587-0.867-4.301-0.867c-1.907,0-3.428,0.375-4.565,1.125c-1.138,0.75-1.706,1.797-1.706,3.141c0,1.234,0.561,2.156,1.682,2.766c0.721,0.406,2.25,0.883,4.589,1.43l6.063,1.43c2.657,0.625,4.648,1.461,5.975,2.508c2.059,1.625,3.089,3.977,3.089,7.055C108.157,41.624,106.937,44.245,104.497,46.331z M139.61,48.569h-26.18V14.022h25.336v6.117h-18.281v7.336h16.781v6h-16.781v8.883h19.125V48.569z M170.337,20.14h-10.336v28.43h-7.266V20.14h-10.383v-6.117h27.984V20.14z"
    );
    resetPanZoomControlShape2.setAttribute(
      "class",
      "svg-pan-zoom-control-element"
    );
    resetPanZoomControl.appendChild(resetPanZoomControlShape2);

    return resetPanZoomControl;
  },

  _createZoomOut: function(instance) {
    // zoom out
    var zoomOut = document.createElementNS(SvgUtils.svgNS, "g");
    zoomOut.setAttribute("id", "svg-pan-zoom-zoom-out");
    zoomOut.setAttribute("transform", "translate(30.5 70) scale(0.015)");
    zoomOut.setAttribute("class", "svg-pan-zoom-control");
    zoomOut.addEventListener(
      "click",
      function() {
        instance.getPublicInstance().zoomOut();
      },
      false
    );
    zoomOut.addEventListener(
      "touchstart",
      function() {
        instance.getPublicInstance().zoomOut();
      },
      false
    );

    var zoomOutBackground = document.createElementNS(SvgUtils.svgNS, "rect"); // TODO change these background space fillers to rounded rectangles so they look prettier
    zoomOutBackground.setAttribute("x", "0");
    zoomOutBackground.setAttribute("y", "0");
    zoomOutBackground.setAttribute("width", "1500"); // larger than expected because the whole group is transformed to scale down
    zoomOutBackground.setAttribute("height", "1400");
    zoomOutBackground.setAttribute("class", "svg-pan-zoom-control-background");
    zoomOut.appendChild(zoomOutBackground);

    var zoomOutShape = document.createElementNS(SvgUtils.svgNS, "path");
    zoomOutShape.setAttribute(
      "d",
      "M1280 576v128q0 26 -19 45t-45 19h-896q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h896q26 0 45 19t19 45zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5 t84.5 -203.5z"
    );
    zoomOutShape.setAttribute("class", "svg-pan-zoom-control-element");
    zoomOut.appendChild(zoomOutShape);

    return zoomOut;
  },

  disable: function(instance) {
    if (instance.controlIcons) {
      instance.controlIcons.parentNode.removeChild(instance.controlIcons);
      instance.controlIcons = null;
    }
  }
};

},{"./svg-utilities":5}],2:[function(require,module,exports){
var SvgUtils = require("./svg-utilities"),
  Utils = require("./utilities");

var ShadowViewport = function(viewport, options) {
  this.init(viewport, options);
};

/**
 * Initialization
 *
 * @param  {SVGElement} viewport
 * @param  {Object} options
 */
ShadowViewport.prototype.init = function(viewport, options) {
  // DOM Elements
  this.viewport = viewport;
  this.options = options;

  // State cache
  this.originalState = { zoom: 1, x: 0, y: 0 };
  this.activeState = { zoom: 1, x: 0, y: 0 };

  this.updateCTMCached = Utils.proxy(this.updateCTM, this);

  // Create a custom requestAnimationFrame taking in account refreshRate
  this.requestAnimationFrame = Utils.createRequestAnimationFrame(
    this.options.refreshRate
  );

  // ViewBox
  this.viewBox = { x: 0, y: 0, width: 0, height: 0 };
  this.cacheViewBox();

  // Process CTM
  var newCTM = this.processCTM();

  // Update viewport CTM and cache zoom and pan
  this.setCTM(newCTM);

  // Update CTM in this frame
  this.updateCTM();
};

/**
 * Cache initial viewBox value
 * If no viewBox is defined, then use viewport size/position instead for viewBox values
 */
ShadowViewport.prototype.cacheViewBox = function() {
  var svgViewBox = this.options.svg.getAttribute("viewBox");

  if (svgViewBox) {
    var viewBoxValues = svgViewBox
      .split(/[\s\,]/)
      .filter(function(v) {
        return v;
      })
      .map(parseFloat);

    // Cache viewbox x and y offset
    this.viewBox.x = viewBoxValues[0];
    this.viewBox.y = viewBoxValues[1];
    this.viewBox.width = viewBoxValues[2];
    this.viewBox.height = viewBoxValues[3];

    var zoom = Math.min(
      this.options.width / this.viewBox.width,
      this.options.height / this.viewBox.height
    );

    // Update active state
    this.activeState.zoom = zoom;
    this.activeState.x = (this.options.width - this.viewBox.width * zoom) / 2;
    this.activeState.y = (this.options.height - this.viewBox.height * zoom) / 2;

    // Force updating CTM
    this.updateCTMOnNextFrame();

    this.options.svg.removeAttribute("viewBox");
  } else {
    this.simpleViewBoxCache();
  }
};

/**
 * Recalculate viewport sizes and update viewBox cache
 */
ShadowViewport.prototype.simpleViewBoxCache = function() {
  var bBox = this.viewport.getBBox();

  this.viewBox.x = bBox.x;
  this.viewBox.y = bBox.y;
  this.viewBox.width = bBox.width;
  this.viewBox.height = bBox.height;
};

/**
 * Returns a viewbox object. Safe to alter
 *
 * @return {Object} viewbox object
 */
ShadowViewport.prototype.getViewBox = function() {
  return Utils.extend({}, this.viewBox);
};

/**
 * Get initial zoom and pan values. Save them into originalState
 * Parses viewBox attribute to alter initial sizes
 *
 * @return {CTM} CTM object based on options
 */
ShadowViewport.prototype.processCTM = function() {
  var newCTM = this.getCTM();

  if (this.options.fit || this.options.contain) {
    var newScale;
    if (this.options.fit) {
      newScale = Math.min(
        this.options.width / this.viewBox.width,
        this.options.height / this.viewBox.height
      );
    } else {
      newScale = Math.max(
        this.options.width / this.viewBox.width,
        this.options.height / this.viewBox.height
      );
    }

    newCTM.a = newScale; //x-scale
    newCTM.d = newScale; //y-scale
    newCTM.e = -this.viewBox.x * newScale; //x-transform
    newCTM.f = -this.viewBox.y * newScale; //y-transform
  }

  if (this.options.center) {
    var offsetX =
        (this.options.width -
          (this.viewBox.width + this.viewBox.x * 2) * newCTM.a) *
        0.5,
      offsetY =
        (this.options.height -
          (this.viewBox.height + this.viewBox.y * 2) * newCTM.a) *
        0.5;

    newCTM.e = offsetX;
    newCTM.f = offsetY;
  }

  // Cache initial values. Based on activeState and fix+center opitons
  this.originalState.zoom = newCTM.a;
  this.originalState.x = newCTM.e;
  this.originalState.y = newCTM.f;

  return newCTM;
};

/**
 * Return originalState object. Safe to alter
 *
 * @return {Object}
 */
ShadowViewport.prototype.getOriginalState = function() {
  return Utils.extend({}, this.originalState);
};

/**
 * Return actualState object. Safe to alter
 *
 * @return {Object}
 */
ShadowViewport.prototype.getState = function() {
  return Utils.extend({}, this.activeState);
};

/**
 * Get zoom scale
 *
 * @return {Float} zoom scale
 */
ShadowViewport.prototype.getZoom = function() {
  return this.activeState.zoom;
};

/**
 * Get zoom scale for pubilc usage
 *
 * @return {Float} zoom scale
 */
ShadowViewport.prototype.getRelativeZoom = function() {
  return this.activeState.zoom / this.originalState.zoom;
};

/**
 * Compute zoom scale for pubilc usage
 *
 * @return {Float} zoom scale
 */
ShadowViewport.prototype.computeRelativeZoom = function(scale) {
  return scale / this.originalState.zoom;
};

/**
 * Get pan
 *
 * @return {Object}
 */
ShadowViewport.prototype.getPan = function() {
  return { x: this.activeState.x, y: this.activeState.y };
};

/**
 * Return cached viewport CTM value that can be safely modified
 *
 * @return {SVGMatrix}
 */
ShadowViewport.prototype.getCTM = function() {
  var safeCTM = this.options.svg.createSVGMatrix();

  // Copy values manually as in FF they are not itterable
  safeCTM.a = this.activeState.zoom;
  safeCTM.b = 0;
  safeCTM.c = 0;
  safeCTM.d = this.activeState.zoom;
  safeCTM.e = this.activeState.x;
  safeCTM.f = this.activeState.y;

  return safeCTM;
};

/**
 * Set a new CTM
 *
 * @param {SVGMatrix} newCTM
 */
ShadowViewport.prototype.setCTM = function(newCTM) {
  var willZoom = this.isZoomDifferent(newCTM),
    willPan = this.isPanDifferent(newCTM);

  if (willZoom || willPan) {
    // Before zoom
    if (willZoom) {
      // If returns false then cancel zooming
      if (
        this.options.beforeZoom(
          this.getRelativeZoom(),
          this.computeRelativeZoom(newCTM.a)
        ) === false
      ) {
        newCTM.a = newCTM.d = this.activeState.zoom;
        willZoom = false;
      } else {
        this.updateCache(newCTM);
        this.options.onZoom(this.getRelativeZoom());
      }
    }

    // Before pan
    if (willPan) {
      var preventPan = this.options.beforePan(this.getPan(), {
          x: newCTM.e,
          y: newCTM.f
        }),
        // If prevent pan is an object
        preventPanX = false,
        preventPanY = false;

      // If prevent pan is Boolean false
      if (preventPan === false) {
        // Set x and y same as before
        newCTM.e = this.getPan().x;
        newCTM.f = this.getPan().y;

        preventPanX = preventPanY = true;
      } else if (Utils.isObject(preventPan)) {
        // Check for X axes attribute
        if (preventPan.x === false) {
          // Prevent panning on x axes
          newCTM.e = this.getPan().x;
          preventPanX = true;
        } else if (Utils.isNumber(preventPan.x)) {
          // Set a custom pan value
          newCTM.e = preventPan.x;
        }

        // Check for Y axes attribute
        if (preventPan.y === false) {
          // Prevent panning on x axes
          newCTM.f = this.getPan().y;
          preventPanY = true;
        } else if (Utils.isNumber(preventPan.y)) {
          // Set a custom pan value
          newCTM.f = preventPan.y;
        }
      }

      // Update willPan flag
      // Check if newCTM is still different
      if ((preventPanX && preventPanY) || !this.isPanDifferent(newCTM)) {
        willPan = false;
      } else {
        this.updateCache(newCTM);
        this.options.onPan(this.getPan());
      }
    }

    // Check again if should zoom or pan
    if (willZoom || willPan) {
      this.updateCTMOnNextFrame();
    }
  }
};

ShadowViewport.prototype.isZoomDifferent = function(newCTM) {
  return this.activeState.zoom !== newCTM.a;
};

ShadowViewport.prototype.isPanDifferent = function(newCTM) {
  return this.activeState.x !== newCTM.e || this.activeState.y !== newCTM.f;
};

/**
 * Update cached CTM and active state
 *
 * @param {SVGMatrix} newCTM
 */
ShadowViewport.prototype.updateCache = function(newCTM) {
  this.activeState.zoom = newCTM.a;
  this.activeState.x = newCTM.e;
  this.activeState.y = newCTM.f;
};

ShadowViewport.prototype.pendingUpdate = false;

/**
 * Place a request to update CTM on next Frame
 */
ShadowViewport.prototype.updateCTMOnNextFrame = function() {
  if (!this.pendingUpdate) {
    // Lock
    this.pendingUpdate = true;

    // Throttle next update
    this.requestAnimationFrame.call(window, this.updateCTMCached);
  }
};

/**
 * Update viewport CTM with cached CTM
 */
ShadowViewport.prototype.updateCTM = function() {
  var ctm = this.getCTM();

  // Updates SVG element
  SvgUtils.setCTM(this.viewport, ctm, this.defs);

  // Free the lock
  this.pendingUpdate = false;

  // Notify about the update
  if (this.options.onUpdatedCTM) {
    this.options.onUpdatedCTM(ctm);
  }
};

module.exports = function(viewport, options) {
  return new ShadowViewport(viewport, options);
};

},{"./svg-utilities":5,"./utilities":7}],3:[function(require,module,exports){
var svgPanZoom = require("./svg-pan-zoom.js");

// UMD module definition
(function(window, document) {
  // AMD
  if (typeof define === "function" && define.amd) {
    define("svg-pan-zoom", function() {
      return svgPanZoom;
    });
    // CMD
  } else if (typeof module !== "undefined" && module.exports) {
    module.exports = svgPanZoom;

    // Browser
    // Keep exporting globally as module.exports is available because of browserify
    window.svgPanZoom = svgPanZoom;
  }
})(window, document);

},{"./svg-pan-zoom.js":4}],4:[function(require,module,exports){
var Wheel = require("./uniwheel"),
  ControlIcons = require("./control-icons"),
  Utils = require("./utilities"),
  SvgUtils = require("./svg-utilities"),
  ShadowViewport = require("./shadow-viewport");

var SvgPanZoom = function(svg, options) {
  this.init(svg, options);
};

var optionsDefaults = {
  viewportSelector: ".svg-pan-zoom_viewport", // Viewport selector. Can be querySelector string or SVGElement
  panEnabled: true, // enable or disable panning (default enabled)
  controlIconsEnabled: false, // insert icons to give user an option in addition to mouse events to control pan/zoom (default disabled)
  zoomEnabled: true, // enable or disable zooming (default enabled)
  dblClickZoomEnabled: true, // enable or disable zooming by double clicking (default enabled)
  mouseWheelZoomEnabled: true, // enable or disable zooming by mouse wheel (default enabled)
  preventMouseEventsDefault: true, // enable or disable preventDefault for mouse events
  zoomScaleSensitivity: 0.1, // Zoom sensitivity
  minZoom: 0.5, // Minimum Zoom level
  maxZoom: 10, // Maximum Zoom level
  fit: true, // enable or disable viewport fit in SVG (default true)
  contain: false, // enable or disable viewport contain the svg (default false)
  center: true, // enable or disable viewport centering in SVG (default true)
  refreshRate: "auto", // Maximum number of frames per second (altering SVG's viewport)
  beforeZoom: null,
  onZoom: null,
  beforePan: null,
  onPan: null,
  customEventsHandler: null,
  eventsListenerElement: null,
  onUpdatedCTM: null
};

var passiveListenerOption = { passive: true };

SvgPanZoom.prototype.init = function(svg, options) {
  var that = this;

  this.svg = svg;
  this.defs = svg.querySelector("defs");

  // Add default attributes to SVG
  SvgUtils.setupSvgAttributes(this.svg);

  // Set options
  this.options = Utils.extend(Utils.extend({}, optionsDefaults), options);

  // Set default state
  this.state = "none";

  // Get dimensions
  var boundingClientRectNormalized = SvgUtils.getBoundingClientRectNormalized(
    svg
  );
  this.width = boundingClientRectNormalized.width;
  this.height = boundingClientRectNormalized.height;

  // Init shadow viewport
  this.viewport = ShadowViewport(
    SvgUtils.getOrCreateViewport(this.svg, this.options.viewportSelector),
    {
      svg: this.svg,
      width: this.width,
      height: this.height,
      fit: this.options.fit,
      contain: this.options.contain,
      center: this.options.center,
      refreshRate: this.options.refreshRate,
      // Put callbacks into functions as they can change through time
      beforeZoom: function(oldScale, newScale) {
        if (that.viewport && that.options.beforeZoom) {
          return that.options.beforeZoom(oldScale, newScale);
        }
      },
      onZoom: function(scale) {
        if (that.viewport && that.options.onZoom) {
          return that.options.onZoom(scale);
        }
      },
      beforePan: function(oldPoint, newPoint) {
        if (that.viewport && that.options.beforePan) {
          return that.options.beforePan(oldPoint, newPoint);
        }
      },
      onPan: function(point) {
        if (that.viewport && that.options.onPan) {
          return that.options.onPan(point);
        }
      },
      onUpdatedCTM: function(ctm) {
        if (that.viewport && that.options.onUpdatedCTM) {
          return that.options.onUpdatedCTM(ctm);
        }
      }
    }
  );

  // Wrap callbacks into public API context
  var publicInstance = this.getPublicInstance();
  publicInstance.setBeforeZoom(this.options.beforeZoom);
  publicInstance.setOnZoom(this.options.onZoom);
  publicInstance.setBeforePan(this.options.beforePan);
  publicInstance.setOnPan(this.options.onPan);
  publicInstance.setOnUpdatedCTM(this.options.onUpdatedCTM);

  if (this.options.controlIconsEnabled) {
    ControlIcons.enable(this);
  }

  // Init events handlers
  this.lastMouseWheelEventTime = Date.now();
  this.setupHandlers();
};

/**
 * Register event handlers
 */
SvgPanZoom.prototype.setupHandlers = function() {
  var that = this,
    prevEvt = null; // use for touchstart event to detect double tap

  this.eventListeners = {
    // Mouse down group
    mousedown: function(evt) {
      var result = that.handleMouseDown(evt, prevEvt);
      prevEvt = evt;
      return result;
    },
    touchstart: function(evt) {
      var result = that.handleMouseDown(evt, prevEvt);
      prevEvt = evt;
      return result;
    },

    // Mouse up group
    mouseup: function(evt) {
      return that.handleMouseUp(evt);
    },
    touchend: function(evt) {
      return that.handleMouseUp(evt);
    },

    // Mouse move group
    mousemove: function(evt) {
      return that.handleMouseMove(evt);
    },
    touchmove: function(evt) {
      return that.handleMouseMove(evt);
    },

    // Mouse leave group
    mouseleave: function(evt) {
      return that.handleMouseUp(evt);
    },
    touchleave: function(evt) {
      return that.handleMouseUp(evt);
    },
    touchcancel: function(evt) {
      return that.handleMouseUp(evt);
    }
  };

  // Init custom events handler if available
  // eslint-disable-next-line eqeqeq
  if (this.options.customEventsHandler != null) {
    this.options.customEventsHandler.init({
      svgElement: this.svg,
      eventsListenerElement: this.options.eventsListenerElement,
      instance: this.getPublicInstance()
    });

    // Custom event handler may halt builtin listeners
    var haltEventListeners = this.options.customEventsHandler
      .haltEventListeners;
    if (haltEventListeners && haltEventListeners.length) {
      for (var i = haltEventListeners.length - 1; i >= 0; i--) {
        if (this.eventListeners.hasOwnProperty(haltEventListeners[i])) {
          delete this.eventListeners[haltEventListeners[i]];
        }
      }
    }
  }

  // Bind eventListeners
  for (var event in this.eventListeners) {
    // Attach event to eventsListenerElement or SVG if not available
    (this.options.eventsListenerElement || this.svg).addEventListener(
      event,
      this.eventListeners[event],
      !this.options.preventMouseEventsDefault ? passiveListenerOption : false
    );
  }

  // Zoom using mouse wheel
  if (this.options.mouseWheelZoomEnabled) {
    this.options.mouseWheelZoomEnabled = false; // set to false as enable will set it back to true
    this.enableMouseWheelZoom();
  }
};

/**
 * Enable ability to zoom using mouse wheel
 */
SvgPanZoom.prototype.enableMouseWheelZoom = function() {
  if (!this.options.mouseWheelZoomEnabled) {
    var that = this;

    // Mouse wheel listener
    this.wheelListener = function(evt) {
      return that.handleMouseWheel(evt);
    };

    // Bind wheelListener
    var isPassiveListener = !this.options.preventMouseEventsDefault;
    Wheel.on(
      this.options.eventsListenerElement || this.svg,
      this.wheelListener,
      isPassiveListener
    );

    this.options.mouseWheelZoomEnabled = true;
  }
};

/**
 * Disable ability to zoom using mouse wheel
 */
SvgPanZoom.prototype.disableMouseWheelZoom = function() {
  if (this.options.mouseWheelZoomEnabled) {
    var isPassiveListener = !this.options.preventMouseEventsDefault;
    Wheel.off(
      this.options.eventsListenerElement || this.svg,
      this.wheelListener,
      isPassiveListener
    );
    this.options.mouseWheelZoomEnabled = false;
  }
};

/**
 * Handle mouse wheel event
 *
 * @param  {Event} evt
 */
SvgPanZoom.prototype.handleMouseWheel = function(evt) {
  if (!this.options.zoomEnabled || this.state !== "none") {
    return;
  }

  if (this.options.preventMouseEventsDefault) {
    if (evt.preventDefault) {
      evt.preventDefault();
    } else {
      evt.returnValue = false;
    }
  }

  // Default delta in case that deltaY is not available
  var delta = evt.deltaY || 1,
    timeDelta = Date.now() - this.lastMouseWheelEventTime,
    divider = 3 + Math.max(0, 30 - timeDelta);

  // Update cache
  this.lastMouseWheelEventTime = Date.now();

  // Make empirical adjustments for browsers that give deltaY in pixels (deltaMode=0)
  if ("deltaMode" in evt && evt.deltaMode === 0 && evt.wheelDelta) {
    delta = evt.deltaY === 0 ? 0 : Math.abs(evt.wheelDelta) / evt.deltaY;
  }

  delta =
    -0.3 < delta && delta < 0.3
      ? delta
      : ((delta > 0 ? 1 : -1) * Math.log(Math.abs(delta) + 10)) / divider;

  var inversedScreenCTM = this.svg.getScreenCTM().inverse(),
    relativeMousePoint = SvgUtils.getEventPoint(evt, this.svg).matrixTransform(
      inversedScreenCTM
    ),
    zoom = Math.pow(1 + this.options.zoomScaleSensitivity, -1 * delta); // multiplying by neg. 1 so as to make zoom in/out behavior match Google maps behavior

  this.zoomAtPoint(zoom, relativeMousePoint);
};

/**
 * Zoom in at a SVG point
 *
 * @param  {SVGPoint} point
 * @param  {Float} zoomScale    Number representing how much to zoom
 * @param  {Boolean} zoomAbsolute Default false. If true, zoomScale is treated as an absolute value.
 *                                Otherwise, zoomScale is treated as a multiplied (e.g. 1.10 would zoom in 10%)
 */
SvgPanZoom.prototype.zoomAtPoint = function(zoomScale, point, zoomAbsolute) {
  var originalState = this.viewport.getOriginalState();

  if (!zoomAbsolute) {
    // Fit zoomScale in set bounds
    if (
      this.getZoom() * zoomScale <
      this.options.minZoom * originalState.zoom
    ) {
      zoomScale = (this.options.minZoom * originalState.zoom) / this.getZoom();
    } else if (
      this.getZoom() * zoomScale >
      this.options.maxZoom * originalState.zoom
    ) {
      zoomScale = (this.options.maxZoom * originalState.zoom) / this.getZoom();
    }
  } else {
    // Fit zoomScale in set bounds
    zoomScale = Math.max(
      this.options.minZoom * originalState.zoom,
      Math.min(this.options.maxZoom * originalState.zoom, zoomScale)
    );
    // Find relative scale to achieve desired scale
    zoomScale = zoomScale / this.getZoom();
  }

  var oldCTM = this.viewport.getCTM(),
    relativePoint = point.matrixTransform(oldCTM.inverse()),
    modifier = this.svg
      .createSVGMatrix()
      .translate(relativePoint.x, relativePoint.y)
      .scale(zoomScale)
      .translate(-relativePoint.x, -relativePoint.y),
    newCTM = oldCTM.multiply(modifier);

  if (newCTM.a !== oldCTM.a) {
    this.viewport.setCTM(newCTM);
  }
};

/**
 * Zoom at center point
 *
 * @param  {Float} scale
 * @param  {Boolean} absolute Marks zoom scale as relative or absolute
 */
SvgPanZoom.prototype.zoom = function(scale, absolute) {
  this.zoomAtPoint(
    scale,
    SvgUtils.getSvgCenterPoint(this.svg, this.width, this.height),
    absolute
  );
};

/**
 * Zoom used by public instance
 *
 * @param  {Float} scale
 * @param  {Boolean} absolute Marks zoom scale as relative or absolute
 */
SvgPanZoom.prototype.publicZoom = function(scale, absolute) {
  if (absolute) {
    scale = this.computeFromRelativeZoom(scale);
  }

  this.zoom(scale, absolute);
};

/**
 * Zoom at point used by public instance
 *
 * @param  {Float} scale
 * @param  {SVGPoint|Object} point    An object that has x and y attributes
 * @param  {Boolean} absolute Marks zoom scale as relative or absolute
 */
SvgPanZoom.prototype.publicZoomAtPoint = function(scale, point, absolute) {
  if (absolute) {
    // Transform zoom into a relative value
    scale = this.computeFromRelativeZoom(scale);
  }

  // If not a SVGPoint but has x and y then create a SVGPoint
  if (Utils.getType(point) !== "SVGPoint") {
    if ("x" in point && "y" in point) {
      point = SvgUtils.createSVGPoint(this.svg, point.x, point.y);
    } else {
      throw new Error("Given point is invalid");
    }
  }

  this.zoomAtPoint(scale, point, absolute);
};

/**
 * Get zoom scale
 *
 * @return {Float} zoom scale
 */
SvgPanZoom.prototype.getZoom = function() {
  return this.viewport.getZoom();
};

/**
 * Get zoom scale for public usage
 *
 * @return {Float} zoom scale
 */
SvgPanZoom.prototype.getRelativeZoom = function() {
  return this.viewport.getRelativeZoom();
};

/**
 * Compute actual zoom from public zoom
 *
 * @param  {Float} zoom
 * @return {Float} zoom scale
 */
SvgPanZoom.prototype.computeFromRelativeZoom = function(zoom) {
  return zoom * this.viewport.getOriginalState().zoom;
};

/**
 * Set zoom to initial state
 */
SvgPanZoom.prototype.resetZoom = function() {
  var originalState = this.viewport.getOriginalState();

  this.zoom(originalState.zoom, true);
};

/**
 * Set pan to initial state
 */
SvgPanZoom.prototype.resetPan = function() {
  this.pan(this.viewport.getOriginalState());
};

/**
 * Set pan and zoom to initial state
 */
SvgPanZoom.prototype.reset = function() {
  this.resetZoom();
  this.resetPan();
};

/**
 * Handle double click event
 * See handleMouseDown() for alternate detection method
 *
 * @param {Event} evt
 */
SvgPanZoom.prototype.handleDblClick = function(evt) {
  if (this.options.preventMouseEventsDefault) {
    if (evt.preventDefault) {
      evt.preventDefault();
    } else {
      evt.returnValue = false;
    }
  }

  // Check if target was a control button
  if (this.options.controlIconsEnabled) {
    var targetClass = evt.target.getAttribute("class") || "";
    if (targetClass.indexOf("svg-pan-zoom-control") > -1) {
      return false;
    }
  }

  var zoomFactor;

  if (evt.shiftKey) {
    zoomFactor = 1 / ((1 + this.options.zoomScaleSensitivity) * 2); // zoom out when shift key pressed
  } else {
    zoomFactor = (1 + this.options.zoomScaleSensitivity) * 2;
  }

  var point = SvgUtils.getEventPoint(evt, this.svg).matrixTransform(
    this.svg.getScreenCTM().inverse()
  );
  this.zoomAtPoint(zoomFactor, point);
};

/**
 * Handle click event
 *
 * @param {Event} evt
 */
SvgPanZoom.prototype.handleMouseDown = function(evt, prevEvt) {
  if (this.options.preventMouseEventsDefault) {
    if (evt.preventDefault) {
      evt.preventDefault();
    } else {
      evt.returnValue = false;
    }
  }

  Utils.mouseAndTouchNormalize(evt, this.svg);

  // Double click detection; more consistent than ondblclick
  if (this.options.dblClickZoomEnabled && Utils.isDblClick(evt, prevEvt)) {
    this.handleDblClick(evt);
  } else {
    // Pan mode
    this.state = "pan";
    this.firstEventCTM = this.viewport.getCTM();
    this.stateOrigin = SvgUtils.getEventPoint(evt, this.svg).matrixTransform(
      this.firstEventCTM.inverse()
    );
  }
};

/**
 * Handle mouse move event
 *
 * @param  {Event} evt
 */
SvgPanZoom.prototype.handleMouseMove = function(evt) {
  if (this.options.preventMouseEventsDefault) {
    if (evt.preventDefault) {
      evt.preventDefault();
    } else {
      evt.returnValue = false;
    }
  }

  if (this.state === "pan" && this.options.panEnabled) {
    // Pan mode
    var point = SvgUtils.getEventPoint(evt, this.svg).matrixTransform(
        this.firstEventCTM.inverse()
      ),
      viewportCTM = this.firstEventCTM.translate(
        point.x - this.stateOrigin.x,
        point.y - this.stateOrigin.y
      );

    this.viewport.setCTM(viewportCTM);
  }
};

/**
 * Handle mouse button release event
 *
 * @param {Event} evt
 */
SvgPanZoom.prototype.handleMouseUp = function(evt) {
  if (this.options.preventMouseEventsDefault) {
    if (evt.preventDefault) {
      evt.preventDefault();
    } else {
      evt.returnValue = false;
    }
  }

  if (this.state === "pan") {
    // Quit pan mode
    this.state = "none";
  }
};

/**
 * Adjust viewport size (only) so it will fit in SVG
 * Does not center image
 */
SvgPanZoom.prototype.fit = function() {
  var viewBox = this.viewport.getViewBox(),
    newScale = Math.min(
      this.width / viewBox.width,
      this.height / viewBox.height
    );

  this.zoom(newScale, true);
};

/**
 * Adjust viewport size (only) so it will contain the SVG
 * Does not center image
 */
SvgPanZoom.prototype.contain = function() {
  var viewBox = this.viewport.getViewBox(),
    newScale = Math.max(
      this.width / viewBox.width,
      this.height / viewBox.height
    );

  this.zoom(newScale, true);
};

/**
 * Adjust viewport pan (only) so it will be centered in SVG
 * Does not zoom/fit/contain image
 */
SvgPanZoom.prototype.center = function() {
  var viewBox = this.viewport.getViewBox(),
    offsetX =
      (this.width - (viewBox.width + viewBox.x * 2) * this.getZoom()) * 0.5,
    offsetY =
      (this.height - (viewBox.height + viewBox.y * 2) * this.getZoom()) * 0.5;

  this.getPublicInstance().pan({ x: offsetX, y: offsetY });
};

/**
 * Update content cached BorderBox
 * Use when viewport contents change
 */
SvgPanZoom.prototype.updateBBox = function() {
  this.viewport.simpleViewBoxCache();
};

/**
 * Pan to a rendered position
 *
 * @param  {Object} point {x: 0, y: 0}
 */
SvgPanZoom.prototype.pan = function(point) {
  var viewportCTM = this.viewport.getCTM();
  viewportCTM.e = point.x;
  viewportCTM.f = point.y;
  this.viewport.setCTM(viewportCTM);
};

/**
 * Relatively pan the graph by a specified rendered position vector
 *
 * @param  {Object} point {x: 0, y: 0}
 */
SvgPanZoom.prototype.panBy = function(point) {
  var viewportCTM = this.viewport.getCTM();
  viewportCTM.e += point.x;
  viewportCTM.f += point.y;
  this.viewport.setCTM(viewportCTM);
};

/**
 * Get pan vector
 *
 * @return {Object} {x: 0, y: 0}
 */
SvgPanZoom.prototype.getPan = function() {
  var state = this.viewport.getState();

  return { x: state.x, y: state.y };
};

/**
 * Recalculates cached svg dimensions and controls position
 */
SvgPanZoom.prototype.resize = function() {
  // Get dimensions
  var boundingClientRectNormalized = SvgUtils.getBoundingClientRectNormalized(
    this.svg
  );
  this.width = boundingClientRectNormalized.width;
  this.height = boundingClientRectNormalized.height;

  // Recalculate original state
  var viewport = this.viewport;
  viewport.options.width = this.width;
  viewport.options.height = this.height;
  viewport.processCTM();

  // Reposition control icons by re-enabling them
  if (this.options.controlIconsEnabled) {
    this.getPublicInstance().disableControlIcons();
    this.getPublicInstance().enableControlIcons();
  }
};

/**
 * Unbind mouse events, free callbacks and destroy public instance
 */
SvgPanZoom.prototype.destroy = function() {
  var that = this;

  // Free callbacks
  this.beforeZoom = null;
  this.onZoom = null;
  this.beforePan = null;
  this.onPan = null;
  this.onUpdatedCTM = null;

  // Destroy custom event handlers
  // eslint-disable-next-line eqeqeq
  if (this.options.customEventsHandler != null) {
    this.options.customEventsHandler.destroy({
      svgElement: this.svg,
      eventsListenerElement: this.options.eventsListenerElement,
      instance: this.getPublicInstance()
    });
  }

  // Unbind eventListeners
  for (var event in this.eventListeners) {
    (this.options.eventsListenerElement || this.svg).removeEventListener(
      event,
      this.eventListeners[event],
      !this.options.preventMouseEventsDefault ? passiveListenerOption : false
    );
  }

  // Unbind wheelListener
  this.disableMouseWheelZoom();

  // Remove control icons
  this.getPublicInstance().disableControlIcons();

  // Reset zoom and pan
  this.reset();

  // Remove instance from instancesStore
  instancesStore = instancesStore.filter(function(instance) {
    return instance.svg !== that.svg;
  });

  // Delete options and its contents
  delete this.options;

  // Delete viewport to make public shadow viewport functions uncallable
  delete this.viewport;

  // Destroy public instance and rewrite getPublicInstance
  delete this.publicInstance;
  delete this.pi;
  this.getPublicInstance = function() {
    return null;
  };
};

/**
 * Returns a public instance object
 *
 * @return {Object} Public instance object
 */
SvgPanZoom.prototype.getPublicInstance = function() {
  var that = this;

  // Create cache
  if (!this.publicInstance) {
    this.publicInstance = this.pi = {
      // Pan
      enablePan: function() {
        that.options.panEnabled = true;
        return that.pi;
      },
      disablePan: function() {
        that.options.panEnabled = false;
        return that.pi;
      },
      isPanEnabled: function() {
        return !!that.options.panEnabled;
      },
      pan: function(point) {
        that.pan(point);
        return that.pi;
      },
      panBy: function(point) {
        that.panBy(point);
        return that.pi;
      },
      getPan: function() {
        return that.getPan();
      },
      // Pan event
      setBeforePan: function(fn) {
        that.options.beforePan =
          fn === null ? null : Utils.proxy(fn, that.publicInstance);
        return that.pi;
      },
      setOnPan: function(fn) {
        that.options.onPan =
          fn === null ? null : Utils.proxy(fn, that.publicInstance);
        return that.pi;
      },
      // Zoom and Control Icons
      enableZoom: function() {
        that.options.zoomEnabled = true;
        return that.pi;
      },
      disableZoom: function() {
        that.options.zoomEnabled = false;
        return that.pi;
      },
      isZoomEnabled: function() {
        return !!that.options.zoomEnabled;
      },
      enableControlIcons: function() {
        if (!that.options.controlIconsEnabled) {
          that.options.controlIconsEnabled = true;
          ControlIcons.enable(that);
        }
        return that.pi;
      },
      disableControlIcons: function() {
        if (that.options.controlIconsEnabled) {
          that.options.controlIconsEnabled = false;
          ControlIcons.disable(that);
        }
        return that.pi;
      },
      isControlIconsEnabled: function() {
        return !!that.options.controlIconsEnabled;
      },
      // Double click zoom
      enableDblClickZoom: function() {
        that.options.dblClickZoomEnabled = true;
        return that.pi;
      },
      disableDblClickZoom: function() {
        that.options.dblClickZoomEnabled = false;
        return that.pi;
      },
      isDblClickZoomEnabled: function() {
        return !!that.options.dblClickZoomEnabled;
      },
      // Mouse wheel zoom
      enableMouseWheelZoom: function() {
        that.enableMouseWheelZoom();
        return that.pi;
      },
      disableMouseWheelZoom: function() {
        that.disableMouseWheelZoom();
        return that.pi;
      },
      isMouseWheelZoomEnabled: function() {
        return !!that.options.mouseWheelZoomEnabled;
      },
      // Zoom scale and bounds
      setZoomScaleSensitivity: function(scale) {
        that.options.zoomScaleSensitivity = scale;
        return that.pi;
      },
      setMinZoom: function(zoom) {
        that.options.minZoom = zoom;
        return that.pi;
      },
      setMaxZoom: function(zoom) {
        that.options.maxZoom = zoom;
        return that.pi;
      },
      // Zoom event
      setBeforeZoom: function(fn) {
        that.options.beforeZoom =
          fn === null ? null : Utils.proxy(fn, that.publicInstance);
        return that.pi;
      },
      setOnZoom: function(fn) {
        that.options.onZoom =
          fn === null ? null : Utils.proxy(fn, that.publicInstance);
        return that.pi;
      },
      // Zooming
      zoom: function(scale) {
        that.publicZoom(scale, true);
        return that.pi;
      },
      zoomBy: function(scale) {
        that.publicZoom(scale, false);
        return that.pi;
      },
      zoomAtPoint: function(scale, point) {
        that.publicZoomAtPoint(scale, point, true);
        return that.pi;
      },
      zoomAtPointBy: function(scale, point) {
        that.publicZoomAtPoint(scale, point, false);
        return that.pi;
      },
      zoomIn: function() {
        this.zoomBy(1 + that.options.zoomScaleSensitivity);
        return that.pi;
      },
      zoomOut: function() {
        this.zoomBy(1 / (1 + that.options.zoomScaleSensitivity));
        return that.pi;
      },
      getZoom: function() {
        return that.getRelativeZoom();
      },
      // CTM update
      setOnUpdatedCTM: function(fn) {
        that.options.onUpdatedCTM =
          fn === null ? null : Utils.proxy(fn, that.publicInstance);
        return that.pi;
      },
      // Reset
      resetZoom: function() {
        that.resetZoom();
        return that.pi;
      },
      resetPan: function() {
        that.resetPan();
        return that.pi;
      },
      reset: function() {
        that.reset();
        return that.pi;
      },
      // Fit, Contain and Center
      fit: function() {
        that.fit();
        return that.pi;
      },
      contain: function() {
        that.contain();
        return that.pi;
      },
      center: function() {
        that.center();
        return that.pi;
      },
      // Size and Resize
      updateBBox: function() {
        that.updateBBox();
        return that.pi;
      },
      resize: function() {
        that.resize();
        return that.pi;
      },
      getSizes: function() {
        return {
          width: that.width,
          height: that.height,
          realZoom: that.getZoom(),
          viewBox: that.viewport.getViewBox()
        };
      },
      // Destroy
      destroy: function() {
        that.destroy();
        return that.pi;
      }
    };
  }

  return this.publicInstance;
};

/**
 * Stores pairs of instances of SvgPanZoom and SVG
 * Each pair is represented by an object {svg: SVGSVGElement, instance: SvgPanZoom}
 *
 * @type {Array}
 */
var instancesStore = [];

var svgPanZoom = function(elementOrSelector, options) {
  var svg = Utils.getSvg(elementOrSelector);

  if (svg === null) {
    return null;
  } else {
    // Look for existent instance
    for (var i = instancesStore.length - 1; i >= 0; i--) {
      if (instancesStore[i].svg === svg) {
        return instancesStore[i].instance.getPublicInstance();
      }
    }

    // If instance not found - create one
    instancesStore.push({
      svg: svg,
      instance: new SvgPanZoom(svg, options)
    });

    // Return just pushed instance
    return instancesStore[
      instancesStore.length - 1
    ].instance.getPublicInstance();
  }
};

module.exports = svgPanZoom;

},{"./control-icons":1,"./shadow-viewport":2,"./svg-utilities":5,"./uniwheel":6,"./utilities":7}],5:[function(require,module,exports){
var Utils = require("./utilities"),
  _browser = "unknown";

// http://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
if (/*@cc_on!@*/ false || !!document.documentMode) {
  // internet explorer
  _browser = "ie";
}

module.exports = {
  svgNS: "http://www.w3.org/2000/svg",
  xmlNS: "http://www.w3.org/XML/1998/namespace",
  xmlnsNS: "http://www.w3.org/2000/xmlns/",
  xlinkNS: "http://www.w3.org/1999/xlink",
  evNS: "http://www.w3.org/2001/xml-events",

  /**
   * Get svg dimensions: width and height
   *
   * @param  {SVGSVGElement} svg
   * @return {Object}     {width: 0, height: 0}
   */
  getBoundingClientRectNormalized: function(svg) {
    if (svg.clientWidth && svg.clientHeight) {
      return { width: svg.clientWidth, height: svg.clientHeight };
    } else if (!!svg.getBoundingClientRect()) {
      return svg.getBoundingClientRect();
    } else {
      throw new Error("Cannot get BoundingClientRect for SVG.");
    }
  },

  /**
   * Gets g element with class of "viewport" or creates it if it doesn't exist
   *
   * @param  {SVGSVGElement} svg
   * @return {SVGElement}     g (group) element
   */
  getOrCreateViewport: function(svg, selector) {
    var viewport = null;

    if (Utils.isElement(selector)) {
      viewport = selector;
    } else {
      viewport = svg.querySelector(selector);
    }

    // Check if there is just one main group in SVG
    if (!viewport) {
      var childNodes = Array.prototype.slice
        .call(svg.childNodes || svg.children)
        .filter(function(el) {
          return el.nodeName !== "defs" && el.nodeName !== "#text";
        });

      // Node name should be SVGGElement and should have no transform attribute
      // Groups with transform are not used as viewport because it involves parsing of all transform possibilities
      if (
        childNodes.length === 1 &&
        childNodes[0].nodeName === "g" &&
        childNodes[0].getAttribute("transform") === null
      ) {
        viewport = childNodes[0];
      }
    }

    // If no favorable group element exists then create one
    if (!viewport) {
      var viewportId =
        "viewport-" + new Date().toISOString().replace(/\D/g, "");
      viewport = document.createElementNS(this.svgNS, "g");
      viewport.setAttribute("id", viewportId);

      // Internet Explorer (all versions?) can't use childNodes, but other browsers prefer (require?) using childNodes
      var svgChildren = svg.childNodes || svg.children;
      if (!!svgChildren && svgChildren.length > 0) {
        for (var i = svgChildren.length; i > 0; i--) {
          // Move everything into viewport except defs
          if (svgChildren[svgChildren.length - i].nodeName !== "defs") {
            viewport.appendChild(svgChildren[svgChildren.length - i]);
          }
        }
      }
      svg.appendChild(viewport);
    }

    // Parse class names
    var classNames = [];
    if (viewport.getAttribute("class")) {
      classNames = viewport.getAttribute("class").split(" ");
    }

    // Set class (if not set already)
    if (!~classNames.indexOf("svg-pan-zoom_viewport")) {
      classNames.push("svg-pan-zoom_viewport");
      viewport.setAttribute("class", classNames.join(" "));
    }

    return viewport;
  },

  /**
   * Set SVG attributes
   *
   * @param  {SVGSVGElement} svg
   */
  setupSvgAttributes: function(svg) {
    // Setting default attributes
    svg.setAttribute("xmlns", this.svgNS);
    svg.setAttributeNS(this.xmlnsNS, "xmlns:xlink", this.xlinkNS);
    svg.setAttributeNS(this.xmlnsNS, "xmlns:ev", this.evNS);

    // Needed for Internet Explorer, otherwise the viewport overflows
    if (svg.parentNode !== null) {
      var style = svg.getAttribute("style") || "";
      if (style.toLowerCase().indexOf("overflow") === -1) {
        svg.setAttribute("style", "overflow: hidden; " + style);
      }
    }
  },

  /**
   * How long Internet Explorer takes to finish updating its display (ms).
   */
  internetExplorerRedisplayInterval: 300,

  /**
   * Forces the browser to redisplay all SVG elements that rely on an
   * element defined in a 'defs' section. It works globally, for every
   * available defs element on the page.
   * The throttling is intentionally global.
   *
   * This is only needed for IE. It is as a hack to make markers (and 'use' elements?)
   * visible after pan/zoom when there are multiple SVGs on the page.
   * See bug report: https://connect.microsoft.com/IE/feedback/details/781964/
   * also see svg-pan-zoom issue: https://github.com/ariutta/svg-pan-zoom/issues/62
   */
  refreshDefsGlobal: Utils.throttle(
    function() {
      var allDefs = document.querySelectorAll("defs");
      var allDefsCount = allDefs.length;
      for (var i = 0; i < allDefsCount; i++) {
        var thisDefs = allDefs[i];
        thisDefs.parentNode.insertBefore(thisDefs, thisDefs);
      }
    },
    this ? this.internetExplorerRedisplayInterval : null
  ),

  /**
   * Sets the current transform matrix of an element
   *
   * @param {SVGElement} element
   * @param {SVGMatrix} matrix  CTM
   * @param {SVGElement} defs
   */
  setCTM: function(element, matrix, defs) {
    var that = this,
      s =
        "matrix(" +
        matrix.a +
        "," +
        matrix.b +
        "," +
        matrix.c +
        "," +
        matrix.d +
        "," +
        matrix.e +
        "," +
        matrix.f +
        ")";

    element.setAttributeNS(null, "transform", s);
    if ("transform" in element.style) {
      element.style.transform = s;
    } else if ("-ms-transform" in element.style) {
      element.style["-ms-transform"] = s;
    } else if ("-webkit-transform" in element.style) {
      element.style["-webkit-transform"] = s;
    }

    // IE has a bug that makes markers disappear on zoom (when the matrix "a" and/or "d" elements change)
    // see http://stackoverflow.com/questions/17654578/svg-marker-does-not-work-in-ie9-10
    // and http://srndolha.wordpress.com/2013/11/25/svg-line-markers-may-disappear-in-internet-explorer-11/
    if (_browser === "ie" && !!defs) {
      // this refresh is intended for redisplaying the SVG during zooming
      defs.parentNode.insertBefore(defs, defs);
      // this refresh is intended for redisplaying the other SVGs on a page when panning a given SVG
      // it is also needed for the given SVG itself, on zoomEnd, if the SVG contains any markers that
      // are located under any other element(s).
      window.setTimeout(function() {
        that.refreshDefsGlobal();
      }, that.internetExplorerRedisplayInterval);
    }
  },

  /**
   * Instantiate an SVGPoint object with given event coordinates
   *
   * @param {Event} evt
   * @param  {SVGSVGElement} svg
   * @return {SVGPoint}     point
   */
  getEventPoint: function(evt, svg) {
    var point = svg.createSVGPoint();

    Utils.mouseAndTouchNormalize(evt, svg);

    point.x = evt.clientX;
    point.y = evt.clientY;

    return point;
  },

  /**
   * Get SVG center point
   *
   * @param  {SVGSVGElement} svg
   * @return {SVGPoint}
   */
  getSvgCenterPoint: function(svg, width, height) {
    return this.createSVGPoint(svg, width / 2, height / 2);
  },

  /**
   * Create a SVGPoint with given x and y
   *
   * @param  {SVGSVGElement} svg
   * @param  {Number} x
   * @param  {Number} y
   * @return {SVGPoint}
   */
  createSVGPoint: function(svg, x, y) {
    var point = svg.createSVGPoint();
    point.x = x;
    point.y = y;

    return point;
  }
};

},{"./utilities":7}],6:[function(require,module,exports){
// uniwheel 0.1.2 (customized)
// A unified cross browser mouse wheel event handler
// https://github.com/teemualap/uniwheel

module.exports = (function(){

  //Full details: https://developer.mozilla.org/en-US/docs/Web/Reference/Events/wheel

  var prefix = "", _addEventListener, _removeEventListener, support, fns = [];
  var passiveOption = {passive: true};

  // detect event model
  if ( window.addEventListener ) {
    _addEventListener = "addEventListener";
    _removeEventListener = "removeEventListener";
  } else {
    _addEventListener = "attachEvent";
    _removeEventListener = "detachEvent";
    prefix = "on";
  }

  // detect available wheel event
  support = "onwheel" in document.createElement("div") ? "wheel" : // Modern browsers support "wheel"
            document.onmousewheel !== undefined ? "mousewheel" : // Webkit and IE support at least "mousewheel"
            "DOMMouseScroll"; // let's assume that remaining browsers are older Firefox


  function createCallback(element,callback) {

    var fn = function(originalEvent) {

      !originalEvent && ( originalEvent = window.event );

      // create a normalized event object
      var event = {
        // keep a ref to the original event object
        originalEvent: originalEvent,
        target: originalEvent.target || originalEvent.srcElement,
        type: "wheel",
        deltaMode: originalEvent.type == "MozMousePixelScroll" ? 0 : 1,
        deltaX: 0,
        delatZ: 0,
        preventDefault: function() {
          originalEvent.preventDefault ?
            originalEvent.preventDefault() :
            originalEvent.returnValue = false;
        }
      };

      // calculate deltaY (and deltaX) according to the event
      if ( support == "mousewheel" ) {
        event.deltaY = - 1/40 * originalEvent.wheelDelta;
        // Webkit also support wheelDeltaX
        originalEvent.wheelDeltaX && ( event.deltaX = - 1/40 * originalEvent.wheelDeltaX );
      } else {
        event.deltaY = originalEvent.detail;
      }

      // it's time to fire the callback
      return callback( event );

    };

    fns.push({
      element: element,
      fn: fn,
    });

    return fn;
  }

  function getCallback(element) {
    for (var i = 0; i < fns.length; i++) {
      if (fns[i].element === element) {
        return fns[i].fn;
      }
    }
    return function(){};
  }

  function removeCallback(element) {
    for (var i = 0; i < fns.length; i++) {
      if (fns[i].element === element) {
        return fns.splice(i,1);
      }
    }
  }

  function _addWheelListener(elem, eventName, callback, isPassiveListener ) {
    var cb;

    if (support === "wheel") {
      cb = callback;
    } else {
      cb = createCallback(elem, callback);
    }

    elem[_addEventListener](prefix + eventName, cb, isPassiveListener ? passiveOption : false);
  }

  function _removeWheelListener(elem, eventName, callback, isPassiveListener ) {

    var cb;

    if (support === "wheel") {
      cb = callback;
    } else {
      cb = getCallback(elem);
    }

    elem[_removeEventListener](prefix + eventName, cb, isPassiveListener ? passiveOption : false);

    removeCallback(elem);
  }

  function addWheelListener( elem, callback, isPassiveListener ) {
    _addWheelListener(elem, support, callback, isPassiveListener );

    // handle MozMousePixelScroll in older Firefox
    if( support == "DOMMouseScroll" ) {
      _addWheelListener(elem, "MozMousePixelScroll", callback, isPassiveListener );
    }
  }

  function removeWheelListener(elem, callback, isPassiveListener){
    _removeWheelListener(elem, support, callback, isPassiveListener);

    // handle MozMousePixelScroll in older Firefox
    if( support == "DOMMouseScroll" ) {
      _removeWheelListener(elem, "MozMousePixelScroll", callback, isPassiveListener);
    }
  }

  return {
    on: addWheelListener,
    off: removeWheelListener
  };

})();

},{}],7:[function(require,module,exports){
module.exports = {
  /**
   * Extends an object
   *
   * @param  {Object} target object to extend
   * @param  {Object} source object to take properties from
   * @return {Object}        extended object
   */
  extend: function(target, source) {
    target = target || {};
    for (var prop in source) {
      // Go recursively
      if (this.isObject(source[prop])) {
        target[prop] = this.extend(target[prop], source[prop]);
      } else {
        target[prop] = source[prop];
      }
    }
    return target;
  },

  /**
   * Checks if an object is a DOM element
   *
   * @param  {Object}  o HTML element or String
   * @return {Boolean}   returns true if object is a DOM element
   */
  isElement: function(o) {
    return (
      o instanceof HTMLElement ||
      o instanceof SVGElement ||
      o instanceof SVGSVGElement || //DOM2
      (o &&
        typeof o === "object" &&
        o !== null &&
        o.nodeType === 1 &&
        typeof o.nodeName === "string")
    );
  },

  /**
   * Checks if an object is an Object
   *
   * @param  {Object}  o Object
   * @return {Boolean}   returns true if object is an Object
   */
  isObject: function(o) {
    return Object.prototype.toString.call(o) === "[object Object]";
  },

  /**
   * Checks if variable is Number
   *
   * @param  {Integer|Float}  n
   * @return {Boolean}   returns true if variable is Number
   */
  isNumber: function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  },

  /**
   * Search for an SVG element
   *
   * @param  {Object|String} elementOrSelector DOM Element or selector String
   * @return {Object|Null}                   SVG or null
   */
  getSvg: function(elementOrSelector) {
    var element, svg;

    if (!this.isElement(elementOrSelector)) {
      // If selector provided
      if (
        typeof elementOrSelector === "string" ||
        elementOrSelector instanceof String
      ) {
        // Try to find the element
        element = document.querySelector(elementOrSelector);

        if (!element) {
          throw new Error(
            "Provided selector did not find any elements. Selector: " +
              elementOrSelector
          );
          return null;
        }
      } else {
        throw new Error("Provided selector is not an HTML object nor String");
        return null;
      }
    } else {
      element = elementOrSelector;
    }

    if (element.tagName.toLowerCase() === "svg") {
      svg = element;
    } else {
      if (element.tagName.toLowerCase() === "object") {
        svg = element.contentDocument.documentElement;
      } else {
        if (element.tagName.toLowerCase() === "embed") {
          svg = element.getSVGDocument().documentElement;
        } else {
          if (element.tagName.toLowerCase() === "img") {
            throw new Error(
              'Cannot script an SVG in an "img" element. Please use an "object" element or an in-line SVG.'
            );
          } else {
            throw new Error("Cannot get SVG.");
          }
          return null;
        }
      }
    }

    return svg;
  },

  /**
   * Attach a given context to a function
   * @param  {Function} fn      Function
   * @param  {Object}   context Context
   * @return {Function}           Function with certain context
   */
  proxy: function(fn, context) {
    return function() {
      return fn.apply(context, arguments);
    };
  },

  /**
   * Returns object type
   * Uses toString that returns [object SVGPoint]
   * And than parses object type from string
   *
   * @param  {Object} o Any object
   * @return {String}   Object type
   */
  getType: function(o) {
    return Object.prototype.toString
      .apply(o)
      .replace(/^\[object\s/, "")
      .replace(/\]$/, "");
  },

  /**
   * If it is a touch event than add clientX and clientY to event object
   *
   * @param  {Event} evt
   * @param  {SVGSVGElement} svg
   */
  mouseAndTouchNormalize: function(evt, svg) {
    // If no clientX then fallback
    if (evt.clientX === void 0 || evt.clientX === null) {
      // Fallback
      evt.clientX = 0;
      evt.clientY = 0;

      // If it is a touch event
      if (evt.touches !== void 0 && evt.touches.length) {
        if (evt.touches[0].clientX !== void 0) {
          evt.clientX = evt.touches[0].clientX;
          evt.clientY = evt.touches[0].clientY;
        } else if (evt.touches[0].pageX !== void 0) {
          var rect = svg.getBoundingClientRect();

          evt.clientX = evt.touches[0].pageX - rect.left;
          evt.clientY = evt.touches[0].pageY - rect.top;
        }
        // If it is a custom event
      } else if (evt.originalEvent !== void 0) {
        if (evt.originalEvent.clientX !== void 0) {
          evt.clientX = evt.originalEvent.clientX;
          evt.clientY = evt.originalEvent.clientY;
        }
      }
    }
  },

  /**
   * Check if an event is a double click/tap
   * TODO: For touch gestures use a library (hammer.js) that takes in account other events
   * (touchmove and touchend). It should take in account tap duration and traveled distance
   *
   * @param  {Event}  evt
   * @param  {Event}  prevEvt Previous Event
   * @return {Boolean}
   */
  isDblClick: function(evt, prevEvt) {
    // Double click detected by browser
    if (evt.detail === 2) {
      return true;
    }
    // Try to compare events
    else if (prevEvt !== void 0 && prevEvt !== null) {
      var timeStampDiff = evt.timeStamp - prevEvt.timeStamp, // should be lower than 250 ms
        touchesDistance = Math.sqrt(
          Math.pow(evt.clientX - prevEvt.clientX, 2) +
            Math.pow(evt.clientY - prevEvt.clientY, 2)
        );

      return timeStampDiff < 250 && touchesDistance < 10;
    }

    // Nothing found
    return false;
  },

  /**
   * Returns current timestamp as an integer
   *
   * @return {Number}
   */
  now:
    Date.now ||
    function() {
      return new Date().getTime();
    },

  // From underscore.
  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  throttle: function(func, wait, options) {
    var that = this;
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) {
      options = {};
    }
    var later = function() {
      previous = options.leading === false ? 0 : that.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) {
        context = args = null;
      }
    };
    return function() {
      var now = that.now();
      if (!previous && options.leading === false) {
        previous = now;
      }
      var remaining = wait - (now - previous);
      context = this; // eslint-disable-line consistent-this
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        if (!timeout) {
          context = args = null;
        }
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  },

  /**
   * Create a requestAnimationFrame simulation
   *
   * @param  {Number|String} refreshRate
   * @return {Function}
   */
  createRequestAnimationFrame: function(refreshRate) {
    var timeout = null;

    // Convert refreshRate to timeout
    if (refreshRate !== "auto" && refreshRate < 60 && refreshRate > 1) {
      timeout = Math.floor(1000 / refreshRate);
    }

    if (timeout === null) {
      return window.requestAnimationFrame || requestTimeout(33);
    } else {
      return requestTimeout(timeout);
    }
  }
};

/**
 * Create a callback that will execute after a given timeout
 *
 * @param  {Function} timeout
 * @return {Function}
 */
function requestTimeout(timeout) {
  return function(callback) {
    window.setTimeout(callback, timeout);
  };
}

},{}]},{},[3]);

;