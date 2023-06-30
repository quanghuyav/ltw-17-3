import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';

function MainLayout({ children }) {
    return (
        <>
            <Header></Header>
            <div style={{ display: 'flex', height: '1000px' }}>
                <div style={{ flexBasis: '70%' }}>{children}</div>
                <div style={{ flexBasis: '20%' }}>
                    <SideBar></SideBar>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default MainLayout;
