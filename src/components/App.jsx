import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import '../styles/style.css';
import Landing from './Landing';
import Find from './Find';
import Direction from './Direction'



const App = () => {
    return (
        <Router>
            <Fragment>
                <Route exact path='/' component={Landing} />
                <Route exact path='/find' component={Find} />
                <Route exact path='/direction' component={Direction} />
            </Fragment>
        </Router>
    )
}

export default App
