import React from "react";
import Button1 from "../Buttons/buyerButton";
import Button2 from "../Buttons/sellerButton";
import "../Pages/Home.css"
//Home page template includes 2 buttons a logo and a title

function Home(){
    return(
        <div>
            <div class="jumbotron">
  <h1 class="display-4">Garage Sale Guru</h1>
  <p class="lead">Welcome to the Garage Sale Guru.</p>  
  </div>
    <div class="container">
    <Button1 />
    <Button2 />
  </div>
            </div>
    

       
    );        
}
export default Home;