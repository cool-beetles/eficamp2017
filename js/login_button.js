(() => {
  
//  const button = document.getElementsByTagName("button")[0];
//  const input = document.getElemenstByTagName("input")[0];
  

//const button = document.querySelector(".login");
//const input = document.queryselector(".submit");

//const button = document.querySelectorAll(".login")[0];
//const input = document.queryselectorAll(".submit")[0];

//const button = document.getElemntById("login");
//const input = document.getElementById("submit");

const button = document.getElementsByClassName("submit")[0];
const input = document.getElementsByClassName("login")[0];

  console.log(button);
  
button.addEventListener("click", event => {
  event.preventDefault();

  if (input.value == "") {
     input.classList.add("error");
  } else {
      window.location.assign("../index.html");
  }
});
  
  
})();
