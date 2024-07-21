import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CryptoPaymentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CryptoPayments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="walletAddress" source="walletAddress" />
        <TextField label="transactionId" source="transactionId" />
        <TextField label="amount" source="amount" />
        <TextField label="paymentDate" source="paymentDate" />
      </Datagrid>
    </List>
  );
};
