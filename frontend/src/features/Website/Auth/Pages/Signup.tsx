import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";

import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { signUp } from "../AuthSlide";

type TypeInputs = {
  email: string;
  // password: string;
  // name: String;
};


const SignupPage = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state }));
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TypeInputs>();

  useEffect(() => {
    if (user && user.token) navigate("/");
  }, [user, navigate])
  const onSubmit: SubmitHandler<TypeInputs> = async (data) => {
    const settings = {
      url: import.meta.env.VITE_REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };
    // send email to user's account
    await sendSignInLinkToEmail(auth, data.email, settings);
    toast.success(
      `Email is send to ${data.email}. Click the link to complete your registration`,
    );
    window.localStorage.setItem("emailForRegistraion", data.email);
    reset();
  };

  const formRegister = () => (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        {...register("email")}
      />
      {errors.email && <p>invalid email address</p>}
      <button>Sign Up</button>
    </Form>
  );

  return (
    <div>
      <h1>Register</h1>
      <ToastContainer />
      {formRegister()}
    </div>
  );
};

export default SignupPage;
