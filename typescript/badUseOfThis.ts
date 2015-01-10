/**
 * Created by pgore on 1/10/15.
 */
class BadCounter{
    count = 0;
    start(){
        window.onmousemove = function(e){
            this.count++
            console.log(this.count)
        }
    }
}

var badCounter = new BadCounter();
badCounter.start();


// See the generated code to understand how arrow functions translate into

class GoodCounter{
    count = 0;
    start(){
        window.onmousemove = e => {
            this.count++
            console.log(this.count)
        }
    }
}