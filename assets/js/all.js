"use strict";

//swiper
var swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  //autoplay
  autoplay: {
    delay: 3000
  }
}); //drop-down

$(document).ready(function () {
  $('.link-arrow').click(function (event) {
    event.preventDefault();
    var n = $(document).height();
    $('html, body').animate({
      scrollTop: 750
    }, 50);
  });
});
//# sourceMappingURL=all.js.map
