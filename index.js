document.addEventListener("keydown",getValue);
function getValue(x)
{
	if(x.keyCode==87)
	{
		console.log("hello");
	  var audio = new Audio('sounds/drum kit_sounds_kick-bass.mp3');
	  audio.play();
	}
	else if(x.keyCode==65)
	{
		var audio = new Audio('sounds/drum kit_sounds_crash (2).mp3');
	  	audio.play();
	}
	else if(x.keyCode==83)
	{
		var audio = new Audio('sounds/drum kit_sounds_snare.mp3');
	  	audio.play();
	}
	else if(x.keyCode==68)
	{
		var audio = new Audio('sounds/drum kit_sounds_tom-1.mp3');
	  	audio.play();
	}
	else if(x.keyCode==74)
	{
		var audio = new Audio('sounds/drum kit_sounds_tom-2.mp3');
	  	audio.play();
	}
	else if(x.keyCode==75)
	{
		var audio = new Audio('sounds/drum kit_sounds_tom-3.mp3');
	  	audio.play();
	}
	else if(x.keyCode==76)
	{
		var audio = new Audio('sounds/drum kit_sounds_tom-4.mp3');
	  	audio.play();
	}
	else
	{
		console.log("sorry");
	}
}
