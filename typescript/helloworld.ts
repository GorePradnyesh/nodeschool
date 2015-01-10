
function process(x: () => string){
    x().charAt(2)   //x(). should prompt you for string functions because the compiler and IDE know that x returns string
}

function stringArg(x: string){
    var c = x.charAt(2);
}


function paramPropType(x : {a: number; b: string }){
    x.a = 44;
    x.b = "Hello World !";
    //x.grammar = false; // Compilation error: property "grammar" does not exist on x
}

interface Thing {
    a: number;
    b: string;
}

interface optionalThing{
    a: number;
    b: string;
    c?: boolean;
}

interface functionalInterface{
    a: number;
    foo(s: string) : string;
}

function paramPropTypeInterface(x: Thing){
    console.log(x.a);
    console.log(x.b);
    return x.a;
}

function paramPropOptionalType(x: optionalThing){

}

var x1 = paramPropTypeInterface({a:4, b:"SampleString"});
var x2 = paramPropOptionalType({a:4, b:"SampleString"});
var x2 = paramPropOptionalType({a:4, b:"SampleString", c: false});

