import { useState } from 'react';
import Bai5 from './Bai5/Bai5';
import Bai6 from './Bai6/Bai6';

function App() {
    const [x, setX] = useState(false);
    return (
        <>
            <button onClick={() => setX(!x)}>Mount</button>
            {x && <Bai6></Bai6>}
        </>
    );
}

export default App;
