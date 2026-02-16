import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import FindMatches from './pages/FindMatches';
import ProposeMatch from './pages/ProposeMatch';
import HowItWorks from './pages/HowItWorks';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Landing} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/find-matches' component={FindMatches} />
                <Route path='/propose-match' component={ProposeMatch} />
                <Route path='/how-it-works' component={HowItWorks} />
                <Route path='/profile' component={Profile} />
                <Route path='/settings' component={Settings} />
            </Switch>
        </Router>
    );
};

export default App;