import React from 'react';
import '../Asseste/Styles/SubmitButton.css'

const SubmitButton = ({title , handle}) => {
    return <div className="d-grid gap-2">
        <button className='btn-submit p-2 text-light' onclick={handle}>{title}</button>
    </div>;
}


export default SubmitButton;