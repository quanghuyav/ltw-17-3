// Sử dụng fetch
/*
Hàm fetch trong JavaScript được sử dụng để gửi yêu cầu HTTP và nhận lại dữ liệu từ các nguồn khác nhau. Hàm fetch có thể nhận những tham số sau:

URL: Đây là địa chỉ URL của nguồn dữ liệu mà bạn muốn gửi yêu cầu. Đây là tham số bắt buộc và phải được cung cấp.

Options (tùy chọn): Đây là một đối tượng JavaScript chứa các cài đặt tùy chọn cho yêu cầu fetch, bao gồm các cài đặt như phương thức HTTP, tiêu đề (header), kiểu dữ liệu (content type), gửi dữ liệu (body), và nhiều tùy chọn khác. Đây là tham số không bắt buộc và có thể được bỏ qua nếu không cần thiết.

CORS (Cross-Origin Resource Sharing): Đây là một cơ chế an ninh trong trình duyệt ngăn chặn việc truy cập đến các nguồn dữ liệu từ các nguồn khác miền (origin). Nếu bạn muốn truy cập đến một nguồn dữ liệu từ miền khác, bạn cần cung cấp các tùy chọn để xác định quyền truy cập và chấp nhận CORS.

Sau đây là một ví dụ về cách sử dụng hàm fetch với URL và options:
*/

fetch('https://api.example.com/data', {
    method: 'GET', // Phương thức HTTP, ví dụ: GET, POST, PUT, DELETE
    headers: {
        // Tiêu đề (header) của yêu cầu
        'Content-Type': 'application/json', // Kiểu dữ liệu của dữ liệu gửi đi
        Authorization: 'Bearer <access_token>', // Thêm tiêu đề Authorization nếu cần thiết
    },
    body: JSON.stringify(data), // Dữ liệu gửi đi, nếu cần thiết
    // mode: 'cors', // Cài đặt CORS, nếu cần thiết
})
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });

// Sử dụng async await

import React, { useEffect, useState } from 'react';

const MyComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.example.com/data');
                const responseData = await response.json();
                setData(responseData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    if (data === null) {
        return <div>Loading...</div>;
    }

    return <div>{/* Hiển thị dữ liệu */}</div>;
};

export default MyComponent;

// Truyền parameters trong fetch
const queryParam1 = 'value1';
const queryParam2 = 'value2';

fetch(
    `https://api.example.com/data?param1=${queryParam1}&param2=${queryParam2}`,
)
    .then((response) => {
        // Xử lý kết quả
    })
    .catch((error) => {
        console.error(error);
    });

// npm i axios

/* TÍNH NĂNG
Tạo request từ trình duyệt bằng XMLHttpRequest: Axios hỗ trợ việc tạo các yêu cầu HTTP từ trình duyệt bằng cách sử dụng đối tượng XMLHttpRequest, một giao diện cung cấp khả năng gửi và nhận dữ liệu trên web. Axios tự động xử lý các yêu cầu của bạn, giúp đơn giản hóa quá trình gửi yêu cầu từ trình duyệt và xử lý kết quả trả về.

Tạo request từ Node.js bằng http: Axios cũng hỗ trợ việc tạo các yêu cầu HTTP từ phía máy chủ sử dụng module http của Node.js. Điều này cho phép bạn gửi yêu cầu từ một máy chủ Node.js, ví dụ như một dịch vụ web, đến một API hoặc dịch vụ web khác.

Hỗ trợ Promise API: Axios hỗ trợ việc sử dụng Promise API, cho phép bạn sử dụng cú pháp async/await hoặc sử dụng các phương thức .then() và .catch() để xử lý các phản hồi từ API hoặc dịch vụ web. Điều này giúp quản lý các yêu cầu HTTP và xử lý kết quả trả về một cách dễ dàng và tiện lợi.

Đón chặn request và response: Axios cho phép bạn đón chặn (intercept) cả request và response trước khi chúng được gửi hoặc nhận về từ API hoặc dịch vụ web. Điều này giúp bạn có thể thực hiện các thao tác đặc biệt, chẳng hạn như kiểm tra, thêm hoặc xóa thông tin trong request hoặc response trước khi chúng được xử lý.

Biến đổi dữ liệu request và response: Axios cho phép bạn biến đổi dữ liệu của request và response trước khi chúng được gửi hoặc nhận về. Bạn có thể sử dụng các interceptor để biến đổi dữ liệu dưới dạng JSON, thêm hoặc xóa các trường dữ liệu, hoặc thực hiện các biến đổi tùy chỉnh khác trên dữ liệu.

Bãi bỏ request: Axios cung cấp khả năng hủy bỏ (cancel) các yêu cầu đang chờ xử lý hoặc đang được gửi đi. Điều này giúp quản lý các yêu cầu HTTP và đồng thời giảm bớt tải cho server và mạng khi không cần thiết.

Tự động chuyển đổi cho dữ liệu JSON: Axios có tính năng tự động chuyển đổi dữ liệu từ đối tượng JavaScript sang định dạng JSON và ngược lại. Điều này giúp đơn giản hóa quá trình gửi và nhận dữ liệu JSON giữa client và server.

Hỗ trợ phía client bảo vệ chống lại XSRF: Axios có tính năng hỗ trợ bảo vệ phía client chống lại tấn công Cross-Site Request Forgery (XSRF), giúp đảm bảo tính bảo mật của ứng dụng React khi gửi các yêu cầu HTTP.

*/

axios
    .post(
        'https://api.example.com/data',
        {
            // Dữ liệu muốn gửi cho server, chính là phần body trong fetch
            username: 'exampleuser',
            password: 'examplepassword',
        },
        {
            headers: {
                // Header viết ở đây
                'Content-Type': 'application/json', // Kiểu dữ liệu của request body là JSON
                Authorization: 'Bearer YourAccessToken', // Thêm header Authorization nếu cần
            },
            params: {
                // Params muốn truyền vào ở đây
                page: 1,
                limit: 10,
            },
        },
    )
    .then((response) => {
        // Xử lý kết quả. Kết quả trả về lúc này là obj luôn, không cần phải chuyển từ json về nữa
    })
    .catch((error) => {
        console.error(error);
    });

//
