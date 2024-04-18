import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./constants";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: INITIAL_STATE,
    reducers: {
        addContact(state, action) {
            state.contacts.items = [...state.contacts.items, action.payload]
        },
        deleteContact(state, action) {
            state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload);
        }
    }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;