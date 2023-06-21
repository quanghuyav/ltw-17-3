import { useEffect } from 'react';
import './style.css';
import axios from 'axios';
import Button from '@mui/material/Button';

function Content() {
    const id = 1;
    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json', // Kiểu dữ liệu của dữ liệu gửi đi
    //             Authorization: 'Bearer <access_token>', // Thêm tiêu đề Authorization nếu cần thiết
    //         },
    //         // body: JSON.stringify({ a: 1 }), // Dữ liệu gửi đi, nếu cần thiết
    //     })
    //         .then((res) => res.json())
    //         .then((data) => console.log(data))
    //         .catch(() => console.log('lỗi'));
    //     // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     //     .then((response) => response.json())
    //     //     .then((json) => console.log(json));
    // }, []);

    useEffect(() => {
        axios
            .put(
                'https://jsonplaceholder.typicode.com/posts/1',
                {
                    id: 1,
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                },
                {
                    headers: {
                        // Header viết ở đây
                        'Content-Type': 'application/json', // Kiểu dữ liệu của request body là JSON
                        Authorization: 'Bearer YourAccessToken', // Thêm header Authorization nếu cần
                    },
                    // params: {
                    //     // Params muốn truyền vào ở đây
                    //     userId: id,
                    // },
                },
            )
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    });

    return (
        <>
            <Button variant="text">Text</Button>
            <Button disabled variant="contained">
                Contained
            </Button>
            <Button variant="outlined">Outlined</Button>
        </>
    );
}

export default Content;
