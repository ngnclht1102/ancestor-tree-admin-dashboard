import React, { useEffect, useState } from 'react'
import { List, Datagrid, TextField, SelectInput } from 'react-admin'
import { cloneElement } from 'react'
import {
  useListContext,
  TopToolbar,
  CreateButton,
  EditButton,
  DeleteButton,
  sanitizeListRestProps,
  Filter,
  TextInput,
  useRecordContext
} from 'react-admin'
import { Redirect } from 'react-router'
import { useSelector } from 'react-redux'
import Empty from '../../ra-components/empty'
import { get_data_of, get_list_params_of } from '../../utils/resource-seletector'
import { get_families_api } from '../../api/families.api'

const ListActions = (props) => {
  const { className, exporter, filters, maxResults, ...rest } = props
  const {
    currentSort,
    resource,
    displayedFilters,
    filterValues,
    hasCreate,
    basePath,
    selectedIds,
    showFilter,
    total
  } = useListContext()
  return (
    <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
      {filters &&
        cloneElement(filters, {
          resource,
          showFilter,
          displayedFilters,
          filterValues,
          context: 'button'
        })}
      <CreateButton label="Thêm người" basePath={basePath} />
    </TopToolbar>
  )
}

const FilterToolbar = (props) => (
  <Filter {...props}>
    <TextInput label="Tìm kiếm..." source="q" alwaysOn />
    <SelectInput
      source="belong_to_main_list_of_family"
      label="Thuộc danh sách"
      choices={[
        { id: true, name: 'Danh sách đinh' },
        { id: false, name: 'Danh sách khác' },
      ]}
    />
    <SelectInput
      source="is_alive"
      label="Còn sống hay đã mất"
      choices={[
        { id: null, name: 'Tất cả' },
        { id: true, name: 'Còn sống' },
        { id: false, name: 'Đã mất' },
      ]}
    />
  </Filter>
);

const postRowStyle = (record, index) => ({
  backgroundColor: record.is_alive ? '#ffffff' : '#fff385',
});

const RowOrder = (props) => {
  const params= useSelector((state) => get_list_params_of(state, 'persons')) || { page: 1 }
  const record = useRecordContext(props);
  return <span>{((parseInt(params.page) -1) * 50) + parseInt(record.stt)}</span>;
}

const PeopleList = (props) => {
  const [readyToShowList, setReadyToShowList] = useState(false)
  const [shouldRedirectToFamily, setShouldRedirectToFamily] = useState(false)
  const families = useSelector((state) => get_data_of(state, 'families')) || []
  const persons = useSelector((state) => get_data_of(state, 'persons')) || []
  useEffect(() => {
    const check_if_has_family_already = async () => {
      console.log('check_if_has_family_already')
      try {
        const familiesRes = await get_families_api()
        if (familiesRes && familiesRes.data && familiesRes.data.length > 0)
          setReadyToShowList(true)
        else setShouldRedirectToFamily(true)
      } catch (error) {
        console.log(error)
      }
    }
    check_if_has_family_already()
    if (!families.length) check_if_has_family_already()
    else setReadyToShowList(true)
    return () => {}
  }, [families.length])
  return readyToShowList ? (
    <>
      {persons.length ? (
        <>
          <p>Đây là danh sách tất cả mọi người trong dòng họ. Có thể thêm, sửa, và xóa thông tin của bất kỳ ai.</p>
          <p> Có thể tìm kiếm bằng bất cứ thông tin gì của một người, ví dụ tìm 1 người bằng tên, số điện thoại, tìm 1 người bằng tên thường gọi, tìm 1 người bằng địa chỉ, tìm 1 người bằng nơi an táng (Có thể tìm không dấu)</p>
        </>
      ) : null}
      <List
        filters={<FilterToolbar />}
        bulkActionButtons={false}
        sort={{ field: 'NOSORT', order: 'asc' }}
        {...props}
        perPage={50}
        empty={
          <Empty
            title="Bạn chưa thêm người vào dòng họ"
            subtitle="Bắt đầu ngay bằng cách bấm nút 'Thêm' dưới đây"
            buttonLabel="Thêm"
          />
        }
        title="Tất cả mọi người trong dòng họ"
        actions={<ListActions />}
      >
        <Datagrid rowClick="edit" rowStyle={postRowStyle}>
          <RowOrder source="stt" label="STT"/>
          <TextField source="family_level" label="Đời thứ" />
          <TextField source="full_name" label="Tên" />
          <TextField source="nickname" label="Tên thường gọi" />
          <TextField source="dob_year" label="Sinh năm" />
          <EditButton label="Sửa" />
          <DeleteButton label="Xóa" />
        </Datagrid>
      </List>
    </>
  ) : shouldRedirectToFamily ? (
    <Redirect to="/families" />
  ) : null
}

export default PeopleList
