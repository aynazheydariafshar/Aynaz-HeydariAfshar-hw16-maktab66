import {useState , useEffect} from 'react';
import { Form, FormControl } from 'react-bootstrap';
import '../Asseste/Styles/Register.css'


const Register = () => {
    const [select, stateselect] = useState('choose');

    const education = ['کاردانی', 'کارشناسی', 'کارشناسی ارشد', 'دکتری' , 'دیپلم'];

    const handleRegisterSubmit = () =>{
            
    }

    return <Form className='p-4' onSubmit={handleRegisterSubmit}>
        <h5 className='text-light my-4'>رایگان ثپت نام کنید</h5>
        <div className='row'>
            <div className='col-6'>
                <Form.Control 
                    size='sm' 
                    className='register inputName' 
                    type="text" 
                    placeholder="نام خانوادگی" 
                    required
                />
            </div>
            <div className='col-6'>
                <Form.Control 
                    size='sm' 
                    className='register inputLastName ' 
                    type="text" 
                    placeholder="نام" 
                    required
                />
            </div>
        </div>
        <Form.Control 
            className='register my-4' 
            as="select"
            onChange={e => {
                stateselect(e.target.value)
            }}
        >
        <option value={'choose'}>تحصیلات</option>
        {education.map((item,idx) => (
            <option value={idx}>{item}</option>
        ))}
        </Form.Control>
        {select !== 'choose' && <Form.Control 
            size='sm' 
            className= 'register inputeducation'
            type="text" 
            placeholder="محل تحصیل" 
            required
        />}
    </Form>;
}


export default Register;