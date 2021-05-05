import './App.css';
import React from 'react'
import contactsFromJSON from './contacts.json'



class App extends React.Component {
  state = {
    contacts: contactsFromJSON.slice(0, 5)
  }

  addContact = () => {
    let newContact = contactsFromJSON[Math.floor(Math.random() * contactsFromJSON.length)]

    this.setState({
      contacts: this.state.contacts.concat(newContact)
    })
  }

  sortName = () => {
    
    this.setState({
      contacts: this.state.contacts.sort((a, b) => (a.name < b.name) ? 1 : -1)
    })
  }

  sortPopularity = () => {
    
    this.setState({
      contacts: this.state.contacts.sort((a, b) => (a.popularity > b.popularity) ? 1 : -1)
    })
  }

  deleteContact = (id) => {
  
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !==id)
    });
  }

  render() {
      return (
        <>
        <div className="container">
          <h1>IronContacts</h1>
          <div className="App">
            <button onClick={this.addContact}>Add Contact</button>
            <button onClick={this.sortName}> Sort Contact by Name</button>
            <button onClick={this.sortPopularity}> Sort Contact by Popularity</button>

              <table>
              <tbody>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                </tr>
                {this.state.contacts.map((contact) => {
                  return(
                    <tr>
                    <td><img src={contact.pictureUrl}></img></td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity}</td>
                    <button onClick={() => this.deleteContact(contact.id)}>Delete</button>
                    </tr>
                  ) 
                })}
              </tbody>
              </table>
          </div>
        </div>
        </>
    );
  }
}

export default App;
