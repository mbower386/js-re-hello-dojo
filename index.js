const helloReact = React.createElement('h1', null, "Hello React");

const thingsDo = React.createElement('h2', null, "Things I need to do:");

const thingsList = React.createElement('ul', null,
  React.createElement('li', null, "Learn React"),
  React.createElement('li', null, "Climb Mt. Everest"),
  React.createElement('li', null, "Run a marathon"),
  React.createElement('li', null, "Feed the dogs"));

ReactDOM.render(helloReact, document.getElementById('hello-react'));
ReactDOM.render(thingsDo, document.getElementById('things-to-do'));

ReactDOM.render(thingsList, document.getElementById('things-list'));
