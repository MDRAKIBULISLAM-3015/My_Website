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

$(window).scroll(function() {
  if ($(this).scrollTop() > 600) {
    $(".scrollup").fadeIn();
  } else {
    $(".scrollup").fadeOut();
  }
})

$(".scrollup").click(function() {
  $("html, body").animate({
    scrollTop: 0
  }, 600);
  return false;
})
