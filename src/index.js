import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './seasondisplay';
import 'semantic-ui-css/semantic.min.css';
import Spinner from './Spinner';

class App extends React.Component {

    state = { lat:null, errorMessage:'' };

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat:position.coords.latitude}),
            err => this.setState({errorMessage:err.message})
        );
    }

    renderContent(){
        if (this.state.lat && !this.state.errorMessage){
            return <SeasonDisplay lat={this.state.lat}/>
        }else if (!this.state.lat && this.state.errorMessage){
            return <div>Error: {this.state.errorMessage}</div>
        }else{
            return <Spinner message='Por favor, aceite o acesso à sua localização.'/>;
        }
    }

    render(){
      return(
          <div>
              {this.renderContent()}
          </div>
      )
    }
} 

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
); 