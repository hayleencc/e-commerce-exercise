import { Rating } from "../../../Filter/RatingFilter/Rating"
import './Detail.css'

function Detail({ title, price }) {
    return (
        <div className="DetailsCardContainer">
            <h3>{title}</h3>
            <Rating stars={3} />
            <h3>${price}</h3>
            <div className="AddToCartContainer">
                <button className="AddToCartButton">
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export { Detail }
