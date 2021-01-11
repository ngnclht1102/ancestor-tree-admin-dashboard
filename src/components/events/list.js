import React, { useState, useEffect } from 'react'
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
import { useSelector } from 'react-redux'
import Empty from '../../ra-components/empty'
import { get_data_of } from '../../utils/resource-seletector'
import { get_families_api } from '../../api/families.api'

const ListActions = (props) => {
  const { className, exporter, filters, maxResults, ...rest } = props
  const {
    resource,
    displayedFilters,
    filterValues,
    basePath,
    showFilter
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

const AppuserList = (props) => {
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
          <br />
          <br />
          <p>
            Đây là danh sách tài khoản có thể đăng nhập và xem thông tin gia
            phả. Nhưng không thể sửa gia phả.
          </p>
          <p>
            Có thể tạo 1 tài khoản và dùng chung cho tất cả mọi người. Hoặc cũng
            có thể tạo cho mỗi người 1 tài khoản.
          </p>
        </>
      ) : null}

      <List
        {...props}
        bulkActionButtons={false}
        title="Danh sách Sự kiện"
        actions={<ListActions />}
        empty={
          <Empty
            title="Chưa có sự kiện nào"
            subtitle="Thêm sự kiện bằng cách bấm nút Thêm dưới đây"
            buttonLabel="Thêm "
          />
        }
      >
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" label="Tên sự kiện" />
          <TextField source="datetime" label="Ngày" />
          <EditButton />
          <DeleteButton />
        </Datagrid>
      </List>
    </>
  ) : shouldRedirectToFamily ? (
    <Redirect to="/families" />
  ) : null
}

export default AppuserList
