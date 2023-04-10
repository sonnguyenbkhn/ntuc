/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[13],{405:function(Aa,ua,y){y.r(ua);var oa=y(1),ja=y(0);y.n(ja);var ka=y(2),ha=y(137);Aa=y(48);var da=y(89),ca=y(222),w=y(62),x=y(221);y=y(323);var n=window,e=function(){function f(h,r,z){var fa=-1===h.indexOf("?")?"?":"&";switch(r){case w.a.NEVER_CACHE:this.url=h+fa+"_="+Object(ja.uniqueId)();break;default:this.url=h}this.De=z;this.request=new XMLHttpRequest;this.request.open("GET",this.url,!0);this.request.setRequestHeader("X-Requested-With",
"XMLHttpRequest");this.request.overrideMimeType?this.request.overrideMimeType("text/plain; charset=x-user-defined"):this.request.setRequestHeader("Accept-Charset","x-user-defined");this.status=x.a.NOT_STARTED}f.prototype.start=function(h,r){var z=this,fa=this,la=this.request,aa;fa.Nu=0;h&&Object.keys(h).forEach(function(ba){z.request.setRequestHeader(ba,h[ba])});r&&(this.request.withCredentials=r);this.hB=setInterval(function(){var ba=0===window.document.URL.indexOf("file:///");ba=200===la.status||
ba&&0===la.status;if(la.readyState!==x.b.DONE||ba){try{la.responseText}catch(ia){return}fa.Nu<la.responseText.length&&(aa=fa.Iaa())&&fa.trigger(f.Events.DATA,[aa]);0===la.readyState&&(clearInterval(fa.hB),fa.trigger(f.Events.DONE))}else clearInterval(fa.hB),fa.trigger(f.Events.DONE,["Error received return status "+la.status])},1E3);this.request.send(null);this.status=x.a.STARTED};f.prototype.Iaa=function(){var h=this.request,r=h.responseText;if(0!==r.length)if(this.Nu===r.length)clearInterval(this.hB),
this.trigger(f.Events.DONE);else return r=Math.min(this.Nu+3E6,r.length),h=n.hP(h,this.Nu,!0,r),this.Nu=r,h};f.prototype.abort=function(){clearInterval(this.hB);var h=this;this.request.onreadystatechange=function(){Object(ka.j)("StreamingRequest aborted");h.status=x.a.ABORTED;return h.trigger(f.Events.ABORTED)};this.request.abort()};f.prototype.finish=function(){var h=this;this.request.onreadystatechange=function(){h.status=x.a.SUCCESS;return h.trigger(f.Events.DONE)};this.request.abort()};f.Events=
{DONE:"done",DATA:"data",ABORTED:"aborted"};return f}();Object(Aa.a)(e);var a;(function(f){f[f.LOCAL_HEADER=0]="LOCAL_HEADER";f[f.FILE=1]="FILE";f[f.CENTRAL_DIR=2]="CENTRAL_DIR"})(a||(a={}));var b=function(f){function h(){var r=f.call(this)||this;r.buffer="";r.state=a.LOCAL_HEADER;r.JI=4;r.Fk=null;r.qr=ha.c;r.Vl={};return r}Object(oa.c)(h,f);h.prototype.Caa=function(r){var z;for(r=this.buffer+r;r.length>=this.qr;)switch(this.state){case a.LOCAL_HEADER:this.Fk=z=this.Maa(r.slice(0,this.qr));if(z.Tr!==
ha.g)throw Error("Wrong signature in local header: "+z.Tr);r=r.slice(this.qr);this.state=a.FILE;this.qr=z.aE+z.Eo+z.Tt+this.JI;this.trigger(h.Events.HEADER,[z]);break;case a.FILE:this.Fk.name=r.slice(0,this.Fk.Eo);this.Vl[this.Fk.name]=this.Fk;z=this.qr-this.JI;var fa=r.slice(this.Fk.Eo+this.Fk.Tt,z);this.trigger(h.Events.FILE,[this.Fk.name,fa,this.Fk.pE]);r=r.slice(z);if(r.slice(0,this.JI)===ha.h)this.state=a.LOCAL_HEADER,this.qr=ha.c;else return this.state=a.CENTRAL_DIR,!0}this.buffer=r;return!1};
h.Events={HEADER:"header",FILE:"file"};return h}(ca.a);Object(Aa.a)(b);Aa=function(f){function h(r,z,fa,la,aa){fa=f.call(this,r,fa,la)||this;fa.url=r;fa.stream=new e(r,z);fa.Oc=new b;fa.$R=window.createPromiseCapability();fa.AS={};fa.De=aa;return fa}Object(oa.c)(h,f);h.prototype.Ev=function(r){var z=this;this.request([this.vi,this.Fj,this.ui]);this.stream.addEventListener(e.Events.DATA,function(fa){try{if(z.Oc.Caa(fa))return z.stream.finish()}catch(la){throw z.stream.abort(),z.Vn(la),r(la),la;}});
this.stream.addEventListener(e.Events.DONE,function(fa){z.haa=!0;z.$R.resolve();fa&&(z.Vn(fa),r(fa))});this.Oc.addEventListener(b.Events.HEADER,Object(ja.bind)(this.zS,this));this.Oc.addEventListener(b.Events.FILE,Object(ja.bind)(this.bba,this));return this.stream.start(this.De,this.withCredentials)};h.prototype.fP=function(r){var z=this;this.$R.promise.then(function(){r(Object.keys(z.Oc.Vl))})};h.prototype.Em=function(){return!0};h.prototype.request=function(r){var z=this;this.haa&&r.forEach(function(fa){z.AS[fa]||
z.afa(fa)})};h.prototype.zS=function(){};h.prototype.abort=function(){this.stream&&this.stream.abort()};h.prototype.afa=function(r){this.trigger(da.a.Events.PART_READY,[{Ua:r,error:"Requested part not found",Eh:!1,wf:!1}])};h.prototype.bba=function(r,z,fa){this.AS[r]=!0;this.trigger(da.a.Events.PART_READY,[{Ua:r,data:z,Eh:!1,wf:!1,error:null,Dc:fa}])};return h}(da.a);Object(y.a)(Aa);Object(y.b)(Aa);ua["default"]=Aa}}]);}).call(this || window)