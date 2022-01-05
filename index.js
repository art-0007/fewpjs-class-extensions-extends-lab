// Your code here

class Polygon {
    constructor (array) {
        this.array = array
    }

    get countSides() {
        return this.array.length
    }

    get perimeter() {
        return this.array.reduce((acc, cv) => acc + cv)
    }
}

class Triangle extends Polygon {

    get isValid () {
        const a = this.array[0];
        const b = this.array[1];
        const c = this.array[2];

        return a + b > c &&  a + c > b && b + c > a 
    }
}

class Square extends Polygon {

    get isValid () {
        const a = this.array[0];
        const b = this.array[1];
        const c = this.array[2];
        const d = this.array[3];

        return a == b && b == c && c == d
    }

    get area () {
        return this.array[0]**2
    }
}