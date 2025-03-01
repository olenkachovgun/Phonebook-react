import { useDispatch, useSelector } from "react-redux";

import s from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";
//import { like } from "../../redux/contactsSlice";

import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import {
  deleteContact,
  editContact,
  updateLikeStatus,
} from "../../redux/contactsOps";
import toast from "react-hot-toast";

const Contact = ({ edit, name, number, id }) => {
  const dispatch = useDispatch();
  const item = useSelector((state) =>
    state.contacts.items.find((item) => item.id === id)
  );
  return (
    <li className={s.item}>
      <div>
        <div className={s.contact}>
          <div>
            <IoIosContact className={s.icon} />
          </div>
          <p>{name}</p>
        </div>
        <div className={s.contact}>
          <div>
            <FaSquarePhone className={s.icon} />
          </div>
          <p>{number}</p>
        </div>
      </div>
      <div className={s.contactBtn}>
        <button
          type="button"
          onClick={() => {
            dispatch(deleteContact(id));
            toast.error(`Contact "${name}" is deleted!`);
          }}
        >
          <MdDelete />
          <span>Delete</span>
        </button>
        <button type="button" onClick={edit}>
          <FaRegEdit />
          <span>Edit</span>
        </button>
        <button
          type="button"
          onClick={() => dispatch(updateLikeStatus({ id, like: !item.like }))}
          className={item.like ? s.like : s.nolike}
        >
          <IoMdHeart />
          <span>Like</span>
        </button>
      </div>
    </li>
  );
};

export default Contact;
