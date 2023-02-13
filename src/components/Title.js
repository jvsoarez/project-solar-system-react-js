import React from 'react';
import propTypes from 'prop-types';

class SolarSystem extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>{ headline }</h2>
    );
  }
}

SolarSystem.propTypes = {
  headline: propTypes.string,
}.isRequired;

export default SolarSystem;
