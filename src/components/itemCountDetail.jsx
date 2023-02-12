import React from 'react';
// import { useHistory } from 'react-router';
import { useState } from 'react';
import {onAdd} from '../helpers/operadors';


const ItemCountDetail = ({ initial, stock}) => {
  //hook de estado
  const [qty, setQty] = useState(initial);
  const [showButton, setshowButton] = useState(false);


  const addProduct = (num) => {
    setQty(qty + num);
  };

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
             
                    <button class="normal" id="addProduct" onClick={() => {onAdd(qty); setshowButton(true)}} disabled={stock === 0 ? true : null}>
                    <span translate="no" class="material-icons-round" id="add">
                        add_shopping_cart
                    </span>
                    <h3>Agregar</h3>
                </button>
      {/* { (showButton && history.location.pathname.includes('/detail') ) && <button
        onClick={()=>{history.push('/cart')}}
      >
        Finalizar compra
      </button>} */}
    </div>
  );
};

export default ItemCountDetail;
