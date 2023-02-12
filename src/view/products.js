import React , {useContext, useState} from 'react';
import { Link } from "react-router-dom";
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import ItemCount from '../components/itemCount';

export default function Productos(props) {
    

    const [qty, setQty] = useState(0);

    const { addToCard } = useContext(AppContext);

    const { addToCart} = useContext(AppContext);

return (
                <div class="col-lg-6 menu-item "  data-categoria={props.categoria}>
                   <Link to={`/detail/${props.id}`} style={{ textDecoration: 'none' }}> 
                   <img src={props.img} class="menu-img" /> <span class="categoria">{props.categoria}</span>
                  
                    <div  class="menu-content">
                        <a>{props.nombre} </a>  <span>$ {props.price}</span>
                    </div> </Link>
                    <div  class="menu-ingredients">
                        {props.ingredients}  <ItemCount img={props.img} categoria={props.categoria} nombre={props.nombre} price={props.price}  stock={props.stock} initial={1} id={props.id} />
                    </div>     
                </div>              
    )
}