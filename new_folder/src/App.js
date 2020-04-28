import React from 'react';
import './App.css';
import LandingPage from './port_components/landing_page'
import About_page from './port_components/about_page'
import Skills_page from './port_components/skills'
import ProjectAlbum from './port_components/projects_page'
import NavBar from './port_components/navbar'
import { Route } from 'react-router-dom'
import Main from './port_components/main'
// import * from '@material-ui/core'


function App() {
  return (
    <div className="App">
        <NavBar />
      <div className='main-content'>
        <Main />
      </div>
    </div>
  );
}

export default App;
