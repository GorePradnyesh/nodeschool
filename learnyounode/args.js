var myArgs = process.argv.slice(2)
var summation = 0
for(i=0; i < myArgs.length; i++){
	summation += Number(myArgs[i])
}
console.log(summation)