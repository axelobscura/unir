import React from 'react';
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from './Menu';
import Home from './Materias/Home';
import Footer from './Footer';
import ComputacionServidor from './Materias/ComputacionServidor';
import GestionSeguridad from './Materias/GestionSeguridad';
import SeguridadSoftware from './Materias/SeguridadSoftware';
import AulaInformacion from './Materias/AulaInformacion';
import ComputacionCliente from './Materias/ComputacionCliente';
import Metodologias from './Materias/Metodologias';

import './App.css';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Container fluid={true} className="p-0 Home">
          <Row noGutters={true} className="Contenidos">
            <Col xs={3} md={3}>
              <Menu />
            </Col>
            <Col xs={9} md={9} className="p-3">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/computacion-en-el-servidor-web">
                  <ComputacionServidor />
                </Route>
                <Route path="/gestion-de-la-seguridad">
                  <GestionSeguridad />
                </Route>
                <Route path="/seguridad-en-el-software">
                  <SeguridadSoftware />
                </Route>
                <Route path="/aula-de-informacion-general">
                  <AulaInformacion />
                </Route>
                <Route path="/computacion-en-el-cliente">
                  <ComputacionCliente />
                </Route>
                <Route path="/metodologias">
                  <Metodologias />
                </Route>
              </Switch>
            </Col>
          </Row>
          <Row noGutters={true} className="Footer">
            <Footer />
          </Row>
        </Container>
      </div>
    </HashRouter>
  );
}

export default App;
