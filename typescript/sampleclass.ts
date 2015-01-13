
class Point {
    x: number;
    y: number;
    private color: string;
    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
        this.color = "red";
    }

    sum(): number{
        this.print(this.x+ this.y);
        return this.x + this.y;
    }

    print(num: number){
        console.log("Number : " + num);
    }

    static basePoint = new Point(0, 0);
}

var p = new Point(10, 20);
console.log(p.sum());
console.log(Point.basePoint.x);

//p.color // compilation error

// Same as class Point above ( without te sum function
class concisePoint {
    private color: string;
    constructor(public x: number =0, public y: number=0){
        this.color = "red";
    }
}

class Point3D extends Point{
    constructor(public x:number, public y:number, public z:number){
        super(x, y);
    }

    sum(): number{
        return this.x + this.y + this.z;
    }
}
