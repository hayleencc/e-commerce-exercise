import { useContext } from 'react';
import './Modal.css'
import { Rating } from "../Filter/RatingFilter/Rating"
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { SearchContext } from '../../contexts/SearchContext';
import { CartButton } from '../Button';

function Modal () {
    const {
        setIsOpen,
        imageProduct,
        titleProduct,
        priceProduct,
        descriptionProduct,
        rateProduct,
        quantityProduct,
        maxQuantityProduct,
        setQuantityProduct
    } = useContext(SearchContext);

    const setCloseModal = () => {
        setIsOpen(false)
        setQuantityProduct(1)
    }

    return (
        <div className='ModalContainer'>
            <div className='ContentModalContainer'>
                <div className='ProductImageContainer'>
                    <AiOutlineCloseCircle className='closeModal' onClick={setCloseModal}/>
                    <img src={imageProduct} alt={titleProduct}/>
                </div>
                <div className="DetailsModalContainer">
                    <div className="HeaderDetailModalContainer">
                        <h3>{titleProduct}</h3>
                        <h3>${priceProduct}</h3>
                    </div>
                    <Rating stars={rateProduct}/>
                    <h6>{descriptionProduct}</h6>
                    <CartButton countProduct={quantityProduct} maxCountProduct={maxQuantityProduct} />
                </div>
            </div>
        </div>
    )
}

export { Modal }