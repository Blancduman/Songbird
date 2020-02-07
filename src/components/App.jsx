import React from 'react';

export default class App extends React.Component {
  renderH2 = () => {
    return <h1>Hello!!</h1>;
  };

  render() {
    return (
      <div className="layout">
        <div className="app">{this.renderH2()}</div>
      </div>
    );
  }
}
