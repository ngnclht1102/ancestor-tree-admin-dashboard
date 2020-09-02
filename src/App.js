import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import authProvider from './provider/auth-provider';
import dataProvider from './provider/data-provider'

const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="families" list={ListGuesser} />
  </Admin>)

export default App;
