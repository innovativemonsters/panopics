$(document).ready(function(){
  $('#pic1').show();
  $('#pic2').hide();
  $('#pic3').hide();
  $('#pic4').hide();
  
  $('#1').click(function() {
    $('#pic1').show();
    $('#pic2').hide();
    $('#pic3').hide();
    $('#pic4').hide();
  });
  $('#2').click(function() {
    $('#pic1').hide();
    $('#pic2').show();
    $('#pic3').hide();
    $('#pic4').hide();
  });
  $('#3').click(function() {
    $('#pic1').hide();
    $('#pic2').hide();
    $('#pic3').show();
    $('#pic4').hide();
  });
  $('#4').click(function() {
    $('#pic1').hide();
    $('#pic2').hide();
    $('#pic3').hide();
    $('#pic4').show();
  });
});
