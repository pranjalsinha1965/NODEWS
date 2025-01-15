console.log("Hello World");
function add(a, b){
    return a + b
}
console.log(add())
/*NAN since no arguments are possible*/
console.log(add(2, 8));
console.log(process.argv);

var args = process.argv.slice(2);
console.log("Adding the numbers: ", add(parseInt(args[0]), parseInt(args[1])));

/* Node.js uses chrome v8 engine */
/* Node.js is capable of using asynchronousI/O requests */
/* module is a set of library and reusable functions as well*/
