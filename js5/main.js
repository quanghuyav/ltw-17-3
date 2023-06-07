// Bài 1
// function sumArr(arr){
//     var sum = 0;
//     for (var i =0; i <= arr.length - 1 ; i++){
//         sum = sum + arr[i]
//     }
//     return sum
// }
// console.log(sumArr([1,2,3,4,5,6,7,8,9]))

// Bài 2
// function check(number){
//     for (var i = 2; i<=Math.sqrt(number);i++){
//         if (number%i==0) return false
//     }
//     return true
// }
// console.log(check(13))

// Bài 3:
// const findMax = function(arr) {
//     var max = -Infinity
//     for (let i = 0 ; i <= arr.length - 1 ; i++){
//         if(max < arr[i]) max = arr[i]
//     } 
//     return max
// } 
// console.log(findMax([-99999999991,-99999999999993,-99999999999994,-999999999992]))

// Bài 4: ,,,,,
// 2134125234643, 124125136135, 24124124124, 2141253614, 1241352631, 1124135123, 214124153
// const findMax = function(arr) {
//     // HÀM TÌM SỐ LỚN NHẤT
//     var max = -Infinity
//     var index
//     for (let i = 0 ; i <= arr.length - 1 ; i++){
//         if(max < arr[i]){
//             max = arr[i]
//             index = i
//         }
//     } 
//     return [max,index]
// } 
// const sort = (arr) => {
//     var ketQua = []
//     while (arr.length >0) {
//         ketQua.push(findMax(arr)[0])
//         arr.splice(findMax(arr)[1],1)
//     }
//     return ketQua
// }
// console.log(sort([1,4,2,5,7,5,3,5,7,3,3]))

// Bài 5:
// const daoNguoc = function(myStr){
//     var ketQua =""
//     for (var i = myStr.length-1 ; i >= 0 ; i--){
//         ketQua = ketQua + myStr[i]
//     }
//     return ketQua
// }

// console.log(daoNguoc("aksfjlkajfwlkwf"))

// Bài 6: 
// const daoNguoc = function(myStr){
//     var ketQua =""
//     for (var i = myStr.length-1 ; i >= 0 ; i--){
//         ketQua = ketQua + myStr[i]
//     }
//     return ketQua
// }
// const check = function(myStr ){
//     return myStr == daoNguoc(myStr)
// }
// console.log(check("adsaf"))

// Bài 7
// max1 = 1423235325
// max2 = 124124124
// function secondMax(arr){
//     var max1 = -Infinity
//     var max2 = -Infinity
//     for (var i = 0 ; i <= arr.length-1 ; i++){
//         if(arr[i]>max1){
//             max2 = max1
//             max1 = arr[i]
//         } else if (arr[i]>max2){
//             max2 = arr[i]
//         }
//     }
//     return max2
// }
// console.log(secondMax([1,3,4,2,4,35,3,46,224,24,46,342,34]))

// Bài 8: Sắp xếp cái mảng từ lớn đến bé [9,8,7,6,5,4,3,2,1,0]

//  const findMax = function(arr) {
//     // HÀM TÌM SỐ LỚN NHẤT
//     var max = -Infinity
//     var index
//     for (let i = 0 ; i <= arr.length - 1 ; i++){
//         if(max < arr[i]){
//             max = arr[i]
//             index = i
//         }
//     } 
//     return [max,index]
// } 
// const sort = (arr) => {
//     var ketQua = []
//     while (arr.length >0) {
//         ketQua.push(findMax(arr)[0])
//         arr.splice(findMax(arr)[1],1)
//     }
//     return ketQua
// }
// const findMaxN = (arr,n) => {
//     return sort(arr)[n-1] 
// }
// console.log(findMaxN([1,4,2,6,3,6,3,4,35,64,23],6))

// 35 24 23 22 21 20 19