import React, { useState, useEffect, useCallback } from 'react'
import { List, Datagrid, TextField } from 'react-admin'
import Empty from '../../ra-components/empty'
import { cloneElement } from 'react'
import { Redirect } from 'react-router'
import { useSelector } from 'react-redux'
import { get_data_of } from '../../utils/resource-seletector'
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
  const families = useSelector((state) => get_data_of(state, 'families')) || []
  const [renderRedirect, setRenderedRedirect] = useState(false)
  useEffect(() => {
    if (families.length) setRenderedRedirect(true)
    return () => {}
  }, [families.length])
  if (renderRedirect)
    return (
      <Redirect
        stopRender={!renderRedirect}
        to={`/families/${families[0].id}`}
      />
    )
  return (
    <>
      <br />
      <br />
      <List
        bulkActionButtons={false}
        {...props}
        empty={
          <Empty
            title="Bạn chưa tạo dòng họ"
            subtitle="Bắt đầu ngay bằng cách bấm nút 'Thêm' dưới đây"
            buttonLabel="Thêm"
          />
        }
        title="Danh sách dòng họ"
        actions={<ListActions />}
      >
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" label="Tên dòng họ" />
          <TextField source="main_address" label="Địa chỉ" />
          <EditButton />
        </Datagrid>
      </List>

    </>
  )
}

export default FamilyList
