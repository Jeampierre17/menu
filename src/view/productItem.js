import React , {useContext, useState} from 'react';
import { Link } from "react-router-dom";
import AppContext from '../context/AppContext';

export default function ProductoItem({props}) {

const { addToCart, cart, deleteCartById, restToCart } = useContext(AppContext);
//const [showError, setShowError] = useState(false);

const sumaTotal = () => {
    const reducer = (accumalator,  currentValue) => accumalator + currentValue.price*currentValue.qty;
    const sum = cart.card.reduce(reducer, 0)
    return sum;
}


let qty = 0; 
const rest = -1;

const revomeProdu = produ => {
    deleteCartById(produ);
    console.log(produ);
}


return (
 <> 
{
cart.card.map((props) => (

 <li id="cart" class="confirm">
    {}
        <div class="photo"><img src={props.img} alt="" /></div>
        <div class="boxes">
            <div class="detalles name">
                <h6>{props.nombre}</h6>
            </div>
            <div class="detalles interno">
                <div class='qty'>
                        <span   onClick={ () => {
                             if ( props.qty == 1) return;
                             // setShowError(true);
                             restToCart(props, -1);
                            }} 
                            // disabled={qty - props.qty <= 0 ? true :  false} 
                      class="material-symbols-outlined">
                            remove_circle_outline
                            </span>
                          
                    <span id="cantidad">{props.qty} </span>
                    
                         {/* onClick={() => addProduct(-1)}
                         disabled={qty === initial ? true : null} */}
                    
                    <span class="material-symbols-outlined"
                    onClick={ () => {
                        if ( props.qty === props.stock) return;
                          addToCart(props, 1);

                     
                    }}  disabled={props.stock - qty === 0 ? true : null}>
                    add_circle_outline
                    </span>

                </div>
                
                <h6 class="precio">${props.price*props.qty}</h6>
                <div class="delete" onClick={() => revomeProdu(props)} >
                <span class="material-symbols-outlined">
                highlight_off
                </span>
                </div>
            </div>
            { //showError && <p className='error-message'>No se puede restar más del stock disponible</p>
             }
        </div>
    </li>))}
    <ul>
        <li id="comprar">
            <h3 class="subtotal">Subtotal</h3><strong>
                <h3 class="subtotal cartTotal">${sumaTotal()}</h3>
            </strong><div id="comprar" class="duo">
                <button class="normal end second" id="add">
                        <h3>FINALIZAR COMPRAR</h3>
                    </button>
                    <button class="normal end" id="add">
                        <h4>CONTINUAR COMPRANDO</h4>
                    </button>
                    
                </div>
        </li></ul></>
        )

}