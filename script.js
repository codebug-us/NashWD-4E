$(document).ready(function() {
// your javascript and jQuery code goes below
var border = $("#container");
$("#pink").click(function(){
	console.log("you clicked me");
	border.css({"border-color": "pink", "border-style": "dotted", "border-width": "20px"});
});

$("#blue").click(function(){
	border.css("background-color", "#052f72");
});

$("#fade").click(function(){
	border.fadeOut(4000);
});
$("#lottery").click(function(){
	alert("YOU WIN THE LOTTERY");
});
$("#confirm").click(function(){
	alert("you sure?");
});
$("#show").click(function(){
	$("body").css({"background-image": "url('images/puppy.jpg')", "background-size": "cover"});
});

$("#replace").click(function(){
	$("#replace").replaceWith("REPLACED!");
});
$("#old").click(function(){
	var drive = prompt("how old are you?");
	if (drive >= 17){
		border.replaceWith("WOOOOHOOOO");
	} else{
		border.replaceWith("sorry, maybe next year");
	}
});
$("#choice").click(function(){
	border.fadeOut(4000);
});

})