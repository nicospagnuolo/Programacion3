import { Component } from "react";

class MiForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            valorInput: '',
            movieData:[],
            backup:[]
        }
    }


    evitarSubmit(evento){
        evento.preventDefault()
    }
    

    guardarValor(evento){
        this.setState(
            {
                valorInput: evento.target.value
            },
            () => this.props.filterMovies(this.state.valorInput)
        )
    }

    

    render(){
        return(
            <>
            <form onSubmit={(evento)=> this.evitarSubmit(evento)}>
                <input onChange={(evento)=> this.guardarValor(evento)} value={this.state.valorInput}/>
                <button>Search all movies</button>
            </form>
            </>
        )
    }
}

export default MiForm