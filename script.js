// Напишите расширения метода прототипа:
// 1) Два класса, First и Second, Second наследует от First .
// 2) В First есть метод hello - он печатает в консоль "Привет я метод родителя!".
// 3) Нужно написать в Second метод hello, чтоб он сначала вызывал метод hello из First, а потом сразу печатал в консоль "А я наследуемый метод!"

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