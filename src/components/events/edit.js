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
import { useSelector } from 'react-redux'
import { get_data_of } from '../../utils/resource-seletector'
import SexInput from '../../ra-components/input/SexInput'

const EventEdit = (props) => {
  const events = useSelector((state) => get_data_of(state, 'events')) || []
  const item =
    events && events.length ? events.find((e) => (e.id = props.id)) : {}
  const [repeatType, setRepeatType] = React.useState(
    item ? item.repeat_type : 'no-repeat'
  )
  return (
    <Edit {...props} title="Thêm người xem">
      <SimpleForm>
        <span>
          Chỉnh sửa thông tin sự kiện rồi bấm nút Lưu bên góc phải phía dưới
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
              { id: 'repeat-yearly', name: 'Lặp lại mỗi năm' },
              { id: 'no-repeat', name: 'Không' }
            ]}
            initialValue={'no-repeat'}
            onChange={({ target }) => setRepeatType(target.value)}
          />
          <span>Ngày tháng: </span>
          <SelectInput
            initialValue={false}
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
          {repeatType === 'no-repeat' ? (
            <NumberInput source="dt_year" label="Năm (bắt buộc)" />
          ) : null}
          <RichTextInput
            source="description"
            label="Nhập thêm thông tin ghi chú ở phía dưới:"
          />
        </>
      </SimpleForm>
    </Edit>
  )
}

export default EventEdit
