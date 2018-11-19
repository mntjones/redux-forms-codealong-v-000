import React, { Component } from 'react'

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



export default CreateTodo;
