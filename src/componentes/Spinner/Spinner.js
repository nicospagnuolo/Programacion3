import React, { Component } from 'react'

class index extends Component {
  constructor(props){
    super(props)
    this.state={
    }
  }

  render(){
    console.log('props del container', this.props.movies)
    return (
            <div className='container'>
              <div id='load'><h1 className='letter'>Bringing movies</h1></div>
          </div> 
        
    )
  }
}
export default index