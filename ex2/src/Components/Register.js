import {useState , useEffect} from 'react';
import { Form } from 'react-bootstrap';
import '../Asseste/Styles/Register.css'
import Success from './Modal/Success';
import Password from './Password';
import SubmitButton from './SubmitButton';


const Register = () => {
    const [select, stateselect] = useState('choose');
    const [selectCity, stateselectCity] = useState('chooseCity');
    const [selectSmalCity, stateselectSmalCity] = useState('chooseSmallCity');
    const [data, setdata] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const education = ['کاردانی', 'کارشناسی', 'کارشناسی ارشد', 'دکتری' , 'دیپلم'];

    const handleRegisterSubmit = (e) =>{
        e.preventDefault()
        if(selectCity === 'chooseCity' || selectSmalCity === 'chooseSmallCity'){
            alert('please choose select')
        }else{
            setShowModal(true)
        }
    }

    
    const fetchData = () => {
        fetch('/json/iranstates.json')
        .then((response) => response.json())
        .then((data) => {
            setdata(data);
        })
        .catch((error) => {
            alert('error from data')
        });
    };
    
    useEffect(() => {
        fetchData();
    }, [selectCity]);
    
    return <Form className='p-4' onSubmit={handleRegisterSubmit}>
        <h5 className='text-light my-4'>رایگان ثبت نام کنید</h5>
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
            className= 'register inputeducation my-4'
            type="text" 
            placeholder="محل تحصیل" 
            required
        />}
        <div className='row'>
            <div className='col-6'>
                <Form.Control 
                    className='register selectEducation' 
                    as="select"
                    onChange={e => {
                        stateselectSmalCity(e.target.value)
                    }}
                >
                <option value={'chooseSmallCity'}>شهرستان</option>
                {data[selectCity] !== undefined && data[selectCity].map((item) => (
                     <option value={item}>{item}</option>
                ))}
                </Form.Control>
            </div>
            <div className='col-6'>  
                <Form.Control 
                    className='register selectEducation' 
                    as="select"
                    onChange={e => {
                        stateselectCity(e.target.value)
                    }}
                >
                <option value={'chooseCity'}>استان</option>
                {Object.keys(data).map((item,idx) => (
                    <option value={item}>{item}</option>
                ))}
                </Form.Control>
            </div>
        </div>    
        <Password />
        <SubmitButton title={'ثبت نام'}/>
        <Success
            show={showModal}            
            onHide={() => setShowModal(false)}
        />
    </Form>;
}


export default Register;