import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox ";
import ContactList from "./components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";

import { FaAddressBook } from "react-icons/fa";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { fetchContacts } from "./redux/contactsOps";
import { selectContacts } from "./redux/contactsSlice";

function App() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(fetchContacts({ signal: abortController.signal }));
    return () => {
      abortController.abort();
    };
  }, [dispatch]);

  // Отримуємо контакти при завантаженні додатка:
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <div>
      <div className="phonebook">
        <FaAddressBook className="iconTitle" />
        <h1>Phonebook</h1>
      </div>
      <ContactForm />
      {contacts.length > 0 && <SearchBox />}

      <ContactList />
    </div>
  );
}

export default App;
