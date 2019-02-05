// Snippet - Chris Coyier
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });


  // Scroll Down

$(window).scroll(function() {
    if ($(window).scrollTop() < 500)
    {
        $(".scrollDown").addClass("show");
    } else 
    {
        $(".scrollDown").removeClass("show");
    }
});

$(".scrollDown").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offsetHeight
      }, 500);
});


//   Scroll To Top

$(window).scroll(function() {
    if ($(window).scrollTop() <= 700)
    {
        $(".scrollToTop").removeClass("show");
    } else 
    {
        $(".scrollToTop").addClass("show");
    }
});

$(".scrollToTop").click(function() {
    $('html, body').animate({
        scrollTop: 0
      }, 500);
});


// Portfolio Fullview:

function portfolioListener (attachTo) {
    $(attachTo).click(function () {
        $(".fixed").toggleClass("show")
    })
    $(attachTo).click(function () {
        $(".portfolio-fullview").toggleClass("show")
    })
    $(attachTo).click(function () {
        $(".exit").toggleClass("show")
    })
};

var icon = $(".portfolio-icon");
var seeMore = $(".portfolio-more");
var exit = $(".exit");

$(document).ready(portfolioListener(icon));
$(document).ready(portfolioListener(seeMore));
$(document).ready(portfolioListener(exit));

