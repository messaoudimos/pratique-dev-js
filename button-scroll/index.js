let btn = document.getElementById('open');
onscroll = function(){
    if(scrollY >= 400)
    {btn.style.display= 'block'}
    else
    {btn.style.display= 'none'}

}
btn.onclick = function(){
    window.scrollTo({top:0, left:0, behavior:'smooth'});
}