$(document).ready(function(){

	console.log("ready");

	var ip = '127.0.0.1:5000';
	var mode = 1;
	var com_port = '0'
	var recognition = new webkitSpeechRecognition();
	recognition.continuous = true;

	$("#recognition").click(function(){
		recognition.onresult = function(event) { 
			console.log(event);
			var res = "";
			for(var i=0; i<event.results.length; i++){
				res = res + event.results[i][0].transcript + " ";
				console.log(event.results[i][0].transcript);
			}
			$("#custom_command_text").val(res);
			recognition.stop();
		}
		recognition.start();
	})

	$("#connect").click(function(){
		com_port = $("#com").val();
		$.post('http://'+ip+'/connect',{'com':com_port});
		$("#log").append("Trying connecting");
	})

	$("#refresh").click(function(){
		
	})

	$("#custom_command").click(function(){
		var command = $("#custom_command_text").val();
		$("#custom_command_text").val("");
		$("#log").append("-- "+command+"\n");
		if (command != ''){
			$.post('http://'+ip+'/command',{'command':command});
			command = '';
		}	
	})

	$("#xyz_coord").click(function(){
		mode = 1;
		$("#coord_1").text("X");
		$("#coord_2").text("Y");
		$("#coord_3").text("Z");
	})

	$("#some_coord").click(function(){
		mode = 2;
		$("#coord_1").text("A");
		$("#coord_2").text("B");
		$("#coord_3").text("C");
	})

})