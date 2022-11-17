import './ItemListContainer.scss';
import { useParams } from 'react-router-dom';
const ItemListContainer = (props) => {
  return (
    <div className="saludo">
      <h2>{props.name}</h2>
    </div>
  )
}

export default ItemListContainer