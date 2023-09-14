import './styles.css';
import { Link } from 'react-router-dom'

let navegacion =[
  {
    nombre:'Home',
    ruta: '/'
  },
  {
    nombre:'Popular',
    ruta: '/popular'
  },
  {
    nombre:'Upcoming',
    ruta: '/upcoming'
  },
  {
    nombre:'Favourites',
    ruta: '/favourites'
  }
]

function App() {
  return (
    <div>
      <nav >
      <ul className='arriba'>
        <li > 
          <Link to ={navegacion[0].ruta} >
            <img src="./img/logo.png" alt="" className="logo" />
          </Link>
        </li>
              {
                navegacion.map((elm) => 
          <li className="itemlista">
            <Link className="navlink" to={elm.ruta}>
              {elm.nombre}
            </Link>
          </li> )
              }
      </ul>
    </nav>
    </div>
  );
}
export default App;
