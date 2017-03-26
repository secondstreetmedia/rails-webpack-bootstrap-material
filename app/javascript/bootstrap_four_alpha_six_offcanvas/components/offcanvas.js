$(document).ready(function () {
  if ($('.row-offcanvas').hasClass('active')){
    $('#sidebar-toggle-icon').text('chevron_left');
  } else {
    $('#sidebar-toggle-icon').text('chevron_right');
  }
  $('[data-toggle=offcanvas]').click(function () {
    $('.row-offcanvas').toggleClass('active');
    if ($('.row-offcanvas').hasClass('active')){
      $('#sidebar-toggle-icon').text('chevron_left');
    } else {
      $('#sidebar-toggle-icon').text('chevron_right');
    }
  });
});
