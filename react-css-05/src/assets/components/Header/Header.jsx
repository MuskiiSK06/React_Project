import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.header}>
        <h1 className={styles.h1}>The is React Css</h1>
        <button className={styles.button}>Approve</button>
    </div>
  )
}

export default Header