import React, {Component} from "react";
import {Redirect} from "react-router-dom";

class Button2 extends Component{
    state = {
        redirect: false
};
setRedirect(){
this.setState({
    redirect: true
})
};
renderRedirect(){
    if (this.state.redirect) {
      return <Redirect to="/Seller" />
    }
}
    render(){
        return( <div>
            {this.renderRedirect()}
            <button onClick={this.setRedirect.bind(this)} type="button" class="btn btn-secondary btn-lg btn-block">Seller</button>
                </div>
       );
   }
};
    


export default Button2