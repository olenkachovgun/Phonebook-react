import { Suspense, lazy, useState } from "react";
import { resetFilter } from "../../redux/filters/slice";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { editContact } from "../../redux/contacts/operations";
import {
  selectContacts,
  selectFilteredContacts,
} from "../../redux/contacts/selectors";
import s from "./ContactLst.module.css";
const ContactForm = lazy(() => import("../ContactForm/ContactForm"));
const Modal = lazy(() => import("../Modal/Modal"));

const ContactList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState(null);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const filterData = useSelector(selectFilteredContacts);

  const handleSubmit = (values, options) => {
    console.log(values);
    if (item) {
      dispatch(editContact({ id: item.id, ...values }));
      options.resetForm();
      closeModal();
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setItem(null);
  };

  return (
    <ul className={s.listItem}>
      {filterData.map((item) => (
        <Contact
          key={item.id}
          {...item}
          edit={() => {
            setItem(item);
            setIsOpen(true);
          }}
        />
      ))}

      {filterData.length === 0 && contacts.length !== 0 && (
        <>
          <p>Not found</p>
          {/* //{toast.error("Not found. Try again...")}; */}
          <button
            onClick={() => dispatch(resetFilter())}
            type="button"
            className="btnReset"
          >
            Reset
          </button>
        </>
      )}
      {isOpen && (
        <Suspense fallback={<p>Loading...</p>}>
          <Modal closeModal={closeModal}>
            <ContactForm
              text="Edit"
              initialValues={item}
              handleSubmit={handleSubmit}
              closeModal={closeModal}
            />
          </Modal>
        </Suspense>
      )}
    </ul>
  );
};
export default ContactList;
