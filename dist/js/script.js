let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let report = document.querySelector('.report');

menuBtn.addEventListener('touchend', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
    report.classList.toggle('disable');
});
