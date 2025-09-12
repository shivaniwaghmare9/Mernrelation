
import { Outlet } from 'react-router-dom';
import Topnav from './Components/Topnav';
import Header from './Components/Header';
import Footer from './Components/Footer';


const Layout=()=>{
    return(
        <>
          <Header/>
          <Topnav/>
           <Outlet/>
           <Footer/>
        </>
    )
}
export default Layout;