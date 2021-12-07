import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout, resetSearch }) => {

	

	return (
		<div >
			{user ? (
				<nav>
					<ul className={`${styles.navBar} ${styles.navBarLoggedIn}`}>
						<li className={`${styles.navItem} ${styles.gridSpace01}`}>
						<Link to='/profile' state={user}>Welcome {user.name}</Link>
						</li>
						<li className={`${styles.navItem} ${styles.gridSpace02}`}>
							<Link to='' onClick={handleLogout}>LOG OUT</Link>
            </li>
						<li className={`${styles.navItem} ${styles.gridSpace03}`}>
							<Link to="/users">See Users</Link>
						</li>
						<li className={`${styles.navItem} ${styles.gridSpace04}`}>
							<Link to="/search" onClick={resetSearch}>Bar Finder</Link>
						</li>
					</ul>
				</nav>
			) : (
				<nav>
					<ul className={`${styles.navBar} ${styles.navBarLoggedOut}`}>
						<li className={`${styles.navItem} ${styles.gridSpace01}`}>
							<Link to="/login">Log In</Link>
						</li>
						<li className={`${styles.navItem} ${styles.gridSpace02}`}>
							<Link to="/signup">Sign Up</Link>
						</li>
					</ul>
				</nav>
			)}
		</div>
	)
}

export default NavBar