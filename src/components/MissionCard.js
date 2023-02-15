import React from 'react';
import propTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div
        data-testid="mission-card"
        className={ `w-1/4 border-solid border-2 border-slate-400
        rounded-md mx-1.5 mb-8 text-center` }
      >
        <div className="border-solid border-2 border-slate-400">
          <p
            data-testid="mission-name"
            className="text-xl font-medium"
          >
            { name }
          </p>
        </div>
        <p data-testid="mission-year">{ year }</p>
        <p data-testid="mission-country">{ country }</p>
        <p data-testid="mission-destination">{ destination }</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: propTypes.string,
  year: propTypes.number,
  country: propTypes.string,
  destination: propTypes.string,
}.isRequired;

export default MissionCard;
