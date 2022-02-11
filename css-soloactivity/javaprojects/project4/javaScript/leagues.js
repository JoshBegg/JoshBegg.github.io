
/*********************************************************************
***
*Original Author:   Josh Begg                                 *
*Date Created:        1/28/2022                               *
*Version:                0.1                                *
*Date Last Modified:      1/28/2022                        *
*Modified by:              Josh Begg                            *
*Modification log:                 0.0 page was made                 *
***                     0.1 fixed bug where reset button would not work
******************************************************************** */
"use strict";

const $ = selector => document.querySelector(selector);


const processEntries = () => {
    // get form controls to check for validity
    const first_name = $("#first_name");
    const last_name = $("#last_name");
    const email = $("#email_address");
    const phone = $("#phone");
    const league = $("#league");
    const terms = $("#terms");



    // create a Boolean variable to keep track of invalid entries
    let isValid = true;

    // check user entries - add text to error message if invalid
    if (first_name.value == "") {
        first_name.nextElementSibling.textContent = "This field is required.";
        isValid = false; 
    } else {
        first_name.nextElementSibling.textContent = "";
    }

    if (last_name.value == "") { 
        last_name.nextElementSibling.textContent = "This field is required.";
        isValid = false; 
    } else {
        last_name.nextElementSibling.textContent = "";
    }

    if (email.value == "") {
        email.nextElementSibling.textContent = "This field is required.";
        isValid = false;
    } else {
        email.nextElementSibling.textContent = "";
    }

    if (phone.value == "") {
        phone.nextElementSibling.textContent = "This field is required.";
        isValid = false;
    } else {
        phone.nextElementSibling.textContent = "";
    }

    if (league.value == "") {
        league.nextElementSibling.textContent = "This field is required.";
        isValid = false;
    } else {
        league.nextElementSibling.textContent = "";
    }

    if (terms.value == false) {
        terms.nextElementSibling.textContent = "This field is required.";
        isValid = false;
    } else {
        last_name.nextElementSibling.textContent = "";
    }

    // submit the form if all entries are valid
    if (isValid) {
        alert("Registration Completed!");
        $("#register").submit();
        
    }

};
//resets inputdata
const resetForm = () => {
    $("form").reset();
};

document.addEventListener("DOMContentLoaded", () => {
    $("#register").addEventListener("click", processEntries);
    $("#reset_form").addEventListener("click", resetForm);
    
});