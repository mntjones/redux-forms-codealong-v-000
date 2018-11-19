import React, { Component } from 'react'

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

class CreateTodo extends Component {
  render() {
    return(
      <div>
        <form>
          <p>
            <label>Add Todo</label>
            <input type="text" onChange={(e) => this.handleChange(e) } />
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}



export default CreateTodo;
