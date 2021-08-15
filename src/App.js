import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import LoadingSpinner from './LoadingSpinner';


export default class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {latitude : null, errorMessage : ''};

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({latitude : position.coords.latitude});
      },
      err => {
        this.setState({errorMessage : err.message});
      }
    );
  }

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({latitude : position.coords.latitude});
      },
      err => {
        this.setState({errorMessage : err.message});
      }
    );
  }

  renderContent(){
    if(this.state.latitude && !this.state.errorMessage){
      return (
        <SeasonDisplay lat = {this.state.latitude}/>
      );
    } 

    if(!this.state.latitude && this.state.errorMessage){
      return (
        <div>Error : {this.state.errorMessage}</div>
      );
    }

    return <LoadingSpinner loadingMessage="Please allow access to your location"/>;
  }

  render(){
    return this.renderContent();
    
  }
}

