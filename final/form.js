// form.js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const errorBox = document.getElementById("formError");
  const successBox = document.getElementById("formSuccess");
  const formContainer = document.getElementById("formContainer");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop normal HTTP submit

    errorBox.textContent = "";
    successBox.textContent = "";

    const name = form.fullName.value.trim();
    const email = form.email.value.trim();
    const tripDate = form.tripDate.value;
    const message = form.message.value.trim();
    const activity = form.querySelector('input[name="favoriteActivity"]:checked');
    const area = form.areaOfInterest.value;
    const termsChecked = form.terms.checked;

    const errors = [];
    if (!name) errors.push("Please enter your name.");
    if (!email) errors.push("Please enter your email.");
    if (!activity) errors.push("Please choose your favorite activity.");
    if (!area) errors.push("Please choose an area of interest.");
    if (!termsChecked) errors.push("Please agree to the terms.");

    if (errors.length > 0) {
      errorBox.textContent = errors.join(" ");
      return;
    }

    const formData = {
      name,
      email,
      tripDate,
      favoriteActivity: activity ? activity.value : "",
      areaOfInterest: area,
      message,
      agreedToTerms: termsChecked,
    };

    console.log("Form object:", formData);

    // Simulated AJAX success
    setTimeout(function () {
      form.reset();
      formContainer.style.display = "none";
      successBox.textContent =
        "Mahalo! Your recommendation request has been received. This message shows that the form was processed successfully.";
    }, 400);
  });
});
