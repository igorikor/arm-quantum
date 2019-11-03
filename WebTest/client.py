from serial import *
from time import sleep
from requests import *

def led_on(LED):
	LED.write(bytes('1',encoding='utf=8'))
def led_off(LED):
	LED.write(bytes('2',encoding='utf=8'))

def get_com():
	com = get('http://127.0.0.1:5000/connect').text
	return com

def switch_func():
	func = get('http://127.0.0.1:5000/').text
	print(func)
	return func

LED = Serial(get_com(),9600)
sleep(2)

while True:
	func = switch_func()

	if func == '1':
		led_on(LED)
		post('http://127.0.0.1:5000',{'cmd':'0'})

	if func == '2':
		led_off(LED)
		post('http://127.0.0.1:5000',{'cmd':'0'})

	sleep(2)