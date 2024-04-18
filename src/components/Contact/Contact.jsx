import { FaUserCircle } from "react-icons/fa";
import { HiPhone } from "react-icons/hi2";
import './Contact.css';
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";


const Contact = ({ userProps: { name, number }, id }) => {
    const dispatch = useDispatch();
    const handleDeleteUser = (id) => {
        dispatch(deleteContact(id));
    }
    return (
        <li className="user-item">
            <div className="user-info">
                <p className="userName"><FaUserCircle className="icon" />{name}</p>
                <p className="userNumber"><HiPhone className="icon" />{number}</p>
            </div>
            <button
                type="button"
                className="delete-btn"
                onClick={() => handleDeleteUser(id)}>Delete
            </button>
        </li>
    )
}

export default Contact