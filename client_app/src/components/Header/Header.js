import {Component} from 'react';
import styles from '../Header/Header.module.css';
import commonStyle from '../Common.module.css';
import {Link} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props)
    }

    render(){

        let test = <h2 className={styles.User}>*Hello Guest*</h2>
        return(
            <div className={[styles.divHeaderWrapper].join(" ")}>
                <div className={[styles.header, commonStyle.siteWrapper].join(" ")}>
                    <h1 className={styles.headerTitle}>My Website</h1>
                    <nav className={styles.headerNav}>
                        <ul className={styles.headerUl}>
                            {test}
                            <li className={styles.headerLi}><Link className={styles.headerA} to="/register">Register</Link></li>
                            <li className={styles.headerLi}><Link className={styles.headerA} to="/login">Login</Link></li>
                            <li className={styles.headerLi}><a className={styles.headerA} href="#">AboutUs</a></li>
                            <li className={styles.headerLi}><a className={styles.headerA} href="#">ContactUs</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header;