var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
 	video.play();
	document.querySelector("#volume").innerHTML=video.volume *100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
 	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
 	video.playbackRate *= .95;
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
 	video.playbackRate /= .95;
	console.log ("New speed is " + video.playbackRate)
});



document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip");
 	video.currentTime += 15;
	video.currentTime > 67.403333
	video.play()
	console.log( "Current location " + video.currentTime)
});


document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changing Css");
	video.classList.add("oldSchool"); 
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Changing Css");
	video.classList.remove("oldSchool"); 
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing volume")
	console.log(this.value)
	video.volume = this.value /100;
	document.querySelector("#volume").innerHTML=video.volume *100 + "%"
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	{ if (video.muted === false)
		 { video.muted = true;document.querySelector("#mute").muted = true;document.querySelector("#mute").innerHTML = "Unmute"; }
		  else { video.muted = false;document.querySelector("#mute").muted = false;document.querySelector("#mute").innerHTML = "Mute"; } 
		  return false; }
});
