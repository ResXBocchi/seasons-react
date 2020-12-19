import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { lat:null, errorMessage:'' };
       
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat:position.coords.latitude}),
            err => this.setState({errorMessage:err.message})
        );
    }

    render(){
        if (this.state.lat && !this.state.errorMessage){
            return <div>Latitude: {this.state.lat}</div>
        }else if (!this.state.lat && this.state.errorMessage){
            return <div>Error: {this.state.errorMessage}</div>
        }else{
            return <div>Loading</div>
        }}} 

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);