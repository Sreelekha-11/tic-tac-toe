document.addEventListener("DOMContentLoaded", function () {

    const name = document.getElementById("name");
    const mail = document.getElementById("mail");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmpassword");
    const error = document.getElementById("error");
    const signupBtn = document.getElementById("signupBtn");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    mail.addEventListener("input", function () {

        if (!emailRegex.test(mail.value.trim())) {
            error.innerText = "Please enter a valid email address";
            error.style.color = "red";
            return;
        }

        error.innerText = "";
    });

    signupBtn.addEventListener("click", function (event) {
        event.preventDefault();

        if (
            name.value.trim() === "" ||
            mail.value.trim() === "" ||
            password.value.trim() === "" ||
            confirmPassword.value.trim() === ""
        ) {
            error.innerText = "Please fill all the details";
            error.style.color = "red";
            return;
        }

        if (!emailRegex.test(mail.value.trim())) {
            error.innerText = "Please enter a valid email";
            error.style.color = "red";
            return;
        }

        if (password.value.length < 6) {
            error.innerText = "Password must contain at least 6 characters";
            error.style.color = "red";
            return;
        }

        if (password.value !== confirmPassword.value) {
            error.innerText = "Passwords do not match";
            error.style.color = "red";
            return;
        }

        error.innerText = "";
        window.location.href = "game.html";
    });

});

