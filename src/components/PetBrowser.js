import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {

    const pets = this.props.pets

    let allPets = pets.map(pet => {
      <Pet onAdoptPet={this.props.onAdoptPet} pet/>
    })

    return (
      <div className="ui cards">
       {allPets}
      </div>
      );
  }
}

export default PetBrowser