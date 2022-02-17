import { useContext } from "react";
import {PhonebookContext} from '../Context/Context';

const ContactsListItem = () => {

  const {filterFunc , removeName} = useContext(PhonebookContext);
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

export default ContactsListItem;