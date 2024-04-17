import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

import './App.css';

const App = () => {
  return (
    <div className="phonebook">
      <h1>Phonebook</h1>
      <div className="app-interface">
        <div className="form-panel">
          <ContactForm />
          <SearchBox />
        </div>
        <ContactList />
      </div>
    </div>
  )
}

export default App;