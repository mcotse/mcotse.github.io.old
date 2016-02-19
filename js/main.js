//----------fullpage----------
$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
        css3: true
    });
    // if ( $('li.level1.item101').hasClass('active') ) {
    //   $('#main').addClass('woodwork');
    // }
});
//----------menu toggle----------
$(document).on('click', "#menu,#toggle", function () {
    $('#toggle').toggleClass('active');
    $('#overlay').toggleClass('open');

});
