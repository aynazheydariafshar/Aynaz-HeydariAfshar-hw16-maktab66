import { memo} from "react";
import '../Asseste/Styles/Button.css'

const Button = () => {
    return <form className="lr-form">
        <input type="radio" id="r-login" name="form-switch" value='login' checked />
        <label for="r-login">ورود</label>
        <input type="radio" id="r-register" name="form-switch" value="register" />
        <label for="r-register">ثپت نام</label>
    </form>
}


export default memo(Button);