import React, { Component } from 'react';
import {connect} from 'react-redux';

class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
   
  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  };
  
  render() {
    return(
      <div>
        <form>
          <p>
            <label>Add Todo</label>
            <input type="text" onChange={(e) => this.handleChange(e) } value= {this.state.text}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: "ADD_TODO", payload: formData })
  }
}

export default connect(null,mapDispatchToProps)(CreateTodo);
