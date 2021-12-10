import { Link } from "react-router-dom"
import styles from './Landing.module.css'

const Landing = ({user}) => {
  return (
    <div className={styles.landingContainer}>
      <h2 className={styles.welcomeText}>
        Hello {user ? user.name : "traveler! Log in or sign up above to join us for a delicious cocktail!"} 
      </h2>
      <h1>
        Welcome to <span className={styles.inVibe}>InVibe</span> 
      </h1>
      <Link to="/search"><img className={styles.mainImage} src="https://kitchenswagger.com/wp-content/uploads/2021/04/new-york-sour33-768x1152.jpg" alt="New York Sour" /></Link>
    </div>
  )
}

export default Landing