document.getElementById("button1").addEventListener("click",
	function(){
		alert('Oooh - so close, but no cigar');
	}, false
);

document.getElementById("button2").addEventListener("click",
	function(){
		alert('DING DING DING - We have a winner');
	}, false
);

document.getElementById("button2").addEventListener("click",
	function(){
		alert('DING DING DING - We have a winner');
	}, false
);

document.getElementById("button3").addEventListener("click",
	function(){
		alert('Oops, butter luck next time');
	}, false
);

//Change the background color of button 1 when the mouse enters the button
document.getElementById("button1").addEventListener("mouseenter",
	function(){
		document.getElementById("button1").style.backgroundColor = "#cccccc"
		document.getElementById("button1").style.color = "#000000";
		document.getElementById("button2").style.backgroundColor = "#gold"
		document.getElementById("button2").style.color = "#000000";
		document.getElementById("button3").style.backgroundColor = "pink"
		document.getElementById("button3").style.color = "#000000";
	}, false
);

//Change the background color of button 1 back when the mouse leaves the button
document.getElementById("button1").addEventListener("mouseleave",
	function(){
		document.getElementById("button1").style.backgroundColor = "red"
		document.getElementById("button1").style.color = "#ffffff";
	}, false
);

//Change the background color of button 2 when the mouse enters the button
document.getElementById("button2").addEventListener("mouseenter",
	function(){
		document.getElementById("button1").style.backgroundColor = "gold"
		document.getElementById("button1").style.color = "#000000";
		document.getElementById("button2").style.backgroundColor = "#cccccc"
		document.getElementById("button2").style.color = "#000000";
		document.getElementById("button3").style.backgroundColor = "teal"
		document.getElementById("button3").style.color = "#000000";
	}, false
);

//Change the background color of button 2 back when the mouse leaves the button
document.getElementById("button2").addEventListener("mouseleave",
	function(){
		document.getElementById("button2").style.backgroundColor = "yellow"
		document.getElementById("button2").style.color = "#ffffff";
	}, false
);

//Change the background color of button 3 when the mouse enters the button
document.getElementById("button3").addEventListener("mouseenter",
	function(){
		document.getElementById("button1").style.backgroundColor = "teal"
		document.getElementById("button1").style.color = "#000000";
		document.getElementById("button2").style.backgroundColor = "#pink"
		document.getElementById("button2").style.color = "#000000";
		document.getElementById("button3").style.backgroundColor = "#cccccc"
		document.getElementById("button3").style.color = "#000000";
	}, false
);

//Change the background color of button 3 back when the mouse leaves the button
document.getElementById("button3").addEventListener("mouseleave",
	function(){
		document.getElementById("button3").style.backgroundColor = "blue"
		document.getElementById("button3").style.color = "#ffffff";
	}, false
);
