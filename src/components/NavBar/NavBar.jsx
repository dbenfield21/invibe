import React from "react"
import { Link } from "react-router-dom"

const NavBar = ({ user, handleLogout }) => {
	return (
		<div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
					{user ? (
						<div className="hidden px-2 mx-2 navbar-center lg:flex">
						<div className="flex items-stretch">
						<h2>Welcome, {user.name}</h2>
							<Link to="/users" className="btn btn-ghost btn-sm rounded-btn">Users</Link> 
							<Link to='' onClick={handleLogout} className="btn btn-ghost btn-sm rounded-btn">Logout</Link> 
							<Link to="/search" className="btn btn-ghost btn-sm rounded-btn"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">             
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>             
							</svg>Bar Finder</Link> 
							</div>
							</div> 	
					):(
						<div className="hidden px-2 mx-2 navbar-center lg:flex">
						<div className="flex items-stretch">
							<Link to="/login" className="btn btn-ghost btn-sm rounded-btn">Log In</Link> 
							<Link to="/signup" className="btn btn-ghost btn-sm rounded-btn">Sign Up</Link> 
						</div>
						</div> 
					)}
			<div className="navbar-end">
			</div>
		</div>

  )
}

export default NavBar