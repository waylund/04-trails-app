/**
 *
 * ConditionDetails
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { NavLink } from 'react-router-dom';
import './styles.css';

import injectReducer from 'utils/injectReducer';
import { mockConditionDetails } from '../../utils/mockData';
import makeSelectConditionDetails from './selectors';
import reducer from './reducer';
import mountains from '../../images/mountain-range.svg';

/* eslint-disable react/prefer-stateless-function */
export class ConditionDetails extends React.Component {
  render() {
    const { trailName, description, image, location } = mockConditionDetails;

    return (
      <div className="condition-details">
        <Helmet>
          <title>ConditionDetails</title>
          <meta name="description" content="Description of ConditionDetails" />
        </Helmet>
        <h1 className="condition-details__header">Condition Details</h1>
        <div
          style={{
            backgroundImage: `url(${mountains})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="condition-details__icon"
        />
        <h4 className="condition-details__sub-header">{trailName}</h4>
        <img src={image.url} alt={image.description} className="condition-details__trail-image" />
        <p className="condition-details__description">
          <strong>Trail description:</strong> {description}
        </p>
        <p className="condition-details__location">
          <strong>Location: </strong>
          {location}
        </p>
        <NavLink className="condition-details__link" to="/conditions">
          Return to List
        </NavLink>
      </div>
    );
  }
}

ConditionDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  conditionDetails: makeSelectConditionDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'conditionDetails', reducer });

export default compose(
  withReducer,
  withConnect,
)(ConditionDetails);
