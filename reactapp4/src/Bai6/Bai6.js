import { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useEffect } from 'react';
import Header from '../component/Header';

// function Bai6() {
//     const [number, setNumber] = useState(0);
//     const count = useRef(0); // {current: 0}
//     count.current = count.current + 1;

//     const btn1 = useRef();
//     return (
//         <>
//             <h1>Số lần render lại: {count.current}</h1>
//             <h1>{number}</h1>
//             <button
//                 ref={btn1}
//                 onClick={() => {
//                     setNumber(number + 1);
//                 }}
//             >
//                 Tăng
//             </button>
//             <button
//                 onClick={() => {
//                     setNumber(number - 1);
//                 }}
//             >
//                 Giảm
//             </button>
//         </>
//     );
// }

// export default Bai6;

// function Bai6() {
//     const [text, setText] = useState(
//         '6 ngữ điệu khác nhau. Cải thiện bài viết đúng chủ đề và mục đích. Hỗ trợ nâng cấp miễn phí. Công cụ check đạo văn nhanh chóng và chính xác. Giúp bạn check trùng lặp chính xác đến 99% Tạo mô tả sản phẩm tự độg. Tạo bình luận tự động.',
//     );
//     console.log('render');
//     useLayoutEffect(() => {
//         setText('học lập trình web');
//     }, []);
//     return (
//         <>
//             <h1>{text}</h1>
//         </>
//     );
// }

// export default Bai6;

// function Bai6() {
//     const x = 0;
//     const [count, setCount] = useState(0);
//     const [count1, setCount1] = useState(0);
//     let handleClick = useCallback(() => {}, []);

//     return (
//         <>
//             <Header onClick={handleClick}></Header>
//             <h2>
//                 {count} {handleClick}
//             </h2>
//             <button onClick={() => setCount(count + 1)}>click me</button>
//         </>
//     );
// }

// export default Bai6;

function Bai6() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [count, setCount] = useState(0);
    let sum = useMemo(() => {
        let sum;
        for (let x = 0; x <= 100; x++) {
            console.log('thực hiện vòng lặp');
            sum = num1 + num2 + x - x;
        }
        return sum;
    }, [num1, num2]);

    return (
        <>
            <h1>
                {num1} + {num2} = {sum}
            </h1>
            <button onClick={() => setNum1(num1 + 1)}>Tăng 1</button>
            <button onClick={() => setNum2(num2 + 1)}>Tăng 2</button>
            <button onClick={() => setCount(count + 1)}>Render</button>
        </>
    );
}

export default Bai6;
