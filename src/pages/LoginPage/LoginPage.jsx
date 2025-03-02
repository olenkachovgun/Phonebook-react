import React from "react";
import { Field, Form, Formik } from "formik";
import s from "../RegistrationPage/RegistrationPage.module.css";

const LoginPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };
  return (
    <div>
      <h2>Login Page</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.containerForm}>
          <label>
            <span>Email:</span>
            <Field name="email" />
          </label>
          <label>
            <span>Password:</span>
            <Field name="password" type="password" />
          </label>
          <button type="submit" className={s.btnRegister}>
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
