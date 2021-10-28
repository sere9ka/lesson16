// Метод Фенмана:
// Я научился на основе исходных данных об каком то предмете создавать новые предметы со своими, уникальными свойствами

'use strict'

class First {
    constructor(name) {
        this.name = name
    }
    hello() {
        console.log(`Привет, я метод родителя!`);
    }
}

class Second extends First {
    constructor(name, familyName) {
        super(name)
        this.familyName = familyName;
    }
    hello() {
        super.hello();
        console.log("А я наследуемый метод!");
    }
}

const dev = new Second('Vlad', 'Classov')

console.log(dev);
dev.hello()