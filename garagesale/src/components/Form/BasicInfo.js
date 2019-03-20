import React, {Component} from "react";
import {Col, Button, Form, FormGroup, Label, Input, FormText} from "reactstrap";

class BasicInfo extends Component {
    state={
        name:"",
        submit:""
    };
    render() {
        return(
            <Form>
            <FormGroup row>
              <Label for="exampleEmail" sm={2}>Street</Label>
              <Col sm={10}>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword" sm={2}>City</Label>
              <Col sm={10}>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleSelect" sm={2}>State</Label>
              <Col sm={10}>
                <Input type="select" name="select" id="exampleSelect" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleSelectMulti" sm={2}>Select Multiple</Label>
              <Col sm={10}>
                <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleText" sm={2}>Zip Code</Label>
              <Col sm={10}>
                <Input type="textarea" name="text" id="exampleText" />
              </Col>
            </FormGroup>
            <FormGroup row>
                <FormText color="muted">
                  This is some placeholder block-level help text for the above input.
                  It's a bit lighter and easily wraps to a new line.
                </FormText>
            </FormGroup>
            <FormGroup tag="fieldset" row>
              <legend className="col-form-label col-sm-2">Radio Buttons</legend>
              <Col sm={10}>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio2" />{' '}
                    Option one is this and that—be sure to include why it's great
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio2" />{' '}
                    Option two can be something else and selecting it will deselect option one
                  </Label>
                </FormGroup>
                <FormGroup check disabled>
                  <Label check>
                    <Input type="radio" name="radio2" disabled />{' '}
                    Option three is disabled
                  </Label>
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="checkbox2" sm={2}>Checkbox</Label>
              <Col sm={{ size: 10 }}>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" id="checkbox2" />{' '}
                    Check me out
                  </Label>
                </FormGroup>
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



    
export default BasicInfo;