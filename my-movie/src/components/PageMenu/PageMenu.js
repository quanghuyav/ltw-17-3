import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function PageMenu({ children, list, sx, link }) {
    const [anchorElMenu, setAnchorElMenu] = React.useState(null);

    const handleOpenMenu = (event) => {
        setAnchorElMenu(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorElMenu(null);
    };

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Button fullWidth sx={sx} onClick={handleOpenMenu}>
                {children}
            </Button>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElMenu}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElMenu)}
                onClose={handleCloseMenu}
            >
                {list.map((item) => (
                    <MenuItem key={item.id} onClick={handleCloseMenu}>
                        <Typography
                            component={Link}
                            to={link + '/' + item.id + '/page' + '/1'}
                            color="primary"
                            sx={{
                                textDecoration: 'none',
                                display: 'block',
                                width: '100%',
                            }}
                        >
                            {item.name}
                        </Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}

export default PageMenu;
