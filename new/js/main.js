// toggle login form
$(document).on('click', '.topForm-btn', function (e) {
    e.preventDefault();

    //Check this block is open or not..
    if (!$(this).prev().hasClass("open-login")) {
        $(".topForm-header").slideDown(400);
        $(".topForm-header").addClass("open-login");
    }

    else if ($(this).prev().hasClass("open-login")) {
        $(".topForm-header").removeClass("open-login");
        $(".topForm-header").slideUp(400);
    }
});




$(document).on('click', '.video-link', function (e) {
    const videoSource = $(this).attr('data-src')

    $('#demo-area').slideUp(400, function () {
        $('.video').attr('src', videoSource)
    });
    $('#demo-area').slideDown(400)


})