(function($) {
  $.fn.nfDropdownMenu = function(content) {
    var button = this.find('.btn-navbar');
    var list = this.find('.nav-collapse');
    if(button && list) {
      button.click(function(){
        setTimeout(toogleContent, 200 );
      });
      window.onresize = function(event) {
        setTimeout(toogleContent, 200 );
      }
    }
    function toogleContent() {
      if(list.hasClass('in') && button.is(':visible')) {
        $(content).hide();
      }
      else {
        $(content).show();
      }
    }
  };
}(jQuery));
