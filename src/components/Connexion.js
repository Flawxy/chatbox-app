import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Connexion extends Component {
  state = {
    pseudo: '',
    goToChat: false
  }

  handleChange = event => {
    const pseudo = event.target.value
    this.setState({ pseudo })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ goToChat: true })
  }

  render () {
    const { goToChat, pseudo } = this.state

    if (goToChat) {
      return <Redirect push to={`/pseudo/${pseudo}`} />
    }

    return (
      <div className='connexionBox'>
        <form onSubmit={this.handleSubmit} className='connexion'>
          <input
            value={pseudo}
            onChange={this.handleChange}
            placeholder='Pseudo'
            type='text'
            required
          />
          <button type='submit'>GO</button>
        </form>
      </div>
    )
  }
}

export default Connexion
