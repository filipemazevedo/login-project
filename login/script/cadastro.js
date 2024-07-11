    const form = document.getElementsByClassName("cadastro");
    const campos = document.querySelectorAll(".required");
    const spans = document.querySelectorAll(".span-required");
    const emailRegex = /^[\w.\+]+@\w+.\w{2,}(?:.\w{2})?$/;
    const numberRegex =
      /^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/;  

    form[0].addEventListener("submit", (event) => {
      event.preventDefault();
      nameValidate();
      emailValidate();
      mainPasswordValidate();
      confirmationPasswordValidate();
      numberValidate();
    });

    function setError(index) {
      campos[index].style.border = "2px solid red";
      spans[index].style.display = "block";
    }

    function removeError(index) {
      campos[index].style.border = "";
      spans[index].style.display = "none";
    }

    function nameValidate() {
      if (campos[0].value.length < 3) {
        setError(0);
      } else {
        removeError(0);
      }
    }

    function emailValidate() {
      if (!emailRegex.test(campos[1].value)) {
        setError(1);
      } else {
        removeError(1);
      }
    }

    function numberValidate() {
      if (!numberRegex.test(campos[2].value)) {
        setError(2);
      } else {
        removeError(2);
      }
    }

    function mainPasswordValidate() {
      if (campos[3].value.length < 8) {
        setError(3);
      } else {
        removeError(3);
        confirmationPasswordValidate();
      }
    }

    function confirmationPasswordValidate() {
      if (campos[3].value == campos[4].value && campos[4].value.length >= 8) {
        removeError(4);
      } else {
        setError(4);
      }
    }


