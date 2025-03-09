import React from "react";
import s from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { IoPersonAddSharp } from "react-icons/io5";
import { addContact, editContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

const ContactForm = ({ initialValues, text = "Add", closeModal }) => {
  const patternNumber = /^(\d{3}-\d{3}-\d{4}|\d{10})$/;
  const patternName = /^[A-Za-zА-Яа-яЇїІіЄєҐґ ]+$/;

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required")
      .matches(patternName, "Only letters!"),
    number: Yup.string()
      .required("Required")
      .matches(patternNumber, "Format is not correct! XXX-XXX-XXXX"),
  });

  const defaultValues = {
    id: "",
    name: "",
    number: "",
  };
  const dispatch = useDispatch();

  const onSubmit = (values, action) => {
    if (values.id) {
      // Викликаємо editContact, якщо id вже існує
      dispatch(editContact(values));
      toast.success(`Contact "${values.name}" is editted!`);
      closeModal();
    } else {
      // Створюємо новий контакт, якщо id немає
      const newContact = {
        name: values.name,
        number: values.number,
      };
      dispatch(addContact(newContact));
      toast.success(`New contact "${values.name}" added!`);
    }
    action.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues || defaultValues}
        onSubmit={onSubmit}
        validationSchema={FeedbackSchema}
        enableReinitialize={true}
      >
        <Form className={s.containerForm}>
          <label>
            Name
            <Field type="text" name="name" placeholder="Enter name" />
            <ErrorMessage className={s.error} name="name" component="span" />
          </label>
          <label htmlFor="number">
            Number
            <Field
              type="tel"
              name="number"
              placeholder="Enter phone XXX-XXX-XXXX"
            />
            <ErrorMessage className={s.error} name="number" component="span" />
          </label>
          <button className={s.btnAddContact} type="submit">
            <IoPersonAddSharp />
            {text} contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
