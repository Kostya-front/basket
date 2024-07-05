import styles from './index.module.css'
import ProductBasket, {ICard} from "../productBasket";

interface IProps {
  closeBasket?: () => void,
  basket?: ICard[]
}
export default function Modal(props: IProps) {
  const {closeBasket, basket} = props
  const card = {
      "id": 3,
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "rating": {
        "rate": 4.7,
        "count": 500
      }
    }

  return (
    <div className={styles.modal}>
      <div onClick={closeBasket} className={styles.modal__bg}></div>
      <div className={styles.modal__window}>
        <h1>Товары в корзине</h1>
        <ul>
          <li>
            <ProductBasket card={card}/>
          </li>
        </ul>
      </div>
    </div>
  )
}