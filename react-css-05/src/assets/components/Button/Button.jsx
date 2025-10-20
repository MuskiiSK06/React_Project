import styles from './Button.module.css'

function Button() {
  return (
    <div className={styles.btn}>
        <button className={styles.button}>Submit</button>
    </div>
  )
}

export default Button