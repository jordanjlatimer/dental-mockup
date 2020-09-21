import React from "react";
import Form from "../SubModules/Form/Form";
import FormGroup from "../SubModules/Form/FormGroup";
import Select from "../SubModules/Form/Select";
import TextInput from "../SubModules/Form/TextInput";
import NumberInput from "../SubModules/Form/NumberInput";

export default function CreationForm(props){
  return(
    <Form header="Add a Customer">
      <FormGroup>
        <TextInput label="First Name"/>
        <TextInput label="Last Name"/>
      </FormGroup>
      <FormGroup>
        <TextInput label="Address Line 1"/>
        <TextInput label="Address Line 2"/>
        <TextInput label="City"/>
        <Select label="State" placeholder="Select a state..." options={["Alabama", "Alaska", "Arizona", "Arkansas", "Etc..."]}/>
        <NumberInput label="Zip"/>
      </FormGroup>
      <FormGroup>
        <TextInput label="Insurance Provider"/>
        <TextInput label="Policy Number"/>
      </FormGroup>
    </Form>
  )
}