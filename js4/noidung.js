// MẢNG 
var languages = ["java", "js", "python"]
console.log(languages[1]) // truy xuất phần tử trong mảng, chú ý mảng chạy từ phần tử 0
console.log(languages.length) // độ dài mảng
// Làm việc với mảng
console.log (languages.toString()) // chuyển sang chuỗi , mảng không đổi
console.log (languages.join("-")) // chuyển sang chuỗi, có thể thêm dấu ngăn cách 
// .pop()  >> xoá phần tử cuối mảng, trả về phần tử đã xoá
// .push(phần tử muốn thêm vào)     >> thêm 1 hoặc nhiều phần tử vào cuối mảng, trả về độ dài mới
// .shift()  >> xoá phần tử đầu mảng, trả về phần tử đã xoá
// .unshift() >> Tương tự push nhưng thêm vào đầu
// .splice (vị trí bắt đầu, số phần tử muốn xoá từ vị trí đầu, phần tử muốn chèn vào có thể chèn nhiều phần tử)
var lang2 = ["ruby"]
languages.concat(lang2) // nối chuỗi
// .slice(index bắt đầu, index kết thúc) >> cắt mảng, không thay đổi mảng ban đầu, trả về giá trị cắt


//  LÀM VIỆC VỚI CHUỖI
var myString = "lập trình javascript"
// Độ dài chuỗi: .length
// indexOf("chuỗi cần tìm", vị trí bắt đầu tìm mặc định là 0) >> trả về index của chuỗi tìm đc, ko có thì trả về -1    
// lastIndexOf("chuỗi", vị trí)  >> tương tự nhưng tìm từ dưới
// search("chuỗi")  >> tương tự indexof nhưng ko truyền đc tham số thứ 2
// slice(index bắt đầu, index kết thúc)   >> cắt chuỗi, tương tự mảng
console.log(myString.replace("javascript", "js"))  // thay thế javascript >> js
console.log(myString)
// thay thế tất cả >> replace(/javascript/g, "js")
// toUpperCase() >> chuyển thành chữ hoa
// toLowerCase() >> chuyển thành chữ thường
// trim() >> xoá khoảng trắng đầu cuối
console.log(myString.split(' ')) // chuyển string thành array dựa vào dấu ngăn cách trong split
// lấy index >> myString.charAt(index) hoặc myString[index]


// CÁC HÀM NÂNG CAO KHI LÀM VIỆC VỚI MẢNG

const arr1 = [1,2,3]
const arr2 = [4,5,6]

// 1. arr1.concat(arr2) >> trả về [1,2,3,4,5,6], không làm thay đổi mảng ban đầu



// 2. arr1.filter(callback(element,index){}) 
// trả về 1 mảng mới
// không làm thay đổi mảng ban đầu
// lặp qua từng phần tử của mảng, với mỗi phần tử sẽ thực hiện callback, nếu callback trả về true thì sẽ thêm phần tử đó vào mảng trả về, không thì thôi
// trả về 1 mảng rỗng nếu không có phần tử nào thoả mãn

// 3. arr1.find(callback(element,index){}) 
// trả về 1 giá trị đầu tiên mà callback trả về true
// không làm thay đổi mảng ban đầu
// lặp qua từng phần tử của mảng, với mỗi phần tử sẽ thực hiện callback, nếu callback trả về true thì sẽ trả về phần tử đó rồi dừng lặp luôn
// nếu không có phần tử nào thoả mãn thì trả về underfined

// 4. arr1.map(callback(element,index){})
// trả về 1 mảng mới
// không làm thay đổi mảng ban đầu
// lặp qua từng phần tử, mỗi phần tử sẽ thực hiện callback, giá trị return sau khi thực hiện callback sẽ là giá trị mới của phần tử đó trong mảng mới


// CALLBACK
// Là 1 Hàm
// Dùng để thêm dưới dạng tham số cho hàm khác 
// Được gọi trong cái hàm khác đó