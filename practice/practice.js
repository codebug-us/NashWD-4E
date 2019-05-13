$(document).ready(function() {
	// your javascript and jQuery code goes below
	console.log("The page is loaded");
	$("#clicky").click(function(){
		//do something when the button is clicked
		console.log("I've been clicked!");
		$("#container").css("background-color","blue");

	});
})