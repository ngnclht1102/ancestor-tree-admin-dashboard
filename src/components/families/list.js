import React, { useState, useEffect, useCallback } from 'react'
import { List, Datagrid, TextField } from 'react-admin'
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

  props.onDataFetched(data, total)
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
  //   const { data, total } = useListContext()
  const [hideFamilyList, setHideFamilyList] = useState(false)
  const onDataFetched = useCallback((data, total) => {
    console.log('data', data['1'])
    if (total >= 1) {
      setHideFamilyList(true)
    }
  }, [])
  return (
    <>
      {hideFamilyList ? (
        <Redirect to="/families/1" />
      ) : (
        <>
          <br />
          <br />
          <p>Đây là danh sách tất cả dòng họ của bạn</p>
          <p>
            Tuy nhiên, hiện tại bạn chỉ có thể tạo 1 dòng họ duy nhất. Để tạo
            thêm dòng họ, vui lòng liên hệ: Mr. Nam, +84389544779,
            ngnclht@gmail.com
          </p>

          <List
            bulkActionButtons={false}
            {...props}
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
