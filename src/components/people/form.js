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

const Form = (props) => (
  <SimpleForm {...props}>
    {/* <ReferenceInput
        label="Thuộc dòng họ"
        source="family_id"
        reference="families"
      >
        <SelectInput optionText="name" optionValue="id" />
      </ReferenceInput> */}
    <TextInput source="full_name" validate={required()} label="Tên đầy đủ..." />
    <br />
    <TextInput source="nickname" label="Tên khác nếu có (ví dụ Cố Nền) ..." />
    <br />
    <SexInput initialValue="male" label="Giới tính" source="gender" />
    <>
      <br />
      <p>
        <span>Ngày sinh: </span>
        <span>(không bắt buộc)</span>
      </p>

      <SelectInput
        source="dob_in_lunar"
        label="Dương hay âm"
        initialValue={true}
        choices={[
          { id: true, name: 'Âm lịch' },
          { id: false, name: 'Dương lịch' }
        ]}
      />
      <NumberInput source="dob_date" max={31} min={1} label="Ngày" />
      <NumberInput source="dob_month" max={12} min={1} label="Tháng" />
      <NumberInput source="dob_year" label="Năm" />
    </>

    <SelectInput
      source="is_alive"
      label="Còn sống hay đã mất"
      initialValue={true}
      choices={[
        { id: true, name: 'Còn sống' },
        { id: false, name: 'Đã mất' }
      ]}
    />
    <FormDataConsumer>
      {(formData, ...rest) => {
        return !formData.formData.is_alive ? (
          <>
            <br />
            <p>
              <span>Ngày giỗ: </span>
              <span>(không bắt buộc)</span>
            </p>
            <SelectInput
              source="dod_in_lunar"
              label="Dương hay âm"
              initialValue={true}
              choices={[
                { id: true, name: 'Âm lịch' },
                { id: false, name: 'Dương lịch' }
              ]}
            />
            <NumberInput source="dod_date" max={31} min={1} label="Ngày" />
            <NumberInput source="dod_month" max={12} min={1} label="Tháng" />
            <NumberInput source="dod_year" label="Năm" />
            <br />
          </>
        ) : null
      }}
    </FormDataConsumer>
    <br />
    <span>Mối quan hệ gia đình:</span>
    <span>(không bắt buộc)</span>
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
    <br />
    <span>Vợ chồng: (không bắt buộc)</span>
    <ReferenceInput
      label="Vợ/Chồng là:"
      source="spouse_id"
      reference="persons"
      allowEmpty
    >
      <SelectInput optionText="full_name" />
    </ReferenceInput>
    <br />
    <span>Con thứ mấy trong nhà: (không bắt buộc)</span>
    <NumberInput
      min={1}
      source="sibling_level"
      label="Con đầu ghi 1, con thứ 2 ghi 2"
    />
    <br />
    <span>Nhập thêm thông tin: (không bắt buộc)</span>
    <RichTextInput source="note" label="(ví dụ: Tổ rất giỏi và giàu có) " />
  </SimpleForm>
)

export default Form
