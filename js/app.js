$(function() {
  $('.js-subnav').click(function(e) {
    e.stopPropagation();
    $(this).next(".subnav").toggleClass('visible');
  });
  $(document).click(function(e) {
    $(".subnav").removeClass('visible');
  });
});