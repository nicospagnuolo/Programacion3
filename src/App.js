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
      
    </>
  )
}

export default App;
