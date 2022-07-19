import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useCustomTheme } from '../context'


interface Prop {
  title: string
}
export default function LineTitle({title}: Prop) {
  const { dark } = useCustomTheme()
  return (
    <Stack alignItems='flex-start'>
        <Stack direction='row' alignItems='center' spacing={2} >
        <Box bgcolor={ dark ? "#9093D8" : '#000'}  width={90} height={'0.1vh'}/>
        <Typography  color={ dark ? '#9093D8' : '#5E5E5F'}>{title}</Typography>
        </Stack>
    </Stack>
  )
}
