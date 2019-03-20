import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Pages/Home";
import Buyer from "./components/Pages/Buyer";
import Seller from "./components/Pages/Seller";
import Notification from "./components/Pages/SaleNotifications";
import GarageSale from "./components/Form/GarageSale";
import './App.css';

function App() {
  return (
    <Router>
      <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/Buyer" component={Buyer} />
      <Route exact path="/Seller" component={Seller} />
      <Route exact path="/Buyer/SalesNotification" component={Notification} />
      <Route exact path="/Buyer/GarageSale" component={GarageSale} />

       </div> 
    </Router>
  );
}

export default App;