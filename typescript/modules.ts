/**
 * Created by pgore on 1/10/15.
 */

// Simple module export
module Utils{
    export class SimplePrinter{
        name: string;
        constructor(name: string){
            this.name = name;
        }

        printName(){
            console.log(this.name);
        }
    }
}

// modules are like open ended name spaces which can exist in different files
module Utils{
    export class SimpleAdder{
        num1: number;
        num2: number;
        constructor(num1: number, num2: number){
            this.num1 = num1;
            this.num2 = num2;
        }
        sum(): number{
            return this.num1 + this.num2;
        }
    }
}

var printer = new Utils.SimplePrinter("Tintin");
printer.printName();
var adder = new Utils.SimpleAdder(1,79);
console.log(adder.sum());

// modules can also have longer namespaces
module com.adobe.simpleMultiplier{
    export var x = 45;
}
// usage of long namespaces
console.log(com.adobe.simpleMultiplier.x);

import cas = com.adobe.simpleMultiplier;
cas.x;