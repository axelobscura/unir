import React from 'react';
import {Link,useRouteMatch} from "react-router-dom";

const ComputacionServidor = () => {
  let { url } = useRouteMatch();
  return(
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
  );
}

export default ComputacionServidor;