import './style.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <h1>Đây là header</h1>
            <Link to="/home">Trang chủ</Link>
            <Link to="/news">Tin tức</Link>
            <Link to="/user">Người dùng</Link>
            <Link to="http://google.com">google</Link>
        </>
    );
}

export default Header;
