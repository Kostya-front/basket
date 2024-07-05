import styles from './index.module.css'

export default function Header({openBasket, count}: {openBasket?: () => void}) {
  const navClass = `navbar navbar-expand-lg bg-body-tertiary ${styles.header}`
  return (
    <nav className={navClass}  data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>

        <button onClick={openBasket} className={styles.basket} type="button" >
          <span>Корзина</span>
          <span className={styles.basket__count}>{count}</span>
        </button>
      </div>
    </nav>)
}