import { AppBar, Container, Grid } from '@mui/material';

function Footer() {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item xs={4}>
                        <Grid container>
                            <Grid item xs={12}>
                                Nội dung
                            </Grid>
                            <Grid item xs={12}>
                                Nội dung
                            </Grid>
                            <Grid item xs={12}>
                                Nội dung
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container>
                            <Grid item xs={12}>
                                Nội dung
                            </Grid>
                            <Grid item xs={12}>
                                Nội dung
                            </Grid>
                            <Grid item xs={12}>
                                Nội dung
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container>
                            <Grid item xs={12}>
                                Nội dung
                            </Grid>
                            <Grid item xs={12}>
                                Nội dung
                            </Grid>
                            <Grid item xs={12}>
                                Nội dung
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </AppBar>
    );
}

export default Footer;
