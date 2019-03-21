import React,{Component} from "react";
import NavElement from "../Nav/Navbar";
import CardColumn from "../Card/CardColumn";
import "../Card/card.css"
//import {Calendar} from "../Calendar/Calendar";
//Set time and confirm button

class Calendar extends Component{
    state={

    };
    render(){
     return(
         //<Calendar />
         <div>
             <NavElement />
            <CardColumn />
         </div>
    
     )
     }
};


export default Calendar;