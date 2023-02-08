import { Link } from "react-router-dom";
const Home=()=>{
    console.log("hello");
    return(
        <div>
            <h1>Home Page</h1>
            <Link to="/products"> To products </Link>
            <br/><br/>
            <Link to="/categories"> To categories </Link>
        </div>
        
    )
    
}
export default Home;