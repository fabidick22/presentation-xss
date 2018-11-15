$('form').on('submit', function(e) {
  e.preventDefault();
  
  var ov = $('#test').val();
  
  $('#output-inner').get(0).innerHTML = ov;
  $('#output-html').html(ov);	// Comment this out to see how innerHTML does not fire the dialog
  $('#output-text').text(ov);
  
});