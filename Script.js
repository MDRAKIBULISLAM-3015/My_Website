var typed = new Typed(".typing", {
  strings: ["From Bangladesh"],
  typeSpeed: 130,
  backSpeed: 160,
  loop: true,
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-links");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-links");
  document.getElementById(tabname).classList.add("active-tab");
}

function sent(event) {
  event.preventDefault()
  let name= document.forms['msg']['name'].value
  let email= document.forms['msg']['email'].value
  let message= document.forms['msg']['message'].value

  

  if(name!="" && email!="" && message!="" ){
    alert("Submit Successfull")
  }
  else
    alert("please fillup all input field!")
}


function openmenu() {
  document.getElementById("sidemenu").classList.add("classnam");
}

function closemenu() {
  document.getElementById("sidemenu").classList.remove("classnam");
}

$(document).ready(function ($) {
  $("body").scrollToTop({
    distance: 200,
    speed: 1000,
    easing: "linear",
    animation: "fade", // fade, slide, none
    animationSpeed: 500,

    mobile: {
      width: 768,
      distance: 100,
      speed: 1000,
      easing: "easeInOutElastic",
      animation: "slide",
      animationSpeed: 200,
    },

    trigger: null, // Set a custom triggering element. Can be an HTML string or jQuery object
    target: null, // Set a custom target element for scrolling to. Can be element or number
    text: "Scroll To Top", // Text for element, can contain HTML

    skin: null,
    throttle: 250,

    namespace: "scrollToTop",
  });
});
