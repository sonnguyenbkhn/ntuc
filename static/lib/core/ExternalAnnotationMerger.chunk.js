/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[6],{411:function(Aa,ua,y){y.r(ua);var oa=y(1),ja=y(434),ka=y(435),ha;(function(da){da[da.EXTERNAL_XFDF_NOT_REQUESTED=0]="EXTERNAL_XFDF_NOT_REQUESTED";da[da.EXTERNAL_XFDF_NOT_AVAILABLE=1]="EXTERNAL_XFDF_NOT_AVAILABLE";da[da.EXTERNAL_XFDF_AVAILABLE=2]="EXTERNAL_XFDF_AVAILABLE"})(ha||(ha={}));Aa=function(){function da(ca){this.aa=ca;this.state=ha.EXTERNAL_XFDF_NOT_REQUESTED}da.prototype.p7=function(){var ca=this;return function(w,x,
n){return Object(oa.b)(ca,void 0,void 0,function(){var e,a,b,f,h,r,z,fa=this,la;return Object(oa.d)(this,function(aa){switch(aa.label){case 0:if(this.state!==ha.EXTERNAL_XFDF_NOT_REQUESTED)return[3,2];e=this.aa.getDocument().yq();return[4,this.K5(e)];case 1:a=aa.ea(),b=this.i1(a),this.SE=null!==(la=null===b||void 0===b?void 0:b.parse())&&void 0!==la?la:null,this.state=null===this.SE?ha.EXTERNAL_XFDF_NOT_AVAILABLE:ha.EXTERNAL_XFDF_AVAILABLE,aa.label=2;case 2:if(this.state===ha.EXTERNAL_XFDF_NOT_AVAILABLE)return n(w),
[2];f=new DOMParser;h=f.parseFromString(w,"text/xml");x.forEach(function(ba){fa.merge(h,fa.SE,ba-1)});r=new XMLSerializer;z=r.serializeToString(h);n(z);return[2]}})})}};da.prototype.kI=function(ca){this.K5=ca};da.prototype.ae=function(){this.SE=void 0;this.state=ha.EXTERNAL_XFDF_NOT_REQUESTED};da.prototype.i1=function(ca){return ca?Array.isArray(ca)?new ja.a(ca):"string"!==typeof ca?null:(new DOMParser).parseFromString(ca,"text/xml").querySelector("xfdf > add")?new ja.a(ca):new ka.a(ca):null};da.prototype.merge=
function(ca,w,x){var n=this;0===x&&(this.F9(ca,w.Dn),this.H9(ca,w.EE));var e=w.ca[x];e&&(this.I9(ca,e.Gl),this.K9(ca,e.sV,w.Ut),this.J9(ca,e.page,x),this.G9(ca,e.pN));e=this.aa.Jb();if(x===e-1){var a=w.Ut;Object.keys(a).forEach(function(b){a[b].YF||n.WQ(ca,b,a[b])})}};da.prototype.F9=function(ca,w){null!==w&&(ca=this.mt(ca),this.Po(ca,"calculation-order",w))};da.prototype.H9=function(ca,w){null!==w&&(ca=this.mt(ca),this.Po(ca,"document-actions",w))};da.prototype.I9=function(ca,w){var x=this,n=this.kt(ca.querySelector("xfdf"),
"annots");Object.keys(w).forEach(function(e){x.Po(n,'[name="'+e+'"]',w[e])})};da.prototype.K9=function(ca,w,x){var n=this;if(0!==w.length){var e=this.mt(ca);w.forEach(function(a){var b=a.getAttribute("field"),f=x[b];f&&(n.WQ(ca,b,f),n.Po(e,"null",a))})}};da.prototype.WQ=function(ca,w,x){var n=this.mt(ca);null!==x.gz&&this.Po(n,'ffield [name="'+w+'"]',x.gz);ca=this.kt(ca.querySelector("xfdf"),"fields");w=w.split(".");this.AH(ca,w,0,x.value);x.YF=!0};da.prototype.J9=function(ca,w,x){null!==w&&(ca=this.mt(ca),
ca=this.kt(ca,"pages"),this.Po(ca,'[number="'+(x+1)+'"]',w))};da.prototype.G9=function(ca,w){Object.keys(w).forEach(function(x){(x=ca.querySelector('annots [name="'+x+'"]'))&&x.parentElement.removeChild(x)})};da.prototype.AH=function(ca,w,x,n){if(x===w.length)w=document.createElementNS("","value"),w.textContent=n,this.Po(ca,"value",w);else{var e=w[x];this.kt(ca,'[name="'+e+'"]',"field").setAttribute("name",e);ca=ca.querySelectorAll('[name="'+e+'"]');1===ca.length?this.AH(ca[0],w,x+1,n):(e=this.v4(ca),
this.AH(x===w.length-1?e:this.Sea(ca,e),w,x+1,n))}};da.prototype.v4=function(ca){for(var w=null,x=0;x<ca.length;x++){var n=ca[x];if(0===n.childElementCount||1===n.childElementCount&&"value"===n.children[0].tagName){w=n;break}}return w};da.prototype.Sea=function(ca,w){for(var x=0;x<ca.length;x++)if(ca[x]!==w)return ca[x];return null};da.prototype.Po=function(ca,w,x){w=ca.querySelector(w);null!==w&&ca.removeChild(w);ca.appendChild(x)};da.prototype.mt=function(ca){var w=ca.querySelector("pdf-info");
if(null!==w)return w;w=this.kt(ca.querySelector("xfdf"),"pdf-info");w.setAttribute("xmlns","http://www.pdftron.com/pdfinfo");w.setAttribute("version","2");w.setAttribute("import-version","4");return w};da.prototype.kt=function(ca,w,x){var n=ca.querySelector(w);if(null!==n)return n;n=document.createElementNS("",x||w);ca.appendChild(n);return n};return da}();ua["default"]=Aa},423:function(Aa,ua){Aa=function(){function y(){}y.prototype.Sx=function(oa){var ja={Dn:null,EE:null,Ut:{},ca:{}};oa=(new DOMParser).parseFromString(oa,
"text/xml");ja.Dn=oa.querySelector("pdf-info calculation-order");ja.EE=oa.querySelector("pdf-info document-actions");ja.Ut=this.E$(oa);ja.ca=this.Q$(oa);return ja};y.prototype.E$=function(oa){var ja=oa.querySelector("fields");oa=oa.querySelectorAll("pdf-info > ffield");if(null===ja&&null===oa)return{};var ka={};this.RZ(ka,ja);this.OZ(ka,oa);return ka};y.prototype.RZ=function(oa,ja){if(null!==ja&&ja.children){for(var ka=[],ha=0;ha<ja.children.length;ha++){var da=ja.children[ha];ka.push({name:da.getAttribute("name"),
element:da})}for(;0!==ka.length;)for(ja=ka.shift(),ha=0;ha<ja.element.children.length;ha++)da=ja.element.children[ha],"value"===da.tagName?oa[ja.name]={value:da.textContent,gz:null,YF:!1}:da.children&&ka.push({name:ja.name+"."+da.getAttribute("name"),element:da})}};y.prototype.OZ=function(oa,ja){ja.forEach(function(ka){var ha=ka.getAttribute("name");oa[ha]?oa[ha].gz=ka:oa[ha]={value:null,gz:ka,YF:!1}})};y.prototype.Q$=function(oa){var ja=this,ka={};oa.querySelectorAll("pdf-info widget").forEach(function(ha){var da=
parseInt(ha.getAttribute("page"),10)-1;ja.cA(ka,da);ka[da].sV.push(ha)});oa.querySelectorAll("pdf-info page").forEach(function(ha){var da=parseInt(ha.getAttribute("number"),10)-1;ja.cA(ka,da);ka[da].page=ha});this.XO(oa).forEach(function(ha){var da=parseInt(ha.getAttribute("page"),10),ca=ha.getAttribute("name");ja.cA(ka,da);ka[da].Gl[ca]=ha});this.JO(oa).forEach(function(ha){var da=parseInt(ha.getAttribute("page"),10);ha=ha.textContent;ja.cA(ka,da);ka[da].pN[ha]=!0});return ka};y.prototype.cA=function(oa,
ja){oa[ja]||(oa[ja]={Gl:{},pN:{},sV:[],page:null})};return y}();ua.a=Aa},434:function(Aa,ua,y){var oa=y(1),ja=y(0);y.n(ja);Aa=function(ka){function ha(da){var ca=ka.call(this)||this;ca.h4=Array.isArray(da)?da:[da];return ca}Object(oa.c)(ha,ka);ha.prototype.parse=function(){var da=this,ca={Dn:null,EE:null,Ut:{},ca:{}};this.h4.forEach(function(w){ca=Object(ja.merge)(ca,da.Sx(w))});return ca};ha.prototype.XO=function(da){var ca=[];da.querySelectorAll("add > *").forEach(function(w){ca.push(w)});da.querySelectorAll("modify > *").forEach(function(w){ca.push(w)});
return ca};ha.prototype.JO=function(da){return da.querySelectorAll("delete > *")};return ha}(y(423).a);ua.a=Aa},435:function(Aa,ua,y){var oa=y(1);Aa=function(ja){function ka(ha){var da=ja.call(this)||this;da.i4=ha;return da}Object(oa.c)(ka,ja);ka.prototype.parse=function(){return this.Sx(this.i4)};ka.prototype.XO=function(ha){return ha.querySelectorAll("annots > *")};ka.prototype.JO=function(){return[]};return ka}(y(423).a);ua.a=Aa}}]);}).call(this || window)