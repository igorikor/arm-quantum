var recognition = new webkitSpeechRecognition();
	recognition.continuous = true;
	//recognition.interimResults = true;
	function start(){
		recognition.onresult = function(event) { 
			console.log(event);
			var output = document.getElementById("custom_command_text");
			output.innerHTML = "";
			for(var i=0; i<event.results.length; i++){
				output.innerHTML = output.innerHTML + event.results[i][0].transcript;
			}
		}
		recognition.start();
	}