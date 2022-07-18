import { Stack, Typography } from '@mui/material'
import React from 'react'
import { useCustomTheme } from '../../context'

export default function Footer() {
  const { dark } = useCustomTheme()
  return (
    <Stack
      width='100%'
      bgcolor='black'
      height='10vh'
    >
      <Stack>
        <Typography  bgcolor ={dark ? '#9093D8' : ''}>
        © Copyright 2022.
        </Typography>
      </Stack>
    </Stack>
  )
}
