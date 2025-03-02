import { Field, Form, Formik } from "formik";
import React from "react";
import s from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  const initialValues = {
    email: "",
    name: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };
  return (
    <div>
      <h2>Registration Page</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.containerForm}>
          <label>
            <span>Name:</span>
            <Field name="name" />
          </label>
          <label>
            <span>Email:</span>
            <Field name="email" />
          </label>
          <label>
            <span>Password:</span>
            <Field name="password" type="password" />
          </label>
          <button type="submit" className={s.btnRegister}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;
