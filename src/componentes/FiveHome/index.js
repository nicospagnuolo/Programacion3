import './styles.css'
import React, { Component } from 'react'
import { options } from '../../utils/constants'
import MoviesContainer from '../../componentes/MoviesContainer/MoviesContainer'
import HomeForm from '../../componentes/HomeForm/HomeForm'

class index extends Component {
  constructor(props){
    super(props)
    this.state={
        movieData:[],
        backup:[],
        page: 1,
        upcomingData:[],
        upcomingBackup:[]
    }
  }
  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/popular', options)
    .then(resp => resp.json())
    .then(data => this.setState({
      movieData: data.results.slice(0,5),
      backup: data.results.slice(0,5)
    }))
    .catch(err => console.log(err))

    fetch('https://api.themoviedb.org/3/movie/upcoming', options)
    .then(resp => resp.json())
    .then(data => this.setState({
      upcomingData: data.results.slice(0,5),
      upcomingBackup: data.results
    }))
    .catch(err => console.log(err))
  }



  render() {
    return (
      <>
      <main>
        <h1 className='letter'>TOP 5 POPULAR MOVIES</h1>
        <main>
          <MoviesContainer  movies={this.state.movieData}/>
        </main>
        <h1 className='letter'>TOP 5 UPCOMING MOVIES</h1>
      <MoviesContainer  movies={this.state.upcomingData}/>
      </main>
      </>
    )
  }
}
export default index