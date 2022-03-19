import {Form} from 'react-bootstrap';
import '../Asseste/Styles/Login.css'
import Success from './Modal/Success';
import Password from './Password';
import SubmitButton from './SubmitButton';
import { useState } from 'react';


const Login = () => {
    const [showModal, setShowModal] = useState(false);

    const handleLoginSubmit = () =>{
        setShowModal(true)
        console.log(showModal)
    }

    return <Form className='p-4' onSubmit={handleLoginSubmit}>
        <h5 className='text-light my-4'>خوش آمدید</h5>
        <Password />
        <div className='row-flex'>
            <a href="#" class="link-forget mb-3">فراموش کردید ؟</a>
            <SubmitButton title={'ورود'}/>
        </div>
        <Success
            show={showModal}            
            onNo={() => setShowModal(false)}
        />
    </Form>
}

export default Login;