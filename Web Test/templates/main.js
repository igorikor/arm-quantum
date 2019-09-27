$(function(){

	ip = '127.0.0.1:5000'

	$("#connect").click(function(){
		var com = $("#com").val()
		$.post('http://127.0.0.1:5000/',{'Port':com})
	})
})