// Cái bàn có bề mặt phẳng, được làm bằng gỗ, có bốn chân, dùng để để đồ vật lên đó
// Chó có 4 chân, có 2 mắt , sủa gâu gâu

// Bề mặt : Phẳng
// Chất liệu: Gỗ
// Số chân: 4
// Tác dụng: để đồ vật

// Số chân: 4
// Số mắt: 2
// Tiếng kêu: Gâu gâu

// const student1 = {
//     name: "huy",
//     age: 24,
//     address: "Hanoi"
// }
// const student2 = {
//     name: "Lâm",
//     age: 18,
//     address: "TB"
// }

// const students = [
//     {
//         name: "huy",
//         age: 24,
//         address: "Hanoi"
//     },
//     {
//         name: "Lâm",
//         age: 18,
//         address: "TB"
//     }
// ]

// console.log(students[0], typeof students[0])
// console.log(student1.name, student1.age,student1.address)
// student1.score = 10
// student1.name = "quân"
// delete student1.address // Xoá thuộc tính
// console.log(student1)



// const student1 = {
//         "full-name": "Nguyễn Quang Huy",
//         "age": 24,
//         address: "Hà nội"
//     }
    
// const keyStudent = ["full-name","age","address"]
// const student = {
//     [keyStudent[0]]: "Nguyễn Quang Huy",
//     [keyStudent[1]]: 24,
//     [keyStudent[2]]: "Hà nội"
// }

// var keyName = "full-name"
// var keyAge = "age"

// const student = {
//     keyName: "Nguyễn Quang Huy",
//     [keyAge]: 24,
// }

// console.log(student)
// console.log(student.address)
// console.log(student["address"])
// console.log(student["full-name"])

// const dog1 = {
//     name: "mic",
//     age: 2,
//     tiengKeu: "Gâu gâu",

//     sua: function (){
//         return this.tiengKeu
//     }
// }

// console.log(dog.sua()) // Thuộc tính (khôgn phải hàm) - Phương thức (Hàm)

// Object - Class
// Khi nghĩ đến object học sinh A, nghĩ đến cụ thể một vật gì đó
// Class đại diện cho cái định nghĩa của object, khi nghĩ đến class học sinh nghĩ đến những cái key tạo ra những thằng học sinh

// function Student(name, age,address){
//     this.name = name
//     this.age = age
//     this.address = address
//     this.school = "THPT"

//     this.getName = () =>{
//         console.log(this.name)
//     }
// }
// console.log(typeof Student)

// // const student1 = new Student("Huy",24,"Hanoi")
// // const student2 = new Student("Lâm",18,"TB")
// // console.log(student1)
// // student1.score = 10
// // console.log(student1)

// Student.prototype.score = 10
// Student.prototype.getAge = () =>{
//     console.log(this.age)
// }
// const student1= new Student("Huy",24,"TB")
// student1.getAge()

console.log(Math)
console.log(Math.PI)
console.log(Math.abs(-10))
console.log(Math.ceil(2.1))
console.log(Math.floor(2.1))
console.log(Math.round(2.5))
console.log(Math.pow(3,4))
console.log(Math.max(3,4,5))
console.log(Math.min(3,4,5))
console.log(Math.random())

var x = Math.floor(Math.random()*8)+3  
// Math.floor(Math.random()*(số cuối - số đầu + 1)) + số đầu






