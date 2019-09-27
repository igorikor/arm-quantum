from serial import *
from time import sleep
from requests import *

def led_on(LED):
	LED.write(bytes('1',encoding='utf=8'))
def led_off(LED):
	LED.write(bytes('2',encoding='utf=8'))

def get_com():
	com = get('http://127.0.0.1:5000/').text
	print(com)
	return com
	
LED = Serial(get_com(),9600)
sleep(2)
led_on(LED)

while True:
	pass