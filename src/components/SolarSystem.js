import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="planetas" />
        {planets.map(({ name, image }) => (
          <PlanetCard
            data-testid="planet-card"
            key={ name }
            planetName={ name }
            planetImage={ image }
          />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
