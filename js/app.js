$(function() {
  $('.js-subnav').click(function(e) {
    e.stopPropagation();
    $(this).next(".subnav").toggleClass('visible');
  });

  $(document).click(function(e) {
    $(".subnav").removeClass('visible');
  });

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $('.expandable .projects__project-body p').text(function() {
    var text = $(this).text();
    if(text.length > 140) {
      $(this).attr('original', text);
      text = text.substr(0, 115);
      text = text + '...';
      $(this).text(text);
      $(this).append('<span class="expand">Expand</span>');
    }
  });

  $('.expand').click(function() {
    var original = $(this).parent().attr('original');
    $(this).closest('.projects__project-body').addClass('expanded');
    $(this).parent().text(original);
  });
  
});