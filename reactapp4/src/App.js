import { createContext, useState } from 'react';
import Bai5 from './Bai5/Bai5';
import Bai6 from './Bai6/Bai6';
import Bai7 from './Bai7/Bai7';

export const myContext = createContext();

function App() {
    const [x, setX] = useState(false);

    return (
        <myContext.Provider value={[x, setX]}>
            <>
                <button onClick={() => setX(!x)}>Mount</button>
                {x && <Bai7></Bai7>}
            </>
        </myContext.Provider>
    );
}

export default App;
