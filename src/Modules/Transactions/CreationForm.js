import React from "react";
import Form from "../SubModules/Form/Form";
import FormGroup from "../SubModules/Form/FormGroup";
import Select from "../SubModules/Form/Select";
import TextInput from "../SubModules/Form/TextInput";
import NumberInput from "../SubModules/Form/NumberInput";
import customers from "../../dummyData/customerNames.json";
import categories from "../../dummyData/transactionCategories.json"
import RadioGroup from "../SubModules/Form/Radio/RadioGroup";
import RadioOption from "../SubModules/Form/Radio/RadioOption";
import Checkbox from "../SubModules/Form/Checkbox";
import TextareaInput from "../SubModules/Form/TextareaInput"
import DateInput from "../SubModules/Form/DateInput";

export default function CreationForm(props){
  return(
    <Form>
      <FormGroup>
        <Select label="Customer" placeholder="Select a customer..." options={customers}/>
        <Select label="Category" placeholder="Select a category..." options={categories}/>
      </FormGroup>
      <FormGroup>
        <RadioGroup label="Type">
          <RadioOption value="Revenue"/>
          <RadioOption value="Expense"/>
        </RadioGroup>
        <NumberInput label="Amount"/>
        <DateInput placeholder="Select a date..." label="Date"/>
      </FormGroup>
      <FormGroup>
        <TextareaInput label="Notes"/>
      </FormGroup>
      <FormGroup>
        <div className="button positive">
          <p>Create Transaction</p>
        </div>
      </FormGroup>
    </Form>
  )
}