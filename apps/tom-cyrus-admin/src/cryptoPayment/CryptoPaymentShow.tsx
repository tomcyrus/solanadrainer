import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CryptoPaymentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="walletAddress" source="walletAddress" />
        <TextField label="transactionId" source="transactionId" />
        <TextField label="amount" source="amount" />
        <TextField label="paymentDate" source="paymentDate" />
      </SimpleShowLayout>
    </Show>
  );
};
