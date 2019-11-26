import React from 'react';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Tema from './Tema/Tema';

const ComputacionServidor = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2><i class="lni-chevron-right"></i> Computación en el Servidor Web</h2>
      <ul className="temas">
        <li>
          <Link to={`${url}/semana-uno`}>SEMANA 1</Link>
        </li>
        <li>
          <Link to={`${url}/semana-dos`}>SEMANA 2</Link>
        </li>
        <li>
          <Link to={`${url}/semana-tres`}>SEMANA 3</Link>
        </li>
        <li>
          <Link to={`${url}/semana-cuatro`}>SEMANA 4</Link>
        </li>
        <li>
          <Link to={`${url}/semana-cinco`}>SEMANA 5</Link>
        </li>
      </ul>
      
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