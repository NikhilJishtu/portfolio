$(function() {
   
    $(".form-control").on('focus', function(){

        $(this).parents(".form-group").addClass('focused');

    });

    $(".form-control").on('blur', function(){

        $(this).parents(".form-group").removeClass('focused');

    });

});

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    fetch("contact.php", {
      method: "POST",
      body: formData
    })
    .then(response => response.text())
    .then(result => {
      // Do something with the result
      window.alert("Thanks, I will be in touch!");
    });
  });