import React from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { CreateButton, List, useListContext } from 'react-admin'

const Empty = (props) => {
  const { basePath, resource } = useListContext()
  return (
    <Box textAlign="center" m={1}>
      <Typography variant="h4" paragraph>
        {props.title}
      </Typography>
      <Typography variant="body1">{props.subtitle}</Typography>
      <CreateButton label={props.buttonLabel} basePath={basePath} />
    </Box>
  )
}

export default Empty
