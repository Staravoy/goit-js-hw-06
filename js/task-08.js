const form = document.querySelector(".login-form");
logForm.addEventListener("submit", submit);

function submit (event) {
    event.preventDefault();
    const {
        elements: { email, password }
      } = event.currentTarget;
    
      if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
      } else {
          console.log ( {
              email : email.value,
              password : password.value
          });

      }
      form.reset();

}
