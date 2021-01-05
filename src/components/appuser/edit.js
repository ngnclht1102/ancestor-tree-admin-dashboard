import * as React from 'react'
import {
  FormDataConsumer,
  Create,
  Edit,
  BooleanInput,
  SelectInput,
  SimpleForm,
  TextInput,
  NumberInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NullableBooleanInput,
  DateInput,
  ReferenceManyField,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  PasswordInput,
  required
} from 'react-admin'
import RichTextInput from 'ra-input-rich-text'
import SexInput from '../../ra-components/input/SexInput'

const PeopleEdit = (props) => (
  <Edit {...props} title="Đổi mật khẩu hoặc thay đổi thông tin người xem">
    <SimpleForm>
      <span>
        Tạo tài khoản và đưa cho người khác, họ có thể truy cập vào xem danh
        sách dòng họ nhưng không thể xóa hay sửa
      </span>
      <br />
      <ReferenceInput
        label="Được xem dòng họ"
        source="family_id"
        reference="families"
      >
        <SelectInput optionText="name" optionValue="id" />
      </ReferenceInput>
      <TextInput source="name" label="Tên gợi nhớ (tên gì cũng được)..." />
      <TextInput source="email" label="Email để đăng nhập" />
      <PasswordInput source="password" label="Mật khẩu..." />
    </SimpleForm>
  </Edit>
)

export default PeopleEdit
