import { TypeFilter } from './TypeFilter'
import { RatingFilter } from './RatingFilter'
import { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';

import './Filter.css'

function Filter () {
    const {modifyingCategories} = useContext(SearchContext);
    return (
        <div className='FilterContainer'>
            <TypeFilter
                name='Category'
                options={[
                    {id: "men's clothing", label: "Men's Clothing"},
                    {id: "women's clothing", label: "Women's Clothing"},
                    {id: "jewelery", label: "Jewelery"},
                    {id: "electronics", label: "Electronics"}
                ]}
                onCategoryChange={modifyingCategories}
            />
            <RatingFilter />
        </div>
    )
}

export { Filter }