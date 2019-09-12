from flask import Flask,render_template,request,make_response
import serial, time

def led_on(LED):
	LED.write(bytes('1',encoding='utf=8'))
def led_off(LED):
	LED.write(bytes('2',encoding='utf=8'))

app = Flask(__name__)

@app.route('/', methods = ['POST','GET'])
def res():

	if request.method == 'POST':
		LED = serial.Serial('com4',9600)
		time.sleep(2)
		inp = request.form['MyData']
		if (inp == '1'):
			led_on(LED)
			print("ON")
		elif(inp == '2'):
			led_off(LED)
			print("OFF")
		LED.close()

	return("")

app.run(debug=True)