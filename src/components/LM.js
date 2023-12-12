import { Component } from 'react';

class LM extends Component {
  state = {
    lista: []
  }
  componentDidMount() {
    fetch('https://www.bocaweb.com.br/apibocaweb?nome=pinturas')
      .then(response => response.json())
      .then(lista => this.setState({ lista }))
  }
  render() {
    const { listas } = this.state;
    return (
      <div className="App">
        {listas.map(lista =>(
          <div key={lista._id}>
            <h1> {lista.nome} </h1> 
            <a href='/profile/[id]'> Ver a Descrição </a>
          </div>
        ))}
      </div>
    );
  }
}

export default LM;