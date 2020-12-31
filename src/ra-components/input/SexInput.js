import React from 'react';
import Select from '@material-ui/core/Select';
import { SelectInput } from 'react-admin';
import MenuItem from '@material-ui/core/MenuItem';
import { useInput } from 'react-admin';

const SexInput = props => {
    const {
        input,
        meta: { touched, error }
    } = useInput(props);

    return (
      <>
        <span>{props.label}:  </span><Select
            label="Giới tính"
            {...input}
        >
            <MenuItem value="male">Nam giới</MenuItem>
            <MenuItem value="female">Nữ giới</MenuItem>
        </Select>
        </>
    );
};
export default SexInput;
