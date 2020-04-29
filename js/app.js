//loadEventListeners();
//
//function loadEventListeners() {
//	document.addEventListener('DOMContentLoaded', function() { calcTime(''); });
//};

var date,
		now = new Date(),
		newYear = new Date('1.1.2020').getTime(),
		startTimer = '';

function calcTime(dates) {
	dates = $('#time-to').val();
	if( typeof(dates) != 'undefined' && dates != ''){

		clearInterval(startTimer);

		if(typeof(dates) == 'undefined'){
			date = new Date(newYear).getTime();
		}else {
			date = new Date(dates).getTime();
		}

		function updateTimer(date){

			var now = new Date().getTime();
			var distance = date - now;

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
				$('.pyro').removeClass('hidden');
				$('.input-time').css({
					'background-color': '#26c281',
					'color': '#000',
				});
			}
		}

		startTimer = setInterval(function() { updateTimer(date); }, 1000);
	} else {
		bootbox.alert('Try to put some valid date next time :)')
		
		$('#days').val('');
		$('#hours').val('');
		$('#minutes').val('');
		$('#seconds').val('');
	}
}

function stopFireworks(){
	$('.pyro').addClass('hidden');
	


}
