import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { action,comedy,orginals } from './urls';
import './App.css'
import './Components/Navbar/Navbar.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost url={action} title='Action' isSmall={true}/>
      {/* <RowPost url={comedy} title='comedy' isSmall={true}/> */}
    </div>
  );
}

export default App;
