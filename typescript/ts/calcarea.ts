let pi: number = 3.1415;
let radius: number = 3;

function radiusOfCircle(radius:number) : number {
    return pi * (radius * radius);
}

let answer: number = radiusOfCircle(radius);

function perimeterOfCircle(radius:number) : number {
    return 2 * (pi * radius);
}

let answer2: number = perimeterOfCircle(radius);

console.log(`The area is ${answer}
The perimeter of the circle is ${answer2}`);


class Startup{
    public  main(): number {
        console.log('Hello World');
        return 0;
    }
    public n: number = 2;
    private priv: string = "HELLO";
}

let sc = new Startup();
sc.main();

console.log(sc.n);
console.log(sc.priv);