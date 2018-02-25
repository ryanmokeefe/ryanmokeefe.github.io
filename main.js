console.log("hello world")

$(function() {
    var div = $('.project-img');
    var width = div.width();
    
    div.css('height', width);
});

$(function() {
    setTimeout(() => {
        var bird = $(".bird")[0];
        console.log(bird)
        bird.parentNode.removeChild(bird);
    }, 10000);
})
