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
        list: ['Hành động', 'Tâm lý'],
    },
    {
        name: 'Quốc gia',
        list: ['Lào', 'Thái'],
    },
];

function Header() {
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
                                page.link ? (
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
                            page.link ? (
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
