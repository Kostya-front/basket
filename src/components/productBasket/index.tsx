export interface ICard {
  "id": number,
  "title": string,
  "price": number,
  "description": string,
  "category": string,
  "image": string,
}

export interface IProps  {
  card?: ICard
}

export default function ProductBasket(props: IProps) {
  const {card} = props
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={card?.image} className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{card?.title}</h5>

            <p className="card-text"><small className="text-body-secondary">Цена: {card?.price}</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}