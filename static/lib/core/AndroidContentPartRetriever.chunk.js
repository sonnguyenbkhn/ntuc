/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[2],{400:function(Aa,ua,y){y.r(ua);var oa=y(1),ja=y(221);Aa=y(396);y=y(323);var ka=window,ha=function(da){function ca(w,x){var n=da.call(this,w,x)||this;n.url=w;n.range=x;n.request=new XMLHttpRequest;n.request.open("GET",n.url,!0);ka.Uint8Array&&(n.request.responseType="arraybuffer");n.request.setRequestHeader("X-Requested-With","XMLHttpRequest");n.status=ja.a.NOT_STARTED;return n}Object(oa.c)(ca,da);return ca}(Aa.ByteRangeRequest);
Aa=function(da){function ca(w,x,n,e){w=da.call(this,w,x,n,e)||this;w.yv=ha;return w}Object(oa.c)(ca,da);ca.prototype.Gt=function(w,x){return w+"/bytes="+x.start+","+(x.stop?x.stop:"")};return ca}(Aa["default"]);Object(y.a)(Aa);Object(y.b)(Aa);ua["default"]=Aa}}]);}).call(this || window)