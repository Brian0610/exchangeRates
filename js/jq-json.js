$(function() {
	
	$('#exchangerates').append('<div id="rates"></div><div id="reload"></div>');

	function loadRates() {
		$.getJSON('data/rates.json')
		.done( function(){
			alert('success'); 

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