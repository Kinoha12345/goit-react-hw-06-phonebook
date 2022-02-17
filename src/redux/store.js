import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import contactsReducer from './contacts/contactsReduser'

const rootReducer = combineReducers({
    contacts: contactsReducer,
})

const store = createStore(rootReducer, composeWithDevTools());

console.log("store :>> ", store);

export default store;