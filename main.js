// console.log("hello world")

$(function() {
    var div = $('.project-img');
    var width = div.width();
    div.css('height', width);
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




// Nav Scrolling Links:


// find dist from projects Top, contacts Top
// make nav Buttons
// on click, scroll to dist - navbar height
