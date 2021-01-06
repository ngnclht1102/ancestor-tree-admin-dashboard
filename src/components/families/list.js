import React, { useState, useEffect, useCallback } from 'react'
import { List, Datagrid, TextField } from 'react-admin'
import Empty from './empty'
import { cloneElement } from 'react'
import { Redirect } from 'react-router'

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
    data,
    resource,
    displayedFilters,
    filterValues,
    basePath,
    showFilter,
    total
  } = useListContext()

  if (data) props.onDataFetched(Object.values(data), total)
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
      {total < 1 ? (
        <CreateButton label="Thêm dòng họ" basePath={basePath} />
      ) : null}
    </TopToolbar>
  )
}

const FamilyList = (props) => {
  const [defaultFamily, setDefaultFamily] = useState(null)
  const [hideFamilyList, setHideFamilyList] = useState(false)
  const onDataFetched = useCallback((data, total) => {
    if (data[0]) {
      setDefaultFamily(data[0])
    }
    if (total >= 1) {
      setHideFamilyList(true)
    }
  }, [])
  return (
    <>
      {hideFamilyList ? (
        defaultFamily ? (
          <Redirect to={`/families/${defaultFamily.id}`} />
        ) : null
      ) : (
        <>
          <br />
          <br />
          <List
            bulkActionButtons={false}
            {...props}
            empty={<Empty />}
            title="Danh sách dòng họ"
            actions={<ListActions onDataFetched={onDataFetched} />}
          >
            <Datagrid rowClick="edit">
              <TextField source="id" />
              <TextField source="name" label="Tên dòng họ" />
              <TextField source="main_address" label="Địa chỉ" />
              <EditButton />
            </Datagrid>
          </List>
        </>
      )}
    </>
  )
}

export default FamilyList
