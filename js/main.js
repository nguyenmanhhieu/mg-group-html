// SmartMenus init
$(function() {
  $('#main-menu').smartmenus({
    subMenusSubOffsetX: 6,
    subMenusSubOffsetY: -8
  });
});

// SmartMenus mobile menu toggle button
$(function() {
  var $mainMenuState = $('#main-menu-state');
  if ($mainMenuState.length) {
    // animate mobile menu
    $mainMenuState.change(function(e) {
      var $menu = $('#main-menu');
      if (this.checked) {
        $menu.hide().slideDown(250, function() { $menu.css('display', ''); });
      } else {
        $menu.show().slideUp(250, function() { $menu.css('display', ''); });
      }
    });
    // hide mobile menu beforeunload
    $(window).bind('beforeunload unload', function() {
      if ($mainMenuState[0].checked) {
        $mainMenuState[0].click();
      }
    });
  }
});

// Fix bug
var btn_close_topmenu = document.querySelector("#main-menu-state");
var main_topmenu = document.querySelector("#main-menu");
btn_close_topmenu.onclick = function () {
  if (!main_topmenu.classList.contains('show-mn')) {
    main_topmenu.classList.add('show-mn');
  } else {
    main_topmenu.classList.remove('show-mn');
  };    
};

// End Menu



var swiper = new Swiper(".slide-main", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },  
  autoHeight: true,
  autoplay: {
    delay: 25000,
    disableOnInteraction: false,
  },
});

// var swiper2 = new Swiper(".mySwipercard", {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   freeMode: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".mySwipercard .swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     992: {
//       slidesPerView: 4,
//       spaceBetween: 30,
//     },
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 20,
//     },
//     576: {
//       slidesPerView: 2,
//       spaceBetween: 15,
//     },
//   },
// });

// End slide

