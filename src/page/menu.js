import React , {useContext, useState} from 'react';
import productList from '../data/productList';
import Productos from "../view/products";
import AppContext from '../context/AppContext';
import ProductoItem from "../view/productItem";



export default function Menu() {
  const { addToCart, cart, deleteCartById, restToCart } = useContext(AppContext);
  const [cant, setcant] = useState(cart.card.length);
  const [link, setLink] = useState(false);
  const onChangeLinkMenu = function () {
    setLink(!link);
}

function addToCant(cant) {
 return setcant;
}

const sumaTotal = () => {
    const reducer = (accumalator,  currentValue) => accumalator + currentValue.price*currentValue.qty;
    const sum = cart.card.reduce(reducer, 0)
    return sum;
}

const onChangeActive = event => {
  document.querySelectorAll('.activeNav').forEach(function (item) { item.classList.remove('activeNav'); });
  // 👇️ toggle class on click
  event.currentTarget.classList.add('activeNav');

}
const [categoria, setCategoria] = useState("todos");

const elementosFiltrados = productList.filter(
  elemento => categoria === "todos" || elemento.categoria === categoria
);


  return (

    <section id="menu" class="menu section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Menú</h2>
          <p>Selecciona tu Menú</p>
        </div>
       

        <div class="row" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-12 d-flex justify-content-center">
                         
            <ul id="menu-flters">


              <li className={categoria === "Entradas" ? "filter-active" : ""} onClick={() => setCategoria("Entradas")}>Entradas</li>
              <li className={categoria === "Principal" ? "filter-active" : ""} onClick={() => setCategoria("Principal")}>Principal</li>
              <li className={categoria === "Postres" ? "filter-active" : ""} onClick={() => setCategoria("Postres")}>Postres</li>
              <li className={categoria === "Bebidas" ? "filter-active" : ""} onClick={() => setCategoria("Bebidas")}>Bebidas</li>
              <li className={categoria === "todos" ? "filter-active" : ""} onClick={() => setCategoria("todos")}>Todos</li>
            </ul>
          </div>
        </div>
            
        <div id="pfilter" class="row menu-container" data-aos="fade-up" data-aos-delay="200">
          { elementosFiltrados.map((product => {

              return <Productos require img={product.img} categoria={product.categoria} nombre={product.nombre} price={product.price} ingredients={product.ingredients} id={product.id}></Productos>;  
                              })
                          )  }       
      </div>
     
    </div>
    {cart.card.length > 0 ? 

    <div id='inf'>
       <button className='total' onClick={onChangeLinkMenu}>   <p class="subtotal pedido">Ver Pedido ({  cart.card.length })</p><strong/>
                <p class="subtotal cartTotal pedido">$ {sumaTotal()}</p></button>
    </div>: null}

    <div id="mobile">
                            <li><span id="shopMobile"><span class="material-icons-outlined">shopping_bag</span></span></li>
                            <li> <span id="bar" class="material-icons-outlined">
                                subject
                            </span></li>

                        </div>
                        <div id="context">
                            <ul id="carrito" class={link ? "active":""  }>
                                <li class="cabezal">
                                    <span id="closeCar" onClick={onChangeLinkMenu} ><span translate="no" class="material-icons-outlined">
                                        close
                                    </span></span> <span href="" id="title">
                                        <h4>Mi Pedido</h4>
                                    </span> <span ></span>
                                </li>

                               <ul id="pedido">
                                        <ProductoItem></ProductoItem>
                               </ul>
                                    
                                  
                              

                                


                            </ul>
                            <div class={link ? "opacar visible" : "opacar "}></div>
                        </div>
  
      </section >  

      
    )
}