import './styles.css';
import { Component } from "react"
import { Link } from "react-router-dom"
class Personaje extends Component{
  constructor(props) {
    super(props);
    this.state = {
      texto: 'Ver mas',
      origen: ''
    }
     
  }
  render() {
    return (
        <article className='character-card'>
        <Link to={`/movie/id/${this.props.id}`}><img src= { 'https://image.tmdb.org/t/p/w500/'+this.props.imagen} alt={this.props.nombre} className='image'/></Link>
        <h3 className='letter'>{this.props.nombre}</h3> 
        </article>
    )
  }
}

export default Personaje;