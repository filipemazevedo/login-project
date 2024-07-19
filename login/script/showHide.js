const password = document.getElementById("password");
const icon = document.getElementById("icon");


function mostrarOcultarSenha() {
    if (password.type == "password") {
      password.type = "text";
      icon.src = '../img/hide.svg';
    } else {
      password.type = "password";
      icon.src = '../img/show.svg';
    }
  }
