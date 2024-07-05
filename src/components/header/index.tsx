import styles from './index.module.css'


interface IProps {
  openBasket?: () => void
  count?: number
}
export default function Header(props: IProps) {
  const {openBasket, count} = props
  const navClass = `navbar navbar-expand-lg bg-body-tertiary ${styles.header}`
  return (
    <nav className={navClass}  data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>

        <button onClick={openBasket} className={styles.basket} type="button" >
          <span>Корзина</span>
          <span className={styles.basket__count}>{count || 0}</span>
        </button>
      </div>
    </nav>)
}