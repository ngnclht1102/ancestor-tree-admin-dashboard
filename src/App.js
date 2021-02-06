import React, { useState, useEffect } from 'react'
import { Admin, Resource } from 'react-admin'
import vietnameseMessages from 'react-admin-vietnamese'
import polyglotI18nProvider from 'ra-i18n-polyglot'

import BookIcon from '@material-ui/icons/Book'
import UserIcon from '@material-ui/icons/People'
import InfoIcon from '@material-ui/icons/Info'

import authProvider from './provider/auth-provider'
import dataProvider from './provider/data-provider'

import ListFamilies from './components/families/list'
import CreateFamily from './components/families/create'
import EditFamily from './components/families/edit'

import ListPeople from './components/people/list'
import CreatePeople from './components/people/create'
import EditPeople from './components/people/edit'

import ListAppuser from './components/appuser/list'
import CreateAppuser from './components/appuser/create'
import EditAppuser from './components/appuser/edit'

import ListEvents from './components/events/list'
import CreateEvent from './components/events/create'
import EditEvent from './components/events/edit'

const messages = {
  vi: vietnameseMessages
}

const i18nProvider = polyglotI18nProvider((locale) => messages[locale])

const App = () => {
  return (
    <Admin
      // locale="vi"
      // i18nProvider={i18nProvider}
      authProvider={authProvider}
      dataProvider={dataProvider}
    >
      <Resource
        name="families"
        options={{ label: 'Thông tin dòng họ' }}
        icon={InfoIcon}
        list={ListFamilies}
        edit={EditFamily}
        create={CreateFamily}
      />
      <Resource
        name="persons"
        options={{ label: 'Gia phả' }}
        icon={BookIcon}
        list={ListPeople}
        edit={EditPeople}
        create={CreatePeople}
      />
      <Resource
        name="events"
        icon={UserIcon}
        options={{ label: 'Sự kiện' }}
        list={ListEvents}
        edit={EditEvent}
        create={CreateEvent}
      />
      <Resource
        name="appusers"
        icon={UserIcon}
        options={{ label: 'Người xem' }}
        list={ListAppuser}
        edit={EditAppuser}
        create={CreateAppuser}
      />
    </Admin>
  )
}

export default App
