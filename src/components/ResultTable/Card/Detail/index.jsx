import { Rating } from "../../../Filter/RatingFilter/Rating"
import { CartButton } from "../../../Button"
import PropTypes from 'prop-types'
import './Detail.css'

function Detail({ title, price }) {
    return (
        <div className="DetailsCardContainer">
            <h3>{title}</h3>
            <Rating stars={3} />
            <h3>${price}</h3>
            <CartButton />
        </div>
    )
}

Detail.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
}

export { Detail }
