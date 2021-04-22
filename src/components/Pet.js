import React from 'react'

class Pet extends React.Component {

  

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.gender}
            {/*'♀' OR '♂' */}
            {this.name}
          </a>
          <div className="meta">
            <span className="date">PET TYPE</span>
          </div>
          <div className="description">
            <p>Age: {this.age}</p>
            <p>Weight: {this.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
