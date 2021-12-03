import styles from './Landing.module.css'

const Landing = ({user}) => {
  return (
    <main className={styles.container}>
      <h1>
        Hello {user ? user.name : "traveler! Log in or sign up above to join us for a delicious cocktail!"}
      </h1>
    </main>
  )
}
 
export default Landing