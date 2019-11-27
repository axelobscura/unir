import React, {Component} from 'react';
import {useParams} from "react-router-dom";
import Nota from '../Nota';

class Tema extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idea: {
        texto: '',
        tema: '',
        semana: ''
      }
    }
    this.idea = this.idea.bind(this);
  }
  componentDidMount(){
    const { topicId } = useParams();
    console.log(topicId);
  }
  idea(e) {
    e.preventDefault();
    const idea = e.target.idea.value;
    console.log(idea);
    /*
    console.log(`La idea es ${idea} del tema ${this.props.path.substr(1)} y la semana es ${useParams().topicId}`);
    this.setState({
      idea: {
        texto: idea,
        tema: this.props.path.substr(1),
        semana: useParams().topicId
      }
    })
    console.log(JSON.stringify(this.state.idea));
    */
  }
  render(){
    /*
    const { topicId } = useParams();
    const { path } = this.props;
    */
    return (
      <div>
        <h4>{this.props.path.substr(1)}</h4>
        <h3>{/*useParams().topicId*/}</h3>
        <Nota idea={this.idea} />
      </div>
    );
  }
}
 
export default Tema;