import './SortFilter.css'
import { useContext } from 'react';
import { SearchContext } from '../../../contexts/SearchContext';

function SortFilter () {
    const {
        setOrder,
    } = useContext(SearchContext);
    const handleSetOrderChange = (event) => {
        setOrder(event.target.value);
    }

    return (
        <div className='SortFilterContainer'>
            <select name="order" id="order" onChange={handleSetOrderChange} > 
                <option value="Name">Name</option>
                <option value="Price_Low">Price: Low to High</option>
                <option value="Price_High">Price: High to Low</option>
            </select>
        </div>
    )
}

export { SortFilter }
