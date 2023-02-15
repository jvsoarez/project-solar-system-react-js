import React from 'react';
import propTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className="w-full">
        <div className="text-center">
          <p data-testid="planet-name">{ planetName }</p>
        </div>
        <div className="flex h-full items-center">
          <div className="mx-auto">
            <img id={ planetName } src={ planetImage } alt={ `Planeta ${planetName}` } />
          </div>
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: propTypes.string,
  planetImage: propTypes.string,
}.isRequired;

export default PlanetCard;
