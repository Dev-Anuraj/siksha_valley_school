// =========Toggle menu dots Animatiopn script==========

$(document).ready(function () {
  var $menuToggle = $("#menuToggle");
  var $offcanvasMenu = $("#offcanvasMenu");
  var $menuDots = $(".icon");
  var $navbarToggle = $("#navbarToggle");
  var $offcanvasUpperIcon = $(".offcanvas-upper .icon");

  function toggleOffcanvas() {
    if ($offcanvasMenu.hasClass("offcanvas-show")) {
      // Hide offcanvas
      $offcanvasMenu.removeClass("offcanvas-show");
      $menuDots.removeClass("open");
      $menuToggle.removeClass("toggle-show");
      $navbarToggle.removeClass("toggle-show");

      // Transition animation to navbar toggle
      setTimeout(function () {
        $menuToggle.css("z-index", "auto");
      }, 0); // Adjust the delay as per your animation duration
    } else {
      // Show offcanvas
      $offcanvasMenu.addClass("offcanvas-show");
      $menuDots.addClass("open");
      $menuToggle.addClass("toggle-show");

      // Transition animation to offcanvas toggle
      $menuToggle.css("z-index", "-100");
      setTimeout(function () {
        $navbarToggle.addClass("toggle-show");
      }, 300); // Adjust the delay as per your animation duration
    }
  }

  // Toggle for both buttons
  $menuToggle.on("click", toggleOffcanvas);
  $navbarToggle.on("click", toggleOffcanvas);

  // Click handler for offcanvas-upper icon
  $offcanvasUpperIcon.on("click", function () {
    toggleOffcanvas();
  });

  // Close offcanvas menu when clicking outside
  $(document).on("click", function (event) {
    if (
      !$(event.target).closest("#offcanvasMenu, #menuToggle, #navbarToggle")
        .length &&
      $offcanvasMenu.hasClass("offcanvas-show")
    ) {
      toggleOffcanvas();
    }
  });
});

// ============ Mobile Menu Sliding Down n Script===============

$(document).ready(function () {
  function handleDropdowns() {
    if (window.matchMedia("(max-width: 991px)").matches) {
      $(".mainmenu > li > a")
        .off("click")
        .on("click", function (e) {
          e.preventDefault();

          var $submenuWrapper = $(this).siblings(".submenu-wrapper");

          if ($submenuWrapper.is(":visible")) {
            $submenuWrapper.slideUp();
            $(this).parent("li").removeClass("active");
          } else {
            $(".submenu-wrapper").slideUp();
            $(".mainmenu > li").removeClass("active");
            $submenuWrapper.slideDown();
            $(this).parent("li").addClass("active");
          }
        });

      $(".submenu.level02 > li > a")
        .off("click")
        .on("click", function (e) {
          e.preventDefault();

          var $subsubmenuWrapper = $(this).siblings(".subsubmenu-wrapper");

          if ($subsubmenuWrapper.is(":visible")) {
            $subsubmenuWrapper.slideUp();
            $(this).parent("li").removeClass("active");
          } else {
            $(".subsubmenu-wrapper").slideUp();
            $(".submenu.level02 > li").removeClass("active");
            $subsubmenuWrapper.slideDown();
            $(this).parent("li").addClass("active");
          }
        });
    } else {
      // Unbind click events if the viewport is larger than 991px
      $(".mainmenu > li > a").off("click");
      $(".submenu.level02 > li > a").off("click");
      // Ensure any open menus are closed
      $(".submenu-wrapper").removeAttr("style");
      $(".subsubmenu-wrapper").removeAttr("style");
      $(".mainmenu > li").removeClass("active");
      $(".submenu.level02 > li").removeClass("active");
    }
  }

  // Call the function initially
  handleDropdowns();

  // Call the function whenever the window is resized
  $(window).resize(function () {
    handleDropdowns();
  });
});

// ========= Add Arrow Right to subsubmenu of the menu List ========
$(document).ready(function () {
  $(".submenu.level02 > li").each(function () {
    if ($(this).find(".subsubmenu.level03").length > 0) {
      $(this).addClass("has-subsubmenu");
      $(this).children("a").append('<i class="fa-solid fa-chevron-right"></i>');
    }
  });
});

// ===========Header Animation Script============
$(document).ready(function () {
  setTimeout(function () {
    $("header").css({
      top: 0,
      transition: "top 2s",
    });
  }, 100);

  // ===========CTA Animation Script============
  setTimeout(function () {
    $(".cta-buttons").css({
      right: 0,
      transition: "right 2s",
    });
  }, 100);
});

// ==========Home Page Slider=============
$(document).ready(function () {
  $("#home-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>',
    ],
    margin: 0,
    dots: false,
    nav: true,
  });
});

// ============ Why SVS scroll color animation script ============

// ============ Why SVS Script===============

const featureImgs = document.querySelectorAll(".why-svs-sec .feature-img");
const colors = ["#fcce29", "#d93939", "#2b7646", "#2b5796"];
const imgContrast = 100;

