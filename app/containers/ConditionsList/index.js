/**
 *
 * ConditionsList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import ConditionThumbnail from '../../components/ConditionThumbnail/index';

import makeSelectConditionsList from './selectors';
import { getConditions } from './actions';
import reducer from './reducer';

/* eslint-disable react/prefer-stateless-function */
export class ConditionsList extends React.Component {
  componentDidMount = () => {
    this.props.getConditions();
  };

  render() {
    const { conditions } = this.props.conditionsList;
    console.log('CONDITIONS: ', conditions);

    return (
      <div>
        <Helmet>
          <title>ConditionsList</title>
          <meta name="description" content="Description of ConditionsList" />
        </Helmet>
        <h1>Conditions List</h1>
        {!conditions.length ? (
          <h2>No conditions found</h2>
        ) : (
          conditions.map(condition => (
            <ConditionThumbnail
              key={condition.date}
              photo={condition.photo}
              description={condition.description}
              location={condition.location}
            />
          ))
        )}
      </div>
    );
  }
}

ConditionsList.propTypes = {
  getConditions: PropTypes.func.isRequired,
  conditionsList: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  conditionsList: makeSelectConditionsList(),
});

function mapDispatchToProps(dispatch) {
  return {
    getConditions: () => dispatch(getConditions()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'conditionsList', reducer });

export default compose(
  withReducer,
  withConnect,
)(ConditionsList);
