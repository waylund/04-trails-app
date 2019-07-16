/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles.css';

import HomePage from 'containers/HomePage';
import SubmissionForm from 'containers/SubmissionForm';
import ConfirmationPage from 'containers/ConfirmationPage';
import ConditionsList from 'containers/ConditionsList';
import ConditionDetails from 'containers/ConditionDetails';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/submit" component={SubmissionForm} />
        <Route exact path="/submit/confirmation" component={ConfirmationPage} />
        <Route exact path="/conditions" component={ConditionsList} />
        <Route exact path="/conditions/:conditionId" component={ConditionDetails} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
