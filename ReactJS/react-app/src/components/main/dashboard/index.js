import React, { Component } from 'react';
import { DashboardBox, ButtonDashboard } from './styled';
import ClipLoader from "react-spinners/ClipLoader";

class Dashboard extends Component {

  constructor(props){
    super(props);
    this.activo = false;
    this.texto = "";
  }
  
  handleClickButton = (variable) => {
    alert("Hola Mundo");
  }

  handleKeyPress = (e) => {
    console.log(e.target.value);
  }

  handleKeyPressBind = (e) => {
    this.texto = e.target.value;
    console.log(this.texto);
  }

  render() { 
    return (
      <DashboardBox>
        { this.activo ? 
          <ButtonDashboard onClick={() => this.handleClickButton(this)}>Presioname</ButtonDashboard>
        :
          <input onKeyPress={(e) => this.handleKeyPress(e)} type="text"></input>
         }
         <input value={this.texto} type="text" onKeyPress={(e)=> this.handleKeyPressBind(e)} ></input>
        <ClipLoader color={"red"} loading={true} size={150} />
      </DashboardBox>
    );
  }
}

export default Dashboard;