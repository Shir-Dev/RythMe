import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Entradas from './components/Entradas.js'



function App() {
  return (
    <div className="">
       <Entradas/>
    </div>
  );
}

export default App;
