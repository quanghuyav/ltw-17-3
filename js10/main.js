// function dongBo(a){
//     console.log("Thực hiện xong",a)
// }

// function batDongBo(stt,data,callback=()=>{}){
//     setTimeout(()=>{
//         data= data+Math.random()

//         console.log("Thực hiện xong",stt,"data trả về:", data)
//         callback(data)
//     },0)
// }

// async function log (){
//     await batDongBo(1)
//     await batDongBo(2)
//     await batDongBo(3)
//     await dongBo(4)

// }
// log()

// new Promise ((resolve,reject)=>{
//     // resolve("Thành công")
//     reject("thất bại")
// }).then(res=> console.log(res)).catch(res=> console.log(res))




// // 0 1 2


// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)


// function myLog(){
//     console.log(0)
//     console.log(1)
// }

// myLog()
// console.log(2)

// // Trình xử lý
// // Callstack: 
// // // Chạy : 0 1 2

// console.log(1)
// console.log(2)
// setTimeout(()=>{
//     console.log(3)
// }, 0)
// console.log(4)
// console.log(5)
// console.log(6)

// Cần thời gian thực hiện: setTimeout, setInterval, đọc file, gọi api, ajax
// Bất đồng bộ: Sau khi cái gì đó, thì thực hiện function truyền vào nó

// 1 2 4 5 6 3
// callstack:  
// web-api: 
// callback queue: A: () =>  console.log(3)
// event loop:

function dongBo(a){
    console.log("Thực hiện xong",a)
}

function batDongBo(a,callback=function(){}){
    setTimeout(function(){
        console.log("Thực hiện xong",a)
        callback()
    },Math.random()*2000)
}

dongBo(1)
dongBo(2)
batDongBo(3, function(){
    batDongBo(4, function(){
        batDongBo(5 , function(){
            batDongBo(6, function (){
                batDongBo(7)
            })
        })
    })
})



//xử lý bất đồng bộ: biến code bất đồng bộ >> trông như đồng bộ
