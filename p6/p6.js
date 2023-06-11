/*
Author: Jose Renteria
CIT281 Project 6

*/

class Shape 
{
    constructor(arr)
    {
        arr ? this.sides = arr : [];
    }
    perimeter = () => this.sides ? this.sides.reduce((total, side) => side + total, 0): 0;

}

class Rectangle extends Shape
{
    constructor(length = 0, width = 0)
    {
        super([length, width, length, width]);
        this.length = length;
        this.width = width;
    }
    
    area = () => this.length * this.width;
}

class Triangle extends Shape
{
    constructor(sideA = 0, sideB = 0, sideC = 0)
    {
        super([sideA, sideB, sideC]);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    area ()
    {
        const s = (this.sideA + this.sideB + this.sideC) / 2; // calculate semi-perimeter
        return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    }
}

const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];
for (const side of data)
{
    let shape = null;

    switch(side.length)
    {
        case 2:
            shape = new Rectangle(...side);
            const sq = side[0] == side[1] ? `Square` : `Rectangle`;
            console.log(`${sq} with sides ${side} has perimeter of ${shape.perimeter()} and area of ${shape.area()}`);
            break;
        case 3:
            shape = new Triangle(...side);
            console.log(`Triangle with sides ${side} has perimeter of ${shape.perimeter()} and area of ${shape.area()}`);
            break;
        case 1:
            console.log(`Shape with 1 side unsupported`);
            break;
        case 0:
            console.log(`Shape with 0 sides unsupported`);
            break;

    }
}