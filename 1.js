"use strict";

window.onload = function () {
    let but = document.getElementById("submit");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let input = document.body.children[0];
    let form = document.getElementById("form");
    let box = document.getElementsByClassName("box")[0];

  input.oninput = function() {   

    if (email.checkValidity() && password.checkValidity() ) 
        but.disabled = false;    
    else
    but.disabled = true;
};



form.onsubmit = function() {
 
    form.classList.add('hidden');
    
    box.insertAdjacentHTML("afterbegin", " <h3 style = \" font-family: Helvetica Neue, Helvetica, Arial, sans-serif; color: #395870; \"> " + " Привет, "  + email.value + "</h3>");

    return false;

}

}
