    'use strict'

const Person = function (name) {
    this.name = name
}

Person.prototype.sayHello = function () {
    console.log('Привет, меня зовут' + this.name);
}

const student = function (name, role) {
    Person.call(this, name)
    this.role = role
}

Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student

const newStudent = new Student('VIad', 'student')

console.log(newStudent);
