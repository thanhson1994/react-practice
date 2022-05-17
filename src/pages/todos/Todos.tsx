import React from 'react';

class Todos extends React.Component<object, any> {
  constructor(props: any) {
    super(props);
    this.state = { date: new Date() };
    console.log('constructor');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render Todos');

    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Todos;
