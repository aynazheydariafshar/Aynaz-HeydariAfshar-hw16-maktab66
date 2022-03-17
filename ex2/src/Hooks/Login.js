import {Form} from 'react-bootstrap';
import '../Asseste/Styles/Login.css'
import Password from './Password';
import SubmitButton from './SubmitButton';


const Login = () => {
    const handleLoginSubmit = () =>{
        
    }

    return <Form className='p-4' onSubmit={handleLoginSubmit}>
        <h5 className='text-light my-4'>خوش آمدید</h5>
        <Password />
        <div className='row-flex'>
            <a href="#" class="link-forget mb-3">فراموش کردید ؟</a>
            <SubmitButton title={'ورود'}/>
        </div>
    </Form>
}

export default Login;