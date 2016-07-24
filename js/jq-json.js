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
				msg += '<div class="' + key + '">$' + key + ': ' + val + '</div>'
			}); 
			$('#rates').append(msg); 
		}).fail( function(){
			alert('fail'); 
			// code goes here

		}).always( function() {
			alert('a valiant effort'); 
			// code goes here

		}); 
	}

	loadRates();
	
}); 