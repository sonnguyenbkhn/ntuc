/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[7],{403:function(Aa,ua,y){y.r(ua);var oa=y(1);Aa=y(48);var ja=y(148),ka=y(323),ha=y(417),da=window;y=function(){function ca(w,x){this.jQ=function(n){n=n.split(".");return n[n.length-1].match(/(jpg|jpeg|png|gif)$/i)};x=x||{};this.url=w;this.filename=x.filename||w;this.De=x.customHeaders;this.xfa=!!x.useDownloader;this.withCredentials=!!x.withCredentials}ca.prototype.DB=function(w){this.De=w};ca.prototype.getCustomHeaders=function(){return this.De};
ca.prototype.getFileData=function(w){var x=this,n=this,e=new XMLHttpRequest,a=0===this.url.indexOf("blob:")?"blob":"arraybuffer";e.open("GET",this.url,!0);e.withCredentials=this.withCredentials;e.responseType=a;this.De&&Object.keys(this.De).forEach(function(f){e.setRequestHeader(f,x.De[f])});var b=/^https?:/i.test(this.url);e.addEventListener("load",function(f){return Object(oa.b)(this,void 0,void 0,function(){var h,r,z,fa,la,aa;return Object(oa.d)(this,function(ba){switch(ba.label){case 0:if(200!==
this.status&&(b||0!==this.status))return[3,10];n.trigger(ca.Events.DOCUMENT_LOADING_PROGRESS,[f.loaded,f.loaded]);if("blob"!==this.responseType)return[3,4];h=this.response;return n.jQ(n.filename)?[4,Object(ha.a)(h)]:[3,2];case 1:return r=ba.ea(),n.fileSize=r.byteLength,w(new Uint8Array(r)),[3,3];case 2:z=new FileReader,z.onload=function(ia){ia=new Uint8Array(ia.target.result);n.fileSize=ia.length;w(ia)},z.readAsArrayBuffer(h),ba.label=3;case 3:return[3,9];case 4:ba.Pf.push([4,8,,9]);fa=new Uint8Array(this.response);
if(!n.jQ(n.filename))return[3,6];h=new Blob([fa.buffer]);return[4,Object(ha.a)(h)];case 5:return r=ba.ea(),n.fileSize=r.byteLength,w(new Uint8Array(r)),[3,7];case 6:n.fileSize=fa.length,w(fa),ba.label=7;case 7:return[3,9];case 8:return ba.ea(),n.trigger(ca.Events.ERROR,["pdfLoad","Out of memory"]),[3,9];case 9:return[3,11];case 10:la=f.currentTarget,aa=Object(ja.b)(la),n.trigger(ca.Events.ERROR,["pdfLoad",this.status+" "+la.statusText,aa]),ba.label=11;case 11:return n.yw=null,[2]}})})},!1);e.onprogress=
function(f){n.trigger(ca.Events.DOCUMENT_LOADING_PROGRESS,[f.loaded,0<f.total?f.total:0])};e.addEventListener("error",function(){n.trigger(ca.Events.ERROR,["pdfLoad","Network failure"]);n.yw=null},!1);e.send();this.yw=e};ca.prototype.getFile=function(){var w=this;return new Promise(function(x){da.utils.isJSWorker&&x(w.url);if(w.xfa){var n=Object(oa.a)({url:w.url},w.De?{customHeaders:w.De}:{});x(n)}x(null)})};ca.prototype.abort=function(){this.yw&&(this.yw.abort(),this.yw=null)};ca.Events={DOCUMENT_LOADING_PROGRESS:"documentLoadingProgress",
ERROR:"error"};return ca}();Object(Aa.a)(y);Object(ka.a)(y);Object(ka.b)(y);ua["default"]=y}}]);}).call(this || window)