// import { ResourceLoader } from "./ResourceLoader";
// import { UserInfo } from "./UserInfo";
// import { ProductInfo } from "./ProductInfo";
// import axios from "axios";
// import { DataSource } from "./DataSource";
// import { printProps } from "./printProps";
// import { withUser } from "./withUser";

// const UserInfoWrapped = printProps(UserInfo);
// const UserInfoWithLoader = withUser(UserInfo, "123");

import { UserInfoForm } from "./UserInfoForm";

export function App() {
  return (
    <>
      <UserInfoForm />
    </>
  );
}

// const getServerData = (url) => async () => {
//   const { data } = await axios.get(url);
//   return data;
// };

// const getLocalStorageData = (key) => () => {
//   return localStorage.getItem(key);
// };

// const Text = ({ message }) => <h1>{message}</h1>;

// function App() {
//   return (
//     <>
//     <printProps />
//       <ResourceLoader resourceUrl="/users/123" resourceName="user">
//         <UserInfo />
//       </ResourceLoader>
//       <ResourceLoader resourceUrl="/products/101" resourceName="product">
//         <ProductInfo />
//       </ResourceLoader>
//       <DataSource getDataFunc={getServerData("/users/123")} resourceName="user">
//         <UserInfo />
//       </DataSource>
//       <DataSource
//         getDataFunc={getLocalStorageData("message")}
//         resourceName="message"
//       >
//         <Text />
//       </DataSource>
//     </>
//   );
// }

// export default App;
