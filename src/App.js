import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import authProvider from './provider/auth-provider';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="users" list={ListGuesser} />
  </Admin>)

export default App;
