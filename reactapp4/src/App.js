import { useState } from 'react';
import Bai5 from './Bai5/Bai5';

function App() {
    const [x, setX] = useState(false);
    return (
        <>
            <button onClick={() => setX(!x)}>Mount</button>
            {x && <Bai5></Bai5>}
        </>
    );
}

export default App;
