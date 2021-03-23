import {Component} from 'react';
import styles from '../Header/Header.module.css';
import commonStyle from '../Common.module.css';

class Header extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={[styles.divHeaderWrapper].join(" ")}>
                <div className={[styles.header, commonStyle.siteWrapper].join(" ")}>
                    <h1 className={styles.headerTitle}>My Website</h1>
                    <nav className={styles.headerNav}>
                        <ul className={styles.headerUl}>
                            <li className={styles.headerLi}><a className={styles.headerA} href="#">Register</a></li>
                            <li className={styles.headerLi}><a className={styles.headerA} href="#">Login</a></li>
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