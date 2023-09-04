import './styles.css'
import React, { Component } from 'react'
import { options } from '../../utils/constants'
import HomeForm from '../../componentes/HomeForm/HomeForm'
import FiveMovies from  '../../componentes/FiveHome/index'

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
  filterMovies(nombre){
    let moviesF = this.state.backup.filter((elm) => elm.title.toLowerCase().includes(nombre.toLowerCase()))
    this.setState({
      movieData: moviesF,
    })
  }
  render() {
    return (
      <>
      <HomeForm filterMovies={(name) => this.filterMovies(name)} />
      <FiveMovies/>
      </>
    )
  }
}
export default index