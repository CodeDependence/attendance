import React, { Component } from 'react';
import Form from "react-jsonschema-form-semanticui";
import Control from './member-add-control'

const schema = {
  title: "Details",
  type: "object",
  required: ["name"],
  properties: {
    name: { type: "string", title: "Name" },
    email: { type: "string", format: "email", title: "Email" },
    address: { type: "string", title: "Street Address" },
    suburb: { type: "string", title: "Suburb" },
    state: { type: "string", title: "State", default: "VIC", enum: ["VIC", "NSW", "SA", "QLD", "NT", "WA", "TAS"] },
    postcode: { type: "number", title: "Postcode" },
    phone: { type: "string", title: "Phone number" },
    mobile: { type: "string", title: "Mobile number" },
  }
}

const uiSchema = {
  name: {
    "ui:placeholder": "Enter a unique username",
  },
  phone: {
    "ui:options": {
      inputType: 'tel'
    }
  },
  mobile: {
    "ui:options": {
      inputType: 'tel'
    }
  },
}

const Details = (props) => {
  return (
    <Form
      schema={schema}
      uiSchema={uiSchema}
      onSubmit={props.onSubmit}
      formData={props.formData}
      onChange={props.onChange}
    >
    <Control backStep={props.backStep} step={props.step}/>
    </Form>
  );
}

export default Details