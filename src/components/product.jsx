
import React, {useContext, useEffect, useState} from 'react';
import AppContext from '../context/AppContext';
import { getAllProductsFromDB } from '../data/getData';
import Productos from '../view/products';
import ItemCount from './itemCount';
import ItemCountDetail from './itemCountDetail';
import ProductSlade from './productSlade';




const Product = ({item}) => {

    const cartContext = useContext(AppContext);
    const { addToCart} = cartContext;
    const [products, setProducts] = useState([]);

    useEffect(() => {
      getAllProductsFromDB(setProducts);
    }, []);


        return (
   item  ?       
        <div>  

            
    <section id="prodetails" class="section-p2">
    <div class="sigle-pro-image">
        <section id="imgCart">
            <img src={item.img} width="100%" id="MainImg" class="addimg" alt=""/></section>
        <div class="small-img-group">
            <div class="small-img-col">
                <img src="img/products/f1.jpg" width="100%" class="small-img" alt=""/>
            </div>
            <div class="small-img-col">
                <img src="img/products/f2.jpg" width="100%" class="small-img" alt=""/>
            </div>
            <div class="small-img-col">
                <img src="img/products/f3.jpg" width="100%" class="small-img" alt=""/>
            </div>
            <div class="small-img-col">
                <img src="img/products/f4.jpg" width="100%" class="small-img" alt=""/>
            </div>

        </div>
    </div>
   
    <div class="sigle-pro-details">
        <section class="addCart">
            <h4 class="title"> {item.nombre} </h4>
            <h2 class="price">{item.price}</h2>

            <select name="" id="">
                <option value="">Talla</option>
                <option value="">XL</option>
                <option value="">XXL</option>
                <option value="">Small</option>
                <option value="">Large</option>
            </select>
          <span>
                <input class="cant" type="number" value="1" min="1" max="9"/>
                <ItemCountDetail  stock={ItemCount.stock} initial={1}  Cont={2}/>
                   
           </span>
        </section>
        <div class="details">
            <div class="flota">
                <button class="btflotan"><span class="material-symbols-outlined">
                        credit_card
                    </span>
                    <div class="msflota pay">
                        <h5>Metodos de Pagos</h5>
                        <h6>3 Cuotas sin interes</h6>
                        <div class="flecha"></div>
                    </div>
                </button>
                <button class="btflotan"><span class="material-icons-outlined">
                        local_shipping
                    </span>
                    <div class="msflota ">
                        <h5>Envíos <strong>GRATIS</strong></h5>
                        <h6>Llega entre 48hs</h6>

                        <div class="flecha"></div>
                    </div>
                </button>


                <button class="btflotan"><span class="material-icons-outlined">
                        storefront
                    </span>
                    <div class="msflota second">
                        <h5>Retiro <strong>GRATIS</strong></h5>
                        <h6>Nuestras Sucursales</h6>
                        <div class="flecha "></div>
                    </div>
                </button>




            </div>
        </div>
       



        <h4>Detalles del Producto</h4>
        <span>Care for fiber: al menos 30% poliéster reciclado.

            Etiquetamos bajo el nombre Join Life las prendas que se producen utilizando tecnologías y materias
            primas que nos ayudan a reducir el impacto medioambiental de nuestros productos. </span>
    </div>
 
</section>
<ProductSlade></ProductSlade>


</div>: null
) 
        
}

export default Product;