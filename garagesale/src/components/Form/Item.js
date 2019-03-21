import React, {Component}from "react";
import {Col, Button, Form, FormGroup, Label, Input, FormText} from "reactstrap";



class Item extends Component{
    state={};
    
    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      },
      );
    }

    onSubmit = event => {
      // console.log(this.state);
      let {firstname,
          lastname,
          street,
          city,
          state,
          zipcode} = this.state;
          if(!firstname || !lastname || !street || !city || !state || !zipcode) {
            alert("All Seller fields are REQUIRED!")
          }
          else {
            fetch('/api/newsale', {
              method: "post",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                firstname,
                lastname,
                street,
                city,
                state,
                zipcode
              })
            }).then(response => response.json()).then(data => console.log("New garage sale created") )
          }
    }

    render(){
        return(
            //Creates a form to display for the seller
            <Form>
            <FormGroup row>
              <Label for="exampleEmail" sm={2}>First Name:</Label>
              <Col sm={10}>
                <Input type="First Name" name="firstname" value= {this.state.firstname || ""} 
                onChange={this.handleChange} id="FirstName" placeholder=" First Name" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="LastName" sm={2}>Last Name:</Label>
              <Col sm={10}>
                <Input type="LastName" name="lastname" value= {this.state.lastname || ""} 
                onChange={this.handleChange} id="exampleLastName" placeholder="Last Name" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleStreet" sm={2}>Street</Label>
              <Col sm={10}>
                <Input type="text" name="street"  value={this.state.street || ""} 
                onChange={this.handleChange} placeholder="Street"/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleSelectMulti" sm={2}>City</Label>
              <Col sm={10}>
                <Input type="text" name="city" value={this.state.city || ""} 
                onChange={this.handleChange} placeholder="City" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleText" sm={2}>State</Label>
              <Col sm={10}>
                <Input type="text" name="state" value={this.state.state || ""} 
                onChange={this.handleChange} placeholder="State" />
              </Col>
            </FormGroup>
            <FormGroup row>
            <Label for="exampleText" sm={6}>Zip</Label>
              <Col sm={10}>
                <Input type="text" name="zipcode" value={this.state.zipcode || ""} 
                onChange={this.handleChange} placeholder="Zip Code" />
              </Col>
            </FormGroup>
            {/* <FormGroup row>
            <Label for="exampleText" sm={2}>Item Name</Label>
              <Col sm={10}>
                <Input type="textarea" name="text" id="" />
              </Col>
              </FormGroup>
            <FormGroup row>
              <Label for="exampleFile" sm={2}>Image File</Label>
              <Col sm={10}>
                <Input type="file" name="file" id="" />
                <FormText color="muted">
                  PNG/JPEG
                </FormText>
              </Col>
            </FormGroup> */}
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 2 }}>
                <Button onClick={this.onSubmit}>Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        );
      }
    }
export default Item;