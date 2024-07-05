import styles from './index.module.css'
interface IProps  {
  card?: {
    "id": number,
    "title": string,
    "price": number,
    "description": string,
    "category": string,
    "image": string,
  },
  addProduct?: (product) => void
}

export default function ProductCard(props: IProps) {
  const {card, addProduct} = props

  return (
    <div className={styles.card__item}>
      <div className={styles.card__bg} style={{backgroundImage: `url(${card?.image})`}}></div>
        <div className={styles.card__content}>
          <h5 className="card-title">{card?.title}</h5>
          <p className="card-text">{card?.description}</p>
          <p className='card-text'>{card?.category}</p>
          <p className="card-text"><small className="text-body-secondary">Цена: {card?.price}</small></p>
          <button className='btn btn-primary'>Добавить в корзину</button>
        </div>
    </div>
)
}