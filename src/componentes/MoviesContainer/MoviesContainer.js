import './styles.css'
import React, { Component } from 'react'
import Movie from '../Movie/Movie'
import Spinner from '../Spinner/Spinner'


class index extends Component {
  constructor(props){
    super(props)
    this.state={
        movieData:[]
    }
    
  }

  render(){
    console.log('props del container', this.props.movies)
    return (
      <>
        <section className='section'>
          {
          this.props.movies.length === 0 ?
          <Spinner/>
          :
          this.props.movies.map((movie)=> <Movie 
          refreshState={this.props.refreshState ? (id) => this.props.refreshState(id) : false} 
          id={movie.id}
          key={movie.title + movie.id}
          nombre={movie.title} 
          imagen={movie.poster_path} 
          description={movie.overview}
          />)
          }
        </section>
      </>
    )
  }
}
export default index