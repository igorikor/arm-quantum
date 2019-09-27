from flask import Flask,request,make_response

app = Flask(__name__)

com = ''
cmd = '0'

#Передача com порта к клиенту
@app.route("/connect", methods = ['POST','GET'])
def com_port():
	if request.method == 'POST':
		global com
		com = request.form['Port']
		return com
	if request.method == 'GET':
		return com
	return(None)

#Обработка запросов
@app.route("/", methods = ['POST','GET'])
def func():
	if request.method == 'POST':
		global cmd
		cmd = request.form['cmd']
		return cmd
	if request.method == 'GET':
		return cmd
	return (None)

app.run(debug=True)