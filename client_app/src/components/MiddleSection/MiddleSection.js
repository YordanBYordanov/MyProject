import {Component} from 'react';
import commonStyle from '../Common.module.css'
import Aside from '../Aside/Aside';
import styles from './MiddleSection.module.css';

class MiddleSection extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={[commonStyle.siteWrapper, styles.middleSectionWrapper].join(" ")}>
                <Aside />
            </div>
        );
    }
}

export default MiddleSection;