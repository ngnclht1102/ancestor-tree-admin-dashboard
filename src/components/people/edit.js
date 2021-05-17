import * as React from 'react'
import { Edit } from 'react-admin'
import Form from './form'

const PeopleEdit = (props) => {
  // console.log('PeopleEdit')
  // console.log(props)
  return (
    <Edit {...props} title="Sửa thông tin của người">
      <Form {...props} />
    </Edit>
  )
}

export default PeopleEdit
