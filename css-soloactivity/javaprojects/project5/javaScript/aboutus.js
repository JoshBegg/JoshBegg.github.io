
/*********************************************************************
***
*Original Author:   Josh Begg                                 *
*Date Created:        1/28/2022                               *
*Version:                0.1                                *
*Date Last Modified:      1/28/2022                        *
*Modified by:              Josh Begg                            *
*Modification log:             0.0 page was made                     *
***                     0.1 added slide show and drop down
******************************************************************** */
"use strict";
//drop down code
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


//slide show code
const $ = selector => document.querySelector(selector);
    
const imageCache = [];
let imageCounter = 0;
let timer = null;
let image = null;

const mainImage = $("#main_image");   // the img element for the show
const caption = $("#caption");        // the h2 element for the caption

const runSlideShow = () => {
    imageCounter = (imageCounter + 1) % imageCache.length;
    image = imageCache[imageCounter];
    mainImage.src = image.src;
    mainImage.alt = image.alt;
    caption.textContent = image.alt;
};
         
document.addEventListener("DOMContentLoaded", () => {
    const links = $("#image_list").querySelectorAll("a");
    
    // process image links
    for ( let link of links ) {
        // Preload image and copy title properties
        image = new Image();
        image.src = link.href;
        image.alt = link.title;

        // add image to array 
        imageCache[imageCache.length] = image;
    }

    // attach start and pause event handlers
    $("#start").addEventListener("click", () => {
        runSlideShow();
        timer = setInterval(runSlideShow, 2000);
        $("#start").disabled = true;
        $("#pause").disabled = false;
    });
    $("#pause").addEventListener("click", () => {
        clearInterval(timer);
        $("#start").disabled = false;
        $("#pause").disabled = true;
    });
});