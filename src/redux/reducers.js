import initUsers from "../db.json";

const INITIAL_STATE = {
    contacts: {
        items: initUsers
    },
    filters: {
        name: ""
    }
};

export const contactsReducers = (state = INITIAL_STATE.contacts.items, action) => {
    switch (action.type) {
        case "contacts/ADD_USER":
            return [...state, action.payload]
        case "contacts/DELETE_USER":
            return state.filter((contact) => {
                return contact.id !== action.payload;
            })
        default:
            return state;
    }
}

export const filtersReducers = (state = INITIAL_STATE.filters.name, action) => {
    switch (action.type) {
        case "filters/SET_FILTER":
            return action.payload
        default:
            return state
    }
}