import React, {Component}from "react";
import {Col, Button, Form, FormGroup, Label, Input, FormText} from "reactstrap";


class Item extends Component{
    state={
        name:"",
        Submit:""
    };
    render(){
        return(
            //Creates a form to display for the seller
            <Form>
            <FormGroup row>
              <Label for="exampleEmail" sm={2}>First Name:</Label>
              <Col sm={10}>
                <Input type="First Name" name="First Name" id="FirstName" placeholder=" First Name" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="LastName" sm={2}>Last Name:</Label>
              <Col sm={10}>
                <Input type="LastName" name="LastName" id="exampleLastName" placeholder="Last Name" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleStreet" sm={2}>Street</Label>
              <Col sm={10}>
                <Input type="select" name="select" id="" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleSelectMulti" sm={2}>City</Label>
              <Col sm={10}>
                <Input type="select" name="selectMulti" id="" multiple />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleText" sm={2}>State</Label>
              <Col sm={10}>
                <Input type="textarea" name="text" id="" />
              </Col>
            </FormGroup>
            <FormGroup row>
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
            </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 2 }}>
                <Button>Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        );
      }
    }
    
    
   

export default Item;