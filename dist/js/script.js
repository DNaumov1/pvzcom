let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let report = document.querySelector('.report');
let mobile = document.querySelector('.mobile');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
    report.classList.toggle('disable');
    mobile.classList.toggle('active');
});
