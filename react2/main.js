const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)

const content = "heading"
const className1 = "heading1"
const className2 = "heading2"

// const myArr = [React.createElement("h1",{},"js"),<h1>python</h1>,<h1>C</h1>]
const myArr = ["js","python","C"]

// const kq = myArr.map((item) => React.createElement("h1",{},item))

// // [React.createElement("h1",{},"js"),React.createElement("h1",{},"python"),React.createElement("h1",{},"C")]


// const app = <div className = "container" title={"hello"}>
//     <h1 className = {`heading ${className1} ${className2}`} style = {{color:"red", backgroundColor: "blue"}} >hello {content}</h1>
//     <input></input>
// </div>

// const app = <div>
//     {
//         myArr.map((item,index) => {
//             item = "khoas hoc" + item
//             return <div key = {index}>
//                 <h1>{item}</h1>
//             </div>
//         }
      
//         )
//     }
// </div>

// const app1 = React.createElement(React.Fragment,{},myArr.map((item) =>
//     React.createElement("h1",{key:item},item)
// ))

// const app = <>
//     <div>Header</div>
//     <div>Conternt</div>
// </>



root.render(app1)

