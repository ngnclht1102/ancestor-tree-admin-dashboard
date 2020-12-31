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

const PeopleList = (props) => (
  <List
    bulkActionButtons={false}
    {...props}
    title="Danh sách dòng họ"
    actions={<ListActions />}
  >
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="full_name" label="Tên" />
      <TextField source="nickname" label="Tên khác" />
      <TextField source="description" label="Thông tin thêm" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
)

export default PeopleList
