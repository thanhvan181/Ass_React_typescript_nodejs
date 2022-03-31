import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { signIn } from '../AuthSlide';
import { useForm ,SubmitHandler} from 'react-hook-form';

type TypeInputs = {
    email: string;
    password: string;
   
  };

const Signin = () => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<TypeInputs>();
      
    
      const onSubmit: SubmitHandler<TypeInputs> = (data) => {
        console.log("data", data);
    
        dispatch(signIn(data));
       
      }
    return (
        <div className='signinpage'>
        <h2 className="text-h1">ĐĂNG NHÂP</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"  {...register('email')} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"  {...register('password')} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                {/* <Form.Check type="checkbox" label="Check me out" /> */}
                <Link to="/signup">Đăng ký</Link>
            </Form.Group>

            <Button variant="primary" type="submit">
                Đăng nhập
            </Button>
        </Form>
        </div>
    )
}

export default Signin
