let submit = document.querySelector("button");

let confirmation = document.querySelector(".confirmation");
let passwordConfirmation = document.querySelector("#confirmPassword")

passwordConfirmation.addEventListener('keyup', matchPassword);

function matchPassword(e) {
  let password = document.querySelector("#password");
  if( password.value == e.target.value && password.value.length >= 6 )
  {
    confirmation.textContent = "Passwords match!";
    submit.disabled = false;
    confirmation.classList.remove("notMatch");
    confirmation.classList.add("match");
  }
  else
  {
    confirmation.textContent = "Passwords do not match!";
    submit.disabled = true;
    confirmation.classList.remove("match");
    confirmation.classList.add("notMatch");
  }
}
