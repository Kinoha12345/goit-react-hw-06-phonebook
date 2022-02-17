import PropTypes from 'prop-types';
import { connect} from "react-redux";
import { filterValue} from '../../redux/contacts/contactsAction';
const FilterItems = ({filter, filterValueProp}) => {
    return ( <><input onChange={(e) => {
        const { value } = e.target;
        filterValueProp(value)
    }} name="filter" >
    </input></> );
}
FilterItems.propTypes = {
    filter: PropTypes.string.isRequired,
}

const mapSTP = (state) => {
    console.log(state);
    return{
      contacts: state.contacts.items,
      filter: state.contacts.filter
    }
    
  }

  const mapDispatchToProps = {
    filterValueProp: filterValue
  }
export default connect(mapSTP, mapDispatchToProps)(FilterItems) ;