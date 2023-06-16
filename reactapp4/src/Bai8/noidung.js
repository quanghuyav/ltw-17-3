// Sử dụng css:
// C1: css inline thông qua style = {{}}
// C2: Tạo 1 file css trong thư mục src, sau đó import vào component
import 'style.css';
// Dù import vào trong component nào thì css cũng sẽ áp dụng cho tất cả các component
// Có thể import nhiều file css
// Trong quá trình development, mỗi file css được import sẽ được viết thành các đoạn css internal ở trong thẻ head
// Khi built ra sản phẩm thì css sẽ được tổng hợp vào 1 file css chung
// Vì vậy bất kể được import ở đâu thì cũng sẽ vào 1 file css, tuy nhiên chúng ta vẫn nên tạo file css riêng theo từng component và import vào component đó, mục đích để khi xoá component đó đi cũng sẽ xoá luôn phần css của component đó, tránh dư thừa

// Khi sử dụng css chia theo từng component, rất dễ dẫn đến trường hợp đặt tên trùng class
// Và css đặt ở component nào cũng có giá trị như nhau, dẫn đến việc bị ghi đè css không kiểm soát được
// >> Ra đời css module
//  File css có đuôi là .module.css
//  Import bình thường với đuôi là .module.css
// Khi tạo đuôi .module.css,  file css sẽ đổi tên các class và id có trong css đó theo quy tắc của nó
// ví dụ file css ban đầu:
/*
    .header{
        color: red;
    }
    h1 .content {
        color: blue;
    }

*/
// Sẽ được đổi thành
/*
    .header-abcas{
        color: red;
    }
    h1 .content-pqqk {
        color: blue;
    }

*/
// Các tên thẻ sẽ không bị đổi
// Vì vậy, ví dụ 1 element để class là <h1 className = "header"> sẽ không còn nhận đc css của class header nữa
// Để nhận được css của css module thì phải đổi tên class giống với class trong css module
// Ta có thể lấy tên class mới thông qua obj khi import css module
// ví dụ
import styles from 'style.module.css';
// lúc này styles là 1 obj đại diện cho style.module.css
// Trong obj này có những cặp key-value đại diện cho class trc khi bị đổi tên và sau khi bị đổi tên
// key (tên class trc khi bị đổi) : value (tên class sau khi bị đổi)
// Vì vậy khi ta tạo element cần thêm class như sau <h1 className = {styles.header}>

// Chú ý, khi sử dụng css module, đặt tên class trong css nên đặt theo kiểu camel case
// Để tạo 1 phần tử có nhiều class, ta cần kết hợp với mảng
// <h1 className = {[style.header,style.content].join(" ")}> // Trong join truyền vào dấu cách để tạo ra 1 string gồm 2 class cách nhau bởi dấu cách

// Cài thư viện npm i clsx
// import clsx from 'clsx'
// Sử dụng:
<h1
    className={clsx(
        style.header,
        'header-menu',
        { [style.dark]: true },
        { 'mgr-8': true },
    )}
></h1>;
// Trong clsx có thể truyền vào 1 object  để tạo 1 class có tình true/false
// Ngĩa là nếu true thì thêm class đó vào element, false thì ko
// có thể tạo 1 biến để lưu các giá trị của class
const classes = clsx(
    style.header,
    'header-menu',
    { [style.dark]: true },
    { 'mgr-8': true },
);

//  <h1 className = {classes}></h1>

// Cài đặt thư viện sass
// Đổi tên file thành .scss
