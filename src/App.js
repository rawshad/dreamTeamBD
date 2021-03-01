import './App.css';
import details from './data/data.json'
import { useEffect, useState } from 'react';
import Camplist from './Components/Camplist/Camplist';
import Teamlist from './Components/Teamlist/Teamlist';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './Components/Budget/Budget';
function App() {
  const [player, setPlayer] = useState([]);
  const [teamPlayer, setTeamPlayer] = useState([]);
  useEffect(()=>{
    setPlayer(details);
  },[])
  const playerSelection = (selected) => {
    const teamMember = [...teamPlayer, selected];
    setTeamPlayer(teamMember);
  }
  return (
    <div className="main container-fluid">
      <h1 className="logo text-center pt-5 mb-5">DR<span>EAM</span> T<span>EAM</span> BD</h1>
      <div className="row">
        <div className="col-md-8">
          <div className="row">
              {
                player.map(individual => <Camplist 
                  information = {individual} key = {individual.id} 
                  selection = {playerSelection}></Camplist>)
                }
          </div>
        </div>
        <div className="col-md-4">
            <Budget total = {teamPlayer}></Budget>
            {
              teamPlayer.map(selectedPlayer => <Teamlist name = {selectedPlayer.name} salary = {selectedPlayer.salary} id = {selectedPlayer.id} key = {selectedPlayer.id}></Teamlist>)
            }
        </div>
      </div>
      {/* <div className="">
        <Budget total = {teamPlayer}></Budget>
        {
          teamPlayer.map(selectedPlayer => <Teamlist name = {selectedPlayer.name} salary = {selectedPlayer.salary} id = {selectedPlayer.id} key = {selectedPlayer.id}></Teamlist>)
        }
      </div> */}
      {/* <div className="row">
      {
        player.map(individual => <Camplist 
          information = {individual} key = {individual.id} 
          selection = {playerSelection}></Camplist>)
        }
      </div> */}
      
    </div>
  );
}

export default App;
