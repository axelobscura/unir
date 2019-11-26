import React from 'react';
import {useParams} from "react-router-dom";

const Tema = (props) => {
  let { topicId } = useParams();
  const { path } = props;
  return (
    <div>
      <h4>{path.substr(1)}</h4>
      <h3>{topicId}</h3>

    </div>
  );
}
 
export default Tema;