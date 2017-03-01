$(document).ready(function(){
    $(".navbar").hide();
    $(window).scroll(function () {
        // set distance user needs to scroll before we start fadeIn
        if ($(this).scrollTop() > ($(window).height()*.3)) {
            $('.navbar').fadeIn();
        } else {
            $('.navbar').fadeOut();
        }
    });
});
