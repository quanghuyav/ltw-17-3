import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';

function SubLayout({ children }) {
    return (
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
    );
}

export default SubLayout;
