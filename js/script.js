var link = document.querySelector(".btn-write-us");
var popup = document.querySelector(".write-us");
var close = popup.querySelector(".modal-close");

var mapbtn = document.querySelector(".map-mini");
var popupmap = document.querySelector(".map");
var closemap = popupmap.querySelector(".modal-close-map");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("write-us-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("write-us-show");
});

mapbtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupmap.classList.add("map-show");
});

closemap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupmap.classList.remove("map-show");
});
