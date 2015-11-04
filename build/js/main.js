(function(){
  $(window).scroll(function(){
    var scroll = $(this).scrollTop();
    $('.title').css({
      'transform': 'translate(0px, ' + scroll/2 + '%)'
    });
    $('.ribbon').css({
      'transform': 'translate(0px, ' + scroll/10 + '%)'
    });
    $('.subtitle').css({
      'transform': 'translate(0px, ' + scroll/3 + '%)'
    });
  });
})();
