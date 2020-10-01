$(document).ready(function() {
  $('#name').focus(function() {
    $(this).attr('placeholder', 'enter first and last name...')
  }).blur(function() {
        $(this).attr('placeholder', 'Name')
    })

$('#email').focus(function() {
    $(this).attr('placeholder', 'joesmith@domain.com')
  }).blur(function() {
        $(this).attr('placeholder', 'Email')
    })

$('#phone').focus(function() {
    $(this).attr('placeholder', '123-456-7890')
  }).blur(function() {
        $(this).attr('placeholder', 'Phone')
    })

  $('#birthday').focus(function() {
    $(this).attr('placeholder', 'MM/DD/YYYY')
  }).blur(function() {
        $(this).attr('placeholder', 'Birthday')
    })
});