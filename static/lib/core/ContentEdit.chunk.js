/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[5],{436:function(Aa,ua,y){var oa=y(1);Aa=y(75);var ja=y(45);y=function(ka){function ha(){return null!==ka&&ka.apply(this,arguments)||this}Object(oa.c)(ha,ka);ha.prototype.testSelection=function(da,ca,w){return ja.a.Xj(da,ca,w)};return ha}(Aa.a);ua.a=y},81:function(Aa,ua,y){function oa(wa,Ga,La,Oa,Xa){return Object(ra.b)(void 0,void 0,void 0,function(){var bb,cb,ib,lb,ob,sb,ub,yb,Ob;return Object(ra.d)(this,function(Jb){switch(Jb.label){case 0:return bb=
Ua.getDocument(),cb=[1],[4,Object(va.c)(Ga,{extension:"pdf"})];case 1:return ib=Jb.ea(),lb=Ua.Fa(),ub=(sb=Wa.a).uaa,[4,ib.fz()];case 2:return ob=ub.apply(sb,[Jb.ea().xfdfString,wa]),yb=!0,[4,bb.$e(ib,cb,wa,yb)];case 3:return Jb.ea(),[4,bb.Lf([wa+1],yb)];case 4:return Jb.ea(),Ob=lb.We().filter(function(Lb){return Lb.mQ()&&Lb.PageNumber===wa}),lb.Rl(Ob,{force:!0,source:"contentEditTool"}),[4,lb.OP(ob)];case 5:return Jb.ea(),Ua.getDocument().LH(),Ua.KH(wa),Ua.se(),da(wa),Xa||(fa(wa,La.galleys,Oa),fa(wa,
La.objects,Oa)),[2]}})})}function ja(wa){wa=(new DOMParser).parseFromString(wa,"text/html").documentElement.querySelector("body");wa.querySelectorAll("p").forEach(function(Ga){Ga.querySelectorAll("span").forEach(function(Xa){var bb=Xa.getAttribute("style");bb=ka(bb,Xa.innerHTML);Xa.innerHTML=bb});var La=Ga.getAttribute("style"),Oa=Ga.innerHTML.replaceAll("<br>","");Ga.innerHTML=ka(La,Oa)});return wa.innerHTML.trim()}function ka(wa,Ga){if(null===wa||void 0===wa?0:wa.includes("bold"))Ga="<strong>"+
Ga+"</strong>";if(null===wa||void 0===wa?0:wa.includes("italic"))Ga="<em>"+Ga+"</em>";if((null===wa||void 0===wa?0:wa.includes("underline:1;"))||(null===wa||void 0===wa?0:wa.includes("text-decoration: underline")))Ga="<u>"+Ga+"</u>";return Ga}function ha(wa){if(["STRONG","EM","U"].includes(wa.tagName)&&null!==wa.getAttribute("style")){var Ga=document.createElement("span"),La=wa.style.color;La=z(La);Ga.setAttribute("style","color:"+La);wa.removeAttribute("style");Ga.innerHTML=wa.innerHTML;wa.innerHTML=
"";wa.appendChild(Ga)}else"SPAN"===wa.tagName&&null!==wa.getAttribute("style")?(La=wa.style.color,La=z(La),wa.setAttribute("style","color:"+La)):"A"===wa.tagName&&wa.removeAttribute("style")}function da(wa){var Ga=Ua.Fa(),La=Ga.We().filter(function(Oa){return Oa.mg()&&Oa.PageNumber===wa});Ga.Rl(La,{force:!0,source:"contentEditTool"})}function ca(wa,Ga){Ga.forEach(function(La){Ha[wa]||(Ha[wa]=[]);Ha[wa].find(function(Oa){return Oa.id===La.id})||Ha[wa].push(La)})}function w(wa,Ga){Ga.forEach(function(La){Ca[wa]||
(Ca[wa]=[]);Ca[wa].find(function(Oa){return Oa.id===La.id})||Ca[wa].push(La)})}function x(wa,Ga){return Object(ra.b)(void 0,void 0,void 0,function(){var La,Oa,Xa,bb,cb,ib,lb,ob,sb,ub,yb,Ob,Jb,Lb,Qb,ya,Qa,ab;return Object(ra.d)(this,function(gb){switch(gb.label){case 0:if(!wa)return[2];La=Ga.replaceAll("<p><br></p>","");Oa=n(La);Oa=Oa.replace(/<span style="color: var\(--text-color\);">(.*?)<\/span>/g,"$1");Oa=Oa.replace(/<span class="ql-cursor">(.*?)<\/span>/g,"");Xa=wa.Oe.id;bb=wa.PageNumber;cb=Sa[bb];
ib=cb.galleys.find(function(mb){return mb.id===Xa});lb=ja(ib.contents);ob=r(bb,cb,lb,Oa,Xa);if(""===ob)return[3,2];sb=new TextEncoder;ub=sb.encode(ob);yb=ub.buffer;Ob=Object(Ea.c)()||"https://www.pdftron.com/webfonts/v2/";Jb=Ua.getDocument();return[4,Jb.od([bb])];case 1:return Lb=gb.ea(),sb=new TextEncoder,Qb=sb.encode(""),ya=Qb.buffer,Ra.postMessage({cmd:"importText",pdfFile:Lb,pageNumber:bb,webFontURL:Ob,galleyId:Xa,importData:yb,tableData:ya},[yb,ya]),Qa={},ib&&(ab=ib.galleyBox,Qa={top:ab.top,
left:ab.left,bottom:ab.bottom,right:ab.right}),Object(Ka.v)(lb,Oa,Qa),[3,3];case 2:Object(Na.g)("Unable to generate import XML"),gb.label=3;case 3:return[2]}})})}function n(wa){var Ga=new DOMParser,La=Ga.parseFromString(wa,"text/xml");La.querySelector("parsererror")&&(La=Ga.parseFromString("<Root>"+wa+"</Root>","text/xml"));La.querySelectorAll("a").forEach(function(Oa){var Xa=Oa.childNodes[0];Array.from(Oa.querySelectorAll("*")).find(function(bb){return"u"===bb.tagName.toLowerCase()})||(Oa=document.createElement("u"),
Xa.after(Oa),Oa.appendChild(Xa))});return(new XMLSerializer).serializeToString(La)}function e(wa,Ga,La,Oa){this.top=wa;this.left=Ga;this.bottom=La;this.right=Oa;this.topVal=function(){return Math.round(this.top)};this.bottomVal=function(){return Math.round(this.bottom)};this.leftVal=function(){return Math.round(this.left)};this.rightVal=function(){return Math.round(this.right)};this.height=function(){return Math.round(Math.abs(this.top-this.bottom))};this.width=function(){return Math.round(this.right-
this.left)};this.AM=function(Xa){return this.topVal()!==Xa.topVal()||this.leftVal()!==Xa.leftVal()||this.bottomVal()!==Xa.bottomVal()||this.rightVal()!==Xa.rightVal()}}function a(wa,Ga,La,Oa,Xa){this.id=wa;this.pagenum=Ga;this.galleysContents=La;this.contents=Oa;this.galleyBox=Xa;Object(Ka.u)(Ca)}function b(wa,Ga,La,Oa){this.id=Ga;this.type=wa;this.bbox=La;this.pagenum=Oa}function f(wa,Ga,La,Oa,Xa){this.id=wa;this.pagecount=Ga;this.pageBBox=La;this.galleys=Oa;this.objects=Xa}function h(wa,Ga){this.family=
wa;this.variations=Ga}function r(wa,Ga,La,Oa,Xa){var bb=[],cb=[];(new DOMParser).parseFromString(Oa,"text/html").documentElement.querySelectorAll("p").forEach(function(ub,yb){bb[yb]=ub.innerHTML;cb[yb]={fontSize:ub.style.fontSize,fontFamily:ub.style.fontFamily,color:z(ub.style.color)}});La=(new DOMParser).parseFromString(La,"text/html");var ib=null;La.documentElement.querySelectorAll("p").forEach(function(ub,yb){if(yb<bb.length){var Ob=(new DOMParser).parseFromString(bb[yb],"text/html").documentElement.querySelector("body");
Ob.childNodes.forEach(function(Lb){ha(Lb)});ub.innerHTML=Ob.innerHTML;ib=ub.getAttribute("style");Ob=cb[yb].fontSize?cb[yb].fontSize:ub.style.fontSize;var Jb=cb[yb].fontFamily?cb[yb].fontFamily.replace(/\s+/g,"").replace(/['"]+/g,""):ub.style.fontFamily;yb=cb[yb].color?cb[yb].color:null;ib=ib.replace(/(font:.*?;)/i,"font:normal normal "+Ob+" "+Jb+";");ib=ib.replace("Italic","");ib=ib.replace("underline:1;","underline:0;");ib=ib.replace("text-decoration: underline;","text-decoration: none;");yb&&(ib=
ib.replace(/(color:.*?;)/i,"color:"+yb+";"));ub.setAttribute("style",ib)}else ub.remove()});for(Oa=La.documentElement.querySelectorAll("p").length;Oa<bb.length;Oa++){var lb=document.createElement("p");lb.setAttribute("id","0");var ob=(new DOMParser).parseFromString(bb[Oa],"text/html").documentElement.querySelector("body");ob.childNodes.forEach(function(ub){ha(ub)});lb.innerHTML=ob.innerHTML;null!=ib&&lb.setAttribute("style",ib);La.documentElement.querySelector("body").appendChild(lb)}La=La.documentElement.querySelector("body").innerHTML;
var sb="";Ca[wa].forEach(function(ub){ub.id===Xa&&(sb=ub)});if(""===sb)return"";Ga="<DOC id='"+Ga.id+"' pagecount='"+Ga.pagecount+"'>";Ga=Ga+("<STORY galley_ids='"+Xa+"' pagenum='"+wa+"'><galleys>")+(sb.galleysContents+"</galleys>");sb.contents=La;Ga=Ga+La+"\n</STORY>";return Ga+="</DOC>"}function z(wa){return wa.startsWith("rgb(")?"#"+wa.replace(/^[^\d]+/,"").replace(/[^\d]+$/,"").split(",").map(function(Ga){return("00"+parseInt(Ga,10).toString(16)).slice(-2)}).join(""):wa}function fa(wa,Ga,La){var Oa=
[],Xa=Ua.getDocument(),bb=null;Ga.forEach(function(cb){if(cb instanceof b){var ib=Xa.jm(wa,cb.bbox.leftVal(),cb.bbox.topVal());var lb=ib.x;var ob=ib.y;var sb=Xa.jm(wa,cb.bbox.rightVal(),cb.bbox.bottomVal());ib=sb.x;sb=sb.y}else if(cb instanceof a)ib=Xa.jm(wa,cb.galleyBox.leftVal(),cb.galleyBox.topVal()),lb=ib.x,ob=ib.y,sb=Xa.jm(wa,cb.galleyBox.rightVal(),cb.galleyBox.bottomVal()),ib=sb.x,sb=sb.y;else return;var ub=new window.Core.Annotations.RectangleAnnotation,yb=Fa.a.OBJECT;cb instanceof a&&(yb=
Fa.a.TEXT);ub.Xca(cb,yb);ub.PageNumber=cb.pagenum;ub.X=lb;ub.Y=ob;ub.Width=ib-lb;ub.Height=sb-ob;ub.StrokeColor=new ta.a("#3183C8");ub.FillColor=new ta.a(255,255,255,.01);ub.Style="dash";ub.Dashes="4,3";ub.zN();ub.selectionModel=Ba.a;Oa.push(ub);"undefined"!==typeof La&&La===cb.id&&(bb=ub)});Ga=Ua.Fa();Ga.wn(Oa);bb&&Ga.Xo(bb);Ga.Ti(Oa)}function la(wa,Ga,La){return Object(ra.b)(this,void 0,void 0,function(){var Oa,Xa,bb,cb,ib,lb;return Object(ra.d)(this,function(ob){switch(ob.label){case 0:Oa=wa.data;
bb=Oa.cmd;switch(bb){case "isReady":return[3,1];case "initialiseInfixServer":return[3,3];case "loadAvailableFonts":return[3,4];case "exportFile":return[3,5];case "insertNewTextBox":return[3,6];case "importText":return[3,7];case "transformObject":return[3,7];case "alignParagraph":return[3,7];case "deleteObject":return[3,8];case "insertImage":return[3,9]}return[3,10];case 1:return[4,Object(Pa.b)()];case 2:return cb=ob.ea(),Ra.postMessage({cmd:"initialiseInfixServer",l:cb}),[3,10];case 3:return(ib=aa(Oa.resultsXML))?
(Ga(),lb=Object(Ea.c)()||"https://www.pdftron.com/webfonts/v2/",Ra.postMessage({cmd:"loadAvailableFonts",webFontURL:lb})):La("License key does not have content edit permission"),[3,10];case 4:return qa(Oa.resultsXML),[3,10];case 5:return Oa.exportPerformed?ia(Oa.pageNumber,Oa.exportXML,Oa.objectXML,Oa.resultsXML):(Xa=Sa[Oa.pageNumber],w(Oa.pageNumber,Xa.galleys),ca(Oa.pageNumber,Xa.objects),da(Oa.pageNumber),fa(Oa.pageNumber,Xa.galleys),fa(Oa.pageNumber,Xa.objects)),[3,10];case 6:return ba(Oa.pageNumber,
Oa.exportXML,Oa.contentHTML),Xa=Sa[Oa.pageNumber],oa(Oa.pageNumber,Oa.pdfBuffer,Xa,Oa.id),[3,10];case 7:return Xa=Sa[Oa.pageNumber],sa(Oa.pageNumber,Oa.resultsXML),oa(Oa.pageNumber,Oa.pdfBuffer,Xa,Oa.id),[3,10];case 8:return Xa=Sa[Oa.pageNumber],sa(Oa.pageNumber,Oa.resultsXML),Xa.galleys=Xa.galleys.filter(function(sb){return sb.id!==Oa.id}),Xa.objects=Xa.objects.filter(function(sb){return sb.id!==Oa.id}),oa(Oa.pageNumber,Oa.pdfBuffer,Xa),[3,10];case 9:return Xa=Sa[Oa.pageNumber],sa(Oa.pageNumber,
Oa.resultsXML),oa(Oa.pageNumber,Oa.pdfBuffer,Xa,Oa.isText,!0),[3,10];case 10:return[2]}})})}function aa(wa){wa=new Uint8Array(wa);var Ga=(new TextDecoder("utf-8")).decode(wa);wa=!1;Ga=(new DOMParser).parseFromString(Ga,"text/xml").getElementsByTagName("LicenseCheck");null!==Ga&&0<Ga.length&&(Ga=Ga[0].getElementsByTagName("Status")[0].innerHTML,"error"!==Ga&&"ok"===Ga&&(wa=!0));return wa}function ba(wa,Ga){Ga=(new TextDecoder("utf-8")).decode(Ga);Ga=(new DOMParser).parseFromString(Ga,"text/xml").getElementsByTagName("STORY");
var La=Array.prototype.slice.call(Ga)[0];Ga=La.getAttribute("galley_ids");var Oa=Array.prototype.slice.call(La.getElementsByTagName("g"))[0],Xa=Oa.getAttribute("bbox").split(" ");Xa=new e(parseFloat(Xa[0]),parseFloat(Xa[1]),parseFloat(Xa[2]),parseFloat(Xa[3]));Oa=Oa.innerHTML;var bb=Array.prototype.slice.call(La.getElementsByTagName("galleys"))[0];bb.parentNode.removeChild(bb);La=na(La.innerHTML).trim();Ga=new a(Ga,wa,Oa,La,Xa);La=Sa[wa];Xa=La.galleys;Xa.push(Ga);La.galleys=Xa;Sa[wa]=La;w(wa,La.galleys);
ca(wa,La.objects);da(wa);fa(wa,La.galleys);fa(wa,La.objects)}function ia(wa,Ga,La,Oa){var Xa=new Uint8Array(Ga),bb=new TextDecoder("utf-8");Ga=bb.decode(Xa);Xa=new Uint8Array(La);La=bb.decode(Xa);Xa=new Uint8Array(Oa);Oa=bb.decode(Xa);Sa[wa]=ma(wa,Ga,La,Oa);Oa=Sa[wa];w(wa,Oa.galleys);ca(wa,Oa.objects);da(wa);fa(wa,Oa.galleys);fa(wa,Oa.objects)}function ea(wa,Ga){wa=parseFloat(wa);return isNaN(Ga)||Ga<wa?wa:Ga}function ma(wa,Ga,La,Oa){var Xa;var bb=new DOMParser;Oa=bb.parseFromString(Oa,"text/xml");
Array.prototype.slice.call(Oa.getElementsByTagName("BBox")).forEach(function(lb){if("CropBox"===lb.getAttribute("Name")){var ob=parseFloat(lb.getElementsByTagName("Top").item(0).innerHTML),sb=parseFloat(lb.getElementsByTagName("Bottom").item(0).innerHTML),ub=parseFloat(lb.getElementsByTagName("Left").item(0).innerHTML);lb=parseFloat(lb.getElementsByTagName("Right").item(0).innerHTML);Xa=new e(ob,ub,sb,lb)}});bb=new DOMParser;Oa=bb.parseFromString(Ga,"text/xml");var cb=[];Array.prototype.slice.call(Oa.getElementsByTagName("STORY")).forEach(function(lb){var ob=
lb.getAttribute("galley_ids"),sb=Array.prototype.slice.call(lb.getElementsByTagName("g"))[0],ub=sb.getAttribute("bbox").split(" ");ub=new e(parseFloat(ub[0]),parseFloat(ub[1]),parseFloat(ub[2]),parseFloat(ub[3]));sb=sb.innerHTML;var yb=Array.prototype.slice.call(lb.getElementsByTagName("galleys"))[0];yb.parentNode.removeChild(yb);lb=na(lb.innerHTML).trim();ob=new a(ob,wa,sb,lb,ub);cb.push(ob)});bb=new DOMParser;var ib=[];Ga=bb.parseFromString(La,"text/xml").getElementsByTagName("Object");Array.prototype.slice.call(Ga).forEach(function(lb){var ob=
lb.getAttribute("Type"),sb=lb.getAttribute("OID");lb=Array.prototype.slice.call(lb.getElementsByTagName("Point"));var ub=Number.NaN,yb=Number.NaN,Ob=Number.NaN,Jb=Number.NaN;lb.forEach(function(Lb){var Qb=Lb.getAttribute("Name");"TL"===Qb?(ub=ea(Lb.getAttribute("Y"),ub),Ob=ea(Lb.getAttribute("X"),Ob)):"TR"===Qb?(ub=ea(Lb.getAttribute("Y"),ub),Jb=ea(Lb.getAttribute("X"),Jb)):"BR"===Qb?(yb=ea(Lb.getAttribute("Y"),yb),Jb=ea(Lb.getAttribute("X"),Jb)):"BL"===Qb&&(yb=ea(Lb.getAttribute("Y"),yb),Ob=ea(Lb.getAttribute("X"),
Ob))});lb=new e(ub,Ob,yb,Jb);ob=new b(ob,sb,lb,wa);ib.push(ob)});Ga=Array.prototype.slice.call(Oa.getElementsByTagName("DOC"))[0].getAttribute("id");return new f(Ga,1,Xa,cb,ib)}function na(wa){return(new DOMParser).parseFromString(wa,"text/html").documentElement.querySelector("body").innerHTML}function sa(wa,Ga){var La;Ga=(new TextDecoder("utf-8")).decode(Ga);var Oa=(new DOMParser).parseFromString(Ga,"text/xml");Ga=Oa.getElementsByTagName("Galley").item(0);if(null!=Ga){var Xa=Ga.getAttribute("id");
Ga=Oa.getElementsByTagName("BBox");Ga=Array.prototype.slice.call(Ga);Ga.forEach(function(ib){var lb=ib.getElementsByTagName("Top"),ob=parseFloat(lb.item(0).innerHTML);lb=ib.getElementsByTagName("Left");var sb=parseFloat(lb.item(0).innerHTML);lb=ib.getElementsByTagName("Bottom");var ub=parseFloat(lb.item(0).innerHTML);lb=ib.getElementsByTagName("Right");ib=parseFloat(lb.item(0).innerHTML);La=new e(ob,sb,ub,ib)});Ca[wa].forEach(function(ib){ib.id===Xa&&!0===La.AM(ib.galleyBox)&&(ib.galleyBox=La)})}Ga=
Oa.getElementsByTagName("Object").item(0);if(null!=Ga){var bb=Ga.getAttribute("OID");Ga=Oa.getElementsByTagName("BBox");Ga=Array.prototype.slice.call(Ga);Ga.forEach(function(ib){var lb=ib.getElementsByTagName("Top"),ob=parseFloat(lb.item(0).innerHTML);lb=ib.getElementsByTagName("Left");var sb=parseFloat(lb.item(0).innerHTML);lb=ib.getElementsByTagName("Bottom");var ub=parseFloat(lb.item(0).innerHTML);lb=ib.getElementsByTagName("Right");ib=parseFloat(lb.item(0).innerHTML);La=new e(ob,sb,ub,ib)});Ha[wa].forEach(function(ib){ib.id===
bb&&!0===La.AM(ib.bbox)&&(ib.bbox=La)})}Ga=Oa.getElementsByTagName("NewParas").item(0);if(null!=Ga){var cb=Ga.getAttribute("id");Ca[wa].forEach(function(ib){if(ib.id===cb){var lb="<Contents>"+ib.contents;lb+="</Contents>";var ob=Array.prototype.slice.call(Oa.getElementsByTagName("NewPara"));lb=(new DOMParser).parseFromString(lb,"text/xml");var sb=Array.prototype.slice.call(lb.getElementsByTagName("p"));ob.forEach(function(ub){var yb=parseFloat(ub.innerHTML),Ob=!1;sb.forEach(function(Jb){var Lb=Jb.getAttribute("id");
!1===Ob&&"0"===Lb&&(Jb.setAttribute("id",yb),Ob=!0)})});ib.contents=lb.getElementsByTagName("Contents").item(0).innerHTML}})}}function qa(wa){wa=new Uint8Array(wa);wa=(new TextDecoder("utf-8")).decode(wa);wa=(new DOMParser).parseFromString(wa,"text/xml").getElementsByTagName("Font");var Ga={};Array.prototype.slice.call(wa).forEach(function(La){var Oa=La.getAttribute("Family");Oa in Ga||(Ga[Oa]={});var Xa=[];Array.prototype.slice.call(La.getElementsByTagName("Variation")).forEach(function(bb){bb=bb.innerHTML;
Xa.push(bb);if(bb.includes("Regular")||bb===Oa.replace(/\s+/g,""))Ga[Oa].hasRegular=!0;bb.includes("Bold")&&(Ga[Oa].hasBold=!0);bb.includes("Italic")&&(Ga[Oa].hasItalic=!0)});La=new h(Oa,Xa);Va.push(La)});$a=Object.keys(Ga).filter(function(La){return Ga[La].hasRegular&&Ga[La].hasBold&&Ga[La].hasItalic})}y.r(ua);var ra=y(1),va=y(49),ta=y(15),Ba=y(436),Ea=y(34),Pa=y(70),Na=y(2),Fa=y(142),Ka=y(51),Wa=y(6),Ra=null,Ta=null,Ca={},Ha={},Sa={},Va=[],$a=[],Ua;ua["default"]={raa:function(wa){return Object(ra.b)(void 0,
void 0,void 0,function(){return Object(ra.d)(this,function(){Ta||(Ua=wa,Ta=new Promise(function(Ga,La){var Oa=window.Core.ContentEdit.getWorkerPath(),Xa=window.Core.ContentEdit.getResourcePath();Ra=new Worker(Oa+"InfixServerModule.js");Ra.onmessage=function(bb){la(bb,Ga,La)};Ra.postMessage({cmd:"isReady",resourcePath:Xa})}));return[2,Ta]})})},taa:function(wa,Ga,La){return Object(ra.b)(void 0,void 0,void 0,function(){var Oa,Xa,bb,cb;return Object(ra.d)(this,function(ib){switch(ib.label){case 0:return da(Ga),
Ca[Ga]=[],Ha[Ga]=[],[4,wa.od([Ga])];case 1:return Oa=ib.ea(),Xa=new TextEncoder,bb=Xa.encode(""),cb=bb.buffer,Ra.postMessage({cmd:"exportFile",pageNumber:Ga,performExport:La,pdfFile:Oa,tableData:cb},[Oa,cb]),[2]}})})},L1:function(wa){return Object(ra.b)(void 0,void 0,void 0,function(){var Ga,La,Oa,Xa,bb,cb,ib,lb;return Object(ra.d)(this,function(ob){switch(ob.label){case 0:return Ga=wa.id,La=wa.isText,Oa=wa.pageNumber,Xa=Ua.getDocument(),[4,Xa.od([Oa])];case 1:return bb=ob.ea(),cb=new TextEncoder,
ib=cb.encode(""),lb=ib.buffer,Ra.postMessage({cmd:"deleteObject",pdfFile:bb,pageNumber:Oa,objectID:Ga,isText:La,tableData:lb},[lb]),[2]}})})},Zea:function(wa){return Object(ra.b)(void 0,void 0,void 0,function(){var Ga,La,Oa,Xa,bb,cb,ib,lb,ob,sb,ub,yb,Ob;return Object(ra.d)(this,function(Jb){switch(Jb.label){case 0:return Ga=wa.id,La=wa.position,Oa=La.top,Xa=La.left,bb=La.bottom,cb=La.right,ib=wa.isText,lb=wa.pageNumber,ob=Ua.getDocument(),[4,ob.od([lb])];case 1:return sb=Jb.ea(),ub=new TextEncoder,
yb=ub.encode(""),Ob=yb.buffer,Ra.postMessage({cmd:"transformObject",pdfFile:sb,pageNumber:lb,objectID:Ga,isText:ib,topVal:Oa,leftVal:Xa,bottomVal:bb,rightVal:cb,tableData:Ob},[Ob]),[2]}})})},WZ:function(wa,Ga){return Object(ra.b)(void 0,void 0,void 0,function(){var La,Oa,Xa,bb,cb,ib,lb,ob,sb,ub,yb,Ob,Jb,Lb,Qb;return Object(ra.d)(this,function(ya){switch(ya.label){case 0:return La="<DOC><STORY><galleys></galleys>",Oa=[],Xa=(new DOMParser).parseFromString(Ga,"text/html"),Xa.documentElement.querySelectorAll("p").forEach(function(Qa,
ab){Oa[ab]=Qa.innerHTML}),Oa.forEach(function(Qa,ab){Qa=(new DOMParser).parseFromString(Oa[ab],"text/html").documentElement.querySelector("body");Qa.childNodes.forEach(function(gb){ha(gb)});La+="<p>"+Qa.innerHTML+"</p>"}),La+="</STORY></DOC>",bb=wa.pageNumber,cb=Ua.getDocument(),ib=wa.position,lb=ib.top,ob=ib.left,sb=ib.bottom,ub=ib.right,yb=wa.defaultText,Ob=wa.font,Jb=wa.fontSize,Lb=wa.textColor,[4,cb.od([bb])];case 1:return Qb=ya.ea(),Ra.postMessage({cmd:"insertNewTextBox",pdfFile:Qb,pageNumber:bb,
topVal:lb,leftVal:ob,bottomVal:sb,rightVal:ub,defaultText:yb,font:Ob,fontSize:Jb,textColor:Lb,importData:La,content:Ga}),[2]}})})},nfa:x,E5:function(wa){if(wa)return ja(wa.contents);Object(Na.g)("Unable to extract document content")},Yca:function(wa,Ga){var La=ja(wa.Oe.contents);La=(new DOMParser).parseFromString(La,"text/html").documentElement.querySelector("body");var Oa=La.querySelectorAll("p"),Xa=new XMLSerializer;Oa.forEach(function(bb){bb.style.fontFamily=Ga});La=Xa.serializeToString(La);x(wa,
La)},Zca:function(wa,Ga){var La=ja(wa.Oe.contents);La=(new DOMParser).parseFromString(La,"text/html").documentElement.querySelector("body");var Oa=La.querySelectorAll("p"),Xa=new XMLSerializer;Oa.forEach(function(bb){bb.style.fontSize=Ga});La=Xa.serializeToString(La);x(wa,La)},h_:function(wa,Ga){return Object(ra.b)(void 0,void 0,void 0,function(){var La,Oa,Xa,bb,cb,ib,lb;return Object(ra.d)(this,function(ob){switch(ob.label){case 0:return La=wa.Oe.id,Oa=wa.PageNumber,Xa=Ua.getDocument(),[4,Xa.od([Oa])];
case 1:return bb=ob.ea(),cb=new TextEncoder,ib=cb.encode(""),lb=ib.buffer,Ra.postMessage({cmd:"AlignParaText",pdfFile:bb,pageNumber:Oa,galleyID:La,alignment:Ga,topVal1:"",leftVal1:"",bottomVal1:"",rightVal1:"",topVal2:"",leftVal2:"",bottomVal2:"",rightVal2:"",tableData:lb},[lb]),[2]}})})},P_:function(wa){var Ga=ja(wa.Oe.contents);Ga=(new DOMParser).parseFromString(Ga,"text/html").documentElement.querySelector("body");var La=Ga.querySelectorAll("p"),Oa=new XMLSerializer,Xa="bold"===La[0].style.fontWeight,
bb=Oa.serializeToString(La[0]).includes("<strong>");La.forEach(function(cb){if(Xa||bb){cb.style.fontWeight="normal";var ib=Oa.serializeToString(cb).replace(/<strong>/g,"");ib=ib.replace(/<\/strong>/g,"");ib=(new DOMParser).parseFromString(ib,"text/html").documentElement.querySelector("p");cb.parentElement.replaceChild(ib,cb)}else cb.style.fontWeight="bold",cb.innerHTML="<strong>"+cb.innerHTML.trim()+"</strong>"});Ga=Oa.serializeToString(Ga);x(wa,Ga)},c9:function(wa){var Ga=ja(wa.Oe.contents);Ga=(new DOMParser).parseFromString(Ga,
"text/html").documentElement.querySelector("body");var La=Ga.querySelectorAll("p"),Oa=new XMLSerializer,Xa="italic"===La[0].style.fontStyle,bb=Oa.serializeToString(La[0]).includes("<em>");La.forEach(function(cb){if(Xa||bb){cb.style.fontStyle="normal";cb.style.font.includes("Italic")&&(cb.style.font=cb.style.font.replace("Italic",""));var ib=Oa.serializeToString(cb).replace(/<em>/g,"");ib=ib.replace(/<\/em>/g,"");ib=(new DOMParser).parseFromString(ib,"text/html").documentElement.querySelector("p");
cb.parentElement.replaceChild(ib,cb)}else cb.style.fontStyle="italic",cb.innerHTML="<em>"+cb.innerHTML.trim()+"</em>"});Ga=Oa.serializeToString(Ga);x(wa,Ga)},efa:function(wa){var Ga=ja(wa.Oe.contents);Ga=(new DOMParser).parseFromString(Ga,"text/html").documentElement.querySelector("body");var La=Ga.querySelectorAll("p"),Oa=new XMLSerializer,Xa=La[0].style.textDecoration.includes("underline")||La[0].style.textDecoration.includes("word"),bb=Oa.serializeToString(La[0]).includes("<u>");La.forEach(function(cb){if(Xa||
bb){cb.style.textDecoration=cb.style.textDecoration.replace("underline","");var ib=Oa.serializeToString(cb).replace(/<u>/g,"");ib=ib.replace(/<\/u>/g,"");ib=(new DOMParser).parseFromString(ib,"text/html").documentElement.querySelector("p");cb.parentElement.replaceChild(ib,cb)}else cb.style.textDecoration.includes("none")?cb.style.textDecoration=cb.style.textDecoration.replace("none","underline"):cb.style.textDecoration+=" underline",cb.innerHTML="<u>"+cb.innerHTML.trim()+"</u>"});Ga=Oa.serializeToString(Ga);
x(wa,Ga)},bea:function(wa,Ga){var La=ja(wa.Oe.contents);La=(new DOMParser).parseFromString(La,"text/html").documentElement.querySelector("body");var Oa=La.querySelectorAll("p"),Xa=new XMLSerializer;Oa.forEach(function(bb){bb.style.color=Ga});La.querySelectorAll("span").forEach(function(bb){bb.setAttribute("style","color:"+Ga)});La=Xa.serializeToString(La);x(wa,La)},w5:function(){return $a},UZ:function(wa){return Object(ra.b)(void 0,void 0,void 0,function(){var Ga,La,Oa,Xa,bb,cb,ib,lb,ob,sb;return Object(ra.d)(this,
function(ub){switch(ub.label){case 0:return Ga=wa.pageNumber,La=wa.newImage,Oa=wa.scaleType,Xa=wa.position,bb=Xa.top,cb=Xa.left,ib=Xa.bottom,lb=Xa.right,ob=Ua.getDocument(),[4,ob.od([Ga])];case 1:return sb=ub.ea(),Ra.postMessage({cmd:"insertImage",pdfFile:sb,pageNumber:Ga,newImage:La,scaleType:Oa,topVal:bb,leftVal:cb,bottomVal:ib,rightVal:lb},[]),[2]}})})}}}}]);}).call(this || window)