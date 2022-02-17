import { useContext } from "react";
import {PhonebookContext} from '../Context/Context';
import { connect } from 'react-redux';
import { removeName} from "../../redux/contacts/contactsAction";

const ContactsListItem = ({removeName}) => {

  const {filterFunc} = useContext(PhonebookContext);
  return (
    <>
      {filterFunc.map((contact) => (
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

const mapDispatchToProps = {
  removeName,
};


export default connect(null, mapDispatchToProps)(ContactsListItem);