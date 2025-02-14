var messageBox = document.querySelector(".message");
var gif = document.querySelector(".gif");
var music = document.getElementById("backgroundMusic");

$("#messageState").on("change", function() {
  if (this.checked) {
    $(".message").removeClass("close").addClass("open");
    $(".heart").removeClass("close").addClass("open");
    $(".container").stop().animate({ backgroundColor: "#992c51" }, 4000);
    music.play();
  } else {
    $(".message").removeClass("open").addClass("close");
    $(".heart").removeClass("open").addClass("close");
    $(".container").stop().animate({ backgroundColor: "#fce4ec" }, 4000);
    music.pause();
    music.currentTime = 0;
    gif.classList.remove("show");
  }
});

messageBox.addEventListener("animationend", function(event) {
  if (event.animationName === "openMessage") {
    gif.classList.add("show");
  }
});

messageBox.addEventListener("animationstart", function(event) {
  if (event.animationName === "closeMessage") {
    gif.classList.remove("show");
  }
});