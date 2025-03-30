import { Outlet } from "react-router-dom";
import Hader from "../../Hader/Hader";
import Footer from "../../Footer/Footer";


const Main = () => {
    return (
        <div>
           <Hader></Hader>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;