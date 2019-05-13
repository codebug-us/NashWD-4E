$(document).ready(function() {
// your javascript and jQuery code goes below
$("#colorItPink").click(function(){
	$(this).css("border-width", "20px");
	$(this).css("border-color", "pink");
});

//feeling blue
$("#feelingBlue").click(function(){
	$("#container").css("background-color","#83b1fc");
});

//fade away
$("#fadeAway").click(function(){
	$("#container").fadeOut("slow");
});

//lottery button
$("#lotteryButton").click(function(){
	alert("YOU WON THE LOTTERY!");
});

//confirmation
$("#confirmation").click(function(){
	confirm("Are you sure?");
})

//show my a puppy
$("#showMeAPuppy").click(function(){
	$("body").css('background-image', 'url("images/puppy.jpg")');
});

//replace me
$("#replaceMe").click(function(){
	$(this).replaceWith("<h2>REPLACED!</h2>");
});

//old enough to drive
$("#oldEnoughToDrive").click(function(){
	var userAnswer =prompt("How old are you?");
	if(userAnswer>=16){
		$("#container").replaceWith("<h1>WOHOOO!!!</h1>");
	}else{
		$("#container").replaceWith("<h1>Sorry, maybe next year</h1>");
	}
});

})