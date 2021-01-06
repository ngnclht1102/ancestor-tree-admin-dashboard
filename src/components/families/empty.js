import React from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { CreateButton, List, useListContext } from 'react-admin'

const Empty = () => {
  const { basePath, resource } = useListContext()
  return (
    <Box textAlign="center" m={1}>
      <Typography variant="h4" paragraph>
        Bạn chưa tạo dòng họ
      </Typography>
      <Typography variant="body1">
        Bắt đầu ngay bằng cách bấm nút "Thêm" dưới đây
      </Typography>
      <CreateButton label="Thêm" basePath={basePath} />
    </Box>
  )
}

export default Empty
