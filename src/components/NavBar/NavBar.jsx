import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
	return (
		<div >
			{user ? (
				<nav>
					<div className={styles.navBar}>
							<h4>
									{user.name}
							</h4>
							<h4>
								<Link to="/search">Bar Finder</Link>
              </h4>
							<h4>
								<Link to="/users">Users</Link>
							</h4>
							<h4>
								<Link to='' onClick={handleLogout}>LOG OUT</Link>
							</h4>
					</div>
				</nav>
			) : (
				<nav>
					<div className={styles.navBar}>
							<h4>
								<Link to="/login">Log In</Link>
							</h4>
							<h4>
								<Link to="/signup">Sign Up</Link>
							</h4>
					</div>
				</nav>
			)}
		</div>
	)
}

export default NavBar