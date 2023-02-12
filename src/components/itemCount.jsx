import React from 'react';
import {  redirect  } from 'react-router-dom';
import { useState, useContext} from 'react';
import AppContext from '../context/AppContext'


const ItemCount = (item) => {
  //hook de estado
  const [cart, addTocard] = useState(false);
  const cartContext = useContext(AppContext);
  const { addToCart} = cartContext;


  let qty = 1;

  return (
    <div>
      {/* <div className="count-container__contador">
        <button
          className="count-container__button"
          onClick={() => addProduct(-1)}
          disabled={qty === initial ? true : null}
        >
          -
        </button>
        <span className="count-container__qty">{qty}</span>
        <button
          className="count-container__button"
          onClick={() => addProduct(+1)}
          disabled={qty === stock ? true : null}
        >
          +
        </button>
      </div> */}

      <span translate="no" class="material-symbols-outlined"  id="add"
        onClick={() => {  addToCart(item, qty);}} >
        add_circle
      </span>


      {/* { (cart) && <button
        onClick={()=>{redirect('/product') }}
      >
        Finalizar compra
      </button>}   */}
    </div>
  );
};

export default ItemCount;
