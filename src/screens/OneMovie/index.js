import './styles.css'
import React, { Component } from 'react'
import { options } from '../../utils/constants'
import { Link } from "react-router-dom"

export default class index extends Component {
    constructor(props){
        super(props)
        this.state={
            movieData:null,
            isFav: false
        }
    }

  componentDidMount(){
      fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}`, options)
      .then(res => res.json())
      .then( data => this.setState({
        movieData: data
      }, () => {
        
      let favStorage = localStorage.getItem('favourites')
      let arrParseado = JSON.parse(favStorage)

      if (arrParseado !== null) {
        let isFav = arrParseado.includes(this.state.movieData.id)     
        if (isFav) {
          this.setState({
            isFav: true
          })
        }   
      }
      }))
      .catch(err => console.log(err))


      
      
  }

  addToFav(movieId){
    let favStorage = localStorage.getItem('favourites')
    if (favStorage === null) {
      let arrId = [movieId]
      let arrStringificado = JSON.stringify(arrId)
      localStorage.setItem('favourites', arrStringificado)
    }
    else {
      let arrParseado = JSON.parse(favStorage)
      arrParseado.push(movieId)
      let arrStringificado = JSON.stringify(arrParseado)
      localStorage.setItem('favourites', arrStringificado)
    }
    this.setState({
      isFav: true
    })
  }

  removeFav(movieId){
    let storageFav = localStorage.getItem('favourites')
    let arrParseado = JSON.parse(storageFav)
    let favsFilter = arrParseado.filter((id) => id !== movieId)
    let arrStringificado = JSON.stringify(favsFilter)
    localStorage.setItem('favourites', arrStringificado)
    this.setState({
      isFav: false
    })
  }


  render() {
    return (
      <>
      {
        this.state.movieData === null ?
        <div className='container'>
              <div id='load'><h1 className='letter'>Bringing movies</h1></div>
          </div>
        :
           <section>
            <article className='character-card'>
              <Link to={`/movie/id/${this.state.movieData.id}`}><img src= { 'https://image.tmdb.org/t/p/w500/'+this.state.movieData.poster_path} alt={this.state.movieData.title} className='image'/></Link>
              <h3 className='letter'>{this.state.movieData.title}</h3> 
            </article>
              <article className="cajahijapelis">
              <h2 className="letter" id="titulo2">{this.state.movieData.title}</h2>
              <p className="letter" id="data">RATING: {this.state.movieData.vote_average}</p>
              <p className="letter" id="data">RELEASE DATE:  { this.state.movieData.release_date}</p>
              <p className="letter" id="data">GENRES: </p>
              <ul  className="ul" >{
              // this.state.movieData.genres.map(
              //   (elm) => <li className="itemlista">{elm.name}</li>)
                }</ul>
              <p className="letter" id="data">RUNTIME: {this.state.movieData.runtime} minutes</p>
              <p className="letter" id="data">OVERVIEW: {this.state.movieData.overview}</p>
              {
                this.state.isFav ?
                <button onClick={() => this.removeFav(this.state.movieData.id)}>REMOVE FROM FAV</button>
                :
                <button onClick={() => this.addToFav(this.state.movieData.id)}>ADD TO FAV</button>
              }
              </article>
          </section>
          
        }
      </>
    )
  }
}