
/* validation */
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function validateForm() {
  
  let name = document.myForm.name.value;
  let email = document.myForm.email.value;
  let title = document.myForm.title.value;
  let message = document.myForm.message.value;

  if (name == "") {
    let error = document.getElementById('error-name').style.display = 'block';
    if(error){
      setTimeout(() => {
        document.getElementById('error-name').style.display = 'none';
      }, 4000);
    }
    //alert('name is required');
    return false;
  }

  if (name.length < 4) {
    let error = document.getElementById('character').style.display = 'block';
    if (error) {
      setTimeout(() => {
        document.getElementById('character').style.display = 'none';
      }, 4000);
    }
    return false;
  }

  if (email == "") {
    let error = document.getElementById('error-email').style.display = 'block';
    if (error) {
      setTimeout(() => {
        document.getElementById('error-email').style.display = 'none';
      }, 4000);
    }
    return false;
  }
  if (!validateEmail(email)){
    let error = document.getElementById('email-character').style.display = 'block';
    if (error) {
      setTimeout(() => {
        document.getElementById('email-character').style.display = 'none';
      }, 4000);
    }
    return false;
  }

  if (title == "") {
    let error = document.getElementById('error-title').style.display = 'block';
    if (error) {
      setTimeout(() => {
        document.getElementById('error-title').style.display = 'none';
      }, 4000);
    }
    return false;
  }
  if (message == "") {
    let error = document.getElementById('error-message').style.display = 'block';
    if (error) {
      setTimeout(() => {
        document.getElementById('error-message').style.display = 'none';
      }, 4000);
    }
    return false;
  }
  if (message.length < 20) {
    let error = document.getElementById('mgs-character').style.display = 'block';
    if (error) {
      setTimeout(() => {
        document.getElementById('mgs-character').style.display = 'none';
      }, 4000);
    }
    return false;
  }

  
}



