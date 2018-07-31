$(document).ready(function() {
	var countDownDate = (new Date("Jan 1, 2020 00:00:00")).getTime();
	//console.log("GOOD");
	var countDownFunc = setInterval(function(){
		var now = (new Date).getTime();
		var distance = countDownDate - now;
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
		var minutes = Math.floor((distance % (1000*60*60))/(1000*60));
		var seconds = Math.floor((distance % (1000*60))/1000);
		document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

		if(distance < 0){
			clearInterval(countDownFunc);
			document.getElementById("demo").innerHTML = "EXPIRED";
		}
	}, 1000);
});