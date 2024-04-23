
// Loads the navbar.html file and replaces elements with navbar id when called.
// Used to copy the navbar defined in one file to all other files.
async function loadNavbar() {
	const response = await fetch("navbar.html");
	const text = await response.text();
	document.getElementsByClassName("navbar")[0].innerHTML = text;
}

loadNavbar();

document.getElementById("email-button").addEventListener("click", function (event) {
	event.preventDefault();
	sendEmail();
});

function sendEmail() {
	const senderAddress = document.getElementById("sender-email");
	const subject = document.getElementById("subject");
	const message = document.getElementById("message");

	window.open(`mailto:${senderAddress.value}?subject=${subject.value}&body=${message.value}`);
}