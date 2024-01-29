import { Rating } from "../../../Filter/RatingFilter/Rating"
import { CartButton } from "../../../Button"
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

export { Detail }
