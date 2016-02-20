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
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
