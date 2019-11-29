import React from 'react';
import SimpleHook from './Tema/SimpleHook';
import SimpleFormHook from './Tema/SimpleFormHook';
import SimpleFormInputHook from './Tema/SimpleFormInputHook';

const AulaInformacion = () => {
  return (
    <div>
      <h2>Aula de Información General</h2>
      <SimpleHook />
      <SimpleFormHook />
      <SimpleFormInputHook />
    </div>
  );
}
 
export default AulaInformacion;