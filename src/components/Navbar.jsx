import { Link, NavLink } from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar">
        <Link to="/" className="logo
        ">React job listing</Link>
        <div>
            <NavLink className={({isActive}) => isActive ? "active" : "inactive"} to="/">Home</NavLink>
            <NavLink className={({isActive}) => isActive ? "active" : "inactive"} to="/add-jobs">Add Job</NavLink>
        </div>
    </div>
  )
}

export default Navbar