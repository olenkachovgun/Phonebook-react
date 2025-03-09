import React from "react";
import { Field, Form, Formik } from "formik";
import s from "../RegistrationPage/RegistrationPage.module.css";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required field"),
  password: Yup.string()
    .required("Required field")
    .min(6, "Minimum 6 characters"),
});

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
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={s.containerForm}>
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
            Login
          </button>
          <p>
            You do not have account yet? <Link to="/register">Get IT!</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
