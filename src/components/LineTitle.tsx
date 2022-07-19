import { Box, Stack, Typography } from '@mui/material'
import React from 'react'


interface Prop {
  title: string
}
export default function LineTitle({title}: Prop) {
  return (
    <Stack alignItems='flex-start'>
        <Stack direction='row' alignItems='center' spacing={2} >
        <Box bgcolor='black' width={90} height={'0.1vh'}/>
        <Typography>{title}</Typography>
        </Stack>
    </Stack>
  )
}
