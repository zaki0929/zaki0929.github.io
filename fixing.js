function(){
  // 固定する場所が存在することの確認
  if( $('.fixing-base .fixing-box').length > 0 ){
    var baseSelector = '.fixing-base'
    var fixingSelector = baseSelector + ' .fixing-box'

    $(window).on('load scroll resize', function(){
      var baseTop = $(baseSelector).offset().top

      //固定開始位置より後にスクロールされた場合
      if( $(window).scrollTop() > baseTop ){
        $(fixingSelector).addClass('fixed')
        $(baseSelector).height($(fixingSelector).outerHeight())
        $(fixingSelector).width($(baseSelector).width())

      //固定開始位置以前にスクロールされた場合
      } else {
        $(fixingSelector).removeClass('fixed')
        $(baseSelector).height('')
        $(fixingSelector).width('')
      }
    })
  }
}
