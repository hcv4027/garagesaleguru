import React,{Component} from "react";


class Card extends Component{
    state={
        FirstName:"John" ,
        LastName:"Doe",
        City:"Concord",
        State:"NC",
        Street:"1000 Harden Lane",
        ItemName:"Bike"
    }
    handleSubmit(){

    }
    render(){
        return(
            <div className="card w-75">
          <div className="card-body">
            <h5 className="card-title">{this.state.ItemName}</h5>
            <p className="card-text">{this.state.FirstName}{this.state.LastName}{this.state.City}{this.state.State}{this.state.Street}</p>
            <p className="btn btn-primary">Remove</p>
            <p className="btn btn-secondary">Generate Flyers/Signs</p>
            <p className="btn btn-danger">Generate QR/Barode</p>
          </div>
        </div>
            )
    }

}


export default Card;
