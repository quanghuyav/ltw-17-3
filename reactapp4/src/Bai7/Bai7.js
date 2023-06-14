import { useEffect, useReducer, useRef, useState } from 'react';
import Content from '../component/Content';

// function Header() {
//     return <h1>Header</h1>;
// }
// function Footer() {
//     return <h1>Footer</h1>;
// }

// function Bai7() {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then((res) => res.json())
//             .then((data) => setPosts(data));
//     }, []);

//     const inputTitle = useRef({});
//     const inputContent = useRef({});

//     const [title, setTitle] = useState();
//     const [content, setContent] = useState();
//     console.log('render');
//     return (
//         <>
//             <Header></Header>
//             <input
//                 value={title}
//                 onChange={(e) => {
//                     setTitle(e.target.value);
//                 }}
//                 ref={inputTitle}
//                 placeholder="Title"
//             ></input>
//             <input
//                 value={content}
//                 onChange={(e) => setContent(e.target.value)}
//                 ref={inputContent}
//                 placeholder="Content"
//             ></input>
//             <button
//                 onClick={() => {
//                     setPosts([
//                         {
//                             id: Math.random(),
//                             // title: inputTitle.current.value,
//                             // body: inputContent.current.value,
//                             title: title,
//                             body: content,
//                         },
//                         ...posts,
//                     ]);
//                     setTitle('');
//                     setContent('');
//                 }}
//             >
//                 post bài
//             </button>

//             <div className="container">
//                 {posts.map((post) => (
//                     <div key={post.id} className="post">
//                         <h3 className="title">{post.title}</h3>
//                         <p className="content">{post.body}</p>
//                         <hr></hr>
//                     </div>
//                 ))}
//             </div>
//             <Footer></Footer>
//         </>
//     );
// }

// export default Bai7;

// function Bai7() {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then((res) => res.json())
//             .then((data) => setPosts(data));
//     }, []);
//     return (
//         <>
//             {' '}
//             Bài 7<Content posts={posts}></Content>
//         </>
//     );
// }

// export default Bai7;

const initialState = { count: 0, name: 'huy' };

function reducer(state, action) {
    // function phải trả về state có cùng format với state khởi tạo
    switch (action.type) {
        case 'tang':
            return { count: state.count + 1, name: state.name };
        case 'giam':
            return { count: state.count - 1, name: state.name };
        case 'doiTen':
            return { count: state.count, name: action.payload };
        case 'doiTenChatChe':
            return { count: 0, name: action.payload };
    }
}

function Bai7() {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state.count);
    return (
        <>
            <h1>
                {state.name}:{state.count}
            </h1>
            <input
                onChange={(e) =>
                    dispatch({ type: 'doiTen', payload: e.target.value })
                }
            ></input>
            <input
                onChange={(e) =>
                    dispatch({ type: 'doiTenChatChe', payload: e.target.value })
                }
            ></input>
            <button onClick={() => dispatch({ type: 'tang' })}> Tăng </button>
            <button onClick={() => dispatch({ type: 'giam' })}> Giảm </button>
        </>
    );
}

export default Bai7;
