const signUpModal = document.getElementById("sign-up");
const successModal = document.getElementById("success-page");
const subscribeBtn = document.getElementById("subscribe");
const dismissBtn = document.getElementById("dismiss");
const emailInput = document.getElementById("email");
const userEmail = document.getElementById("highlighted");

const errorLabel = document.querySelector(".error");

function isValidEmail(email) {
  // Email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email matches the regex pattern
  return emailRegex.test(email);
}

subscribeBtn.addEventListener("click", () => {
  // Subscribe button clicked
  // Check if the email is legit
  const emailValue = emailInput.value;

  if (emailValue) {
    // If there was a value in the email input field,
    // test it's validity
    if (isValidEmail(emailValue)) {
      // Email is valid
      errorLabel.style.display = "none";
      emailInput.classList.remove("error-input");

      // Show success page
      signUpModal.style.display = "none";
      successModal.style.display = "block";

      // Put user email in success page
      userEmail.innerText = emailValue;
    } else {
      // Invalid email
      // Show errors
      errorLabel.style.display = "block";
      emailInput.classList.add("error-input");
    }
  } else {
    // The email input field was empty
    // Show errors
    errorLabel.style.display = "block";
    emailInput.classList.add("error-input");
  }

  emailInput.value = "";
});

dismissBtn.addEventListener("click", () => {
  // Dismiss button was clicked
  // Go back to sign up page
  successModal.style.display = "none";
  signUpModal.style.display = "flex";
});
