import { useContext } from 'react';
import Posts from './Posts';
import { myContext } from '../App';

function Content({ posts }) {
    const x = useContext(myContext);
    console.log(x);
    return (
        <>
            Content {x + ''}
            <Posts posts={posts}></Posts>
        </>
    );
}

export default Content;
