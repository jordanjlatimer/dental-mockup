import React, { useState } from "react";
import Form from "../SubModules/Form/Form";
import FormGroup from "../SubModules/Form/FormGroup";
import Select from "../SubModules/Form/Select";
import TextInput from "../SubModules/Form/TextInput";
import NumberInput from "../SubModules/Form/NumberInput";
import vendors from "../../dummyData/vendorNames.json"
import Checkbox from "../SubModules/Form/Checkbox"
import RadioGroup from "../SubModules/Form/Radio/RadioGroup";
import RadioOption from "../SubModules/Form/Radio/RadioOption";

export default function CreationForm(props){
  const [expires, setExpires] = useState(false)

  return(
    <Form header="Create an Item">
      <FormGroup>
        <NumberInput label="Item ID"/>
        <TextInput label="Item Name"/>
        <Select label="Vendor" placeholder="Select a vendor..." options={vendors}/>
        <Select label="Category" placeholder="Select a category..." options={["Alloys", "Implant", "Materials", "Rotary", "Safety"]}/>
      </FormGroup>
      <FormGroup>
        <NumberInput label="Cost" money/>
        <NumberInput label="On Hand"/>
        <NumberInput label="Min"/>
        <NumberInput label="Max"/>
      </FormGroup>
      <FormGroup>
        <RadioGroup label="Does this item expire?">
          <RadioOption value="Yes"/>
          <RadioOption value="No"/>
        </RadioGroup>
      </FormGroup>
      <FormGroup>
        <div className="button positive">
          <p>Create</p>
        </div>
      </FormGroup>
    </Form>
  )
}