var socket = io();
socket.on('msgTemperature', function(msg) {	
	console.log(msg);
	$('#txtTemperature').text(msg.temp);
});
socket.on('webcamUpdated', function(msg) {
	console.log('Webcam updated - ' + msg);
});
