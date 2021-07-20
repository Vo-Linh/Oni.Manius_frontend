// ===================Fullpage============
// $.fn.fullpage.destroy("#fullpage");
$(document).ready(function () {
  //destroying
    $('#about').fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: true
  });

});


// ==========================================
// *
// *                Over play work
// *
// ============================================
TweenMax.to(".overlay h1", 2, {
  delay: .6,
  opacity: 0,
  y: -60,
  ease: Expo.easeInOut
})

TweenMax.to(".overlay img", 2, {
  delay: 0,
  opacity: 0,
  y: -60,
  ease: Expo.easeInOut
})

TweenMax.to(".overlay span", 2, {
  delay: .8,
  opacity: 0,
  y: -60,
  ease: Expo.easeInOut
})

TweenMax.to(".overlay", 2, {
  delay: 1,
  top: "-100%",
  ease: Expo.easeInOut
})
// =========================================
// *                Isotope                * 
// *                                       *   
// =========================================
$(window).on('load', function () {
  $('.noidung-work').isotope({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.khoianh',
    percentPosition: true,
    masonry: {
      // use element for option
      columnWidth: '.khoianh'
    }
  });
})
$(document).ready(function () {
  $('.anh a').fancybox({
    toolbar: true,
    smallBtn: false,
    buttons: ['my-zoom', 'fullScreen', 'close'],
  });

});


//  ===============back to top=====================
backtop = document.getElementById("backtop");

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// ===================================
// *
// *      Event Aboutus
// *
// ==================================

// var x = document.getElementsByClassName("work-flow");

// console.log(x);


//======================================== 
// *
// *      SLIDER TEAM
// *
// =======================================

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 40,
  // nav: true,
  items: 3,
  autoplay: true,
  autoplayTimeout: 3000,
  // responsive:{
  //     0:{
  //         items:1
  //     },
  //     600:{
  //         items:3
  //     },
  //     1000:{
  //         items:5
  //     }
  // }
});
// ================================================
//                FQA
//=================================================
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

// ============================================
//          TIME FOOTER
// ============================================

let currentTime = new Date();
let hours = currentTime.getHours() + 7;
let minutes = currentTime.getMinutes();
if (hours >= 24) {
  hours = hours - 24;
}

document.getElementById("time").innerHTML = `DA NANG ${hours}:${minutes}`;