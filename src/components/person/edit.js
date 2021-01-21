import React, { useState } from "react";
import { Create, Edit, AutocompleteInput, NumberInput, BooleanInput,ReferenceInput, SelectInput,  SimpleForm, TextInput, DateInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton, required } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import { makeStyles } from '@material-ui/core/styles';
import { DependentField } from 'ra-dependent-input';

const useFilterStyles = makeStyles({
  textInputWidth: {
      width: '350px'
  },
});

const PersonEdit = (props) => {
  const classes = useFilterStyles();
  const [showDeadDateInput, setShowDeadDateInput] = useState(false)

  return (
    <Edit classes={classes}  {...props}>
        <SimpleForm>
            <TextInput
              className={classes.textInputWidth}
              source="full_name"
              validate={required()}
              label="Tên đầy đủ"
            />
            <TextInput
              className={classes.textInputWidth}
              source="nickname"
              label="Tên khác (Ví dụ Cố Nền)"
            />
            <NumberInput
              className={classes.textInputWidth}
              source="dob_date"
              max={31}
              min={1}
              label="Ngày sinh (ví dụ 11)"
            />
            <NumberInput
              className={classes.textInputWidth}
              source="dob_month"
              label="Tháng sinh (ví dụ 2)"
              max={12}
              min={1}
            />
            <NumberInput
              className={classes.textInputWidth}
              source="dob_year"
              label="Năm sinh (ví dụ 1994)"
              max={2200}
              min={1}
            />
            <SelectInput
              className={classes.textInputWidth}
              source="dob_in_lunar"
              label="Ngày sinh vừa nhập là âm hay dương lịch?"
              initialValue={false} choices={[
                { id: false, name: 'Âm lịch' },
                { id: true, name: 'Dương Lịch' }
              ]} 
            />
            <SelectInput
              className={classes.textInputWidth}
              source="is_dead"
              label="Còn sống hay đã mất?"
              initialValue={false} choices={[
                { id: false, name: 'Còn sống' },
                { id: true, name: 'Đã mất' }
              ]}
              onChange={({ target }) => setShowDeadDateInput(target.value)}
            />
            {
              showDeadDateInput ? 
              <>
                <NumberInput
                  className={classes.textInputWidth}
                  source="dod_date"
                  label="Mất vào ngày (ví dụ 11)"
                  max={31}
                  min={1}
                />
                <NumberInput
                  className={classes.textInputWidth}
                  source="dod_month"
                  label="Mất vào tháng (ví dụ 2)"
                  max={12}
                  min={1}
                />
                <NumberInput
                  className={classes.textInputWidth}
                  source="dod_year"
                  label="Mất vào năm (ví dụ 1994)"
                  max={2200}
                  min={1}
                />
                <SelectInput
                  className={classes.textInputWidth}
                  source="dod_in_lunar"
                  label="Ngày mất vừa nhập là âm hay dương lịch?"
                  initialValue={false} choices={[
                    { id: false, name: 'Âm lịch' },
                    { id: true, name: 'Dương Lịch' }
                  ]} 
                />
              </> 
              : null
            }
            <NumberInput
              className={classes.textInputWidth}
              source="sibling_level"
              label="Là con thứ mấy trong nhà?"
              max={30}
              min={1}
            />
            <NumberInput
              className={classes.textInputWidth}
              source="family_level"
              label="Là đời thứ mấy trong dòng họ?"
              max={1000}
              min={1}
            />
            <ReferenceInput
              label="Thuộc dòng họ"
              source="family_id"
              reference="families"
            >
              <SelectInput optionText="name" />
          </ReferenceInput>
          <ReferenceInput
            filterToQuery={() => ({
              family_id: 14 
            })}
            label="Là con ông"
            source="father_id"
            reference="persons"
          >
            <AutocompleteInput optionText="full_name" />
          </ReferenceInput>
            <ReferenceInput
              filterToQuery={() => ({
                family_id: 14 
              })}
              label="Là con bà"
              source="mother_id"
              reference="persons"
            >
              <AutocompleteInput optionText="full_name" />
          </ReferenceInput>
            <ReferenceInput
              filterToQuery={() => ({
                family_id: 14 
              })}
              label="Vợ/Chồng là:"
              source="spouse_id"
              reference="persons"
            >
              <AutocompleteInput optionText="full_name" />
          </ReferenceInput>
            <SelectInput
              className={classes.textInputWidth}
              source="gender"
              label="Giới tính?"
              initialValue={"male"} choices={[
                { id: 'male', name: 'Nam' },
                { id: 'famale', name: 'Nữ' }
              ]} 
            />
            <SelectInput
              className={classes.textInputWidth}
              source="is_root"
              label="Có phải là ông Tổ không?"
              initialValue={false} choices={[
                { id: false, name: 'Không phải' },
                { id: true, name: 'Phải' }
              ]} 
            />
            <RichTextInput
              source="note"
              label="Thông tin ghi chú:"
            />
        </SimpleForm>
    </Edit>
  );
}

export default PersonEdit
