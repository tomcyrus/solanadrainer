import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { CategoryList } from "./category/CategoryList";
import { CategoryCreate } from "./category/CategoryCreate";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryShow } from "./category/CategoryShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { PaystackPaymentList } from "./paystackPayment/PaystackPaymentList";
import { PaystackPaymentCreate } from "./paystackPayment/PaystackPaymentCreate";
import { PaystackPaymentEdit } from "./paystackPayment/PaystackPaymentEdit";
import { PaystackPaymentShow } from "./paystackPayment/PaystackPaymentShow";
import { CryptoPaymentList } from "./cryptoPayment/CryptoPaymentList";
import { CryptoPaymentCreate } from "./cryptoPayment/CryptoPaymentCreate";
import { CryptoPaymentEdit } from "./cryptoPayment/CryptoPaymentEdit";
import { CryptoPaymentShow } from "./cryptoPayment/CryptoPaymentShow";
import { PreOrderList } from "./preOrder/PreOrderList";
import { PreOrderCreate } from "./preOrder/PreOrderCreate";
import { PreOrderEdit } from "./preOrder/PreOrderEdit";
import { PreOrderShow } from "./preOrder/PreOrderShow";
import { CartItemList } from "./cartItem/CartItemList";
import { CartItemCreate } from "./cartItem/CartItemCreate";
import { CartItemEdit } from "./cartItem/CartItemEdit";
import { CartItemShow } from "./cartItem/CartItemShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TomCyrus"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="Category"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          show={CategoryShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="PaystackPayment"
          list={PaystackPaymentList}
          edit={PaystackPaymentEdit}
          create={PaystackPaymentCreate}
          show={PaystackPaymentShow}
        />
        <Resource
          name="CryptoPayment"
          list={CryptoPaymentList}
          edit={CryptoPaymentEdit}
          create={CryptoPaymentCreate}
          show={CryptoPaymentShow}
        />
        <Resource
          name="PreOrder"
          list={PreOrderList}
          edit={PreOrderEdit}
          create={PreOrderCreate}
          show={PreOrderShow}
        />
        <Resource
          name="CartItem"
          list={CartItemList}
          edit={CartItemEdit}
          create={CartItemCreate}
          show={CartItemShow}
        />
      </Admin>
    </div>
  );
};

export default App;
