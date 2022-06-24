//let myName

//myName = 'Illia'

//console.log(myName)

//console.log(console.log(10))

// const myName = 'Bogdan'

// console.log(myName)

// пример ссылочного типа данных
const objectA = {
    a: 10,
    b: true
    c: 'abc'
}

const copyOfA = objectA

copyOfA.a = 20 (меняем свойство а в переменной objectA через ссылку в copyOfA )
copyOfA.c = 'abc' (добавляем в objectA новое свойство с которое будет содержать c = 'abc')
