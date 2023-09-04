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
      <div >
        <section>
          {
            this.storageMovies ?
            <h1 className='letter'>You don't have favourites movies</h1>
            :
              this.props.movies.length === 0 ?
              <Spinner/>
            :
              this.props.movies.map((movie)=> <Movie 
              refresState={this.props.refresState ? (id) => this.props.refresState(id) : false} 
              id={movie.id} nombre={movie.title} 
              imagen={movie.poster_path} 
              />)
            
          }
        
        </section>
      </ div>
    )
  }
}
export default index