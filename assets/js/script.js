let toggle_login = document.getElementById("toggle_login");
let toggle_register = document.getElementById("toggle_register");

let login_form = document.getElementById("login_form");
let register_form = document.getElementById("register_form");

toggle_login.addEventListener("click", () => {
    if (login_form.style.display == "none"){
        login_form.style.display = "block";
        register_form.style.display = "none";
    }
})

toggle_register.addEventListener("click", () => {
    if (login_form.style.display == "block"){
        login_form.style.display = "none";
        register_form.style.display = "block";
    }
})