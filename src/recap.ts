const myName = 'Victor';
const myAge = 20;
const suma = (a: number, b: number) => {
    return a + b;
};

suma(12, 12);

class Persona {
    // private age; //Por defecto son public
    // name;

    // constructor(age: number, name: string) {
    //     this.age = age;
    //     this.name = name;
    // }

    //Atajo para lo de arriba
    constructor(private age: number, private name: string) {}

    getSummary() {
        return `My name is ${this.name} and I'm ${this.age} years old`;
    }
}

const vico = new Persona(20, 'Victor');
vico.getSummary();
console.log(myName);
console.log(myAge);
