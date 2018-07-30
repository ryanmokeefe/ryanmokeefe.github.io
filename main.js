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

// var popoutVid = $(popout).find("video");
// var oldSource = $(popoutVid).find("source");


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
