import { memo} from "react";
import { Form } from "react-bootstrap";
import '../Asseste/Styles/ButtonChangePage.css'

const Button = () => {
    return <Form className="lr-form">
        <input type="radio" id="r-register" name="form-switch" value="register" />
        <label for="r-register">ثپت نام</label>
        <input type="radio" id="r-login" name="form-switch" value='login' checked />
        <label for="r-login">ورود</label>
    </Form>
}


export default memo(Button);