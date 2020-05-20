import React from 'react';
import './App.css';
import { HashRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Inicio from "./components/Inicio.js";
import Aplicacion from "./components/Aplicacion.js";
import Logica from "./components/Logica.js";
import Performance from "./components/Performance.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actual : ""
    }
  }

  render() {
    return (
      <div className="App">
        <HashRouter>
            <Navbar paginaActual = {this.state.actual}/>
            {/* envolvemos nuestra aplicación en el Router  */}
            <Switch>
              {/* también la envolvemos en el componente Switch */}
              <Route
                path="/"
                render={propiedades => (
                  <Inicio {...propiedades} />
                )}
                exact
              />
              <Route
                path="/app"
                render={propiedades => (
                  <Aplicacion {...propiedades} />
                )}
                exact
              />
              <Route
                path="/logica"
                render={propiedades => (
                  <Logica {...propiedades} />
                )}
                exact
              />
              <Route
                path="/performance"
                render={propiedades => (
                  <Performance {...propiedades} />
                )}
                exact
              />
              {/* y creamos nuestras rutas */}
            </Switch>
          </HashRouter>
      </div>
    );
  }
}

export default App;
