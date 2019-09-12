$(function(){

	$("#001").click(function(){
		var MyData = 1
		$.post("http://127.0.0.1:5000/",{"MyData":MyData})
	})

	$("#002").click(function(){
		var MyData = 2
		$.post("http://127.0.0.1:5000/",{"MyData":MyData})
	})
})