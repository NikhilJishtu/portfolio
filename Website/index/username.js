const form = document.getElementById("username-form");
const input = document.getElementById("username-input");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  localStorage.setItem("username", input.value);
  window.location.href = "index.html";
});