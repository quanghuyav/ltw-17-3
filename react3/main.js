const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)

/* Header =<div className="Header">
        <div>React buổi3</div>
    </div>

 Main = <div className = "main">
        <div className ="main1">
            <div>Nội dung 1</div>
        </div>
        <div className ="main2">
            <div>Nội dung 1</div>
        </div>
        <div className ="main3">
            <div>Nội dung 1</div>
        </div>
    </div>

    Footer= <div className="Footer">Footer</div>

*/

// const app = <div className = "container">
//     <Header></Header>
//     <Main></Main>
//     <Main></Main>
//     <Footer></Footer>
// </div>
// root.render(app)

// function printInfo(info) {
//     console.log(`${info.name} năm nay ${info.age} tuổi`)
//     console.log(`${info.name} năm nay ${info.age} tuổi`)
//     console.log(`${info.name} năm nay ${info.age} tuổi`)
//     console.log(`${info.name} năm nay ${info.age} tuổi`)
//     console.log(`${info.name} năm nay ${info.age} tuổi`)
//     return 1
// }

// const myInfo = {name:"huy",age:24}
// const myInfo1 = {name:"a",age:1}
// const myInfo2 = {name:"b",age:2}
// const myInfo3 = {name:"c",age:3}

// printInfo(myInfo)
// printInfo(myInfo1)


function Header({text,children, ...rest}){
    return <div  {...rest}>
        <div className="header-item">{children}</div>
    </div>
}
function Content(){
    return <div className="content">
    <div className="content-item">content</div>
    </div>
}

// {callback,number,text} = {callback: ()=>{},number: 14, text : "Abc"}
function FooterItem({callback=()=>{console.log("default")},number,text,onClick,user}){
    callback()
    return <div onClick={onClick}  className="footer-item">{user && text}</div>
}



function Footer(){
    return <div className="footer">
        <FooterItem user="123" callback = {()=>{console.log("hello")}} text = "abc" number={14} className="123"></FooterItem> 
        <FooterItem   number={1434} a="1" b="2" className="122132133"></FooterItem>
        <FooterItem onClick = {()=>{console.log("đây là footer item")}} text = "a124fawsbc" number={1234} className="123"></FooterItem>
    </div>
}
const app = <div>
    <Header className="abc" title="hêlo" style = {{}}><h1>Hello</h1></Header>
    <Content></Content>
    <Footer></Footer>
</div>

root.render(app)

//  A || B || C