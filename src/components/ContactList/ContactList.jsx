import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import './ContactList.css';

const ContactList = () => {
    const users = useSelector(state => state.contacts.contacts.items);
    const filterUsers = useSelector(state => state.filters.filters.name);

    //фільтрація йде тільки коли в полі пошуку введені данні, коли воно пусте, то показуються усі користувачі 
    const visibleUsers =
        users.filter(user => {
            return user.name.toLowerCase().includes(filterUsers.toLowerCase());
        })
    return (
        <ul className="user-list">
            {visibleUsers.map(({ id, ...userProps }) => {
                return <Contact key={id} userProps={userProps} id={id} />
            })}
        </ul>
    )
}

export default ContactList;