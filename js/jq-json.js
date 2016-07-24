$(function() {
	
	$('#exchangerates').append('<div id="rates"></div><div id="reload"></div>');

	function loadRates() {
		$.getJSON('data/rates.json')
		.done( function(data){
			var d = new Date(); 
			var h = d.getHours();
			var m = d.getMinutes();  
			var msg = '<h2>Exchange Rates</h2>'; 
			$.each(data, function(key, val){
				msg += '<div class="' + key + '">$' + key + ': ' + val + '</div>';
			}); 
			msg += '<br>LAST UPDATE: ' + h + ':' + m + '<br>'; 
			$('#rates').html(msg); 
		}).fail( function(){
			$('#rates').text('Sorry, we cannot load the rates at this time'); 
		}).always( function() {
			var refresh = '<a id="refresh" href="#">'; 
			refresh += '<img src="images/refresh.png" alt="refresh"></a>'; 
			$('#reload').html(refresh); 
			$('#refresh').on('click', function(e) {
				e.preventDefault(); 
				loadRates(); 
			})
		}); 
	}

	loadRates();
	
}); 