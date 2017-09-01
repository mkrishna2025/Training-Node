var calc = require('./calculator.js');
var { subtraction } = require('./calculator.js');
var http = require('http');
var calculator = require('./calculatorbase.js');
var sciCalc = require('./scientificcalculator.js');
var fs = require('fs');

console.log('Node Started');
console.log(calc.addition(1, 4));
console.log(calc.subtraction(1, 4));
console.log(subtraction(10, 4));

// multiplication is private function
//console.log(calc.multiplication(1, 4));

http.createServer(function(req, res){
	var instance = new sciCalc();
	//res.end("Hello World " + instance.add( 1, 2));
	//res.end("Sum of 1 + 2 is " + instance.add( 1, 2));
	
	//res.end("Sum of 1 + 2 is " + instance.add( 1, 2));
	
	fs.readFile("AppPages/Sample1.html", function (error, pgResp) {
		if (error) {
			res.writeHead(404);
			res.write('Contents you are looking are Not Found');
		} else {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(pgResp);
		}
		 
		res.end();
	});
}).listen(3020);