import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import BoxColor from './components/BoxColor';
import Greetings from './components/Greetings';
import Random from './components/Random.js';

function App() {
  return (
    <div className="App">
      <h1>Ejercicio React</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings lang="en">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <BoxColor r={255} g={0} b={0} class="border border-dark m-2 d-flex p-1">
        rgb(255,0,0)
      </BoxColor>
      <BoxColor r={128} g={255} b={0} class="border border-dark m-2 d-flex p-1">
        rgb(128,255,0)
      </BoxColor>
    </div>
  );
}

export default App;
