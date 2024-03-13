import { Rating } from "../../../Filter/RatingFilter/Rating"
import { CartButton } from "../../../Button"
import PropTypes from 'prop-types'
import './Detail.css'

function Detail({ title, price, rating }) {
    return (
        <div className="DetailsCardContainer">
            <h3>{title}</h3>
            {rating && <Rating stars={rating} />}
            <h3>${price}</h3>
            <CartButton />
        </div>
    )
}

Detail.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number
}

export { Detail }
