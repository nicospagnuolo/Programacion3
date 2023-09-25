import './styles.css'
import React, { Component } from 'react'
import { options } from '../../utils/constants'
import HomeForm from '../../componentes/HomeForm/HomeForm'
import FiveMovies from  '../../componentes/FiveHome/index'
import MoviesContainer from '../../componentes/MoviesContainer/MoviesContainer'

class index extends Component {
  constructor(props){
    super(props)
    this.state={
        searchData:[]
    }
  }

  componentDidMount() {
    
  }

  filterMovies(input){
    fetch(`https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=false&language=en-US&page=1`, options)
    .then(resp => resp.json())
    .then(data => this.setState({
      searchData: data.results
    }))
    .catch(err => console.log(err))
  }
  
  render() {
    return (
      <>
      <HomeForm  filterMovies={(input) => this.filterMovies(input)} />
        {
          this.state.searchData.length === 0 ?
          <FiveMovies/>
          :
          <MoviesContainer  movies={this.state.searchData}/>
        }
      </>
    )
  }
}
export default index