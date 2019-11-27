import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Nota = (props) => {
  return(
    <div>
      <Form onSubmit={props.idea}>
        <Form.Row>
          <Col>
            <Form.Control type="text" name="idea" placeholder="Idea" />
            <Button variant="dark" type="submit" style={{marginTop: '10px'}} className="float-right">ENVIAR</Button>
          </Col>
        </Form.Row>
      </Form>
    </div>
  )
}

export default Nota;