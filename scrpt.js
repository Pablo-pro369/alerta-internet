const video = document.getElementById("video");

document.addEventListener("click", function(){
video.muted = false;
video.play();
});