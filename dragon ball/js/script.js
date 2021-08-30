function enviar() {
	var radio1 = document.getElementById('trunks').checked;
	var radio2 = document.getElementById('goku').checked;
	var radio3 = document.getElementById('vegeta').checked;
	var radio4 = document.getElementById('gohan').checked;
	var radio5 = document.getElementById('freeza').checked;

	if (radio1 === true) {
		alert('Parabéns !! Você acertou.')
	} else {
		alert('Você errou ! Assista o video para responder.')
	}
}
function enviar2() {
	var radio1 = document.getElementById('ss').checked;
	var radio2 = document.getElementById('ss3').checked;
	var radio3 = document.getElementById('is').checked;
	var radio4 = document.getElementById('god').checked;
	var radio5 = document.getElementById('blue').checked;

	if (radio5 === true) {
		alert('Parabéns !! Você acertou.')
	} else {
		alert('Você errou ! Assista o video para responder.')
	}
}


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}