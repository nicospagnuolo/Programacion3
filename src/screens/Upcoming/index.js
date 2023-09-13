import React, { Component } from 'react'
import { options } from '../../utils/constants'
import MoviesContainer from '../../componentes/MoviesContainer/MoviesContainer'
import MiForm from '../../componentes/MiForm/MiForm'

class index extends Component {
  constructor(props){
    super(props)
    this.state={
        movieData:[],
        backup:[],
        page: 1
    }
  }
  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/upcoming', options)
    .then(resp => resp.json())
    .then(data => this.setState({
      movieData: data.results,
      backup: data.results
    }))
    .catch(err => console.log(err))

    
  }
  showMoreMovies() {
    fetch(`https://api.themoviedb.org/3/movie/popular?page=${this.state.page + 1}`, options)
    .then(resp => resp.json())
    .then(data => this.setState({
        movieData: this.state.movieData.concat(data.results),
        backup: this.state.backup.concat(data.results),
        page: this.state.page + 1
    }))
    .catch(err => console.log(err))
  }

  filterMovies(nombre){
    let moviesF = this.state.backup.filter((elm) => elm.title.toLowerCase().includes(nombre.toLowerCase()))
    this.setState({
      movieData: moviesF,
    })
  }

  render() {
    return (
      <>
      <main>
      <MiForm seccion='upcoming' filterMovies={(name) => this.filterMovies(name)} />
        <h1 className='letter'>UPCOMING MOVIES</h1>
        <main>
          <MoviesContainer  movies={this.state.movieData}/>
        </main>
        <button onClick={() => this.showMoreMovies()}>More movies</button>
      </main>
      </>
    )
  }
}
export default index