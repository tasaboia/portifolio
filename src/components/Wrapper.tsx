import React, { useState } from 'react'
import { Paper } from '@mui/material';
import { Fab, Link, Stack, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import { Box } from '@mui/system';
import Nav from '../pages/nav';
import { useCustomTheme } from '../context';

export interface Props  { 
    children: React.ReactNode | React.ReactNode[]
 }
 
export default function Wrapper({ children} : Props) {
   const {dark, setDark} = useCustomTheme()
  return (
    <Paper sx={{backgroundColor: dark? '65043d' : '#FFF' , backgroundImage: dark ? 'linear-gradient(90deg, #65043d 0%, #4e2676 50%, #043a5d 100%)' : null}}>
    <Stack>
        <Nav/>  
        <Stack position='fixed' top='70vh' left='1vh' display='flex' flexDirection='row' justifyContent='space-between' alignItems='flex-end'>
            <Stack display='flex' flexDirection='column'>
                <Link href='https://www.linkedin.com/in/tainasaboia/' target="_blank" rel="noopener noreferrer"><LinkedInIcon/></Link>
                <Link href='https://github.com/tasaboia' target="_blank" rel="noopener noreferrer"><GitHubIcon/></Link>
                <Link href='https://twitter.com/tainasaboia' target="_blank" rel="noopener noreferrer"><TwitterIcon /></Link>
                <Link href='https://www.instagram.com/tasaboia/' target="_blank" rel="noopener noreferrer"><InstagramIcon /></Link>
                <Box
                    alignSelf='center'
                    width={5}
                    height={100}
                    bgcolor='black'
                />
            </Stack>
        </Stack>

        <Stack position='fixed' top='83vh' maxWidth={0.5} right='2vh'>
            <Typography >
                <Link href='#'><MailIcon /></Link>
            </Typography>
            <Box
                    alignSelf='center'
                    width={5}
                    height={100}
                    bgcolor='black'
                />
        </Stack>
        {children}
    </Stack>
    </Paper>
  )
}
