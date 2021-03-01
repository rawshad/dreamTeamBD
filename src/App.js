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
    <div className="main">
      <Budget total = {teamPlayer}></Budget>
        {
          teamPlayer.map(selectedPlayer => <Teamlist name = {selectedPlayer.name} salary = {selectedPlayer.salary}key = {selectedPlayer.id}></Teamlist>)
        }
      <div className = "players-list">
        {
        player.map(individual => <Camplist 
          information = {individual} key = {individual.id} 
          selection = {playerSelection}></Camplist>)
        }
      </div>
      
    </div>
  );
}

export default App;
