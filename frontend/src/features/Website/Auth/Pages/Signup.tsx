import React, { useEffect } from "react";

import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../AuthSlide";
import { useNavigate } from 'react-router-dom';
import { is } from "immer/dist/internal";

type TypeInputs = {
  email: string;
  password: string;
  name: String;
};

const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state: any) => state.user.userInfo)
  const isAuthenticated = useSelector((state: any) => state.user.isAuthenticated)
  const accessToken = useSelector((state: any) => state.user.accessToken)


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeInputs>();


  const onSubmit: SubmitHandler<TypeInputs> = (data) => {
    console.log("data", data);

    dispatch(signUp(data));
    console.log("CurrentUSr: ", userInfo, isAuthenticated)
    if (Object.keys(userInfo).length !== 0 && !isAuthenticated) {
      navigate('/signin')
    } else {
      navigate('/')
    }
  };

  // useEffect(() => {
  //   if (isAuthenticated && accessToken !== null) {
  //     console.log("NAV: ", isAuthenticated, accessToken)
  //     navigate('/')
  //   }
  // }, [accessToken, isAuthenticated])

  return (
    <div>
      <div className="signinpage">
        <h2 className="text-h1">ĐĂNG KÝ</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tên đăng nhập </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter tên "
              {...register("name")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Địa chỉ Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            {/* <Form.Check type="checkbox" label="Check me out" /> */}
            <Link to="/signin">Đăng nhập </Link>
          </Form.Group>

          <Button variant="primary" type="submit">
            Đăng Ký
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignupPage;
