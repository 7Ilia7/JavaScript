const person = {  
    name: 'bob' ,
    age: 25
}

const person2 = { ...person }
person2.name = 'Alice'

console.log(person2.name)  //26
console.log(person.name)   //25