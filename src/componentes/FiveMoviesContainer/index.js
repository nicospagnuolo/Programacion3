import './styles.css'
import React, { Component } from 'react'
import { options } from '../../utils/constants'
import Movie from '../../componentes/Movie/Movie'

class index extends Component {
  constructor(props){
    super(props)
    this.state={
        movieData:null
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
  

  render() {
    console.log(this.state)
    return (
      <>
      <main>
        <h1 className='letter'>POPULAR MOVIES</h1>
        <main>
        {
          this.state.movieData !== null ?
          this.state.movieData.map((movie)=> <Movie id={movie.id} nombre={movie.title} imagen={movie.poster_path} descripcion={movie.status}   />)
          :
          <h1>Bringing movies...</h1>
        }
        </main>
      </main>
      </>
    )
  }
}
export default index