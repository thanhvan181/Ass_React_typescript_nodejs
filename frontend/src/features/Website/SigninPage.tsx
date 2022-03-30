

import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { signin } from "../../api/auth";
import { authenticated } from '../../untils/localStoge'

type TypeInputs = {
    email: string,
    password: string,

}




const SigninPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TypeInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<TypeInputs> = async (datasignin) => {
        console.log("datasignin", datasignin)
        console.log(1)
        const { data } = await signin(datasignin);
       
        console.log(2)
        console.log("user,", data);
        // localstorage

        authenticated(data, () => {
            navigate('/');
        })
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

export default SigninPage
