// JavaScript Document
// If the password, 1912 is entered, the content will become un-hidden.


window.onload = function checkClass(){
	const localStorageClass = localStorage.getItem("class");
	
	if (localStorageClass === "class") {
		document.getElementById("form").remove();
		document.getElementById("hiddenContent").classList.remove("hide-creative");
		document.getElementById("creativeFooter").classList.remove("fixed-bottom");	
	
	}
}



function addCode() {
		if (document.getElementById("password").value === '1912') {
			//Removes Form
			document.getElementById("form").remove();
			//insert code for removing class content-hide   
			document.getElementById("hiddenContent").classList.remove("hide-creative");
			//Unfix Footer to Bottom
			document.getElementById("creativeFooter").classList.remove("fixed-bottom");	
			//Remove Try Again Message
			document.getElementById("tryAgain").classList.add("hidden");	
			//Store the class change for the session
			localStorage.setItem("class", "class");
		} else {
			document.getElementById("tryAgain").innerHTML = "<p>That was incorrect. Please try again.</p>";
			localStorage.clear();
		}
}
