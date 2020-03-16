import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Bienvenido from './components/Bienvenido'



function App() {
  return (
    <div className="">
      <Bienvenido/>
    </div>
    
  );
}

export default App;
