from flask import Flask,request,make_response

app = Flask(__name__)

com = {}

@app.route("/", methods = ['POST','GET'])
def func():
	if request.method == 'POST':
		global com
		com = request.form['Port']
		print (com)
		return com
	if request.method == 'GET':
		return com

app.run(debug=True)