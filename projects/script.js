document.getElementById("myForm").addEventListener("submit", processForm);

function processForm(event) {
    event.preventDefault(); // Stop normal form submit

    // Collect form inputs into an object
    let formData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        age: document.getElementById("age").value.trim(),
        color: document.getElementById("color").value.trim(),
        comments: document.getElementById("comments").value.trim()
    };

    console.log("Form Data Collected:", formData);

    // -----------------------
    // VALIDATION
    // -----------------------

    if (formData.name === "") {
        alert("Please enter your name.");
        return;
    }

    if (formData.email === "") {
        alert("Please enter your email.");
        return;
    }

    if (formData.age === "") {
        alert("Please enter your age.");
        return;
    }

    // Age range check
    let ageNum = parseInt(formData.age);
    if (ageNum < 18 || ageNum > 60) {
        alert("Age must be between 18 and 60.");
        return;
    }

    // OPTIONAL example length check
    if (formData.color.length > 20) {
        alert("Favorite color text is too long.");
        return;
    }

    // -----------------------
    // AJAX CALL (XHR)
    // -----------------------

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "response.json", true); // Use GET for GitHub Pages

    xhr.onload = function () {
        if (xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);

            // Display message from JSON file
            document.getElementById("responseBox").innerHTML = response.message;

            // Disable form fields after submission
            document.getElementById("myForm").reset();
            disableForm();
        }
    };

    xhr.send();
}

function disableForm() {
    let inputs = document.querySelectorAll("#myForm input, #myForm textarea, #myForm button");
    inputs.forEach(element => {
        element.disabled = true;
    });
}
