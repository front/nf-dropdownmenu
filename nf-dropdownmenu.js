(function($) {
  $.fn.nfDropdownMenu = function(options) {
    var settings = {
      button: '.btn-navbar',
      list: '.nav-collapse'
    };
    if(typeof options === 'string'){
      settings.content = options;
    }
    else {
      $.extend(settings, options);
    }
    var button = this.find(settings.button);
    var list = this.find(settings.list);
    button.click(function(){
      setTimeout(toogleContent, 200 );
    });
    window.onresize = function(event) {
      setTimeout(toogleContent, 200 );
    };
    var self = this;
    function toogleContent() {
      if((list.hasClass('in') || self.hasClass('expanded')) && button.is(':visible')) {
        $(settings.content).hide();
      }
      else {
        $(settings.content).show();
      }
    }
  };
}(jQuery));
