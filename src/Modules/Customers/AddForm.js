import React from "react";
import Form from "../SubModules/Form/Form";
import FormGroup from "../SubModules/Form/FormGroup";
import Select from "../SubModules/Form/Select";
import TextInput from "../SubModules/Form/TextInput";
import NumberInput from "../SubModules/Form/NumberInput";
import states from "../../dummyData/states.json";

export default function AddForm(props) {
  return (
    <Form header="Create a Customer">
      <FormGroup>
        <TextInput label="First Name" />
        <TextInput label="Last Name" />
      </FormGroup>
      <FormGroup>
        <TextInput label="Address Line 1" />
        <TextInput label="Address Line 2" />
        <TextInput label="City" />
        <Select
          label="State"
          placeholder="Select a state..."
          options={states}
        />
        <NumberInput label="Zip" />
      </FormGroup>
      <FormGroup>
        <TextInput label="Insurance Provider" />
        <NumberInput label="Policy Number" />
      </FormGroup>
      <FormGroup>
        <TextInput label="Phone Number" />
        <TextInput label="Email" />
      </FormGroup>
      <FormGroup>
        <div className="button positive">
          <p>Create</p>
        </div>
      </FormGroup>
    </Form>
  );
}
