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
  <List
    bulkActionButtons={false}
    {...props}
    title="Danh sách người xem"
    actions={<ListActions />}
  >
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="email" label="Email" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
)

export default AppuserList
