"use strict";

const $ = selector => document.querySelector(selector);

const reserve_space = evt => {
//get info from user
const firstName = $("#first_name").value;
const lastName = $("#last_name").value;
const date = $("#date").value;

//check entered entry
let isValid = true;
if (firstName == "") {
    $("#first_name_error").textContent = "First name is required.";
    isValid = false;
} else { 
    $("#first_name_error").textContent = ""; 
}

if (lastName == "") {
    $("#last_name_error").textContent = "Last name is required.";
    isValid = false;
} else { 
    $("#last_name_error").textContent = ""; 
}

if (date == "") {
    $("#date_error").textContent = "date is required.";
    isValid = false;
} else { 
    $("#date_error").textContent = ""; 
}

 // cancel form submit if any user entries are invalid
 if ( !isValid ) {
    evt.preventDefault(); 
}
};

const clearForm = () => {
    // clear text boxes
    $("#first_name)").value = "";
    $("#last_name").value = "";
    $("#date").value = "";

    // clear span elements
    $("#first_name_error").textContent = "*";
    $("#last_name_error").textContent = "*";
    $("#date_error").textContent = "*"; 

    // set focus on first text box after resetting the form
    $("#first_name").focus();
};



document.addEventListener("DOMContentLoaded", () => {
    // click events for both buttons
    $("#reserve_space").addEventListener("click", reserve_space);
    $("#clear_form").addEventListener("click", clearForm);

    // set focus on first text box after the form loads
    $("#date").focus();
});