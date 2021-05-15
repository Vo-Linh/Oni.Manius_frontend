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
  $('.anh a').fancybox();
});

//  ===============silder=====================

(function () {
  var $slides = document.querySelectorAll(".slide");
  var $controls = document.querySelectorAll(".slider__control");
  var numOfSlides = $slides.length;
  var slidingAT = 1300; // sync this with scss variable
  var slidingBlocked = false;

  [].slice.call($slides).forEach(function ($el, index) {
    var i = index + 1;
    $el.classList.add("slide-" + i);
    $el.dataset.slide = i;
  });

  [].slice.call($controls).forEach(function ($el) {
    $el.addEventListener("click", controlClickHandler);
  });

  function controlClickHandler() {
    if (slidingBlocked) return;
    slidingBlocked = true;

    var $control = this;
    var isRight = $control.classList.contains("m--right");
    var $curActive = document.querySelector(".slide.s--active");
    var index = +$curActive.dataset.slide;
    isRight ? index++ : index--;
    if (index < 1) index = numOfSlides;
    if (index > numOfSlides) index = 1;
    var $newActive = document.querySelector(".slide-" + index);

    $control.classList.add("a--rotation");
    $curActive.classList.remove("s--active", "s--active-prev");
    document.querySelector(".slide.s--prev").classList.remove("s--prev");

    $newActive.classList.add("s--active");
    if (!isRight) $newActive.classList.add("s--active-prev");

    var prevIndex = index - 1;
    if (prevIndex < 1) prevIndex = numOfSlides;

    document.querySelector(".slide-" + prevIndex).classList.add("s--prev");

    setTimeout(function () {
      $control.classList.remove("a--rotation");
      slidingBlocked = false;
    }, slidingAT * 0.75);
  }
})();

document.addEventListener("DOMContentLoaded", function () {
  var controls = document.querySelectorAll(".slider__control");
  // console.log(controls)
  var slides = document.querySelectorAll(".slide");
  // console.log(slides);
  auto();

  function auto() {
    var thoigian = setInterval(function () {
      var slide = document.querySelector(".slide.s--active");
      // console.log(slide);  
      var vitrislide = 0;
      for (var i = 0; slide = slide.previousElementSibling; vitrislide++) {}
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('s--active');
      }
      if (vitrislide == slides.length - 1) {
        slides[0].classList.add('s--active');
      } else {
        slides[vitrislide].nextElementSibling.classList.add('s--active');
        // console.log(slide);
      }
    }, 3000)
    // Tu dong chuyen slide
    for (var i = 0; i < console.length; i++) {
      // console.log(controls[i])
      // controls[i].addEventListener('click', function () {
      //   clearInterval(thoigian);
      // })
    }
    [].slice.call(controls).forEach(function ($el) {
      $el.addEventListener("click", () => {
        clearInterval(thoigian);
      });
    });
    // Dung tu dong chuyen slide
  }

}, false)

// ===================================
// *
// *      Event Aboutus
// *
// ==================================

var x = document.getElementsByClassName("work-flow");

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
  autoplayTimeout: 1000,
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