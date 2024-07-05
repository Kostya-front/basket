import {useEffect, useState} from "react";
import ProductCard from "../productCard";
import styles from './index.module.css'

export default function Catalog({products, setProducts, addProduct}: {products?: any[], setProducts?: (products: any[]) => void, addProduct?: (product) => void}) {

  useEffect(() => {
    fetch('https://fakestoreapi.com/products').then(resp => resp.json()).then(productArray => setProducts(productArray))
  },[])
  return (
    <div className={styles.catalog}>
      {products?.map(product => {
        return <ProductCard addProduct={addProduct} key={product.id} card={product}/>
      })}
    </div>
  )
}