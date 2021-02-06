import React, {useEffect, useState} from "react";
import { List, Datagrid, TextField, Filter, TextInput, SelectInput } from 'react-admin';
import { cloneElement } from 'react';
import {
  useListContext,
  TopToolbar,
  CreateButton,
  EditButton,
  DeleteButton,
  sanitizeListRestProps,
} from 'react-admin';
import { getFamiliesForFilter } from '../../api/family.api';

const ListActions = (props) => {
    const {
        className,
        exporter,
        filters,
        maxResults,
        ...rest
    } = props;
    const {
        currentSort,
        resource,
        displayedFilters,
        filterValues,
        hasCreate,
        basePath,
        selectedIds,
        showFilter,
        total,
    } = useListContext();
    return (
        <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
            {filters && cloneElement(filters, {
                resource,
                showFilter,
                displayedFilters,
                filterValues,
                context: 'button',
            })}
            <CreateButton label="Thêm người vào dòng họ" basePath={basePath} />
        </TopToolbar>
    );
};

const PersonFilter = (props) => {
  return <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
      <SelectInput
        label="Chọn dòng họ"
        source="family_id"
        choices={props.families}
        alwaysOn
      />
  </Filter>
};

const PersonList = props => {
  const [selectedFamily, setSelectedFamily] = useState()
  const [families, setFamilies] = useState([])

  useEffect(() => {
    const fetchFamilies = async () => {
      try {
        const res = await getFamiliesForFilter()
        console.log(res.data);
        setFamilies(res.data)
        setSelectedFamily(res.data[0])
      } catch (error) {
        console.log(error);
      }
    }
    fetchFamilies()
    return () => {}
  }, [])
  if (!families || !selectedFamily) return <p>No families found</p>
  return (
    <List
      filters={<PersonFilter families={families} />}
      filterDefaultValues={{ family_id: selectedFamily.id }}
      bulkActionButtons={false} {...props}
      title="Danh sách dòng họ"
      actions={<ListActions />}
    >
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="nickname" label="Biệt danh" />
            <TextField source="full_name" label="Tên thật" />
            <TextField source="family_level" label="Đời thứ" />
            <EditButton/>
            <DeleteButton/>
        </Datagrid>
    </List>
  )
};

export default PersonList
