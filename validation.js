// login validatino

function loginValidation() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "newChick" && password === "24310") {
        sessionStorage.setItem("loggedIn", "true");
        window.location.href = "HomePage.html"; // rekta sa home
        return false;
    } else {
        alert("Wrong Egg. Please crack another.");
        return false;
    }
}