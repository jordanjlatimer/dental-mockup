import React from "react";
import Form from "../SubModules/Form/Form";
import FormGroup from "../SubModules/Form/FormGroup";
import Select from "../SubModules/Form/Select";
import NumberInput from "../SubModules/Form/NumberInput";
import customers from "../../dummyData/customerNames.json";
import categories from "../../dummyData/transactionCategories.json";
import RadioGroup from "../SubModules/Form/Radio/RadioGroup";
import RadioOption from "../SubModules/Form/Radio/RadioOption";
import TextareaInput from "../SubModules/Form/TextareaInput";
import DateInput from "../SubModules/Form/DateInput";

export default function CreationForm(props) {
  return (
    <Form header="Create a Transaction">
      <FormGroup>
        <Select
          label="Customer"
          placeholder="Select a customer..."
          options={customers}
        />
        <Select
          label="Category"
          placeholder="Select a category..."
          options={categories}
        />
      </FormGroup>
      <FormGroup>
        <RadioGroup label="Type">
          <RadioOption value="Revenue" />
          <RadioOption value="Expense" />
        </RadioGroup>
        <NumberInput money label="Amount" />
        <DateInput placeholder="Select a date..." label="Date" />
      </FormGroup>
      <FormGroup>
        <TextareaInput label="Notes" />
      </FormGroup>
      <FormGroup>
        <div className="button positive">
          <p>Create</p>
        </div>
      </FormGroup>
    </Form>
  );
}
