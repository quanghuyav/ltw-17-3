import { Link } from 'react-router-dom';

function Header() {
    return (
        <div style={{ height: '30px', backgroundColor: 'red' }}>
            <Link to="/">Trang chủ</Link>
            <Link to="/phim-le">Phim lẻ</Link>
            <Link to="/phim-bo">Phim bộ</Link>
            <Link to="/the-loai">Thể loại</Link>
            <Link to="/quoc-gia">Quốc gia</Link>
            <Link to="/nam-phat-hanh">Năm</Link>
        </div>
    );
}

export default Header;
