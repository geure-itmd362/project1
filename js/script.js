
$(document).ready(function() {

  $('#signup').click(function() {
    $('#form').toggle();
    $('#container1').toggle();
    $("#submit").css("display", "block");
    })

  /* not working */
  $('#submit').click(function(e) {
    e.preventDefault();
    var my_inputs = {
      name: $("#name").val(),
      email: $("#email").val(),
      birthday: $("#birthday").val()
    }

    $.ajax({
      type: "POST",
      url: "https://ptsv2.com/t/3tp3r-1602814424", 
      data: my_inputs,
      success: function(data, status){
        console.log(data);
        console.log(status);
        $('#done').show();
      },
      error: function(err){
        console.log(err);
      }
    });

    // for resetting the form
    $("#name").val("");
    $("#email").val("");
    $("#birthday").val("");
  });

  $('#finish').click(function(){
    $('#done').hide();
  });

    /*
    $("#form").toggle();
    $("#container").toggle();
    alert("I am an alert box!");
    $("#done").toggle();
    $("#finish").toggle();
    })
    */

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