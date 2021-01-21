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

const PeopleCreate = (props) => (
  <Create {...props} title="Thêm người xem">
    <SimpleForm>
      <span>
        Thêm mới sự kiện cho dòng họ, ví dụ: các ngày giỗ, các ngày đi tảo mộ,
        v.v
      </span>
      <br />
      <TextInput source="name" label="Tên sự kiện (ví dụ 'tảo mộ')..." />

      <>
        <span>Lặp lại: </span>
        <SelectInput
          initialValue={2}
          source="repeat_type"
          label="Lặp lại hay không?"
          choices={[
            { id: 'yearly', name: 'Lặp lại mỗi năm' },
            { id: 'no-repeat', name: 'Không' }
          ]}
        />
        <span>Ngày tháng: </span>
        <SelectInput
          initialValue={2}
          source="dt_in_lunar"
          label="Dương hay âm"
          choices={[
            { id: true, name: 'Âm lịch' },
            { id: false, name: 'Dương lịch' }
          ]}
        />
        <NumberInput
          initialValue={22}
          source="dt_date"
          validate={required()}
          max={31}
          min={1}
          label="Ngày (bắt buộc)"
        />
        <NumberInput
          initialValue={12}
          source="dt_month"
          validate={required()}
          max={12}
          min={1}
          label="Tháng (bắt buộc)"
        />
        <NumberInput source="dt_year" label="Năm (không bắt buộc)" />
        <RichTextInput
          source="description"
          label="Nhập thêm thông tin ghi chú ở phía dưới:"
        />
      </>
    </SimpleForm>
  </Create>
)

export default PeopleCreate
