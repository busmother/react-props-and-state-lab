import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  fetchPets = () => {
    let endpoint = '/api/pets';

    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`;
    }

    fetch(endpoint)
      .then(res => res.json())
      .then(pets => this.setState({ pets: pets }));
  };

  onChangeType = ({target: {value}}) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: value
      }
    });
  }

  onFindPetsClick = () => {
    this.fetchPets();
  }

  onAdoptPet = () => {
    this.setState({
      //pets, find the pet that's adopted, and then update the state
      isAdopted: true
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onFindPetsClick={this.onFindPetsClick}/>
              {/* ^the lefthand side of the = defines the name of the prop on the lower level */}
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
