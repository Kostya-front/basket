import {useEffect, useState} from "react";
import ProductCard from "../productCard";
import styles from './index.module.css'
import {ICard} from "../productBasket";

interface IProps {
  products?: ICard[],
  setProducts?: (products: ICard[]) => void,
  addProduct?: (product: ICard) => void
}
export default function Catalog(props: IProps) {
  const {products = [], setProducts, addProduct} = props
  useEffect(() => {
    fetch('https://fakestoreapi.com/products').then(resp => resp.json()).then(productArray => console.log(productArray))
  },[])
  return (
    <div className={styles.catalog}>
      {products.map(product => {
        return <ProductCard addProduct={addProduct} key={product.id} card={product}/>
      })}
    </div>
  )
}