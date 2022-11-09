import './ItemListContainer.scss'
const ItemListContainer = (props) => {
  return (
    <div className="saludo">
      <h2>{props.name}</h2>
    </div>
  )
}

export default ItemListContainer