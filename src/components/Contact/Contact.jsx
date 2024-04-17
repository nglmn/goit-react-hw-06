import { FaUserCircle } from "react-icons/fa";
import { HiPhone } from "react-icons/hi2";
import './Contact.css';
import { useDispatch } from "react-redux";

const Contact = ({ userProps: { name, number }, id }) => {
    const dispatch = useDispatch();
    const handleDeleteUser = (id) => {
        const action = { type: "contacts/DELETE_USER", payload: id }
        dispatch(action);
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