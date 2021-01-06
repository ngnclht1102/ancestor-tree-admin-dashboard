import React, { useEffect, useState } from 'react'
import { List, Datagrid, TextField } from 'react-admin'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
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
  ) : shouldRedirectToFamily ? (
    <Redirect to="/families" />
  ) : null
}

const mapStateToProps = (state) => {
  return {
    families: get_data_of(state, 'families')
  }
}
export default connect(mapStateToProps, null)(PeopleList)

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   // @ts-ignore
//   act: bindActionCreators(actions, dispatch),
//   onGotoProfessionalEditProfile: () => {
//     // @ts-ignore
//     dispatch(actions[t.NAVIGATE]({ routeName: PROFESSIONAL_UPDATE_PROFILE }))
//   },
//   onRefetchProfile: () => {
//     // @ts-ignore
//     dispatch(actions[t.RE_FETCH_PROVIDER_INFO_REQUEST]())
//   }
// })
