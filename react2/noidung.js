// TÌM HIỂU JSX
const h1React = <h1>Hello</h1>  // <h1>Hello</h1> chính là jsx
// tương tự như là
const h1Reactt = React.createElement('h1',null,"hello")

// Jsx không phải html, nó chỉ có cú pháp gần giống như html, giúp việc viết code react có phần giống với làm giao diện bằng html
// Để truyền mã javascript vào trong jsx chúng ta sử dụng cặp {}, chú ý không dùng dấu $ như khi truyền mã js vào string
// vd:

var name = "huy"
const nameReact = <h1>Hello{name}</h1>

// Nếu muốn truyền obj, thì phải để là 2 cặp như sau {{}}
const elementReact = <div style = {{color: "red", backgroundColor: "blue" }}>abc</div>

// Babel: giúp mã js mới có thể chạy trên những trình duyệt cũ, giúp convert mã jsx sang js
// Cài đặt babel bằng link cdn
// Cần thêm đoạn type = "text/babel" trong thẻ script

// JSX render arr
// Nói lại về việc React.createElement() từ tham số thứ 3 có thể truyền vào 1 mảng
const arrReact = React.createElement("h1",null,["Javsscript","python"])
// khi tạo trc 1 mảng và muốn truyền vào children khi createElement, ta sử dụng phương thức map() trong mảng. map() trả về 1 mảng
// chú ý props key
const myArr = ["js","python","C"]
const arrsReact = React.createElement("div",null,
    myArr.map(element => React.createElement(
        "div",
        null,
        element
    ))
);
// Chuyển qua sử dụng jsx

// Không render được 2 element cùng 1 lúc với jsx, cần cho các element đó vào trong 1 thẻ <React.Fragment> 


