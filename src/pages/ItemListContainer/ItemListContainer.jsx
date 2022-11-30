import './ItemListContainer.scss';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import {data} from '../../data/data';
import { useEffect, useState } from 'react';
const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {categoryName} = useParams();
  // console.log(categoryName);
  const getProducts = new Promise((resolve,reject)=>{

    setTimeout(()=>{
      if(categoryName){
        const filteredData = data.filter((item)=>{
          return item.category === categoryName;
        });
        resolve(filteredData);
      }else{
        // console.log (data);
        resolve(data);
      }
    },1000);
    
    
  });

  
  useEffect(()=>{
    getProducts
    .then((res)=>{
      setItems(res);
    })
    .catch((error)=>{console.log(error)});
  },[categoryName]);

  return (
    <ItemList products={items}/>
  )
}

export default ItemListContainer