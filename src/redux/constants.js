import initData from "../db.json";

export const INITIAL_STATE = {
    contacts: {
        items: initData
    },
    filters: {
        name: ""
    }
}