import React, { useState, useEffect } from 'react'
import { List, Datagrid, TextField } from 'react-admin'
import { cloneElement } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import {
  useListContext,
  TopToolbar,
  CreateButton,
  EditButton,
  DeleteButton,
  sanitizeListRestProps
} from 'react-admin'
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
    if (!Object.keys(props.families).length) check_if_has_family_already()
    else setReadyToShowList(true)
    return () => {}
  }, [])

  return readyToShowList ? (
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
  ) : shouldRedirectToFamily ? (
    <Redirect to="/families" />
  ) : null
}

const mapStateToProps = (state) => {
  return {
    families: get_data_of(state, 'families')
  }
}
export default connect(mapStateToProps, null)(AppuserList)
