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

$(function() {
  
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
  
  function getUrlParameter(sParam)
  {
      var sPageURL = window.location.search.substring(1);
      var sURLVariables = sPageURL.split('&');
      for (var i = 0; i < sURLVariables.length; i++) 
      {
          var sParameterName = sURLVariables[i].split('=');
          if (sParameterName[0] == sParam) 
          {
              return sParameterName[1];
          }
      }
  }    
  
function replaceParam(key, value){
  var pathname = window.location.pathname;
  var params = toParams(window.location.search);
  params[key] = value;

  return pathname + "?" + jQuery.param(params)
}

function toParams(searchUrl) {
  var result = {}
  if(searchUrl == '')
    return result;

  var queryString = searchUrl.substr(1);

  var params = queryString.split("&");

  jQuery.each(params, function(index, param){
    var keyPair = param.split("=");

    var key = keyPair[0];
    var value = keyPair[1];

    if(result[key] == undefined)
      result[key] = value
    else{

      if(result[key] instanceof Array) //current var is an array just push another to it
        result[key].push(value)
      else{ //duplicate var, then it must store as an array
        result[key] = [result[key]]
        result[key].push(value)
      }
    }
  })

  return result;

}
  
  the_token = getUrlParameter('apiKey');
  
  if (the_token) {
    $('#token-set').show();
    $('#token-set-token').html(the_token);
    $('#api_selector').hide();
    $('#input_apiKey').val(the_token);
    $('#input_apiKey').trigger('change')
    $('.swagger-section #header').css('background-color', '#20B600')
  }else {
    $('#api_selector').show();
    $('#token-set').hide();
    $('.swagger-section #header').css('background-color', '#CD0000')
  }
  
  $('#change-token-lnk').live( "click", function() {
    $('#api_selector').show();
    $('#token-set').hide();
    $('.swagger-section #header').css('background-color', '#CD0000')
  });
  
  $('#set-token-btn').live( "click", function() {
    var url = replaceParam('apiKey', $('#input_apiKey').val());
     window.location.href = url;
     
    the_token = getUrlParameter('apiKey');
    $('#token-set').show();
    $('#token-set-token').html(the_token);
    $('#api_selector').hide();
    $('.swagger-section #header').css('background-color', '#20B600')
  });
  

});
