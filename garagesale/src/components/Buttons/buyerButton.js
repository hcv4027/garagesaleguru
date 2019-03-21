import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {Container,Col,Row} from "reactstrap";
import Image from "react-bootstrap/Image";

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
        return( 
            
        <div>
            {this.renderRedirect()}
            <Container >
        <Row>
        <Col xs={6} md={4}>
        <Image onClick={this.setRedirect.bind(this)} src="https://picsum.photos/400/300?image=0" rounded />
        Buyer
    </Col>
    </Row>
    </Container>
        </div>
        
       );
   }
};


   

export default Button1;