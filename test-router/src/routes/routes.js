import DefaultPage from '../pages/DefaultPage/DefaultPage';
import HomePage from '../pages/HomePage/HomePage';
import NewsPage from '../pages/NewsPage/NewsPage';
import UserPage from '../pages/UserPage/UserPage';

export const publicRoutes = [
    { path: '/', Component: HomePage },
    { path: '/home', Component: HomePage },

    { path: '/news', Component: NewsPage },
    { path: '*', Component: DefaultPage },
];

export const privateRoutes = [{ path: '/user', Component: UserPage }];
