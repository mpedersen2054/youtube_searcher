// a=resImg,b=resTitle,c=resDesc
function outputResultHtml(a,b,c) {
    var resultHTML = '';
    resultHTML+="<a href='#'>"
    resultHTML+='<article class="result">'
    resultHTML+='<div class="thumbnail pull-left">';
    resultHTML+="<img src='"+a+"'>"
    resultHTML+="</div>"
    resultHTML+="<div class='meta'>"
    resultHTML+="<h3>"+b+"</h3>"
    resultHTML+="<p>"+c+"</p>"
    resultHTML+="</div>"
    resultHTML+="</article>"
    resultHTML+="</a>"

    return resultHTML;
}