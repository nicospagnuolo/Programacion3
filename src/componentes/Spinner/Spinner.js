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
            <div className='container'>
              <div id='load'><h1 className='letter'>Bringing movies...</h1></div>
          </div> 
        
    )
  }
}
export default index