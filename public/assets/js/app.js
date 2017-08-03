var md = new MobileDetect(window.navigator.userAgent);
var isMobile = !!md.mobile();
var map

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
    // $('.map').tinyMap({
    //   'center': '台中市烏日區太明路202號',
    //   'zoom'  : 14,
    //   'marker': [
    //     {
    //       'id': '雄利水泥',
    //       'addr': '台中市烏日區太明路202號',
    //       'text': '雄利水泥',
    //     }
    //   ]
    // });

  }); // end of document ready
})(jQuery); // end of jQuery name space

function initMap() {
  var addr = {lat: 24.0606989, lng: 120.6486733}
  map = new google.maps.Map(document.getElementById('map'), {
    center: addr,
    zoom: 14
  });
  var marker = new google.maps.Marker({
    position: addr,
    map: map,
    title: '雄利水泥'
  });
}
