
var swiper = new Swiper(".mySwiper", {

  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});

let intro = document.querySelector('.intro');
      let logo = document.querySelector('.logo-header');
      let logoSpan = document.querySelectorAll('.logointro');

      window.addEventListener('DOMContentLoaded', ()=>{

          setTimeout(()=>{

              logoSpan.forEach((span, idx) => {
                  
                  setTimeout(()=>{

                      span.classList.add('active');

                  }, (idx + 1) * 400)
                  
              });

              setTimeout(() => {

                  logoSpan.forEach((span, idx) => {

                      setTimeout(() => {

                          span.classList.remove('active');
                          span.classList.add('fade');

                      }, (idx + 1) * 50)

                  })

              }, 1500 /*2000*/);

              setTimeout(() => {
                  intro.style.top = '-100vh';
              }, 1700 /*2300*/)

          })
      })
