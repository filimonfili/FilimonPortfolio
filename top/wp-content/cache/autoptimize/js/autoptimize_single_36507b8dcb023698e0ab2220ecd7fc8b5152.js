var loading=document.getElementById('js-loading')
var fade1=document.getElementById('js-mvFade')
var fade2=document.getElementById('js-headerFade')
loading.classList.remove('is-hide');window.addEventListener('load',stopload);setTimeout('stopload()',10000);function stopload(){loading.classList.add('fadeout-loading');fade1.classList.add('js-mvFade');fade2.classList.add('js-headerFade');}