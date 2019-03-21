import React from "react";
import Item from "../Form/Item";
import NavElement from "../Nav/Navbar";
import Card from "../Card/Cards"
import "../Pages/Home.css"



function Seller(){
    return(
    <div>
        <NavElement />
         <Item />
         <div>
             
             <Card />
        </div>
         
    </div>
       

    )    
};
export default Seller;