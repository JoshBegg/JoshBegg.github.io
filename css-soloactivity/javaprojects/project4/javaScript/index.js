
/*********************************************************************
***
*Original Author:   Josh Begg                                 *
*Date Created:        1/28/2022                               *
*Version:                0.0                                *
*Date Last Modified:      1/28/2022                        *
*Modified by:              Josh Begg                            *
*Modification log:            0.0 page was made                      *
***                     
******************************************************************** */
"use strict";

const isDate = (date, datePattern, type) => {
    if (!datePattern.test(date)) { return false; }

    if (type == "full") {
        const dateParts = date.split("/");
        const month = parseInt(dateParts[0]);
        const day = parseInt(dateParts[1]);

        if (month < 1 || month > 12) { return false; }
        if (day > 31) { return false; }
        return true;
    }
    if (type == "cc") {
        const index = date.indexOf("/");
        const month = parseInt(date.substring(0, index));

        if (month < 1 || month > 12) { return false; }
        return true;
    }
};

$(document).ready(() => {
    const d = new Date();
    let text = d.toString();
    document.getElementById("time").innerHTML = text;
    $("#save").click(() => {
        $("span").text("");   // clear any previous error messages

        // get values entered by user
        const email = $("#email").val();
        const phone = $("#phone").val();
        const firstName = $("#firstName").val();
        const lastName = $("#lastName").val();
        const date = $("#date").val();
       


        // regular expressions for validity testing
        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        const firstNamePattern = /^\D$/;
        const lastNamePattern = /^\D$/;
        const datePattern = /^[01]?\d\/[0-3]\d\/\d{4}$/;
        


        // check user entries for validity
        let isValid = true;
        if (email === "" || !emailPattern.test(email)) {
            isValid = false;
            $("#email").next().text("Please enter a valid email.");
        }
        if (phone === "" || !phonePattern.test(phone)) {
            isValid = false;
            $("#phone").next().text("Please enter a phone number in NNN-NNN-NNNN format.");
        }
        if (firstName === "" || !firstNamePattern.test(firstName)) {
            isValid = false;
            $("#firstName").next().text("Please enter Name without digts");
        }
        if (lastName === "" || !lastNamePattern.test(lastName)) {
            isValid = false;
            $("#firstName").next().text("Please enter Name without digts");
        }
        if (date === "" || !isDate(date, datePattern, "full")) {
            isValid = false;
            $("#date").next().text("Please enter a valid date in MM/DD/YYYY format.");
        }


        if (isValid) {
            alert("Reservation Made! See you there!")
        }

        $("#firstName").focus();
    });

    // set focus on initial load
    $("#firstName").focus();
});