import { Component } from 'react';
import styles from '../Register/Register.module.css';
import {Link} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    render() {
        return (
            <div>
                <form className={styles.registerFormWrapper}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name='username' id='username' />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                    <button>Register</button>
                    <p className={styles.message}>If you not have account, you can be register <Link to="/register" >Here</Link></p>
                </form>
            </div>

        );
    }
}

export default Login