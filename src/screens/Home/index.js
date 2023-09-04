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
        movieData:[],
        backup:[],
        page: 1,
        upcomingData:[],
        upcomingBackup:[],
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
      <main>
      <HomeForm  filterMovies={(input) => this.filterMovies(input)} />
        {
          this.state.searchData.length === 0 ?
          <main><FiveMovies/></main>
          :
          <main><MoviesContainer  movies={this.state.searchData}/></main>
        }
        <main/>
      </main>
      </>
    )
  }
}
export default index