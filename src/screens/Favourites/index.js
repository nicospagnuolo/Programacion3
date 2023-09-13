import "./styles.css";
import React, { Component } from "react";
import { options } from "../../utils/constants";
import MoviesContainer from "../../componentes/MoviesContainer/MoviesContainer";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: [],
      haveFav: false
    };
  }
  componentDidMount() {
    let storageMovies = localStorage.getItem("favourites");
    if (storageMovies !== null) {
      let favouritesMovies = JSON.parse(storageMovies);
      Promise.all(
        favouritesMovies.map((id) =>
          fetch("https://api.themoviedb.org/3/movie/" + id, options).then(
            (resp) => resp.json()
          )
        )
      )
        .then((data) =>{
          data.length > 0 ?
          this.setState({ favourites: data,
            haveFav: true
           }
          )
          :
          this.setState({ haveFav: false }
          )
          }
        )
        .catch((err) => console.log(err));
    }
  }

  refreshState(id) {
    let refState = this.state.favourites.filter((elm) => elm.id !== id);
    if(refState.length === 0) {
      <h1 className="letter">You don't have favourites movies yet.</h1>
      this.setState({
        haveFav: false
      })
    }
    this.setState({
      favourites: refState
    });
  }
  render() {
    return (
      <>
        <h1 className="letter">FAVOURITES MOVIES</h1>
          <section>
          <main>
            {
              this.state.haveFav ?
              <MoviesContainer
                refreshState={(id) => this.refreshState(id)}
                movies={this.state.favourites}
              /> :
              <h1 className="letter">You don't have favourites movies yet.</h1>
            }
            </main>
        </section>
      </>
    );
  }
}
export default index;
