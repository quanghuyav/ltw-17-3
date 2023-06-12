import { memo } from 'react';

function Header({ count, onClick }) {
    console.log(onClick);
    console.log('rerender Header');
    return <h1>Header {count}</h1>;
}

export default memo(Header);
