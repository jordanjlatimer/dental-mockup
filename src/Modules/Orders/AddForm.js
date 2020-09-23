import React from "react";
import Form from "../SubModules/Form/Form";
import FormGroup from "../SubModules/Form/FormGroup";
import Select from "../SubModules/Form/Select";
import TextInput from "../SubModules/Form/TextInput";
import NumberInput from "../SubModules/Form/NumberInput";
import vendors from "../../dummyData/vendorNames.json"
import RadioOption from "../SubModules/Form/Radio/RadioOption";
import RadioGroup from "../SubModules/Form/Radio/RadioGroup";
import DateInput from "../SubModules/Form/DateInput";
import Table from "../SubModules/Table";

export default function CreationForm(props){
  return(
    <Form header="Create an Order">
      <FormGroup>
        <Select label="Vendor" placeholder="Select a vendor..." options={vendors}/>
        <RadioGroup label="Status">
          <RadioOption value="Placed"/>
          <RadioOption value="Received"/>
        </RadioGroup>
      </FormGroup>
      <FormGroup>
        <DateInput label="Date Placed"/>
        <DateInput label="Date Received"/>
      </FormGroup>
      <FormGroup>
        <div className="button positive">
          <p>Create</p>
        </div>
      </FormGroup>
    </Form>
  )
}