//----------fullpage----------
$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        anchors: ['firstPage', 'secondPage', '3rdPage'],
        css3: true
    });
});
//----------menu toggle----------
$(document).on('click', "#menu,#toggle", function () {
    $('#toggle').toggleClass('active');
    $('#overlay').toggleClass('open');
});
particlesJS.load('particles-js', 'assets/json/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
$(function() {

    $("h3")
        .wrapInner("<span>")

    $("h3 br")
        .before("<span class='spacer'>")
        .after("<span class='spacer'>");

});
