
// Hàm
// Gọi Hàm

const arr = [1,2,3,4,5,6,7]
console.log("Ban Đầu", arr)
const ketQua = arr.map(function (number){
    number = number+1
    number = number**2
    return number
})


console.log("Sau đó", arr)

console.log("trả về", ketQua)

