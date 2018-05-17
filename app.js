var G=g$('John','Doe');
// G.greet(true).setLang('en').greet().log();


	// console.log(s);

$("#login").click(function(){
	var greetr=g$("john","doe");
	$("#logindiv").hide();  

	greetr.setLang($("#selector").val()).HTMLGreeting("#greeting").log();
});