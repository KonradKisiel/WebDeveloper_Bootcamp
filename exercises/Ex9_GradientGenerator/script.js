var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementsByTagName("button")[0];

function setGradient(){
	body.style.background = "linear-gradient(to right, "
	+color1.value
	+", "
	+color2.value
	+")";

	css.textContent = body.style.backgroundImage + ";";
}

function setRandomGradient(){
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
}

function randomColor(){
	return "#"+random255()+random255()+random255();
}

function random255(){
	var rand255 = Math.round(Math.random()*255).toString(16);
	if(rand255.length===1){
		rand255 = "0"+rand255;
	}
	return rand255;
}

//eventListener activates every time input value changes
color1.addEventListener("input",  setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setRandomGradient);
setGradient();
