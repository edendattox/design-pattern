import { ResourceLoader } from "./ResourceLoader";
import { UserInfo } from "./UserInfo";
import { ProductInfo } from "./ProductInfo";
import axios from "axios";
import { DataSource } from "./DataSource";

const getServerData = (url) => async () => {
  const { data } = await axios.get(url);
  return data;
};

const getLocalStorageData = (key) => () => {
  return localStorage.getItem(key);
};

const Text = ({ message }) => <h1>{message}</h1>;

function App() {
  return (
    <>
      <ResourceLoader resourceUrl="/users/123" resourceName="user">
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceUrl="/products/101" resourceName="product">
        <ProductInfo />
      </ResourceLoader>
      <DataSource getDataFunc={getServerData("/users/123")} resourceName="user">
        <UserInfo />
      </DataSource>
      <DataSource
        getDataFunc={getLocalStorageData("message")}
        resourceName="message"
      >
        <Text />
      </DataSource>
    </>
  );
}

export default App;
