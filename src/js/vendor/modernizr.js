/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-backgroundblendmode-backgroundcliptext-cssanimations-cssfilters-cssgradients-csstransforms-csstransforms3d-csstransitions-objectfit-prefixed-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function s(){var e,t,n,s,i,o,a;for(var f in x)if(x.hasOwnProperty(f)){if(e=[],t=x[f],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(s=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)o=e[i],a=o.split("."),1===a.length?Modernizr[a[0]]=s:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=s),y.push((s?"":"no-")+a.join("-"))}}function i(e){var t=b.className,n=Modernizr._config.classPrefix||"";if(w&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),w?b.className.baseVal=t:b.className=t)}function o(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):w?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function f(e,t){return!!~(""+e).indexOf(t)}function u(e,t){return function(){return e.apply(t,arguments)}}function l(e,t,n){var s;for(var i in e)if(e[i]in t)return n===!1?e[i]:(s=t[e[i]],r(s,"function")?u(s,n||t):s);return!1}function d(){var e=t.body;return e||(e=a(w?"svg":"body"),e.fake=!0),e}function p(e,n,r,s){var i,o,f,u,l="modernizr",p=a("div"),c=d();if(parseInt(r,10))for(;r--;)f=a("div"),f.id=s?s[r]:l+(r+1),p.appendChild(f);return i=a("style"),i.type="text/css",i.id="s"+l,(c.fake?c:p).appendChild(i),c.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),p.id=l,c.fake&&(c.style.background="",c.style.overflow="hidden",u=b.style.overflow,b.style.overflow="hidden",b.appendChild(c)),o=n(p,e),c.fake?(c.parentNode.removeChild(c),b.style.overflow=u,b.offsetHeight):p.parentNode.removeChild(p),!!o}function c(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,r){var s=t.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(c(t[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];s--;)i.push("("+c(t[s])+":"+r+")");return i=i.join(" or "),p("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function g(e,t,s,i){function u(){d&&(delete A.style,delete A.modElem)}if(i=r(i,"undefined")?!1:i,!r(s,"undefined")){var l=m(e,s);if(!r(l,"undefined"))return l}for(var d,p,c,g,v,h=["modernizr","tspan"];!A.style;)d=!0,A.modElem=a(h.shift()),A.style=A.modElem.style;for(c=e.length,p=0;c>p;p++)if(g=e[p],v=A.style[g],f(g,"-")&&(g=o(g)),A.style[g]!==n){if(i||r(s,"undefined"))return u(),"pfx"==t?g:!0;try{A.style[g]=s}catch(y){}if(A.style[g]!=v)return u(),"pfx"==t?g:!0}return u(),!1}function v(e,t,n,s,i){var o=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+P.join(o+" ")+o).split(" ");return r(t,"string")||r(t,"undefined")?g(a,t,s,i):(a=(e+" "+j.join(o+" ")+o).split(" "),l(a,t,n))}function h(e,t,r){return v(e,n,n,t,r)}var y=[],x=[],C={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){x.push({name:e,fn:t,options:n})},addAsyncTest:function(e){x.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var b=t.documentElement,w="svg"===b.nodeName.toLowerCase(),S=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];C._prefixes=S,Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",s=0,i=S.length-1;i>s;s++)e=0===s?"to ":"",r+=t+S[s]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var o=a("a"),f=o.style;return f.cssText=r,(""+f.backgroundImage).indexOf("gradient")>-1});var _="CSS"in e&&"supports"in e.CSS,T="supportsCSS"in e;Modernizr.addTest("supports",_||T);var k="Moz O ms Webkit",P=C._config.usePrefixes?k.split(" "):[];C._cssomPrefixes=P;var z=function(t){var r,s=S.length,i=e.CSSRule;if("undefined"==typeof i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+t;for(var o=0;s>o;o++){var a=S[o],f=a.toUpperCase()+"_"+r;if(f in i)return"@-"+a.toLowerCase()+"-"+t}return!1};C.atRule=z;var j=C._config.usePrefixes?k.toLowerCase().split(" "):[];C._domPrefixes=j;var E=C.testStyles=p,N={elem:a("modernizr")};Modernizr._q.push(function(){delete N.elem});var A={style:N.elem.style};Modernizr._q.unshift(function(){delete A.style}),C.testAllProps=v;var O=C.prefixed=function(e,t,n){return 0===e.indexOf("@")?z(e):(-1!=e.indexOf("-")&&(e=o(e)),t?v(e,t,n):v(e,"pfx"))};Modernizr.addTest("backgroundblendmode",O("backgroundBlendMode","text")),Modernizr.addTest("objectfit",!!O("objectFit"),{aliases:["object-fit"]}),C.testAllProps=h,Modernizr.addTest("cssanimations",h("animationName","a",!0)),Modernizr.addTest("backgroundcliptext",function(){return h("backgroundClip","text")}),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return h("filter","blur(2px)");var e=a("a");return e.style.cssText=S.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===n||t.documentMode>9)}),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&h("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!h("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in b.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",E(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",h("transition","all",!0)),s(),i(y),delete C.addTest,delete C.addAsyncTest;for(var L=0;L<Modernizr._q.length;L++)Modernizr._q[L]();e.Modernizr=Modernizr}(window,document);