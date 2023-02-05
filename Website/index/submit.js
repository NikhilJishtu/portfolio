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


  function submitForm() {

    var frm = document.getElementById('myForm')[0];
    frm.submit(); 
    frm.reset();  
    return false; 
 }