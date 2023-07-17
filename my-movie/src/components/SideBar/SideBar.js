import { Button, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const years = [];

for (let year = 2023; year >= 1974; year--) {
    years.push(year);
}

function SideBar() {
    return (
        <Container maxWidth="xl">
            <Typography
                color="secondary"
                variant="h6"
                noWrap
                sx={{ marginTop: '10px', marginBottom: '10px' }}
            >
                Năm phát hành
            </Typography>

            <Grid container spacing={1}>
                {years.map((year) => (
                    <Grid xs={3} sm={2} md={3} item key={year}>
                        <Button
                            color="secondary"
                            component={Link}
                            to={`/nam-phat-hanh/${year}/page/1`}
                            variant="outlined"
                        >
                            {year}
                        </Button>
                    </Grid>
                ))}
            </Grid>

            <Typography
                color="secondary"
                variant="h6"
                noWrap
                sx={{ marginTop: '10px', marginBottom: '10px' }}
            >
                Phim hot
            </Typography>
        </Container>
    );
}

export default SideBar;
