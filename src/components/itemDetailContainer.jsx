import React, { useEffect, useState } from 'react';
import { getProductById } from '../data/getData.js';
import Product from './product';


const ItemDetailContainer = ({ id }) => {
  const [product, setProduct] = useState();

  // useEffect(() => {
        getProductById(id, setProduct);
  // }, []);
  return (
 <Product item={product} />
      // product ? <Product item={product}  /> : <p>Obteniendo producto...</p>

      // setProduct ?  : <p>Obteniendo producto...</p>
      
  );
};

export default ItemDetailContainer;