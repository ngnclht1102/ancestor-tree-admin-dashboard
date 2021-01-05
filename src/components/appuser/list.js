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

const AppuserList = (props) => (
  <>
    <br />
    <br />
    <p>
      Đây là danh sách tài khoản có thể đăng nhập và xem thông tin gia phả.
      Nhưng không thể sửa gia phả.
    </p>
    <p>
      Có thể tạo 1 tài khoản và dùng chung cho tất cả mọi người. Hoặc cũng có
      thể tạo cho mỗi người 1 tài khoản.
    </p>
    <List
      bulkActionButtons={false}
      {...props}
      title="Danh sách người có thể xem gia phả"
      actions={<ListActions />}
    >
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="email" label="Email" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  </>
)

export default AppuserList
