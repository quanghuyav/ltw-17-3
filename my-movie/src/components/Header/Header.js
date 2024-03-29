import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import PageMenu from '../PageMenu/PageMenu';
import SearchBar from '../SearchBar/SearchBar';
import { useContext } from 'react';
import { MyContext } from '../../App';

const pages = [
    {
        name: 'Trang chủ',
        link: '/',
    },
    {
        name: 'Phim lẻ',
        link: '/phim-le/page/1',
    },
    {
        name: 'Phim bộ',
        link: '/phim-bo',
    },
    {
        name: 'Thể loại',
        link: '/the-loai',
        list: [
            {
                id: 28,
                name: 'Phim Hành Động',
            },
            {
                id: 12,
                name: 'Phim Phiêu Lưu',
            },
            {
                id: 16,
                name: 'Phim Hoạt Hình',
            },
            {
                id: 35,
                name: 'Phim Hài',
            },
            {
                id: 80,
                name: 'Phim Hình Sự',
            },
            {
                id: 99,
                name: 'Phim Tài Liệu',
            },
            {
                id: 18,
                name: 'Phim Chính Kịch',
            },
            {
                id: 10751,
                name: 'Phim Gia Đình',
            },
            {
                id: 14,
                name: 'Phim Giả Tượng',
            },
            {
                id: 36,
                name: 'Phim Lịch Sử',
            },
            {
                id: 27,
                name: 'Phim Kinh Dị',
            },
            {
                id: 10402,
                name: 'Phim Nhạc',
            },
            {
                id: 9648,
                name: 'Phim Bí Ẩn',
            },
            {
                id: 10749,
                name: 'Phim Lãng Mạn',
            },
            {
                id: 878,
                name: 'Phim Khoa Học Viễn Tưởng',
            },
            {
                id: 10770,
                name: 'Chương Trình Truyền Hình',
            },
            {
                id: 53,
                name: 'Phim Gây Cấn',
            },
            {
                id: 10752,
                name: 'Phim Chiến Tranh',
            },
            {
                id: 37,
                name: 'Phim Miền Tây',
            },
        ],
    },
    {
        name: 'Quốc gia',
        link: '/quoc-gia',
        list: [
            {
                id: 1,
                name: 'VN',
            },
            {
                id: 2,
                name: 'usuk',
            },
        ],
    },
];

function Header() {
    const setThemeIndex = useContext(MyContext);
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            mr: 1,
                        }}
                    />
                    <button onClick={() => setThemeIndex(0)}>1</button>
                    <button onClick={() => setThemeIndex(1)}>2</button>
                    <button onClick={() => setThemeIndex(2)}>3</button>

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) =>
                                !page.list ? (
                                    <Button
                                        component={Link}
                                        to={page.link}
                                        key={page.name}
                                        sx={{ color: 'black', display: 'block' }}
                                    >
                                        {page.name}
                                    </Button>
                                ) : (
                                    <PageMenu
                                        sx={{ color: 'black', display: 'block', textAlign: 'left' }}
                                        key={page.name}
                                        list={page.list}
                                        link={page.link}
                                    >
                                        {page.name}
                                    </PageMenu>
                                ),
                            )}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) =>
                            !page.list ? (
                                <Button
                                    component={Link}
                                    to={page.link}
                                    key={page.name}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page.name}
                                </Button>
                            ) : (
                                <PageMenu
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    key={page.name}
                                    list={page.list}
                                    link={page.link}
                                >
                                    {page.name}
                                </PageMenu>
                            ),
                        )}
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <SearchBar></SearchBar>
                    </Box>
                </Toolbar>
            </Container>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <SearchBar></SearchBar>
            </Box>
        </AppBar>
    );
}
export default Header;
