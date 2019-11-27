import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import MenuSemana from './MenuSemana';
import Tema from './Tema/Tema';

const ComputacionServidor = () => {
  let { path } = useRouteMatch();
  return (
    <div>
      <h2><i class="lni-chevron-right"></i> Computación en el Servidor Web</h2>
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
 
export default ComputacionServidor;