// number: 01,2,3,4,5,6
// string: "abc"
// boolean: true/false
// null
// undefined
// object: array/object: [1,2,3,4], {name:"huy",getName: function(){}}
// function: function(){}

// var a = 1
// var b = "abc"
// var c = true
// var d = null
// var e = undefined
// var f = [a,b,c]
// var g = {name:"huy", age: 18}
// var h = function (a,b){
//     return a+b
// }
// SCOPE
// Global
// code block {}
// function

// console.log(a)
// function myLog(){
//     if (true){
//         console.log(c)
//     }
//     console.log(b)
// }
// myLog()

// if (true){
//     if(true){
//         let name = "huy"
//         console.log("2",name)
//     }
//     console.log("1",name) // không in ra được name vì nằm ngoài block
// }

// for( var  i = 0; i <=10;i++){ 
//     if (true) {
//        var name = "huy"
//     }
// }

// const name ="huy"
// let age = 18
// var address = "hanoi"

// address = "tb"
// console.log(address)

// const myObj = function(){}
// var myObj1 = myObj
// console.log(myObj == myObj1)
// myObj = function(){}
// console.log(myObj == myObj1)


// var khác let/const : trong code block var sẽ được nhảy ra ngoài global, var có thể khai báo lại
// const khác var/let: const không được gán lại giá trị

// function sum (a,b){
//     return a+b
// }

// function chuVi(r){
//     sum(3,4)
//     var PI = 3.14
//     return 2*PI*r
// }
// chuVi(4)
// // var r = 4
// // const PI = 3.14
// // return 2*r*PI

// chuVi(5)
// // var r = 5
// // const PI = 3.14
// // return 2*r*PI

// if (true) x = 10

// if (true) {
//     let x = 0
// }
// if (true){
//     let x = 0
// }

// const myDocument = {
//     //
//     //
//     "div.header": {
//         //
//         //
//         div1: {
//             //
//             //
//             text: "content1"
//         },
//         div2: {
//             text: "content2"
//         }
//     },
//     "div.main": {
//         //
//         //
//         div1: {
//             //
//             //
//             text: "content3"
//         },
//         div2: {
//             text: "content4"
//         }
//     }
// }

console.log(document)
document.write("asfsjkhaslkfj")



