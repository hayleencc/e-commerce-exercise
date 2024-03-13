import { useContext } from 'react';
import { Detail } from './Detail'
import { SearchContext } from '../../../contexts/SearchContext';
import './Card.css'
import PropTypes from 'prop-types'

function Card({ image, title, price, description, rating }) {
    const {
        setIsOpen,
        setImageProduct,
        setTitleProduct,
        setPriceProduct,
        setDescriptionProduct,
        setRateProduct
    } = useContext(SearchContext);

    const openModal = () => {
        setIsOpen(true)
        setImageProduct(image)
        setTitleProduct(title)
        setPriceProduct(price)
        setDescriptionProduct(description)
        setRateProduct(rating)
    }

    return (
        <div className='CardContainer' onClick={openModal}>
            <div className='ProductImageContainer'>
                <img src={image} alt={title}/>
            </div>
            <Detail
                title={title}
                price={price}
                rating={rating}
            />
        </div>
    )
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
}

export { Card }