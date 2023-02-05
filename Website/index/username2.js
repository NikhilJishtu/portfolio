const username = localStorage.getItem("username");
const greeting = document.querySelector(".groet");

greeting.innerHTML = "Hello"+"\xa0"+username+"...";
