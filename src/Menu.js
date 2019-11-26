import React from 'react';
import {Link} from "react-router-dom";
import './Menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/computacion-en-el-servidor-web">
            Computación en el Servidor Web
          </Link>
        </li>
        <li>
          <Link to="/gestion-de-la-seguridad">
            Gestión de la Seguridad
          </Link>
        </li>
        <li>
          <Link to="/seguridad-en-el-software">
            Seguridad en el Software
          </Link>
        </li>
        <li>
          <Link to="/aula-de-informacion-general">
            Aula de Información General
          </Link>
        </li>
        <li>
          <Link to="/computacion-en-el-cliente">
            Computación en el Cliente
          </Link>
        </li>
        <li>
          <Link to="/metodologias">
            Metodologías, Desarrollo y Calidad en la Ingeniería de Software
          </Link>
        </li>
      </ul>
    </div>
  );
}
 
export default Menu;