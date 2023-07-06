function fade_out(){
    $("#intro").fadeOut();
}
setTimeout(fade_out,5500);

// function fade_in(){
//     $(".site-header").fadeIn();
// }
// setTimeout(fade_in,5500);

var bf1=document.getElementById("breakfast1");
var bf2=document.getElementById("breakfast2");
var ln1=document.getElementById("lunch1");
var ln2=document.getElementById("lunch2");
var dn1=document.getElementById("dinner1");
var dn2=document.getElementById("dinner2");
function breakfast(){
    $(ln1).hide();
    $(ln2).hide();
    $(dn1).hide();
    $(dn2).hide();
    $(bf1).show();
    $(bf2).show();
    $(".allbtn").removeClass("bgmenu")
    $(".breakfastsh").addClass("bgmenu")
    $(".lunch").removeClass("bgmenu");
    $(".dinner").removeClass("bgmenu");
    }
function lunch(){
    $(ln1).show();
    $(ln2).show();
    $(dn1).hide();
    $(dn2).hide();
    $(bf1).hide();
    $(bf2).hide();
    $(".allbtn").removeClass("bgmenu")
    $(".breakfastsh").removeClass("bgmenu")
    $(".lunch").addClass("bgmenu");
    $(".dinner").removeClass("bgmenu");
    }
function dinner(){
    $(ln1).hide();
    $(ln2).hide();
    $(dn1).show();
    $(dn2).show();
    $(bf1).hide();
    $(bf2).hide();
    $(".allbtn").removeClass("bgmenu")
    $(".breakfastsh").removeClass("bgmenu")
    $(".lunch").removeClass("bgmenu");
    $(".dinner").addClass("bgmenu");
    }
function allcat(){
    $(ln1).show();
    $(ln2).show();
    $(dn1).show();
    $(dn2).show();
    $(bf1).show();
    $(bf2).show();
    $(".allbtn").addClass("bgmenu")
    $(".breakfastsh").removeClass("bgmenu")
    $(".lunch").removeClass("bgmenu");
    $(".dinner").removeClass("bgmenu");
    
    }
$(document).ready(function () {
"use strict";
  
    var scene = $(".js-parallax-scean").get(0);
    var parallaxInstance = new Parallax(scene);


    // how to create a dinamic website(change element when move cursor)
    gsap.registerPlugin(ScrollTrigger);

    var elementFirst = document.querySelector('.nb');
    ScrollTrigger.create({
        trigger: "body",
        start: "20px top",
        end: "bottom bottom",

        onEnter: () => myFunction(),
        onLeaveBack: () => myFunction(),
    });

    function myFunction() {
        elementFirst.classList.toggle('sticky_head');
    }
    //end create 
    
    


// sec 6
    var book_table = new Swiper(".book-table-img-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 3,
            stretch: 2,
            depth: 100,
            modifier: 5,
            slideShadows: false,
        },
        loopAdditionSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });


// end sec 6



// sec 7

    var team_slider = new Swiper(".team-slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });

    // end sec 7






});





