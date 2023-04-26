import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <header>
<h1><Link to="/">Todo</Link></h1>
<h2><Link to="/Login">Add todo</Link></h2>
        </header>
     );
}
 
export default Header;
 

