import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes/routes';
import { useState } from 'react';
function App() {
    const [user, setUser] = useState(null);
    return (
        <>
            <button onClick={() => setUser({ name: 'huy' })}>Đăng nhập</button>
            <button onClick={() => setUser(null)}>Đăng xuất</button>

            <h3>{user && user.name}</h3>
            <BrowserRouter>
                <Routes>
                    {publicRoutes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={<route.Component></route.Component>}
                        ></Route>
                    ))}
                    {user &&
                        privateRoutes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                element={<route.Component></route.Component>}
                            ></Route>
                        ))}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
