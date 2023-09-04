import React, { Component } from 'react'
import Movie from '../Movie/Movie'

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
          this.props.movies.length === 0 ?
            <div className='container'>
              <div id='load'><h1 className='letter'>Bringing movies...</h1></div>
          </div> 
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