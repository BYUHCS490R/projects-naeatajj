// js/form.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");
  const responseDiv = document.getElementById("formResponse");

  if (!form) return;

  form.addEventListener("submit", function (event) {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const sessionType = form.sessionType.value.trim();
    const date = form.date.value;
    const location = form.location.value.trim();
    const message = form.message.value.trim();

    let errors = [];

    if (!name) errors.push("Please enter your name.");
    if (!email) errors.push("Please enter your email.");
    if (!phone) errors.push("Please enter your phone number.");
    if (!sessionType) errors.push("Please choose a session type.");
    if (!date) errors.push("Please choose a date.");
    if (!location) errors.push("Please enter a location.");
    if (message.length < 20) {
      errors.push("Your message should be at least 20 characters long.");
    }

    if (errors.length > 0) {
      event.preventDefault();
      alert(errors.join("\n"));
    }
    // otherwise, the form submits to process_form.php (server-side)
  });
});
