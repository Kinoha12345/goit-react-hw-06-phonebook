import { useContext } from "react";
import {PhonebookContext} from '../Context/Context';

const FilterItems = () => {
    const { filter, onInputValue } = useContext(PhonebookContext);
    return ( <><input onChange={onInputValue} name="filter" value={filter}>
    </input></> );
}

export default FilterItems;