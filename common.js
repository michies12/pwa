function htmlDecode(t){return $("<div/>").html(t).text()}function showAttachmentIcon(t,e){var r=""
return("doc"==e||"docx"==e)&&(r='<img src="'+t+'ic_ext_word.png" alt="'+e+'">'),("xls"==e||"xlsx"==e)&&(r='<img src="'+t+'ic_ext_excel.png" alt="'+e+'">'),("ppt"==e||"pptx"==e)&&(r='<img src="'+t+'ic_ext_ppt.png" alt="'+e+'">'),"pdf"==e&&(r='<img src="'+t+'ic_ext_pdf.png" alt="'+e+'">'),"zip"==e&&(r='<img src="'+t+'ic_ext_zip.png" alt="'+e+'">'),r}function LTrim(t){var e=new String(" 	\n\r"),r=new String(t)
if(-1!=e.indexOf(r.charAt(0))){for(var n=0,a=r.length;a>n&&-1!=e.indexOf(r.charAt(n));)n++
r=r.substring(n,a)}return r}function RTrim(t){var e=new String(" 	\n\r"),r=new String(t)
if(-1!=e.indexOf(r.charAt(r.length-1))){for(var n=r.length-1;n>=0&&-1!=e.indexOf(r.charAt(n));)n--
r=r.substring(0,n+1)}return r}function Trim(t){return RTrim(LTrim(t))}function validateDocExtension(t,e){var r=!1
try{var n,a=e.split(",")
t=Trim(t)
for(var i=0;i<a.length;i++)n=new RegExp("(."+a[i]+")","i"),n.test(t)&&(r=!0)
return r}catch(c){}}function validateEmail(t){return""!=Trim(t)&&/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*([\.-]\w+)$/.test(Trim(t))?!0:!1}function validateNRIC(t){var e=!0
if(""!=Trim(t)){weight=new Array("2","7","6","5","4","3","2"),u_reftb=new Array("A","B","C","D","E","F","G","H","I","Z","J"),f_reftb=new Array("K","L","M","N","P","Q","R","T","U","W","X")
var r,n,a=0,i=0,c=0,l=0
if(9!=t.length&&(e=!1),e){for(r=Trim(t).charAt(0).toUpperCase(),n=Trim(t).charAt(8).toUpperCase(),"I"!=r&&"S"!=r&&"T"!=r&&"F"!=r&&"G"!=r&&(e=!1),a=0;7>a;a++)i=weight[a]*Trim(t).charAt(a+1),c+=i;("T"==r||"G"==r)&&(c+=4),l=c%11,e="I"==r||"S"==r||"T"==r?n==u_reftb[11-l-1]?!0:!1:n==f_reftb[11-l-1]?!0:!1}}return e}function isAtLeastOneChecked(t,e,r){for(var n=!1,a=0;a<t.length;a++)if(t.elements[a].type==e&&-1!=t.elements[a].id.indexOf(r)&&1==t.elements[a].checked){n=!0
break}return n}function fPopUpWindow(t,e,r,n,a,i){var c,l
return l="toolbar=0,location=0,directories=0,status="+i+",menubar=0,scrollbars="+a+",resizable="+i+",width="+r+",height="+n,c=window.open(t,e,l)}function fCloseWindow(t){var e
try{t&&(e=window.open("",t),e.close())}catch(r){}return!0}function chkTextAreaLength(t,e,r){try{null!=t&&(t.value.length>e&&(t.value=t.value.substring(0,e)),document.getElementById(r).innerHTML=e-t.value.length)}catch(n){}}function fStrCleanUp(t){try{var e=t+""
return e=e.replaceAll("<script>",""),e=e.replaceAll("</script>",""),e=e.replaceAll("<","&lt;"),e=e.replaceAll(">","&gt;")}catch(r){}}function fStrRemoveMarkup(t){try{var e=t+""
return e=e.replace(/(<([^>]+)>)/gi,"")}catch(r){}}function fValidateDate(t,e){try{var r=!1,n=Trim(e.Value),a=Date.parse(convertToDate(n,"/"))
a>0&&(r=!0),e.IsValid=r}catch(i){e.IsValid=!1}}function fValidateDateRange(t,e){try{var r=!0,n="",a="",i=""
n=Trim(e.Value),null!=t.attributes.endDate.nodeValue&&(a=Trim(document.getElementById(t.attributes.endDate.nodeValue).value)),null!=t.attributes.checkEmpty.nodeValue&&(i=Trim(t.attributes.checkEmpty.nodeValue)),""==n||""==a?"1"==i&&(r=!1):r=validateDateRange(n,a),e.IsValid=r}catch(c){e.IsValid=!1}}function validateDateRange(t,e){try{var r=!1,n=Date.parse(convertToDate(t,"/")),a=Date.parse(convertToDate(e,"/"))
return a>=n&&(r=!0),r}catch(i){}}function convertToDate(t,e){var r,n,a,i,c,l,o,u,s=new Array(12)
return s[0]="Jan",s[1]="Feb",s[2]="Mar",s[3]="Apr",s[4]="May",s[5]="Jun",s[6]="Jul",s[7]="Aug",s[8]="Sep",s[9]="Oct",s[10]="Nov",s[11]="Dec",r=t,n=r.split(e),a=n[0],i=n[1],c=n[2],l=parseInt(a,10),o=parseInt(i,10),u=parseInt(c,10),t=s[o-1]+" "+l+" "+c}String.prototype.replaceAll=function(t,e,r){var n,a=this+"",i=-1
if("string"==typeof t){if(!r)return this.split(t).join(e)
for(n=t.toLowerCase();-1!==(i=a.toLowerCase().indexOf(t,i>=0?i+e.length:0));)a=a.substring(0,i)+e+a.substring(i+t.length)}return a}