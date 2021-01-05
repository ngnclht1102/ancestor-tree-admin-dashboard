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
  required
} from 'react-admin'
import RichTextInput from 'ra-input-rich-text'
import SexInput from '../../ra-components/input/SexInput'

const PeopleEdit = (props) => (
  <Edit {...props} title="Sửa thông tin của người">
    <SimpleForm>
      <ReferenceInput
        label="Thuộc dòng họ"
        source="family_id"
        reference="families"
      >
        <SelectInput optionText="name" optionValue="id" />
      </ReferenceInput>
      <TextInput
        source="full_name"
        validate={required()}
        label="Tên đầy đủ..."
      />
      <TextInput
        source="nickname"
        validate={required()}
        label="Tên khác nếu có (ví dụ Cố Nền) ..."
      />

      <SexInput label="Giới tính" source="gender" />
      <>
        <span>Ngày sinh: </span>
        <SelectInput
          source="dob_in_lunar"
          label="Dương hay âm"
          choices={[
            { id: true, name: 'Âm lịch' },
            { id: false, name: 'Dương lịch' }
          ]}
        />
        <NumberInput
          source="dob_date"
          validate={required()}
          max={31}
          min={1}
          label="Ngày sinh"
        />
        <NumberInput
          source="dob_month"
          validate={required()}
          max={12}
          min={1}
          label="Tháng sinh"
        />
        <NumberInput source="dob_year" validate={required()} label="Năm sinh" />
      </>

      <SelectInput
        source="is_dead"
        label="Còn sống hay đã mất"
        choices={[
          { id: true, name: 'Còn sống' },
          { id: false, name: 'Đã mất' }
        ]}
      />
      <FormDataConsumer>
        {(formData, ...rest) => {
          return !formData.formData.is_dead ? (
            <>
              <span>Ngày mất: </span>
              <SelectInput
                source="dod_in_lunar"
                label="Dương hay âm"
                choices={[
                  { id: true, name: 'Âm lịch' },
                  { id: false, name: 'Dương lịch' }
                ]}
              />
              <NumberInput
                source="dod_date"
                validate={required()}
                max={31}
                min={1}
                label="Ngày mất"
              />
              <NumberInput
                source="dod_month"
                validate={required()}
                max={12}
                min={1}
                label="Tháng mất"
              />
              <NumberInput
                initialValue={1980}
                source="dod_year"
                validate={required()}
                label="Năm mất"
              />
            </>
          ) : null
        }}
      </FormDataConsumer>
      <NumberInput
        min={1}
        source="family_level"
        validate={required()}
        label="Đời thứ mấy trong dòng họ?"
      />
      <span>Mối quan hệ gia đình:</span>
      <>
        <ReferenceInput
          label="Cha là ông"
          source="father_id"
          reference="persons"
          allowEmpty
        >
          <SelectInput optionText="full_name" />
        </ReferenceInput>
        <ReferenceInput
          label="Mẹ là bà"
          source="mother_id"
          reference="persons"
          allowEmpty
        >
          <SelectInput optionText="full_name" />
        </ReferenceInput>
      </>
      <ReferenceInput
        label="Vợ/Chồng là:"
        source="spouse_id"
        reference="persons"
        allowEmpty
      >
        <SelectInput optionText="full_name" />
      </ReferenceInput>

      <NumberInput
        min={1}
        source="sibling_level"
        validate={required()}
        label="Là con thứ mấy trong nhà?"
      />
      <SelectInput
        source="is_root"
        label="Có phải là ông tổ?"
        choices={[
          { id: true, name: 'Đúng, là ông tổ' },
          { id: false, name: 'Không phải' }
        ]}
      />

      <RichTextInput
        source="description"
        label="Nhập thêm thông tin ghi chú ở phía dưới:"
      />
    </SimpleForm>
  </Edit>
)

export default PeopleEdit
