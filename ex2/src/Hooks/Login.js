import React from 'react';
import {Form} from 'react-bootstrap';
import '../Asseste/Styles/Login.css'
import SubmitButton from './SubmitButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

const Login = () => {
    const eye = <FontAwesomeIcon icon={faEye} />;
    
    const { login, handleSubmit } = useForm();
    
    const onSubmit = data => {
        console.log(data);
    };
    
    return <Form className='p-4'>
        <h4 className='text-light my-4'>خوش آمدید</h4>
        <Form.Control 
            size='sm' 
            className='login inputEmail' 
            type="email" 
            placeholder="پست الکترونیکی" 
        />
        <div className='inputpassword-div'>
        <Form.Control 
            size='sm' 
            className='login inputPassword my-4' 
            type="password" 
            placeholder="کلمه عبور"
        />
        <i>{eye}</i>
        </div>
        <div className='row-flex'>
            <a href="#" class="link-forget mb-3">فراموش کردید ؟</a>
            <SubmitButton handle={handleSubmit(onSubmit)} title={'ورود'}/>
        </div>
    </Form>
}

export default Login;