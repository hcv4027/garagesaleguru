import React, {Component} from "react";
import {Redirect} from "react-router-dom";

class Button1 extends Component{
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
      return <Redirect to="/Buyer" />
    }
}
    render(){
        return( <div>
            {this.renderRedirect()}
            <button onClick={this.setRedirect.bind(this)} type="button" class="btn btn-primary btn-lg btn-block">Buyer</button>
                </div>
       );
   }
};


   

export default Button1;