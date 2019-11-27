import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import MenuSemana from './MenuSemana';
import Tema from './Tema/Tema';

const GestionSeguridad = () => {
  let { path } = useRouteMatch();
  return (
    <div>
      <h2><i className="lni-chevron-right"></i>  Gestión de la Seguridad</h2>
      <MenuSemana />
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Tema path={path} />
        </Route>
      </Switch>
    </div>
  );
}
 
export default GestionSeguridad;