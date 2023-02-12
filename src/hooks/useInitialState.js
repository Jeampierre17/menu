import { useState } from "react"


const initialState = {
    card: [],

}
const useInitialState = (props) => {
// const [cart, setState] = useState(initialState);
    const [cart, setCart] = useState(initialState);
    const [total, setTotal] = useState(0);

    const addToCart = (item, qty) => {
       
       
        if (cart.card.some(el => el.id === item.id)) {
            console.log("ya hay un producto igual", cart.card.length)

            let index = cart.card.findIndex(el => el.id === item.id);
            let product = cart.card[index]
               
            product.qty = product.qty + 1;

            const newCart = [...cart.card];
            newCart.splice(index, 1, product);
        
            setCart({
                card: [...newCart]});
        
        } else {
            let producto = { ...item, qty };
            setCart({...cart,
                card: [ ...cart.card, producto]})
        }
    
    }

    const restToCart = (item, qty) => {
       
       
        if (cart.card.some(el => el.id === item.id)) {


            let index = cart.card.findIndex(el => el.id === item.id);
            let product = cart.card[index]
               
            product.qty = product.qty - 1;

            const newCart = [...cart.card];
            newCart.splice(index, 1, product);
        
            setCart({
                card: [...newCart]});

        }
    }

    const deleteCartById = (id) => {
        const newCart = [...cart.card];
        let index = newCart.findIndex(el => el.id === id);

        newCart.splice(index, 1);

        setCart({
            card:[...newCart]});
    }

    const deleteCart = () => {
        setCart([]);
    }

        





return {
    cart,
    setCart,
    addToCart,
    deleteCartById,
    deleteCart,
    cart,
    restToCart,
   
}
    
}

export default useInitialState;