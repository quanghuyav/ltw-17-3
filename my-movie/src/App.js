import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes/routes';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { createContext } from 'react';

export const MyContext = createContext();

function App() {
    const [themeIndex, setThemeIndex] = useState(0);
    const theme0 = createTheme({
        palette: {
            primary: {
                main: '#1976d2', // Màu chủ đạo cho các thành phần primary (ví dụ: Button)
            },
            secondary: {
                main: '#f50057', // Màu chủ đạo cho các thành phần secondary (ví dụ: Button)
            },
        },
        typography: {
            fontFamily: 'Arial, sans-serif', // Định nghĩa font chữ chung cho toàn bộ ứng dụng
            fontSize: 16, // Định nghĩa font size chung cho toàn bộ ứng dụng
            // Bạn có thể định nghĩa các kiểu chữ cụ thể cho các thành phần khác nhau
            h1: {
                fontSize: '2.5rem',
                fontWeight: 500,
            },
            h2: {
                fontSize: '2rem',
                fontWeight: 500,
            },
            // ... Các kiểu chữ khác
        },
    });

    const theme1 = createTheme({
        palette: {
            primary: {
                main: '#f50057', // Màu chủ đạo cho các thành phần primary (ví dụ: Button)
            },
            secondary: {
                main: '#1976d2', // Màu chủ đạo cho các thành phần secondary (ví dụ: Button)
            },
        },
        typography: {
            fontFamily: 'Arial, sans-serif', // Định nghĩa font chữ chung cho toàn bộ ứng dụng
            fontSize: 16, // Định nghĩa font size chung cho toàn bộ ứng dụng
            // Bạn có thể định nghĩa các kiểu chữ cụ thể cho các thành phần khác nhau
            h1: {
                fontSize: '2.5rem',
                fontWeight: 500,
            },
            h2: {
                fontSize: '2rem',
                fontWeight: 500,
            },
            // ... Các kiểu chữ khác
        },
    });

    const theme2 = createTheme({
        palette: {
            primary: {
                main: '#c2f345', // Màu chủ đạo cho các thành phần primary (ví dụ: Button)
            },
            secondary: {
                main: '#12345f', // Màu chủ đạo cho các thành phần secondary (ví dụ: Button)
            },
        },
        typography: {
            fontFamily: 'Arial, sans-serif', // Định nghĩa font chữ chung cho toàn bộ ứng dụng
            fontSize: 16, // Định nghĩa font size chung cho toàn bộ ứng dụng
            // Bạn có thể định nghĩa các kiểu chữ cụ thể cho các thành phần khác nhau
            h1: {
                fontSize: '2.5rem',
                fontWeight: 500,
            },
            h2: {
                fontSize: '2rem',
                fontWeight: 500,
            },
            // ... Các kiểu chữ khác
        },
    });
    const themes = [theme0, theme1, theme2];
    return (
        <MyContext.Provider value={setThemeIndex}>
            <ThemeProvider theme={themes[themeIndex]}>
                <BrowserRouter>
                    <Routes>
                        {publicRoutes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <route.Layout>
                                        <route.Component></route.Component>
                                    </route.Layout>
                                }
                            ></Route>
                        ))}
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </MyContext.Provider>
    );
}

export default App;
