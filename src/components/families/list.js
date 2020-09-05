import React from "react";
import { List, Datagrid, TextField } from 'react-admin';

const FamilyList = props => (
  <List {...props}>
      <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="main_address" />
          <TextField source="description" />
      </Datagrid>
  </List>
);

export default FamilyList
