// const element = document.getElementById("item1")

// element.style.backgroundColor = "red"
// element.style.color = "blue"

// Object.assign(element.style, {
//     backgroundColor: "red",
//     color: "blue"
// })


// const element1 = document.getElementsByClassName("item1")

// for ( var i = 0 ; i <= element1.length; i++){
//     element1[i].style.color = "blue"
// }

// Callback là 1 hàm mà mình truyền vào hàm khác dưới dạng tham số, và cái callback phải được gọi lại trong cái hàm khác đó

// setTimeout(()=>{},3000)

// function congViec(time,call){
//     for (var i = 0 ; i <= time; i++){
//         console.log("qua", i,"s")
//     }
//     call()
// }
// congViec(20, function(){
//     console.log("thực hiện cộng việc")
// })

// [3,4,6].map((number) => console.log(number))


// function phepTinh (a,b, call) {
//     var x = call(a,b)
//     console.log(x)
// }

// phepTinh(3,4,function(so1,so2){
//     return so1*so2
// })

// FAKE CALLBACK EVENT...
// function suKien(element, event, call){
//     const x = {event, element}
//     if (event == "click" && element=="h1"){
//         call(x)
//     }
// }
// suKien("h1","click",function(event){
//     console.log("đang click")
//     console.log(event)
// })

// const elementMain = document.getElementById("main")
// elementMain.onclick = function(){
//     console.log("đang clik")
// }
// elementMain.onclick = function(){ // ghi đè lên cái onclick bên trên
//     console.log("đang clik1")
// }

// elementMain.onwheel = function(event){
//     console.log(event)
// }

// const elementA = document.getElementById("link")

// elementA.onclick = (e) => { // Huỷ xử lí event mặc định
//     e.preventDefault()
//     console.log("bạn đang click thẻ a")
// }

// const container = document.getElementById("container")
// container.onclick = function(){
//     console.log("click container")
// }

// const container1 = document.getElementById("container1")
// container1.onclick = function(e){
//     console.log("click container 1")
// }

// const container2 = document.getElementById("container2")
// container2.onclick = function(e){
//     e.stopPropagation()
//     console.log("click container 2")
//     console.log("click vào phần màu xanh")
//     console.log("côn việc 3")
// }

// container2.onclick  = () => {
// }

// const element = document.getElementById('container')


// const cv1 = function(){
//     console.log("công việc 1")
// }

// element.addEventListener('click',cv1)
// element.addEventListener('click',cv1)
// element.addEventListener('click',function(){
//     console.log("công việc 3")
// })
// element.addEventListener('click',function(){
//     console.log("công việc 3")
// })
// element.removeEventListener('click',cv1)
