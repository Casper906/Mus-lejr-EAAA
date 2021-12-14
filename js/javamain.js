"use strict"; // to enable strict mode and modern JavaScript functionality

// hamburger menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

//Header minimize on scroll

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.height = "60px";
  } else {
    document.getElementById("header").style.height = "100px";
  }
}

 $(".option").click(function () {
  $(".option").removeClass("active");
  $(this).addClass("active");

});

//Google maps API long+lat placering af markør

function initMap() {

  const uluru = { lat: 57.184310, lng: 10.254470 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: uluru,
  });

  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}




