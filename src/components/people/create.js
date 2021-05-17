import * as React from 'react'
import { Create } from 'react-admin'
import Form from './form'

const PeopleCreate = (props) => (
  <Create {...props} title="Thêm người vào dòng họ">
    <Form />
  </Create>
)

export default PeopleCreate
