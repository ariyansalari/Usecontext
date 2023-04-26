import { Footer } from "./Footer";
import Header from "./Header";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const Layout = ({children}:any) => {
    return ( 
        <>
        <ToastContainer position="top-center" autoClose={3000} theme={"light"} />

        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
        </>
     );
}
 
export default Layout;
<>

</>