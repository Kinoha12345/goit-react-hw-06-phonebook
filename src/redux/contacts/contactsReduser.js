import {combineReducers} from 'redux';

const itemsReducer = (state = [{
    name: "AAAA",
    number: 24131231231,
    id: "1"
}], { type, payload }) =>  {
    switch (type) {
        case "contacts/add":
            return [...state, payload];
        case "contacts/remove":
            return state = state.filter((el) => el.name.toLowerCase() !== payload.toLowerCase());
        default:
            return state;
    }
}

// const filterReducer = (state = '', { type, payload }) => {
//     switch (type) {
//         case "contacts/filter":
//             return state = payload;
//         default: return state;
//     }
// }

const contactsReducer = combineReducers({
    items: itemsReducer,
});

export default contactsReducer;