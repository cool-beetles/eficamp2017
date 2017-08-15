(() => {

const button = $(".submit")[0];
const input = $(".login")[0];

button.addEventListener("click", event => {
  var login = logInput.value,
    password = passInput.value;

  event.preventDefault();

  if (input.value === "") {
    $("input").addClass("error");
  } else {
    $.ajax({
  type: "post",
  data: { 
    login: login,
    password: password
  },
  url: "https://efigence-camp.herokuapp.com/api/login",
  error: function(response) {
    console.log(response.responseText);
  },
  success: function(response) {
    console.log(response);
  }
});
// window.location.assign("../index.html");

  }
});
  
  
})();
