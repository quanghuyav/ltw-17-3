import { Container, Grid } from '@mui/material';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';

function MainLayout({ children }) {
    return (
        <>
            <Header></Header>

            <Container maxWidth="xl">
                <Grid container>
                    <Grid item xs={12} md={8}>
                        {' '}
                        {children}
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <SideBar></SideBar>
                    </Grid>
                </Grid>
            </Container>

            <Footer></Footer>
        </>
    );
}

export default MainLayout;
