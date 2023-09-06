import './styles.css';
import { Component } from "react"
import { Link } from "react-router-dom"
class Personaje extends Component{
  constructor(props) {
    super(props);
    this.state = {
      texto: 'Show more',
      origen: '',
      isFav: false
    }
  }

  componentDidMount() {
    let favStorage = localStorage.getItem('favourites')
      let arrParseado = JSON.parse(favStorage)

      if (arrParseado !== null) {
        let isFav = arrParseado.includes(this.props.id)     
        if (isFav) {
          this.setState({
            isFav: true
          })
        }   
      }
  }

  cambiar(){
    this.setState({
      texto:'Hide',
      description: 'Description: ' + this.props.description
    })
  }

  volver(){
    this.setState({
      texto:'Show more',
      description: ''
    })
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

    if (this.props.refreshState !== false) {
      this.props.refreshState(movieId)
      return
    }

    this.setState({
      isFav: false
    })
  }

  render() {
    return (
        <article className='character-card'>
        <Link to={`/movie/id/${this.props.id}`}><img src= { 'https://image.tmdb.org/t/p/w500/'+this.props.imagen} alt={this.props.nombre} className='image'/></Link>
        <h3 className='letter'>{this.props.nombre}</h3> 
        {
        this.state.isFav ?
        <button onClick={() => this.removeFav(this.props.id)}>REMOVE FROM FAV</button>
        :
        <button onClick={() => this.addToFav(this.props.id)}>ADD TO FAV</button>
        }
        <br/>
        <button className='more' onClick={() => 
          this.state.texto === 'Show more'? 
          this.cambiar()
          : this.volver()}>{this.state.texto}
          </button>
          {
            this.state.texto !== 'Show more'?
            <p className='letter'>{this.state.description}</p>
            :
            <br>
            </br>
          }
       
        </article>
    )
  }
}

export default Personaje;