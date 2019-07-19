import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import '../styles/style.css';
import Landing from './Landing';
import Find from './Find';



const App = () => {
    return (
        <Router>
            <Fragment>
                <Route exact path='/' component={Landing} />
                <Route exact path='/find' component={Find} />
            </Fragment>
        </Router>
    )
}

export default App
