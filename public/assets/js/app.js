var md = new MobileDetect(window.navigator.userAgent);
var isMobile = !!md.mobile();

(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    if (isMobile) {
      setTimeout(function() {
        $('.tap-target').tapTarget('open');
      }, 1500);
      setTimeout(function() {
        $('.tap-target').tapTarget('close');
      }, 5000);
    }

  }); // end of document ready
})(jQuery); // end of jQuery name space
