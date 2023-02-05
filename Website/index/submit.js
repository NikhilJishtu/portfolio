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


  ////////////////////////////// 


  const form = document.getElementById('myForm');

  form.addEventListener('submit', function handleSubmit(event) {
    event.preventDefault();
  
    form.reset();
  });