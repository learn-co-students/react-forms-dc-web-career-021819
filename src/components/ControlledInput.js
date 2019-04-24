import React from 'react';

class ControlledInput extends React.Component {

  state= {
    value: ""
  }

  handleChange= event=> {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return(
      <form>
        <input
          type= "text"
          value= {this.state.value}
          onChange= {this.handleChange}
        />
      </form>
    )
  }
}
