import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

interface Props {
    title: string,
    body: string,
}
export default function TitleLine({title, body} : Props) {
  return (
    <Stack alignItems='flex-start' paddingY={1}>
        <Typography color='white' variant="h4">{title}</Typography>
        <Typography>{body}</Typography>
        <Box marginTop={1} bgcolor='white' width='100%' height={'0.1vh'}/>
    </Stack>
  )
}
