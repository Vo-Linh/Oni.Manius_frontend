TweenMax.to(".over-play", 6, {
    delay: 2,
    top: "-120%",
    ease: Expo.easeInOut
})


// ===================Fullpage============
new fullpage("#fullpage", {
    //options here
    licenseKey: 'YOUR_KEY_HERE',
    autoScrolling: true,
    scrollHorizontally: true
});

// ===============Owl=======================
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 40,
    // nav: true,
    items: 3,
    autoplay:true,
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



/****************************************
 * 
 * NAVIGATION BUTTON AND SCROLL HANDLER 
 * 
 ****************************************/


function navHandler() {
    var locations = [{
            name: 'home',
            location: 0
        },
        {
            name: 'work',
            location: calcPosition("#content-container.work-click-area")
        },
        {
            name: 'about',
            location: calcPosition("#content-container.about")
        }
    ];
    $("body").data("position", locations[0].name);

    $(window).resize(() => {
        locations[1].location = calcPosition("#content-container.work-click-area")
        locations[2].location = calcPosition("#content-container.about")
    });

    let timeout;

    $('li.scroller span, .logo-icon').click((e) => {
        mobileNav(true);
        let parent = $(e.target).parent(".scroller").length;
        let dataName = parent ? $(e.target).parent().data("name") : $(e.target).data("name");
        let locationObj = locations.find(e => e['name'] === dataName);
        $("body").data("position", locationObj.name);
        document.querySelector(".document-ease").scrollTo({
            top: locationObj.location,
            behavior: 'smooth'
        });
    });

    $('.m-nav-wrapper li span').on('hover', function () {
        $(".m-nav-wrapper .background").addClass("transition");
        setTimeout(() => {
            let image = document.querySelector(".m-nav-wrapper .background");
            image.src = `files/imgs/back/nav-back-${$(this).parent().index()+1}.png`;
            image.onload = () => {
                $(".m-nav-wrapper .background").removeClass("transition");
            };
        }, 400);
    });

    document.addEventListener('wheel', (e) => {
        if (!WORK_ACTIVE) {
            e.preventDefault();
            if (!timeout) {
                let isDown = (e.deltaY < 0) ? true : false;
                scrollPage(isDown);

                timeout = setTimeout(() => {
                    timeout = undefined;
                }, 1000)
            }
        }
    }, {
        passive: false
    });

    function scrollPage(isDown) {
        let dataName = $("body").data("position");
        let index = locations.findIndex(e => e['name'] === dataName);
        let newPosition;

        if (!isDown) {
            newPosition = ((index + 1) == locations.length) ? false : locations[index + 1];
        } else {
            newPosition = (index == 0) ? false : locations[index - 1];
        }

        if (newPosition) $("body").data("position", newPosition.name);

        locations[1].location = calcPosition("#content-container.work-click-area");
        locations[2].location = calcPosition("#content-container.about");

        if (newPosition != false) document.querySelector(".document-ease").scrollTo(0, newPosition.location);
    }

    function calcPosition(e) {
        return document.querySelector(e).offsetTop;
    }

    // Mobile navigation handler

    $(".m-nav-wrapper ul li").css("opacity", "0");
    $(".m-nav-wrapper ul li").css("transform", "translateY(5vh)");

    $(".nav-wrapper .hb-button").click(function () {
        active = $(this).hasClass("close");
        mobileNav(active);
    });

    function mobileNav(close) {
        if (close) {
            anime({
                targets: ".m-nav-wrapper img.background",
                opacity: 0,
                easing: "cubicBezier(0.165, 0.84, 0.44, 1)",
                duration: 700,
                complete: () => {
                    anime({
                        targets: ".m-nav-wrapper ul li",
                        opacity: 0,
                        easing: "cubicBezier(0.165, 0.84, 0.44, 1)",
                        duration: 800,
                        complete: () => {
                            $(".m-nav-wrapper ul li").css("transform", "translateY(5vh)");
                            $(".m-nav-wrapper ul li").removeClass("visible");
                        }
                    });
                    $(".nav-wrapper .hb-button").removeClass("close");
                    $(".nav-wrapper .logo-icon").removeClass("invert");
                    $(".m-nav-wrapper").removeClass("active");
                }
            });
        } else {
            $(".nav-wrapper .hb-button").addClass("close");
            $(".nav-wrapper .logo-icon").addClass("invert");
            $(".m-nav-wrapper").addClass("active");
            anime({
                targets: ".m-nav-wrapper ul li, .m-nav-wrapper img.background",
                opacity: 1,
                translateY: "0vh",
                easing: "cubicBezier(0.165, 0.84, 0.44, 1)",
                duration: 1000,
                delay: anime.stagger(200, {
                    start: 500
                })
            });
            $(".m-nav-wrapper ul li").each((i, e) => {
                setTimeout(() => {
                    $(e).addClass("visible");
                }, i * (150 + 300));
            });
        }
    }

    let yDown = null;
    let xDown = null;
    let checkHorizontal;

    document.addEventListener('touchstart', (e) => {
        yDown = e.touches[0].clientY;
        xDown = e.touches[0].clientX;
    }, false);

    document.addEventListener('touchmove', (e) => {
        if (!WORK_ACTIVE) {
            checkHorizontal = ($(e.target).parents(".work-list").length);
            if (!checkHorizontal) e.preventDefault();

            if (e.cancelable && !checkHorizontal) e.preventDefault();

            if (!yDown || !xDown) return;

            let yUp = e.touches[0].clientY;
            let xUp = e.touches[0].clientX;
            let yDiff = yDown - yUp;
            let xDiff = xDown - xUp;

            if (Math.abs(xDiff) <= Math.abs(yDiff)) {
                e.preventDefault();
                isDown = (yDiff > 0) ? false : true;
                scrollPage(isDown);
            } else {
                e.returnValue = true;
            }

            xDown = null;
            yDown = null;
        }
    }, {
        passive: false,
        cancelable: true
    });
}