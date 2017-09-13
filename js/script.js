var link = document.querySelector(".btn-write-us");
var popup = document.querySelector(".write-us");
var close = popup.querySelector(".modal-close");

var maplink = document.querySelector(".map-mini");
var popupmap = document.querySelector(".map");
var closemap = popupmap.querySelector(".modal-close-map");

var login = popup.querySelector("[name=login]");

var form = popup.querySelector("form");

var email = popup.querySelector("[name=email]");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("write-us-show");
    login.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("write-us-show");
    popup.classList.remove("modal-error");
});

maplink.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupmap.classList.add("map-show");
});

closemap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupmap.classList.remove("map-show");
});

form.addEventListener("submit", function (evt){
 if (!login.value || !email.value) {
  evt.preventDefault();
  popup.classList.remove("modal-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("modal-error");
  login.classList.remove("invalid-input")
  email.classList.remove("invalid-input")
  if(!login.value){
   login.classList.add("invalid-input");
  }
  if(!email.value) {
   email.classList.add("invalid-input");
  }
 }else {
  login.classList.remove("invalid-input")
  email.classList.remove("invalid-input")
  form.submit();
 }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("write-us-show")) {
          popup.classList.remove("write-us-show");
          popup.classList.remove("modal-error");
      }
    }
  });

