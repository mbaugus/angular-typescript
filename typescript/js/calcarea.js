"use strict";
var pi = 3.1415;
var radius = 3;
function radiusOfCircle(radius) {
    return pi * (radius * radius);
}
var answer = radiusOfCircle(radius);
function perimeterOfCircle(radius) {
    return 2 * (pi * radius);
}
var answer2 = perimeterOfCircle(radius);
console.log("The area is " + answer + "\nThe perimeter of the circle is " + answer2);
var Startup = /** @class */ (function () {
    function Startup() {
        this.n = 2;
        this.priv = "HELLO";
    }
    Startup.prototype.main = function () {
        console.log('Hello World');
        return 0;
    };
    return Startup;
}());
var sc = new Startup();
sc.main();
console.log(sc.n);
console.log(sc.priv);
