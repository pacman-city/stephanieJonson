import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Header from './components/header/header.component';
import Home from './pages/home/home.component';
import Team from './pages/team/team.component';


const App = () => {
  return (
    <div className="app">
      <Header/>

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/team' element={<Team/>}></Route>
        </Routes>
      </div>
  );
};

export default App;