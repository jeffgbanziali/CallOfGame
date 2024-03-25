import React, { useState } from 'react';
import './App.css';
import { Artilleur } from './class/Artilleur';
import { Medecin } from './class/Medecin';
import { Sniper } from './class/Sniper';
import FormComponent from './components/FormComponent/FormComponent';

function App() {


  const [teamRed, setTeamRed] = useState([
    /*new Artilleur('Gattuso', 'Bitooto', 'US', 'red'),
    new Artilleur('Smith', 'Jane', 'UK', 'red'),
    new Artilleur('Johnson', 'Michael', 'France', 'red'),*/
  ]);
  const [teamBlue, setTeamBlue] = useState([
    /*new Medecin('Jane', 'Smith', 'UK', 'blue'),
    new Medecin('Garcia', 'Emma', 'Germany', 'blue'),
    new Medecin('Kim', 'David', 'Japan', 'blue'),*/
  ]);


  const handleModifySoldier = (newCharacter) => {
    if (newCharacter.team === 'red') {
      setTeamRed([...teamRed, newCharacter]);
    } else if (newCharacter.team === 'blue') {
      setTeamBlue([...teamBlue, newCharacter]);
    }
  };


  const handleDeleteSoldier = (index, team) => {
    if (team === 'red') {
      const updatedTeamRed = [...teamRed];
      updatedTeamRed.splice(index, 1);
      setTeamRed(updatedTeamRed);
    } else if (team === 'blue') {
      const updatedTeamBlue = [...teamBlue];
      updatedTeamBlue.splice(index, 1);
      setTeamBlue(updatedTeamBlue);
    }
  };


  return (
    <div className="App">

      <h1>
        Ajouter un soldat
      </h1>
      <FormComponent onAddSoldier={handleModifySoldier} />

      <div className='game'>
        <h1>Les équipes</h1>

        <div className='team'>
          <div className='teamContainer'>
            <h2 className='team-red'>Team Red</h2>
            {teamRed.map((soldat, index) => (
              <div className='soldatCartRed'>
                <div className='textTeam' key={index}>
                  <h5>
                    {soldat instanceof Sniper ? "Sniper" :
                      soldat instanceof Artilleur ? "Artilleur" :
                        soldat instanceof Medecin ? "Medecin" : ""}
                  </h5>
                  <p>
                    nom : {soldat.firstname},
                    <br />
                    prenom : {soldat.lastname},
                    <br />
                    nationalité : {soldat.nationality},
                    <br />
                    pv : {soldat.pv},
                    <br />
                    armor : {soldat.armor},
                    <br />
                    damage : {soldat.damage}
                  </p>
                </div>
                <div
                  className='deleteButton'
                  onClick={() => handleDeleteSoldier(index, 'red')}>
                  <p>
                    Supprimer
                  </p>
                </div>
              </div>
            ))}
          </div>


          <div className='teamContainer'>
            <h2 className='team-blue'>Team Blue</h2>
            {teamBlue.map((soldat, index) => (
              <div className='soldatCartBlue' >
                <div className='textTeam' key={index}>
                  <h5>
                    {soldat instanceof Sniper ? "Sniper" :
                      soldat instanceof Artilleur ? "Artilleur" :
                        soldat instanceof Medecin ? "Medecin" : ""}
                  </h5>
                  <p>
                    nom : {soldat.firstname},
                    <br />
                    prenom : {soldat.lastname},
                    <br />
                    nationalité : {soldat.nationality},
                    <br />
                    pv : {soldat.pv},
                    <br />
                    armor : {soldat.armor},
                    <br />
                    damage : {soldat.damage}
                  </p>
                </div>
                <div
                  className='deleteButton'
                  onClick={() => handleDeleteSoldier(index, 'blue')}
                >
                  <p>
                    Supprimer
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
