
import React, {useContext, useEffect, useState} from 'react';
import AppContext from '../context/AppContext';
import { getAllProductsFromDB } from '../data/getData';
import Productos from '../view/products';




const ProductSlade = ({item}) => {

    const cartContext = useContext(AppContext);
    const { addToCart} = cartContext;
    const [products, setProducts] = useState([]);

    useEffect(() => {
      getAllProductsFromDB(setProducts);
    }, []);


        return (
          
        <div>   
   
<section id="product1" class="section-p1">
    <h2>Productos Destacados</h2>
    <p>Modelos para todos tus momentos </p>
    <div class="pro-container">
                    {
                    
                    products.slice(0, 4).map((product) => {
                         
                            
                                
                                return( <Productos require img={product.img} categoria={product.categoria} nombre={product.nombre} price={product.price} id={product.id}>

                                </Productos>);  
                            })
                            }
                    
                    </div>
 
</section>


</div>
)
        
}

export default ProductSlade;