import './styles.css'
import React, { Component } from 'react'
import { options } from '../../utils/constants'
import MoviesContainer from '../../componentes/MoviesContainer/MoviesContainer'

class index extends Component {
  constructor(props){
    super(props)
    this.state={
        movieData:[],
        page: 1,
        valorInput:''
    }
  }
  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/popular', options)
    .then(resp => resp.json())
    .then(data => this.setState({
      movieData: data.results
    }))
    .catch(err => console.log(err))

    
  }
  searchMovies(texto) {
    fetch(`https://api.themoviedb.org/3/search/movie?name=${texto}`)
    .then(resp => resp.json())
    .then(data => this.setState({
        personajesb: data.results
    }))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <>
      <main>
        <h1 className='letter'>TOP 5 POPULAR MOVIES</h1>
        <form onSubmit={(evento)=> this.setState({valorInput: evento})} action="/searchresults">
                <input name='buscador'/>
                <button>Search movies</button>
            </form>
            <main>
          <MoviesContainer  movies={this.state.movieData}/>
        </main>
        <h1 className='letter'>TOP 5 UPCOMING MOVIES</h1>
      </main>
      </>
    )
  }
}
export default index