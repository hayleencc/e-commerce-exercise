import './Button.css'
import { IoIosRemoveCircleOutline, IoIosAddCircleOutline } from "react-icons/io";


function CartButton() {
    return (
        <div className="AddToCartContainer">
            <div className="QuantityContainer">
                <IoIosRemoveCircleOutline className='RemoveButton'/>
                <span className='QuantityCounter'>1</span>
                <IoIosAddCircleOutline className='AddButton'/>   
            </div>
            <button className="AddToCartButton">
                Add
            </button>
        </div>
    )
}

export { CartButton }