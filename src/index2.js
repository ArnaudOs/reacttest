import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Arnaud Osenda" },
      { id: 2, nom: "John toto" },
      { id: 3, nom: "Fred Sotto" }
    ]
    // compteur: 0
  };

  // handleClick = () => {
  //   // this.setState({ compteur: this.state.compteur + 1 });
  //   // console.log(this.state);
  //   const clients = this.state.clients.slice();
  //   clients.push({ id: 4, nom: "Anne Durand" });
  //   this.setState({ clients: clients });
  // };

  render() {
    const title = "liste des clients";
    // const elements = this.state.clients.map(function(client) {
    //   return (
    //     <li>
    //       {client.nom} <button>X</button>
    //     </li>
    //   );
    // });la même en dessous mais fleché
    // const elements = this.state.clients.map(client => (
    //   <li>
    //     {client.nom} <button>X</button>
    //   </li>
    // ));

    return (
      <div>
        <h1>{title}</h1>
        {/* {this.state.compteur} */}
        {/* <button onClick={this.handleClick.bind(this)}>Click me</button> */}
        {/* <button onClick={() => this.handleClick()}>Click me</button> */}
        {/* <button onClick={this.handleClick}>Click me</button> */}
        <ul>
          {this.state.clients.map(client => (
            <li>
              {client.nom} <button>X</button>
            </li>
          ))}
        </ul>
        <form>
          <input type="text" placeholder="Ajouter un client" />
          <button>confirmer</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
