/* validação de campos */
  function validateFields(){
    toggleButtonsDisable();
    toggleEmailErrors();
   }

   function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
     firebase.auth().signInWithEmailAndPassword(
       email, password
     ).then(response => {
      console.log(response)
       window.location.href = "/index.html";
     }).catch(error => {
       console.log('error', error)
     });



   }

  function isEmailValid() {
    const email = document.getElementById("email").value;
    if (!email) {
      return false;
    }
    return validateEmail(email);

  }

  function toggleEmailErrors() {
    const email = document.getElementById('email').value;
    if (!email) {
      document.getElementById('email-required-error').style.display = "block";
    } else {
      document.getElementById('email-required-error').style.display = "none";
    }

  }

  function toggleButtonsDisable() {

      const emailValid = isEmailValid();
      document.getElementById('recover-password-button').disabled = !emailValid;

      const password = isPasswordValid();
      document.getElementById('login-button').disabled = !emailValid || !passwordValid;

  }

  function isPasswordValid() {
    const password = document.getElementById('password').value;
    if (!password) {
      return false;
    }
    return true;
  }

  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
    /* validação de campos */
