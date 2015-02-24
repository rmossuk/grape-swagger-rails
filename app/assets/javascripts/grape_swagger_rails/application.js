//= require ./shred.bundle
//= require ./jquery-1.8.0.min
//= require ./jquery.slideto.min
//= require ./jquery.wiggle.min
//= require ./jquery.ba-bbq.min
//= require ./handlebars-1.0.0
//= require ./underscore-min
//= require ./backbone-min
//= require ./swagger
//= require ./swagger-ui.min
//= require ./highlight.7.3.pack
//= require ./swagger-oauth
//= require ./base64
//= require_self


$('pre').live( "dblclick", function() {
  if ($(this).css('max-height') == 'none') {
    $(this).data('big-height', $(this).css('height'))
    $(this).css('height', $(this).data('small-height'));
    $(this).css('max-height', $(this).data('small-height'));
  }else {
    $(this).data('small-height', $(this).css('max-height'))
    $(this).css('max-height', 'none');
    $(this).css('height', $(this).data('big-height'));
  }
});
