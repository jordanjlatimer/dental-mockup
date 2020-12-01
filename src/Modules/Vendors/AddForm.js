import React from "react";
import Form from "../SubModules/Form/Form";
import FormGroup from "../SubModules/Form/FormGroup";
import Select from "../SubModules/Form/Select";
import TextInput from "../SubModules/Form/TextInput";
import NumberInput from "../SubModules/Form/NumberInput";

export default function CreationForm(props){
  return(
    <Form header="Create a Vendor">
      <FormGroup>
        <TextInput label="Name"/>
        <TextInput label="Phone Number"/>
        <TextInput label="Email"/>
      </FormGroup>
      <FormGroup>
        <TextInput label="Address Line 1"/>
        <TextInput label="Address Line 2"/>
        <TextInput label="City"/>
        <Select label="State" placeholder="Select a state..." options={["Alabama", "Alaska", "Arizona", "Arkansas", "Etc..."]}/>
        <NumberInput label="Zip"/>
      </FormGroup>
      <FormGroup>
        <NumberInput label="Shipping Cost" money/>
      </FormGroup>
      <FormGroup>
        <div className="button positive">
          <p>Create</p>
        </div>
      </FormGroup>
    </Form>
  )
}