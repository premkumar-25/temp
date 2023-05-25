//npm -global command ,comes with node
//npm --version


//local dependency-use it only this particular project
//npm i <pacakgename>


//global dependency-use it in any project
//npm i -g <package>


//package.json -manifest file(stores imp info aboyt project)
//manual approch
//npm init
//npm init -y

const load= require('loadash')

const items=  [1,[2,[3,[4]]]]  
const newitems= _.flatteDeep(items)
console.log(newitems)
