import React from 'react'
import { List, Datagrid, TextField } from 'react-admin'
import { cloneElement } from 'react'
import {
  useListContext,
  TopToolbar,
  CreateButton,
  EditButton,
  DeleteButton,
  sanitizeListRestProps
} from 'react-admin'

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

const PeopleList = (props) => {
  return (
    <>
      <br />
      <br />
      <p>Đây là danh sách tất cả mọi người trong dòng họ</p>
      <p>Bạn có thể thêm, sửa, và xóa thông tin của bất kỳ ai.</p>
      <List
        bulkActionButtons={false}
        {...props}
        title="Tất cả mọi người trong dòng họ"
        actions={<ListActions />}
      >
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="full_name" label="Tên" />
          <TextField source="nickname" label="Tên khác" />
          <TextField source="dob_year" label="Sinh năm" />
          <TextField source="family_level" label="Đời thứ" />
          <EditButton label="Sửa" />
          <DeleteButton label="Xóa" />
        </Datagrid>
      </List>
    </>
  )
}

export default PeopleList
