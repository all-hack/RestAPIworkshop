# intro to python workshop

basic workshop on classes in python


```python
#start off super slow
##
# data types
##
	#ints
	#doubles
	#strings
##
# functions
##
	#they have a basic idea of variables, from math, lets exploit that from now
		#define some simple f(x)'s
##
# how to hold data
##
	#makes sense to make everything accessable, but how do I hold all these limes?
	#time to define basic data structures, specifically the list [] (or array).
	#list of names ( the people in this class! )
##
# basic objects
##
	#give a definition of a class
		#why would we want one of those? I can just track it with a bunch of variables
			#you are correct, but it gets very complex.
				#Example: hold all the names, numbers and addresses of people in the phone book
					#now add one to the middle of a printed list
					#now delete all the ones with a last name starting with "Z"
						#this gets very complex without objects and data structures
class pen:
	#start to define different types of variables
	#strings are easiest to connect to someones name
	color = "red"#this is just the name of the color we are using
	name = "red Pen"#spaces are just characters, they are not really special, this is 1 variable
	#some numbers
	inkLevel = 6#counting numbers are easiest for people, 10 people in this class
	weight = 4.3#a measurement of something is pretty good for doubles
	#why is it called this?
	#there are a few special words in python, this is one of them
		#if they want to dig deeper, suggest they check online after the class
	def __init__(self, n, i, c, w):
		#why are we using self?
			#this is the specific object's variables.
				#point to someone, YOUR name
		self.name = n
		self.inkLevel = i
		self.color = c#ideally this would be an enum, but thats to far in my opinion
		self.weight = w
	#make sure this is clear to be within the pen. The pen "has" this action
	def writeWithPen(self):
		#what is an if? Control flow, what is it doing, controlling the ink flow!
		if self.inkLevel >= 1:
			self.inkLevel -= 1#this syntax reads take inkLevel, subtract 1 from it
		else:
			#it even tells us when it is dead!
			print(self.name + " is dead. Get a new " + self.color + " pen")
	#you will probably get someone who did java, yes this is toString()
	#same thing with this is just a special name, and tell them to google after
	def __str__(self):
		return self.name + " " + self.color#1Pen purple
#Start of main
if __name__ == '__main__':
	#what is this, and why do we want it?
	myPens = []#it is a list, it will hold our pens (like a reciet from a store maybe)
	#lets "buy" our pens
	myPens.append(pen("1Pen", 5, "purple", 5.5))
	myPens.append(pen("2Pen", 2, "red", 3.5))
	myPens.append(pen("3Pen", 3, "green", 3.5))
	#lets print all the pens we have backwards
	#what is a for in range loop?
	# we go from 3 to 0 and count down (3, 2, 1, 0)
	for i in range(len(myPens)-1, -1, -1):
		#while looping, at every iteration, print the current list item
		print(myPens[i].inkLevel)#3 first, then 2, ...
	#lets print all the pens we have that are not dead
	#what is a for in list loop?
	# for all items in the list, myPens
	for pen in myPens:
		#if the current level of ink is higher than "empty" defined at 2
		if pen.inkLevel > 2:
			#lets print the pen data
			print(pen, pen.inkLevel) # appending the inkLevel to print out, object access example
		#we have less than 3 ink in the pen
		else:
			#let the user know what is happening
			print(pen.name + " is dead. Get a new " + pen.color + " pen")
	#print out the current ink level of pen 3
	#(myPens[2] is the 3rd one, this is a big deal for first timers)
	print(myPens[2].inkLevel)
	#lets go ahead and empty the pen
	operationsToEmptyPen = myPens[2].inkLevel;
	for i in range(operationsToEmptyPen + 1):
		#use the pen, imagine this is on click, you are drawing, like in paint
		myPens[2].writeWithPen()
		#print the current information of the pen so the owner can buy another if needed
		print(myPens[2].inkLevel)
```



