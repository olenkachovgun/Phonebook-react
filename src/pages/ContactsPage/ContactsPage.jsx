import React, { useEffect } from "react";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox ";
import { FaAddressBook } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(fetchContacts({ signal: abortController.signal }));
    return () => {
      abortController.abort();
    };
  }, [dispatch]);
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
};

export default ContactsPage;
