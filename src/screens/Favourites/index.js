import './styles.css'
import React, { Component } from 'react'
import { options } from '../../utils/constants'
import MoviesContainer from '../../componentes/MoviesContainer/MoviesContainer'

class index extends Component {
  constructor(props){
    super(props)
    this.state={
        favourites: []
    }
  }
  componentDidMount() {
    let storageMovies = localStorage.getItem('favourites')
    if (storageMovies !== null) {
      let favouritesMovies = JSON.parse(storageMovies)
    Promise.all(
      favouritesMovies.map(id => 
        fetch('https://api.themoviedb.org/3/movie/' + id, options)
          .then(resp => resp.json())
      )
    )
    .then(data => this.setState({favourites: data}, ()=> console.log('el state es:', this.state.favourites)))
    .catch(err => console.log(err))
    }
  }

  refreshState(id) {
    let refState = this.state.favourites.filter(elm => elm.id !== id)
    this.setState({
      favourites: refState
    })
  }
  render() {
    return (
      <>
      <h1 className='letter'>FAVOURITES MOVIES</h1>
        <section>
       <MoviesContainer refreshState ={(id) => this.refreshState(id)} movies={this.state.favourites}/>
       </section>
      </> 
    )
  }
}
export default index


