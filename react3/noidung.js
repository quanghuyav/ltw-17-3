
// Tư duy chia component trong react: chia một project thành các thành phần nhỏ, các thành phần nhỏ có thể lại được chia thành các thành phần nhỏ hơn, sau đó gộp lại với nhau để thành 1 project hoàn chỉnh, giúp cấu trúc code rõ ràng, tái sử dụng
// Có 2 kiểu: class component (cũ) và function component (yêu cầu khi tạo component phải viết hoa chữ cái đầu, nếu ko sẽ báo lỗi)

function Header(){
    return (<div>Header</div>)
}
const app = (<Header></Header>)  // có thể viết ngắn gọn là <Header/>


// Props là gì: là một object chứa những thuộc tính để mô tả cho element mình tạo ra
/*
    - Trong react element
        + Giống với atribute của thẻ html
        + class, for > className, htmlFor
        + Phải tuân theo quy ước có sẵn như html
    - Trong react component
        + props là đối số của component (function)
        + Tự đặt tên cho props theo kiểu camelCase
        + Có thể truyền cả callback (nếu khi khởi tạo có callback thì bắt buộc phải truyền callback vào)
        + Có thể dùng destructuring để bỏ phần props. đi (có thể đặt giá trị default theo cú pháp của destructuring)
 */ 
// ví dụ
function PostItem(props){  // tất cả những props được truyền vào sẽ thông qua obj props, có thể đặt tên khác
    props.callback(100)
    return (
        <div>
            Khoá học {props.name}
            Course : {props.course}

        </div>
    )
}
const app1 = (<PostItem name = "javascript" course = {1000} callback = {(value)=>{console.log(value)}}></PostItem>)

// event trong JSX, chú ý sử dụng camel case để gọi sự kiện vd: onClick

function App(){
    return <button onClick ={(e)=>console.log(e.target)}>click me</button>
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App></App>)

// Kết hợp với Object
const MyComponent = {
    Header(){
        return <h1>Header</h1>
    },
    MyContent (){
        return <div>My content</div>
    }
}
const reactElement = <MyComponent.Header></MyComponent.Header>

// boolean, null, underfine sẽ ko được render ra
// Lưu ý khi truyền props qua dấu {}, thì mã js trong dấu {} phải truyền vào là 1 biểu thức, nghĩa là mã js ấy phải trả về giá trị. Những câu lệnh điều kiện hoặc vòng lặp sẽ không truyền được, vì nó không trả về giá trị

// Truyền props giống với atribute của html

function MyInput({className, title, placeholder}){
    return <div className = {className}>
        <input title={title} placeholder={placeholder}></input>
    </div>
}
const reactElement1 = <MyInput className="my-input" title="hello" placeholder="nhập vào"></MyInput>
// Tuy nhiên 1 thẻ html có nhiều atribute mặc định, có thể sử dụng rest/spread

function MyInput1({className, ...inputAtributes}){
    return <div>
        <input {...inputAtributes}></input>
    </div>
}

// children trong component, sẽ được truyền vào qua props children
function MyButton({className, children}){
    return <button>
        {children}
    </button>
}
const reactElement2 = <MyButton>Click me!</MyButton> // có thể truyền vào 1 {biểu thức}