import './styles.css';
import { Component } from "react"
import { Link } from "react-router-dom"
class Personaje extends Component{
  constructor(props) {
    super(props);
    this.state = {
      texto: 'Show more',
      origen: ''
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

  render() {
    return (
        <article className='character-card'>
        <Link to={`/movie/id/${this.props.id}`}><img src= { 'https://image.tmdb.org/t/p/w500/'+this.props.imagen} alt={this.props.nombre} className='image'/></Link>
        <h3 className='letter'>{this.props.nombre}</h3> 
        <button onClick={() => this.addToFav(this.state.movieData.id)}>ADD TO FAV</button>
        <br/>
        <button className='more' onClick={() => 
          this.state.texto === 'Show more'? 
          this.cambiar()
          : this.volver()}>{this.state.texto}
          </button>
          <p className='letter'>{this.state.description}</p>
        </article>
    )
  }
}

export default Personaje;