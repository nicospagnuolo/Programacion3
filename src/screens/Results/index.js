import './styles.css'
import React, { Component } from 'react'
import { options } from '../../utils/constants'
import Movie from '../../componentes/Movie/Movie'


class index extends Component {
  constructor(props){
    super(props)
    this.state={
        movieData:null,
        backup:[],
        page: 1
    }
  }
  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/search/movie?query=toy%20story`, options)
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <>
      {/* <main>
        <h1 className='letter'>UPCOMING MOVIES</h1>
        <main>
        {
          this.state.movieData !== null ?
          this.state.movieData.map((movie)=> <Movie id={movie.id} nombre={movie.title} imagen={movie.poster_path} descripcion={movie.status}   />)
          :
          <div className='container'>
            <div id='load'><h1 className='letter'>Bringing movies...</h1></div>
        </div>
        }
        </main>
        <button onClick={() => this.showMoreMovies()}>More movies</button>
      </main> */}
      <h1 className='letter'>resultados</h1>
      </>
    )
  }
}
export default index