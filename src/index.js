import React from "react";
import ReactDOM from "react-dom";
import Client from "./Client";
import ClientForm from "./ClientForm";
import "./styles.css";

class App extends React.Component {
  // clientInput = React.createRef();

  state = {
    clients: [
      { id: 1, nom: "Arnaud Osenda" },
      { id: 2, nom: "John toto" },
      { id: 3, nom: "Fred Sotto" }
    ]
  };

  handleDelete = id => {
    const clients = this.state.clients.slice();
    const index = clients.findIndex(function(client) {
      return client.id === id;
    });
    clients.splice(index, 1);
    this.setState({ clients: clients });
  };

  handleAdd = client => {
    const clients = this.state.clients;

    clients.push(client);
    this.setState({ clients });
  };
  render() {
    const title = "liste des clients";

    return (
      <div>
        <h1>{title}</h1>

        <ul>
          {this.state.clients.map(client => (
            <Client details={client} onDelete={this.handleDelete} />
          ))}
        </ul>
        <ClientForm onClientAdd={this.handleAdd} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
