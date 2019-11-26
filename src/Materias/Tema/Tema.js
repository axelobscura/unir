import React from 'react';
import {useParams} from "react-router-dom";

const Tema = () => {
  let { topicId } = useParams();
  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}
 
export default Tema;