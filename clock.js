function updateTime(){
    	var now = new Date();
	dateslot.textContent = now.toLocaleDateString();
	timeslot.textContent =
	    now.getHours().toString() +
	    ":" +
	    ("00" + now.getMinutes()).slice(-2);
};

window.onload = function(e){ 
    dateslot = document.getElementById("date");
    timeslot = document.getElementById("time");
    updateTime();
    setInterval(updateTime, 60000);
    audio = new Audio("elona.ogg");
    audio.loop = true;
    audio.play();
};












