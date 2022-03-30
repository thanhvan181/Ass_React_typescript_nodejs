import React from 'react'

import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { signup } from '../../api/auth';

type TypeInputs = {
  email: string,
  password: string,
  name: String
}



const SignupPage = () => {
  const { register, handleSubmit, formState: { errors }} = useForm<TypeInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<TypeInputs> = data => {
    console.log("data", data);
    
    signup(data);
    navigate("/signin");
}
  return (
    <div>
      <div className='signinpage'>
        <h2 className="text-h1">ĐĂNG KÝ</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tên đăng nhập </Form.Label>
                <Form.Control type="text" placeholder="Enter tên " {...register('name')} />
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Địa chỉ Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" {...register('email')} />
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mật khẩu</Form.Label>
                <Form.Control type="password" placeholder="Password" {...register('password')} />
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
)
}

export default SignupPage