import React, { Fragment } from 'react'
import {api} from '../services/api'
import Portfolio from './Portfolio'
import { Route} from "react-router-dom";

class Profile extends React.Component {

state = {
    awards: [],
    marketNews: [],
    watchList: []
}

render() {
    console.log(this.props.currentUser)
    return (
        <Fragment>
            <h1>{this.props.currentUser.username}</h1>
           {/* <Route exact path="/portfolio" render={props => <Portfolio {...props} currentUser={this.props.currentUser} />}/> */}
    
        </Fragment>
    );
}

}

export default Profile;