import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import s from "./RegistrationPage.module.css";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import { ErrorMessage } from "formik";
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required field")
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters"),
  email: Yup.string().email("Invalid email").required("Required field"),
  password: Yup.string()
    .required("Required field")
    .min(6, "Minimum 6 characters"),
});
const RegistrationPage = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    name: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values));
    options.resetForm();
  };
  return (
    <div>
      <h2>Registration Page</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={s.containerForm}>
          <label>
            <span>Name:</span>
            <Field name="name" />
            <ErrorMessage
              name="name"
              component="span"
              className={s.ErrorMessage}
            />
          </label>
          <label>
            <span>Email:</span>
            <Field name="email" type="email" />
            <ErrorMessage
              name="email"
              component="span"
              className={s.ErrorMessage}
            />
          </label>
          <label>
            <span>Password:</span>
            <Field name="password" type="password" />
            <ErrorMessage
              name="password"
              component="span"
              className={s.ErrorMessage}
            />
          </label>
          <button type="submit" className={s.btnRegister}>
            Register
          </button>
          <p>
            You already have an account <Link to="/login">Get IT!</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;
