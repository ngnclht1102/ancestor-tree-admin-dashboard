import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import authProvider from './provider/auth-provider';
import dataProvider from './provider/data-provider'

import ListFamilies from './components/families/list'

const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="families" list={ListFamilies} />
  </Admin>)

export default App;
