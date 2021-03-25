import {Component} from 'react';
import styles from '../Register/Register.module.css';
import {Link} from 'react-router-dom';

class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            username : '',
            password : '',
            repeatPassword : ''
        }
    }

    

    render(){
        return(
            <form className={styles.registerFormWrapper}>
                <label htmlFor="username">Username:</label>
                <input name='username' id='username' />
                <label htmlFor="password">Password</label>
                <input name="password" id="password"/>
                <label htmlFor="repeatPassword">Repeat Password</label>
                <input name="repeatPassword" id="RepeatPassword"/>
                <button>Register</button>
                <p>If you have already account, you can be Login <Link to="/login" >Here</Link></p>
            </form>
        );
    }
}

export default Register

