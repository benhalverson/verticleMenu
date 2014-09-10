$(document).ready(function() {
    $('#profile').click(function() {
        $('.child-menu1').toggle("fast");
    });

    $('#messages').click(function() {
        $('.child-menu2').toggle("fast");
    });

    function animateIcon(){
        $('.number-icon').fadeIn(400).delay(400).fadeOut(400, animateIcon);
    }
    animateIcon();


});