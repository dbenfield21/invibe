import React, { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import "./App.css"
import BarDetails from '../BarDetails/BarDetails'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'
import Users from '../Users/Users'
import SearchLocations from '../SearchLocations/SearchLocations'
// import LocationResults from '../LocationResults/LocationResults'
import * as authService from '../../services/authService'

const App = () => {
	const [user, setUser] = useState(authService.getUser())
	const navigate = useNavigate()

	const handleLogout = () => {
		authService.logout()
		setUser(null)
		navigate('/')
	}

	const handleSignupOrLogin = () => {
		setUser(authService.getUser())
	}

// all functions to change a profile live in App

	return (
		<>
			<NavBar user={user} handleLogout={handleLogout} />
			<Routes>
				<Route path='/' element={<Landing user={user} />} />
				<Route path='/signup' element={<Signup handleSignupOrLogin={handleSignupOrLogin} />} />
				<Route path='/login' element={<Login handleSignupOrLogin={handleSignupOrLogin} />} />
				<Route path='/users' element={user ? <Users /> : <Navigate to='/login' />} />
				<Route path="/search" element={<SearchLocations />} />
				<Route path="/barDetails" element={<BarDetails />}></Route>
				{/* <Route path="/locationResults" element={<LocationResults />}></Route> */}
			</Routes>
		</>
	);
}
 
export default App;