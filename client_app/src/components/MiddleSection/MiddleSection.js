import { Component } from 'react';
import commonStyle from '../Common.module.css'
import Aside from '../Aside/Aside';
import styles from './MiddleSection.module.css';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Register from '../Register/Register'
import Login from '../Login/Login'


class MiddleSection extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={[commonStyle.siteWrapper, styles.middleSectionWrapper].join(" ")}>
                <Aside />
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </Switch>
            </div>
        );
    }
}

export default MiddleSection;