//----------fullpage----------
$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        anchors: ['Home', 'About', 'Contact'],
        css3: true
    });
});
//----------menu toggle----------
$(document).on('click', "#menu,#toggle", function () {
    $('#toggle').toggleClass('active');
    $('#overlay').toggleClass('open');
});

window.onload = function () { document.body.className = "";}
//disable particle animation on mobile
// var el = document.getElementById('hello');
//   if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//     //do nothing
//   }else
//   {
//     particlesJS.load('particles-js', 'assets/json/particles.json', function() {
//       console.log('callback - particles.js config loaded');
//     });
//   }
// adding span between menu link item letters
// $('#menu').text(function(){ return $(this).text().replace(/(\w)/g, "<span>$&</span>") })
