$(function(){

	var ip = '127.0.0.1:5000';
	var lib = {
		'1':"Turn On"
	}

	$("#connect").click(function(){
		var com = $("#com").val();
		$.post('http://'+ip+'/connect',{'Port':com});
	})

	$("#cmd_send").click(function(){
		var cmd = $("#cmd_text").val();
		var log_update = lib[cmd];
		$.post('http://'+ip+'/',{'cmd':cmd});
		return log_update
	})
	
	$("#log_text").text(log_update);

})