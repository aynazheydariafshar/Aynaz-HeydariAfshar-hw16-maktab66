import {useState} from 'react';
import {FaEye , FaEyeSlash} from 'react-icons/fa'
import {Form} from 'react-bootstrap';
import '../Asseste/Styles/Login.css'

const Password = () => {
    const eye = <FaEye />;
    const noteye = <FaEyeSlash />;

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    
    return <>
        <Form.Control 
            size='sm' 
            className='login inputEmail my-4' 
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
    </>;
}


export default Password;