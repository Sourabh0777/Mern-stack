import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';


import Routers from './Routers/Routers';

const App = () => {
  return (
    <Router>
      <Routers/>
    </Router>
  );
};

export default App;
