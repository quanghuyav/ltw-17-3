import { Link } from 'react-router-dom';

function MyPagination({ count }) {
    const pages = [];
    for (let i = 1; i <= count; i++) {
        pages.push(i);
    }
    return (
        <>
            <button>Giảm</button>
            {pages.map((page) => (
                <Link to={'/phim-le/page/' + page}>{page}</Link>
            ))}
            <button>Tăng</button>
        </>
    );
}

export default MyPagination;
