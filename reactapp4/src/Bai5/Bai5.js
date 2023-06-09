import { useEffect, useState } from 'react';

function Bai5() {
    // let x = 1;

    // const [count, setCount] = useState(() => {
    //     let sum = 0;
    //     for (var x = 1; x <= 10; x++) {
    //         console.log('rerender');
    //         sum = sum + x;
    //     }
    //     return sum;
    // });
    // // state = 1
    // // setState(10) >> state set lại bằng 10
    // // thực hiện render lại component

    // // setInterval(() => {
    // //     setCount((prev) => {
    // //         return prev + 1;
    // //     });
    // // }, 1000);

    // const [obj, setObj] = useState({ name: 'huy' });
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    console.log('Bên ngoài useEff');

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        console.log('bên trong use');
        return () => {
            console.log('bên trong return');
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // useEffect(() => {
    //     setInterval(() => {
    //         // ()=>{setInterval()=> setCount1(count1+1)}: chờ đẩy ra giao diện
    //         // () => {setCount(count1+1)}: cứ 1s thì gọi lại setCount
    //         setCount1((prev) => prev + 1);
    //     }, 1000);
    // }, []);
    // console.log(count1);
    // console.log('Bên ngoài');
    return (
        <>
            {' '}
            {console.log('giao diện')}
            {/* Bài 5: {count}
            <button onClick={() => setCount(count + 1)}>clik me</button> */}
            {/* 
            <div>Bài 5: {console.log(obj)}</div>
            <button onClick={() => setObj({ ...obj, age: 24 })}>click</button> */}
            {/* {console.log('giao diện')} */}
            <div style={{ height: 3000 }}>Bài 5: {count1}</div>
            <button onClick={() => setCount1(count1 + 1)}>click1</button>
            <button onClick={() => setCount2(count2 + 1)}>click2</button>
        </>
    );
}
// {name:"huy",age:24}
export default Bai5;
