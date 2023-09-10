import './styles.css'
import {Switch, Route} from 'react-router-dom'
import Navbar from "./componentes/Navbar/Navbar"
import Footer from "./componentes/Footer/Footer"
import Home from './screens/Home'
import Popular from './screens/Popular/index'
import Upcoming from './screens/Upcoming/index'
import Movie from './screens/OneMovie/index'
import Favourites from './screens/Favourites/index'
import NotFound from './screens/NotFound'


function App() {
  return(
    <>
    <meta name="viewport" content="widht=device-width, initial-scale=1"/>
    <section>
      <Navbar/>
      <Switch>
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/popular'} component={Popular}/>
        <Route path={'/upcoming'} component={Upcoming}/>
        <Route path={'/favourites'} component={Favourites}/>
        <Route path={'/movie/id/:id'} component={Movie}/>
        <Route component={NotFound}/>
      </Switch>
      <Footer />
      </section>
    </>
  )
}

export default App;
