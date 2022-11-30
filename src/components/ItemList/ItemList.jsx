import Item from '../Item/Item'

const ItemList = ({products}) => {
  //console.log(products)
  return (
    products.map((product)=>{
      <Item product={product} key={product.id}/>
    }
  )
  
  )
}

export default ItemList