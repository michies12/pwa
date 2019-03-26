window.onload=function(){textChanger.init()}
var textChanger={cpanel:"txt-size",element:"main",defaultFS:1,init:function(){var e=document.getElementById(textChanger.cpanel),t=document.getElementById(textChanger.element)
if(null==e||null==t)console.log('The elements with the "'+textChanger.cpanel+'" and/or "'+textChanger.element+'" ID do not exist in HTML source.')
else{var i=document.createElement("ul")
e.appendChild(i),i.innerHTML='<li id="decrease"><a href="#" title="Decrease font size">A</a></li><li id="reset"><a href="#" title="Default font size">A</a></li><li id="increase"><a href="#" title="Increase font size">A</a></li>'
var s=textChanger.getCookie()
t.style.fontSize=s?s+"em":textChanger.defaultFS+"em"
var l=document.getElementById("increase")
l.onclick=function(){return textChanger.changeSize(1),!1}
var o=document.getElementById("decrease")
o.onclick=function(){return textChanger.changeSize(-1),!1}
var n=document.getElementById("reset")
n.onclick=function(){return textChanger.changeSize(0),!1}}},changeSize:function(e){var t=document.getElementById(textChanger.element),i=t.style.fontSize.substring(0,3),s=parseFloat(i,10)
1==e&&(s+=.5,s>2&&(s=2)),-1==e&&(s-=.25,.5>s&&(s=.5)),0==e&&(s=1),t.style.fontSize=s+"em",textChanger.updateCookie(s)
try{tableNiceScroll()}catch(l){}},updateCookie:function(e){var t=new Date,i=new Date(t.getTime()+31536e6)
document.cookie="textChangerL=size="+e+";expires="+i.toGMTString()+";path=/"},getCookie:function(){var e="textChangerL=size=",t=document.cookie.indexOf(e),i=t+e.length
if(!t&&e!=document.cookie.substring(0,e.length))return null
if(-1==t)return null
var s=document.cookie.indexOf(";",i)
return-1==s&&(s=document.cookie.length),unescape(document.cookie.substring(i,s))}}
