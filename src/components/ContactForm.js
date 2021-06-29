import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const ContactForm = (props) => {
  return (
    <Form style={{color:'white'}}>
        <FormGroup>
        <Label for="examplename">Name</Label>
        <Input type="name" name="name" id="examplename" placeholder="Enter your name.." />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email.." />
      </FormGroup>
      
      
      
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" placeholder="Enter a detailed message" />
      </FormGroup>
      

      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          <p style={{fontSize:"12px"}} >Opt-in for emails</p>
        </Label>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default ContactForm;