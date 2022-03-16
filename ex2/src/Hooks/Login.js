import {useState} from 'react';
import {Form} from 'react-bootstrap';
import '../Asseste/Styles/Login.css'
import SubmitButton from './SubmitButton';
import {FaEye , FaEyeSlash} from 'react-icons/fa'


const Login = () => {
    const eye = <FaEye />;
    const noteye = <FaEyeSlash />;

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    
    const handleLoginSubmit = () =>{
        
    }

    return <Form className='p-4' onSubmit={handleLoginSubmit}>
        <h5 className='text-light my-4'>خوش آمدید</h5>
        <Form.Control 
            size='sm' 
            className='login inputEmail' 
            type="email" 
            placeholder="پست الکترونیکی" 
            required
        />
        <div className='inputpassword-div'>
        <Form.Control 
            size='sm' 
            className='login inputPassword my-4' 
            type={passwordShown ? "text" : "password"} 
            placeholder="کلمه عبور"
            required
        />
        <i onClick={togglePasswordVisiblity}>{passwordShown ? eye : noteye }</i>
        </div>
        <div className='row-flex'>
            <a href="#" class="link-forget mb-3">فراموش کردید ؟</a>
            <SubmitButton title={'ورود'}/>
        </div>
    </Form>
}

export default Login;