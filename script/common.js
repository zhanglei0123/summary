$(function () {
   //目录收展开
    (function () {
        $(document).on("click",".index-area li:first-child",function () {
            if($(this).hasClass('active')){
                $(this).removeClass('active').siblings().fadeOut()
            } else {
                $(this).addClass('active').siblings().fadeIn()
            }
        })
    })(jQuery);
});