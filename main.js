
$(function() {
    var div = $('.project-img');
    var width = div.width();
    div.css('height', width);
});

//   Scroll To Top

$(window).scroll(function() {
    if ($(window).scrollTop() <= 0)
    {
        $(".scrollToTop").removeClass("show");

        // $(".scrollToTop").addClass("hidden");
    } else 
    {
        $(".scrollToTop").addClass("show");

        // $(".scrollToTop").removeClass("hidden");
    }
});

$(".scrollToTop").click(function() {
    $('html, body').animate({
        scrollTop: 0
      }, 500);
});

//    Scroll to navLink

// Snippet - Chris Coyier
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// Fixed NavBar

var offsetNav = $(".nav").offset().top;
$(window).resize(function(){
    offsetNav = $(".nav").offset().top;
})

$(window).scroll(function() {
    
    var scrolltop = $(window).scrollTop();
    var dist = (offsetNav - scrolltop);

    if (dist <= 0)
    {
        $(".nav").removeClass("scrollNav");
        $(".nav").addClass("fixedNav");
    } else 
    {
        $(".nav").removeClass("fixedNav");
        $(".nav").addClass("scrollNav");
    }
});



    // Nav Scroll Transition

    // href="#
    // $('a[href*="#"]')
    
    //     .click(function(e) {
    //         e.preventDefault();
    //         var target = this.href;
    //         // scrollTo = target.offset().top;
    //         // console.log(target);
    //         $('body').animate({
    //             scrollTop: 0
    //           }, 500);
    
    //     });
    


// // Popout Info:

var w = $(window).width();
var h = $(window).height();
var popout = document.getElementById('popout');
var divW = $(popout).width();
var divH = $(popout).height();

popout.style.position="fixed";
popout.style.top = (h/2)-(divH/2)+"px";
popout.style.left = (w/2)-(divW/2)+"px";

var projects = $(".project-solo");


projects.click(function() {
    var desc = $(this).find( ".project-desc" );
    var title = $(this).find( ".project-title" );
    var img = $(this).find( ".project-img" );

    $(title).clone().appendTo(popout);
    $(img).clone().appendTo(popout);
    $(desc).clone().appendTo(popout);

    popout.style.display = "flex";
});

var exit = $(".exit-popout");

exit.click(function() {
    clearPopout();
});

$(document).keydown(function(e) {
    if (e.keyCode == 27) {
        clearPopout();
    }
});

var clearPopout = () => {
    var desc = $(popout).find( ".project-desc" );
    var title = $(popout).find( ".project-title" );
    var img = $(popout).find( ".project-img" );
    $(desc).remove();
    $(title).remove();
    $(img).remove();

    popout.style.display = "none";
};





// Nav Scrolling Links:


// find dist from projects Top, contacts Top
// make nav Buttons
// on click, scroll to dist - navbar height

