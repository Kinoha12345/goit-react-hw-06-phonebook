import PropTypes from "prop-types";
import { connect } from "react-redux"
import {removeName} from '../../redux/contacts/contactsAction.js';
const ContactsListItem = ({ filter, removeName }) => {
  return (
    <>
      {filter.map((contact) => (
        <li key={contact.id}>
          <p>
            {contact.name}:{contact.number}
          </p>
          <button
            type="button"
            onClick={(e) => {
              removeName(contact.name);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

ContactsListItem.prototypes = {
  filter: PropTypes.string.isRequired,
  removeName: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      contact: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const mapDispatchToProps = {
  removeName: removeName
}
export default connect(null,mapDispatchToProps)(ContactsListItem);
