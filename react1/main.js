// const bodyElement = document.querySelector("body")
// console.log(bodyElement)
// bodyElement.innerHTML = `<h1 class="content">Hello</h1>`

// const h1Element = document.createElement("h1")
// h1Element.innerText = "React Buổi 1"
// h1Element.className = "heading"
// h1Element.title = "Heading"
// bodyElement.appendChild(h1Element)


// console.log([h1Element])

// const contentElement = bodyElement.querySelector(".content")
// console.log([contentElement])

// // Xử lí giao diện
// const contentElement = document.querySelector(".content1")
// setInterval(()=>contentElement.classList.toggle("red"),1000)


// const root = document.getElementById("root")

// const divElement = document.createElement("div")
// const divElement2 = document.createElement("div")
// const btn1 = document.createElement("button")
// btn1.innerText = "trang1"
// root.appendChild(btn1)
// root.appendChild(divElement)
// root.appendChild(divElement2)



// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(res => res.json())
// .then(data => {
//     const h1Element = document.createElement("h1")
//     h1Element.innerText = data.title
//     divElement.appendChild(h1Element)

// })
// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(res => res.json())
// .then(data => {
//     const h1Element2 = document.createElement("h1")
//     h1Element2.innerText = data.title
//     divElement2.appendChild(h1Element2)

// })

// console.log(React)



const app = React.createElement("div",{
    className: "reacth1class",
    title: "reacth1title"
},React.createElement("h1",{},"hello"),React.createElement("h2",{},"hi"))



// document.body.appendChild(h1React) // sai

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(app)




