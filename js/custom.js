// ==== Sticky Header
$(window).scroll(function() {
    jQuery(this).scrollTop() > 10 ? jQuery(".site-header").addClass("sticky") : jQuery(".site-header").removeClass("sticky")
});
// ==== End Sticky Header

// ==== Search Bar Open Close
$('.search-toggle').on("click", function() {
  if ($(window).width()) {
      $('.header-search-form').slideToggle();
  }
  $('.header-search-form').toggleClass('toggled-on');
});
// ==== End Search Bar Open Close

// ==== Add remove class in mobile menu
$('.mobile-menu-toggle').on("click", function() {
  $('.mobile-menu-group').addClass('active');
  $('body').addClass('menu-open');
});
$('.menu-close-btn').on("click", function() {
  $('.mobile-menu-group').removeClass('active');
  $('body').removeClass('menu-open');
});
// ==== End Add remove class in mobile menu

// ==== Popular Products Slider
$('.popular-products-slider').slick({
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    appendArrows: jQuery('.products-arrow-group-desktop'),
    prevArrow: '<div class="slick-prev "></div>',
    nextArrow: '<div class="slick-next"></div>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          appendArrows: jQuery('.products-arrow-group-mobile'),
          prevArrow: '<div class="slick-prev "></div>',
          nextArrow: '<div class="slick-next"></div>',
        }
      }
    ]
  });
// ==== End Popular Products Slider

// ==== Testimonial
$('.testimonial-slider').slick({
  dots: false,
  infinite: false,
  speed: 1000,
  slidesToShow: 1.5,
  slidesToScroll: 1,
  arrows: true,
  appendArrows: jQuery('.testimonial-arrow-group-desktop'),
  prevArrow: '<div class="slick-prev "></div>',
  nextArrow: '<div class="slick-next"></div>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: jQuery('.testimonial-arrow-group-mobile'),
        prevArrow: '<div class="slick-prev "></div>',
        nextArrow: '<div class="slick-next"></div>',
      }
    }
  ]
});
// ==== End Testimonial

// ==== footer link
jQuery('.nav-group h6').click(function() {
  if (jQuery(window).width() < 641) {
      jQuery(this).next().slideToggle(300);
      jQuery(this).toggleClass("active");
  }
});

var resizeTimer;
$(window).resize(function(e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
      $(window).trigger('delayed-resize', e);
  }, 250);
});

// Resize Function

$(window).on("load resize", function(e) {
  if ($(window).width() > 640) {
      $(".nav-group .manu-list").show();
  } else {
      $(".nav-group .manu-list").hide();
  }
});
// ====  End footer link