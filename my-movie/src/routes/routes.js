import MainLayout from '../layouts/MainLayout/MainLayout';
import SubLayout from '../layouts/SubLayout/SubLayout';
import Home from '../pages/Home/Home';
import SeriesMovie from '../pages/SeriesMovie/SeriesMovie';
import SingleMovie from '../pages/SingleMovie/SingleMovie';
import Country from '../pages/Country/Country';
import Genre from '../pages/Genre/Genre';
import Year from '../pages/Year/Year';
import SearchPage from '../pages/SearchPage/SearchPage';
import WatchMovie from '../pages/WatchMovie/WatchMovie';
import DefaultPage from '../pages/DefaultPage/DefaultPage';

export const publicRoutes = [
    { path: '/', Component: Home, Layout: MainLayout },
    { path: '/home', Component: Home, Layout: MainLayout },
    { path: '/phim-le', Component: SingleMovie, Layout: MainLayout },
    { path: '/phim-bo', Component: SeriesMovie, Layout: MainLayout },
    { path: '/the-loai', Component: Genre, Layout: MainLayout },
    { path: '/quoc-gia', Component: Country, Layout: MainLayout },
    { path: '/nam-phat-hanh', Component: Year, Layout: MainLayout },
    { path: '/tim-kiem', Component: SearchPage, Layout: MainLayout },
    { path: '/xem-phim', Component: WatchMovie, Layout: MainLayout },
    { path: '*', Component: DefaultPage, Layout: SubLayout },
];
