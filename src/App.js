import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <main className="bg-[url('./images/background.png')]">
        <Header />
        <SolarSystem />
        <Missions />
      </main>
    );
  }
}

export default App;
