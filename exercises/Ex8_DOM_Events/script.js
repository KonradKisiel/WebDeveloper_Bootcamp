var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lis = document.getElementsByTagName("li");
var buttons = document.getElementsByTagName("button");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var button = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	button.appendChild(document.createTextNode("Delete"));
	ul.appendChild(button);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDoneAfterClick(event){
	if(event.target.tagName === "LI"){
		event.target.classList.toggle("done");
	}
	if(event.target.tagName === "BUTTON"){
		for(var i = 0; i<lis.length; i++){
			if(event.target===buttons[i+1]){
				lis[i].style.display = "none";
				event.target.style.display = "none";
			}
		}
	}
}

ul.addEventListener("click", toggleDoneAfterClick);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);