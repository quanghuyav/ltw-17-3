// var
// let
// const

// global
// codeblock
// function 

// const x = 10
// x = 20

// function sum(a,b){
//     return a + b
// }
// const sum1 = function(a,b){
//     return a + b
// }
// const sum2 = a => a*a

// const name = "huy"
// const myStr = "hello \\\\\\\\ '' \`\` \m \nkjhkjh \"\" "

// console.log(myStr)

// function Course (name, price) {
//     this.name = name
//     this.price = price
//     this.getName = function(){
//         return this.name
//     }
// }
// const myCourse = new Course ("js",1000)
// console.log(myCourse.name)

// class Course1 {
//     constructor(name,price){
//         this.name = name
//         this.price = price
//     }
//     getName(){
//         return this.name
//     }
// }
// const myCourse1 = new Course1("python", 2000)
// console.log(myCourse1.getName())


// const userName = "quanghuyav"
// const pass = "123456"

// const myInfo = {
//     userName,
//     pass,
//     getUserName() {
//         return this.userName
//     }
// }

// console.log(myInfo.getUserName())

// const key1 = "name"
// const key2 = "price"
// const myCourse = {
//     [key1]: "js",
//     ["key2-abc"]: 1000
// } 
// console.log(myCourse)

// function sum (a=0,b=0){
//     return a+b
// }

// console.log(sum())

// const arr = ["a","b","c","d","e"]

// let [,x,,,...rest] = ["a","b","c","d","e"]

// console.log(x,rest)

// const myCourse = {
//     name:"js",
//     address: "hn",
//     time: "10-11h",
//     price: 1000,
//     image: "ảnh",
//     childrenCoures: {
//         name:"react",
//         address:"hcm",
//         time:"11-12h"
//     }
// }

// let {image="image default",name:x,childrenCoures:{name:z},price:y,...rest} = myCourse
// console.log(z,x,y,rest,image)

// var [...rest] = [1,2,3,4]

// function sum(phepTinh,...param){
//     let kq = 0
//     if (phepTinh=="cộng"){
//         for(var i = 0 ; i <  param.length ; i ++){
//             kq = kq+param[i]
//         }
//     }
//     if (phepTinh == "nhan"){
//         kq = 1
//         for(var i = 0 ; i <  param.length ; i ++){
//             kq = kq*param[i]
//         }
//     }
    
//     return kq
// }

// console.log(sum("cộng",3,4,5,3,6,2,4,3,2,6,5,7,3,2))

// function sum([a,b]){

// }
// sum([3,4])

// const myArr = [1,2,3]
// const myArr1 = [4,5,6]
// myArr2 = [...myArr,...myArr1]
// console.log(myArr2)

// const myObj = {name:"huy"}
// const myObj1 = {address:"HN", height: 175}
// const myObj2 = {...myObj, age:18, ...myObj1}
// console.log(myObj2)

// function sum(a,b){
//     return a+b
// }
// const arr = [3,4]
// sum(...arr)