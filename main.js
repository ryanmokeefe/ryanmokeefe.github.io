console.log("hello world")

$(function() {
    var div = $('.project-img');
    var width = div.width();
    // var solo = $(".project-solo")
    div.css('height', width);
});

// $(function() {
//     var div = $('.project-img');
//     var width = div.width();
//     var solo = $(".project-solo")
//     solo.css('height', width);
// });

$(function() {
    setTimeout(() => {
        var bird = $(".bird")[0];
        console.log(bird)
        bird.parentNode.removeChild(bird);
    }, 15000);
})
