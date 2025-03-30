import { NavLink } from "react-router-dom";


const Hader = () => {
    return (
        <div>
            <h2>This is Hader</h2>
            <NavLink style={{marginRight:"20px"}} to="/">Home</NavLink>
            <NavLink to="/login">Log In</NavLink>
        </div>
    );
};

export default Hader;