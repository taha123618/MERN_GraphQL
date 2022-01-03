import { Link , useNavigate } from "react-router-dom"

const Navbar = () => {
  // for token to login 
  const token = localStorage.getItem("token")
  // if user logout
  const navaigate = useNavigate()
    return (
        <>
   <nav>
    <div className="nav-wrapper #673ab7 deep-purple">
      <Link to="/" className="brand-logo left">Quote's App</Link>
      <ul id="nav-mobile" className="right">
      {
        token ?
        <>
       <li>
       <Link to="/createquote" className="right">CreateQuote</Link> 
       </li>
       <li>
       <Link to="/profile" className="right">Profile</Link> 
       </li>
       <li>
       <button className="red btn"
       onClick={()=>{
        localStorage.removeItem("token")
        navaigate('/login')
       }}>Logout</button>
       </li>
        </>:
        <>
       <li>
       <Link to="/login" className="right">Login</Link> 
       </li>
       <li>
       <Link to="/singnup" className="right">Signup</Link> 
       </li>

        </>
      }
      </ul>
    </div>
  </nav>
        </>
    )
}

export default Navbar
