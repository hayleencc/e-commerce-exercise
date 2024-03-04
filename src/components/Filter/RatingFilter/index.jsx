import { Rating } from './Rating'
import './RatingFilter.css'
import { useContext } from 'react';
import { SearchContext } from '../../../contexts/SearchContext';
import PropTypes from 'prop-types'



function RatingValue({ value, onClick }) {
    return (
      <div className='RatingValue' onClick={() => onClick(value)}>
        <Rating stars={value} />
      </div>
    );
  }

RatingValue.propsTypes = {
    value: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}

  

function RatingFilter ({ ratings }) {
    const { setSelectedRate} = useContext(SearchContext);

    return (
        <div className='RatingFilterContainer'>
            <h2>Rates:</h2>
            <div className='RatingsContainer'>
                {ratings.map((rating) => (
                    <RatingValue key={rating} value={rating} onClick={()=>setSelectedRate(rating)} />
                ))}
            </div>
        </div>
    )
}


RatingFilter.propsTypes = {
    ratings: PropTypes.array.isRequired,
}


export { RatingFilter }