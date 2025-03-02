import React from "react";
import { Field, Form, Formik, replace } from "formik";
import s from "../RegistrationPage/RegistrationPage.module.css";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
    dispatch(loginThunk(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome, ${res.user.name}`);
        navigate("/contacts", { replace: true });
      })
      .catch(() => toast.error("Invalid data. Try again."));
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
