burger = document.querySelector('.burger')
nabar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')


burger.addEventListener('click',()=>{
   rightNav.classList.toggle('v-v-class-resp');
   navList.classList.toggle('v-v-class-resp');
   navbar.classList.toggle('h-nav-resp');

})