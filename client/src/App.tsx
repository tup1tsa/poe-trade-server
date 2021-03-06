import * as React from 'react';
// import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { LatestId } from './components/LatestId';
import { Home } from './components/Home';
import { CurrencyRates } from './components/CurrencyRates';
import { ModifiersFilter } from './components/ModifiersFilter';

export const App = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/fetch-id">Latest Id</Link></li>
                <li><Link to="/currency-rates">Currency rates</Link></li>
                <li><Link to="/modifiers-filter">Modifiers filter</Link></li>
            </ul>
            <hr />
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/fetch-id" component={LatestId} />
            <Route exact={true} path="/currency-rates" component={CurrencyRates} />
            <Route exact={true} path="/modifiers-filter" component={ModifiersFilter}/>

        </div>
    </Router>
);
