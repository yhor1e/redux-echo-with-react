import React from 'react';

class Echo extends React.Component {

  render() {
    return (
      <form action="#">
        <input id="inputedVal" type="text" defaultValue="foo"/>
        <input id="echoBtn" type="button" defaultValue="->" onClick= { this.props.onClick } />
        <input id="outputedVal" type="text" value={ this.props.inputedVal } readOnly/>
      </form>
    );
  }
}

export default Echo;
