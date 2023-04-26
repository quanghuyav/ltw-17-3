// Điều kiện (if - else)

// Biểu thức >> số , chuỗi , bool , null, underfined, obj , func

// var month = 2

// if (month==1) {
//     console.log("Đây là tháng 1, có 31 ngày")
// }
// if (month==2) {
//     console.log("Đây là tháng 2, có 28 ngày")
// }
// if (month==3) {
//     console.log("Đây là tháng 3, có 31 ngày")
// }

// switch (month) {
//     case 1: 
//         console.log("Đây là tháng 1, có 31 ngày")
//         break
//     case 2:
//         console.log("Đây là tháng 2, có 28 ngày")
//         break
//     case 3:
//         console.log("Đây là tháng 3, có 31 ngày")
//         break
//     default:
//         console.log(`Tháng ${month} là một tháng không tồn tại`)
// }

// var score = -10

// score = score >=0 ? score*2 : 0
// console.log(score)

// if (score >= 0) {
//     score = score*2
// }
// else {
//     score = 0
// }

// console.log("hôm nay là thứ 2")
// console.log("hôm nay là thứ 3")
// console.log("hôm nay là thứ 4")
// console.log("hôm nay là thứ 5")
// console.log("hôm nay là thứ 6")
// console.log("hôm nay là thứ 7")


// for (var i = 2; i<0 ; i++) {
//     console.log("hôm này là thứ",i)
// }

/*  i = 2
    if (i>0) {
        console.log("hôm này là thứ",i)
    }
    else (stop)
    
    i = i +2
*/

/*  i = 3
    if (i<=7) {
        console.log("hôm này là thứ",i)
    }
    else (stop)
    i = i + 2
*/

/*  i = -2
    if (i<=7) {
        console.log("hôm này là thứ",i)
    }
    else (stop)
    i = i + 2
*/
/*  i = -4
    if (i<=7) {
        console.log("hôm này là thứ",i)
    }
    else (stop)
    i++
*/
/*  i = 6
    if (i<=7) {
        console.log("hôm này là thứ",i)
    }
    else (stop)
    i++
*/
/*  i = 7
    if (i<=7) {
        console.log("hôm này là thứ",i)
    }
    else (stop)
    i++
*/
/*  i = 8
    if (i<=7) {
        console.log("hôm này là thứ",i)
    }
    else (stop)
    i++
*/
// var isRun = true
// var hour = 0
// while (isRun) {
// }
/* i<10
    {}
i<10 {}
i<10 {}

*/ 

// var i = 0
// while(i<-1) {
//     console.log(i)
//     i++
// }
// var i = 0
// do {
//     console.log(i)
//     i++
// }
// while (i<-1)

// HÀM: khi được gọi có thể coi là một biểu thức được kết hợp từ nhiều câu lệnh khác 
// Tạo hàm (Hàm)
// Gọi hàm: sử dụng hàm

// Tạo Hàm: Muốn người dùng truyền vào những gì >> Code xử lí >> Giá trị muốn trả về
// Sử dụng hàm: tham số mình truyền vào >> Xử lí >> giá trị hàm trả về (underfined)

// function inRaManHinh(){
//     console.log("hello")
// }

// inRaManHinh = function(){ }



// setTimeout(inRaManHinh,4000)

// setInterval(inRaManHinh,4000)

// Sau 4s gọi inRaManHinh()

// Hàm :
/*
function (){
    console.log("hello")
}
*/

// Tạo Hàm
/*
function sum(){
    return 1+2
}
*/


// Gọi Hàm
/*
    sum()
*/


const sum = function (a,b) { //Anonymous function
    return a + b
}

const sum1 = a => a+1

setInterval(sum1,4000) // sau 4000 js tự gọi sum1()
// Bỏ từ khoá function, thay bằng dấu mũi tên ở sau tham số truyền vào
// Nếu chỉ có 1 tham số truyền vào, có thể bỏ dấu () 
// Nếu chỉ có câu lệnh return thì có thể bỏ dấu {} và chữ return
// Chú ý, nếu bỏ return thì phải bỏ các {}, nếu quên bỏ {} mà vẫn bỏ return thì sẽ coi như return về underfined