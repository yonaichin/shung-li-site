var md = new MobileDetect(window.navigator.userAgent);
var isMobile = !!md.mobile();

(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    if (isMobile) {
      setTimeout(function() {
        $('.tap-target').tapTarget('open');
      }, 500);
      setTimeout(function() {
        $('.tap-target').tapTarget('close');
      }, 5000);

    }
    $('.map').tinyMap({
      'center': '台中市烏日區太明路202號',
      'zoom'  : 14,
      'marker': [
        {
          'id': '雄利水泥',
          'addr': '台中市烏日區太明路202號',
          'text': '雄利水泥',
        }
      ]
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
