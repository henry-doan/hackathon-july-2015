var navTop = document.querySelector('.nav-top');
var logo = document.querySelector('.logo');

document.querySelector('.nav-btn').addEventListener('click', function (e) {

 e.preventDefault();

 if (navTop.getAttribute('data-state'),logo.getAttribute('data-state') == 'expanded') {
   navTop.setAttribute('data-state', 'collapsed');
   this.setAttribute('data-state', 'inactive');
 } else {
   navTop.setAttribute('data-state', 'expanded');
   this.setAttribute('data-state', 'active');
 }
   
 if (logo.getAttribute('data-state') == 'expanded') {
   logo.setAttribute('data-state', 'collapsed');
   this.setAttribute('data-state', 'inactive');
 } else {
   logo.setAttribute('data-state', 'expanded');
   this.setAttribute('data-state', 'active');
 }
});

brookebown [7:25 PM]
var speed = 750;
var fade = 500;