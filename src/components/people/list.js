import React, { useEffect, useState } from 'react'
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
import { Redirect } from 'react-router'
import { useSelector } from 'react-redux'
import Empty from '../../ra-components/empty'
import { get_data_of } from '../../utils/resource-seletector'
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
          <br />
          <br />
          <p>Đây là danh sách tất cả mọi người trong dòng họ</p>
          <p>Bạn có thể thêm, sửa, và xóa thông tin của bất kỳ ai.</p>
        </>
      ) : null}
      <List
        bulkActionButtons={false}
        {...props}
        perPage={50}
        sort={{ field: 'family_level', order: 'asc' }}
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
        <Datagrid rowClick="edit">
          <TextField source="id" />
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
