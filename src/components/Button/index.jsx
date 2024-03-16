import './Button.css'
import { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import { IoIosRemoveCircleOutline, IoIosAddCircleOutline } from "react-icons/io";


function CartButton({countProduct, maxCountProduct, titleProduct, priceProduct, imageProduct}) {
    const {
        setQuantityProduct,
        setIsOpen,
        setCartProducts,
        quantityProduct, 
        cartProducts,
        addProductToCart
    } = useContext(SearchContext);
    const addProduct = () => {
        if(countProduct < maxCountProduct) {
            setQuantityProduct(countProduct + 1)
        }
    }
    const removeProduct = () => {
        if(countProduct > 1) {
            setQuantityProduct(countProduct - 1)
        }
    }
    const addToCart = () => {
        setIsOpen(false)
        setQuantityProduct(1)
        addProductToCart(titleProduct, imageProduct, priceProduct, countProduct)
    }
    return (
        <div className="AddToCartContainer">
            <div className="QuantityContainer">
                <IoIosRemoveCircleOutline className='RemoveButton' onClick={removeProduct} />
                <span className='QuantityCounter'>{countProduct}</span>
                <IoIosAddCircleOutline className='AddButton' onClick={addProduct}/>   
            </div>
            <button className="AddToCartButton" onClick={addToCart}>
                Add
            </button>
        </div>
    )
}

export { CartButton }