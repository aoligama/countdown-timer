loadEventListeners();

function loadEventListeners() {
	document.addEventListener('DOMContentLoaded', function() { calcTime(); });
};

var timeTo = document.getElementById('time-to').value,
		date,
		now = new Date(),
		newYear = new Date('1.1.2020').getTime(),
		startTimer = '';

function calcTime(dates) {
	//ui variables
	clearInterval(startTimer);

	if(typeof(dates) == 'undefined'){
		date = new Date(newYear).getTime();
	}else {
		date = new Date(dates).getTime();
	}

	function updateTimer(date){

		var now = new Date().getTime();
		var distance = date - now;

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		$('#days').val(days);
		$('#hours').val(hours);
		$('#minutes').val(minutes);
		$('#seconds').val(seconds);

        
		if(now >= date){
			clearInterval(startTimer);
			$('#days').val('D');
			$('#hours').val('O');
			$('#minutes').val('N');
			$('#seconds').val('E');
		}
	}

	startTimer = setInterval(function() { updateTimer(date); }, 1000);

}

