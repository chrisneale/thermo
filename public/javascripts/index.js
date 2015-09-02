var socket = io();
socket.on('msgTemperature', function(msg) {	
	console.log(msg);
	$('#txtTemperature').text(msg.temp);
});
