document.addEventListener("DOMContentLoaded", function () {

    const loginPassword = document.getElementById("loginpassword");
    const loginError = document.getElementById("loginerror");

    loginPassword.addEventListener("input", function () {

        if (loginPassword.value.length < 6) {
            loginError.innerText = "Password must contain 6 letters";
            loginError.style.color = "red";
            return;
        }

        if (loginPassword.value.length === 6) {
            loginError.innerText = "";
            window.location.href = "game.html";
        }
    });


});

