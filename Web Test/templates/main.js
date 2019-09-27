$(function(){

	ip = '127.0.0.1:5000'

	$("#connect").click(function(){
		var com = $("#com").val()
		$.post('http://'+ip+'/connect',{'Port':com})
	})

	$("#cmd_send").click(function(){
		var cmd = $("#cmd_text").val()
		$.post('http://'+ip+'/',{'cmd':cmd})
	})
})