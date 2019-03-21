import React,{Component} from "react";
import {Redirect} from "react-router-dom";
import {Button,ModalFooter} from "reactstrap";

import "../Pages/Home.css";


class Buyer extends Component{
    state={
        redirect: false 
    };
    setRedirect(){
        this.setState({
            redirect: true
        });
    }
    renderRedirect(){
        if (this.state.redirect) {
          return <Redirect to="/Buyer/SalesNotification" />
          
        }
    }
    renderRedirected(){
        if (this.state.redirect){
            return <Redirect to ="/Buyer/GarageSale" />
        }
    }
    render(){
        return(    
            <div>
          <ModalFooter>
              {this.renderRedirect()}
            <Button color="primary" onClick={this.setRedirect.bind(this)}>Search/Find Garage Sale</Button>{' '}
            {this.renderRedirected()}
            <Button color="secondary" onClick={this.setRedirect.bind(this)} >Yard Sale Notifications(Sign UP)</Button>
          </ModalFooter>
         {/*this.state.cardData.map((card)=>(<Card name={}image={}handleClick={}/> ))*/}
      </div>
      
    );             
    }
}

export default Buyer;