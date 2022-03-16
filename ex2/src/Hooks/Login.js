import React from 'react';
import {Form} from 'react-bootstrap';
import '../Asseste/Styles/Login.css'
import SubmitButton from './SubmitButton';

const Login = () => {
    return <Form className='p-4'>
        <h4 className='text-light my-4'>خوش آمدید</h4>
        <Form.Control 
            size='sm' 
            className='inputEmail' 
            type="email" 
            placeholder="پست الکترونیکی" 
        />
        <Form.Control 
            size='sm' 
            className='inputPassword my-4' 
            type="password" 
            placeholder="کلمه عبور"
        />
        <div className='row-flex'>
            <a href="#" class="link-forget mb-3">فراموش کردید ؟</a>
            <SubmitButton title={'ورود'}/>
        </div>
    </Form>
}

export default Login;