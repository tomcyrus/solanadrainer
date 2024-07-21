import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CartItemTitle } from "../cartItem/CartItemTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="color" source="color" />
        <TextInput label="title" source="title" />
        <NumberInput step={1} label="numberInStock" source="numberInStock" />
        <TextInput label="description" multiline source="description" />
        <NumberInput label="price" source="price" />
        <ReferenceArrayInput
          source="cartItems"
          reference="CartItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CartItemTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
