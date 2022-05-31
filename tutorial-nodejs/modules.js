//Modules

//you can split code into modules

const names = require('./names')
const sayHi = require('./utils')
const data = require('./alt-flavor')

console.log(data)
sayHi.sayHi('susan')
sayHi.sayHi(names.john)
sayHi.sayHi(names.peter)


//node uses the CommonJS module and every file in node is a module