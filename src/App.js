import "./App.css";
import Form from "./Components/Form/Form";
import ContactsListItem from "./Components/ContactsListItem/ContactsListItem";
import FilterItems from "./Components/FilterItems/FilterItems";


const App = () => {
  return (
    <>
      <h1>PhoneBook</h1>
      <Form  />
      <h2>Contacts</h2>
      <FilterItems />
      <ul>
        <ContactsListItem  />
      </ul>
    </>
  );
};

export default App;
