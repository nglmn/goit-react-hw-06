import { useDispatch, useSelector } from 'react-redux';
import './SearchBox.css';

const SearchBox = () => {
    const filterUsers = useSelector(state => state.filters);
    const dispatch = useDispatch();

    function showFilteredUsers(e) {
        const action = { type: "filters/SET_FILTER", payload: e.target.value }
        dispatch(action);
    }

    return (
        <div className="search-bar">
            <label htmlFor="search" className='search-label'>Find contacts by name</label>
            <input
                type="text"
                name="search"
                className='search-input'
                value={filterUsers}
                onChange={showFilteredUsers} />
        </div>
    )
}

export default SearchBox;