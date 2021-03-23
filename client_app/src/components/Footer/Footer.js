import {Component} from 'react';
import styles from '../Footer/Footer.module.css';
import commonStyle from '../Common.module.css';

class Footer extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={[styles.footerWrapper].join(" ")}>
                 <div className={[styles.footerDiv,commonStyle.siteWrapper].join(" ")}>My Website Footer</div>
            </div>

        );
    }
}

export default Footer;