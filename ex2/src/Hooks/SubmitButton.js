import React from 'react';
import '../Asseste/Styles/SubmitButton.css'

const SubmitButton = ({title}) => {
    return <div className="d-grid gap-2">
        <button className='btn-submit p-2 text-light' type='submit'>{title}</button>
    </div>;
}


export default SubmitButton;