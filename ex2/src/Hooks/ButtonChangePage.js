import {memo} from "react";
import '../Asseste/Styles/ButtonChangePage.css'


const Button = ({clickregister,clicklogin,checkitlogin,checkitregister}) => {
    return <div className="lr-form">
        <input 
            type="radio" 
            id="r-register" 
            name="form-switch" 
            value="register"  
            onClick={clickregister}
            checked = {checkitregister}
        />
        <label for="r-register">ثپت نام</label>

        <input 
            type="radio" 
            id="r-login" 
            name="form-switch" 
            value='login' 
            onClick={clicklogin}
            checked = {checkitlogin}
        />
        <label for="r-login">ورود</label>
    </div>
}

export default memo(Button);