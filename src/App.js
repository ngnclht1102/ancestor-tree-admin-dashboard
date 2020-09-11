import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import vietnameseMessages from 'react-admin-vietnamese';
import polyglotI18nProvider from 'ra-i18n-polyglot';

import authProvider from './provider/auth-provider';
import dataProvider from './provider/data-provider'

import ListFamilies from './components/families/list'
import CreateFamily from './components/families/create'
import EditFamily from './components/families/edit'


const messages = {
  'vi': vietnameseMessages,
};

const i18nProvider = polyglotI18nProvider(locale => messages[locale]);


const App = () => (
  <Admin
    // locale="vi"
    // i18nProvider={i18nProvider}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource name="families" list={ListFamilies} edit={EditFamily} create={CreateFamily} />
  </Admin>)

export default App;
