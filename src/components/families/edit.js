import * as React from 'react'
import {
  Create,
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceManyField,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  required
} from 'react-admin'
import RichTextInput from 'ra-input-rich-text'

const FamilyEdit = (props) => (
  <Edit title="Xem và sửa thông tin dòng họ" {...props}>
    <SimpleForm>
      <TextInput
        source="name"
        validate={required()}
        label="Nhập tên dòng họ vào đây..."
      />
      <TextInput
        source="main_address"
        validate={required()}
        label="Nhập địa chỉ dòng họ vào đây..."
      />
      <RichTextInput
        source="description"
        label="Nhập thêm thông tin ghi chú ở phía dưới:"
      />
    </SimpleForm>
  </Edit>
)

export default FamilyEdit