function handleScroll() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  let scrollHeights;
  if (viewportWidth <= 767) {
    featureImgs.forEach((featureImg, index) => {
      featureImg.style.backgroundColor = colors[index];
      featureImg.style.setProperty("--img-contrast", `${imgContrast}%`);
    });
    return;
  }

  if (viewportWidth >= 768 && viewportWidth <= 1440) {
    scrollHeights = [
      viewportHeight * 0.3,
      viewportHeight * 0.4,
      viewportHeight * 0.5,
      viewportHeight * 0.6,
    ];
  } else {
    scrollHeights = [
      viewportHeight * 0.5,
      viewportHeight * 0.7,
      viewportHeight * 0.9,
      viewportHeight * 1.0,
    ];
  }

  const whySvsSec = document.querySelector(".about-section");
  const whySvsSecTop = whySvsSec.getBoundingClientRect().top + window.scrollY;
  const scrollPosition = window.scrollY - whySvsSecTop;

  featureImgs.forEach((featureImg, index) => {
    if (scrollPosition >= scrollHeights[index]) {
      featureImg.style.backgroundColor = colors[index];
      featureImg.style.setProperty("--img-contrast", `${imgContrast}%`);
    } else {
      featureImg.style.backgroundColor = "#808080";
      featureImg.style.setProperty("--img-contrast", "0%");
    }
  });
}

window.addEventListener("scroll", handleScroll);

handleScroll();

// Initialize the carousel manually on smaller screens
$(document).ready(function () {
  if ($(window).width() <= 767.98) {
    $("#carouselFeatures").carousel();
  }
});

// ============Management Desk Script===============
$(document).ready(function () {
  $("#management-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>',
    ],
  });
});

// ============ Academic Structure tabs Script ===============
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".academic-tabs .tab");
  const contentsLeft = document.querySelectorAll(".tab-content-left");
  const contentsCenter = document.querySelectorAll(".tab-content-center");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const target = this.getAttribute("data-target");
      tabs.forEach((tab) => tab.classList.remove("active"));
      this.classList.add("active");
      contentsLeft.forEach((content) => content.classList.remove("active"));
      document.getElementById(`${target}-left-tab`).classList.add("active");
      contentsCenter.forEach((content) => content.classList.remove("active"));
      document.getElementById(`${target}-tab`).classList.add("active");
    });
  });
});

// ============ School Facilities Script===============
function changeBackground(type) {
  const section = document.querySelector(".main-faci");
  let url = "";
  switch (type) {
    case "column-1":
      url = "https://cloud9.shauryasoft.com/media/slide_209_5.jpg";
      break;
    case "column-2":
      url = "https://cloud9.shauryasoft.com/media/slide_209_8.jpg";
      break;
    case "column-3":
      url =
        "https://cloud9.shauryasoft.com/media/contentpage_209_75_2.jpg?636961987542842098";
      break;
    case "column-4":
      url =
        "https://cloud9.shauryasoft.com/media/wlg-2311021027-1790320664-11.jpg";
      break;
  }
  section.style.backgroundImage = `url(${url})`;
}

function resetBackground() {
  const section = document.querySelector(".main-faci");
  section.style.backgroundImage =
    "https://cloud9.shauryasoft.com/media/slide_209_5.jpg";
}

// =========== Click on the text to repeat the animation ============

$(document).ready(function () {
  $(".tab-content-center")
    .mouseleave(function () {
      $(this).removeClass("clicked");
    })
    .click(function () {
      $(this).addClass("clicked").html($(this).html());
    });
});

// ============ Testimonials Tabs Slider Script===============

$(document).ready(function () {
  var activeWidth = $(".container .nav-tabs .active").parent("li").width();
  var activePosition = $(".container .nav-tabs .active").position().left;
  $(".container .slider").css({ left: activePosition, width: activeWidth });
  $(".container .nav-tabs a").click(function (e) {
    e.preventDefault();
    var position = $(this).parent().position().left;
    var width = $(this).parent().width();
    $(".container .slider").css({ left: position, width: width });
    $(".nav-tabs .nav-link").removeClass("active");
    $(this).addClass("active");
    var tabId = $(this).attr("href");
    $(".tab-pane").removeClass("active");
    $(tabId).addClass("active");
  });
});

$(document).ready(function () {
  $("#testimonials-carousel1").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>',
    ],
  });

  $("#testimonials-carousel2").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>',
    ],
  });

  $("#testimonials-carousel3").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>',
    ],
  });

  $("#testimonials-carousel4").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>',
    ],
  });
});

// ============ Blog Slider Script===============

$(document).ready(function () {
  $("#blog-carousel").owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      575: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1024: {
        items: 3,
      },
      1200: {
        items: 3,
      },
      1440: {
        items: 4,
      },
    },
  });
});

// ============ Affiliations Slider Script===============
$(document).ready(function () {
  $("#affiliation-slider").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 2,
      },
      991: {
        items: 3,
      },
      1440: {
        items: 4,
      },
    },
  });
});




// ============== Apply Button Hover Effect Script ==============

document.addEventListener('DOMContentLoaded', function() {
  var applyBtn = document.querySelector('.apply-btn');

  applyBtn.addEventListener('mouseenter', function(e) {
    var parentOffset = applyBtn.getBoundingClientRect(),
        relX = e.clientX - parentOffset.left,
        relY = e.clientY - parentOffset.top;
    applyBtn.querySelector('span').style.top = relY + 'px';
    applyBtn.querySelector('span').style.left = relX + 'px';
  });

  applyBtn.addEventListener('mouseout', function(e) {
    var parentOffset = applyBtn.getBoundingClientRect(),
        relX = e.clientX - parentOffset.left,
        relY = e.clientY - parentOffset.top;
    applyBtn.querySelector('span').style.top = relY + 'px';
    applyBtn.querySelector('span').style.left = relX + 'px';
  });
});


// ============ Go to Top Button Script===============
var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
