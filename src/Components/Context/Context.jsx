import { createContext, useState, useEffect} from "react";
import { nanoid } from "nanoid";

export const PhonebookContext = createContext();

const PhonebookProvider = ({ children }) => {

    const [contacts, setContacts] = useState(() => {
        const localStorageData = JSON.parse(localStorage.getItem("contacts"));
        if (localStorageData) {
          return localStorageData;
        } else {
          return [];
        }
      });

      const [name, setName] = useState("");
      const [number, setNumber] = useState("");
      const [filter, setFilter] = useState("");
    
      useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts));
      }, [contacts]);
    
      const filterItems = (query) => {
        console.log(contacts);
        return contacts.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()) && item);
      };

      const removeName = (name) => setContacts(contacts.filter((el) => el.name.toLowerCase() !== name.toLowerCase()));
    
      const onInputValue = (e) => {
        const { name, value } = e.target;
        if (name === "name") {
            setName(value);
        } 
        if (name === "number") {
            setNumber(value);
        } 
        if (name === "filter") {
            setFilter(value);
        } 
      };
    
      const addContact = (contact) => {
        setContacts((prev) => [...prev, contact]);
      };

      const onBtnSubmit = (e) => {
        e.preventDefault();
        const newContact = {
          name,
          id: nanoid(),
          number,
        };

        const dubliCate = contacts.some((el) => el.name.toLowerCase() === name.toLowerCase());
        if (!dubliCate) {
          return addContact(newContact);
        } else {
          alert(`${name} alredy in contacts`);
        };
      }

      const filterFunc = filterItems(filter);
    return (
        <PhonebookContext.Provider value={{
            contacts,
            name,
            number,
            filter,
            filterFunc,
            filterItems,
            removeName,
            onInputValue,
            addContact,
            onBtnSubmit,
            }}>
            { children }
        </PhonebookContext.Provider>
    )
}


export default PhonebookProvider;