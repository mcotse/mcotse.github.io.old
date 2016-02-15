$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });
$('#menu').click(function() {
   $('#toggle').toggleClass('active');
   $('#overlay').toggleClass('open');
  });
