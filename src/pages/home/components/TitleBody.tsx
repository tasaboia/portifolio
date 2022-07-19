import { Stack, Typography } from '@mui/material'
import React from 'react'
import { useCustomTheme } from '../../../context'

interface Props {
    title: string,
    description: string,
}
export default function TitleBody( { title, description}: Props) {
    const { dark } = useCustomTheme()
  return (
    <Stack margin={0.5} sx={{padding:{ sx: 0, md: 5}, width:{xs:'80%', md: '40%'}, alignItems:{xs:'center', md: 'flex-start'}}}>
        <Typography fontFamily='Impact' sx={{fontSize:{xs: '2.5rem', sm: '4rem'}}}> {title} </Typography>
        <Typography  color={ dark ? '#9093D8' : '#5E5E5F'}> {description} </Typography>
    </Stack>
              
  )
}
