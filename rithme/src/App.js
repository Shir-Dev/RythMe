import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Bienvenido from './components/Bienvenido.js'
import Entradas from './components/Entradas.js'
import PageInicio from './components/PageInicio.js'
import Form from './components/Form.js'



function App() {
  return (

    <Router>
    <div>
      <nav>
    
            <Link to="/entradas">Entradas</Link>
        
            <Link to="/buscar">Buscar</Link>
         
            <Link to="/home">Home</Link>
       
            <Link to="/misconciertos">Mis Conciertos</Link>
       
            <Link to="/configuracion">Configuracion</Link>
       
      </nav>
      <Switch>
        <Route path="/entradas">
          <Entradas />
        </Route>
        <Route path="/buscar">
          <PageInicio />
        </Route>
        <Route path="/home">
          <Bienvenido />
        </Route>
        <Route path="/configuracion">
          <Form />
        </Route>
      </Switch>
    </div>
  </Router>
  
  );
}

export default App;
