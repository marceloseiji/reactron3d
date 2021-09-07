import React, { Fragment } from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.scss';

const Calculator = () => {
  return (
    <div className="baseCalculator">
      <div>some text</div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Calculator} />
      </Switch>
    </Router>
  );
}
