import {combineReducers} from 'redux';

const itemsReducer = (state = [], { type, payload }) =>  {
    switch (type) {
        case "contacts/add":
            return [...state, payload];
        case "contacts/remove":
            return state = state.filter((el) => el.name.toLowerCase() !== payload.toLowerCase());
        default:
            return state;
    }
}

const filterReducer = (state = '', { type, payload }) => {
    switch (type) {
        case "contacts/filter":
            return state = payload;
        default: 
        return state;
    }
}

const contactsReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer
});

export default contactsReducer;