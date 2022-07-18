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
/* 
background-image: linear-gradient(to top, #09203f 0%, #537895 100%); 

CHUMBO background-image: linear-gradient(to right, #434343 0%, black 100%);

MANY COLOR: background-image: linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);

CYAN E PRETO background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);

VERY DARK background-color: #551838;
background-image: linear-gradient(90deg, #551838 0%, #401e5d 50%, #000459 100%);

*/


export interface Props  { 
    children: React.ReactNode | React.ReactNode[]
 }
export default function Wrapper({ children} : Props) {
   const {dark, setDark} = useCustomTheme()
  return (
    <Paper sx={{
        backgroundColor: dark? '65043d' : '#FFF' , 
        backgroundImage: dark ? 'linear-gradient(90deg, #551838 0%, #401e5d 50%, #000459 100%)' : null}}>
    <Stack>
        <Nav/>  
        <Stack position='fixed' top='70vh' left='1vh' display='flex' flexDirection='row' justifyContent='space-between' alignItems='flex-end'>
            <Stack display='flex' flexDirection='column'>
                <Link color={ dark ? '#59C8D4' : "#000"} href='https://www.linkedin.com/in/tainasaboia/' target="_blank" rel="noopener noreferrer"><LinkedInIcon/></Link>
                <Link color={ dark ? '#59C8D4' : "#000"} href='https://github.com/tasaboia' target="_blank" rel="noopener noreferrer"><GitHubIcon/></Link>
                <Link color={ dark ? '#59C8D4' : "#000"} href='https://twitter.com/tainasaboia' target="_blank" rel="noopener noreferrer"><TwitterIcon /></Link>
                <Link color={ dark ? '#59C8D4' : "#000"} href='https://www.instagram.com/tasaboia/' target="_blank" rel="noopener noreferrer"><InstagramIcon /></Link>
                <Box
                    alignSelf='center'
                    width={5}
                    height={100}
                    bgcolor={ dark ? '#59C8D4' : "#000"}
                />
            </Stack>
        </Stack>

        <Stack position='fixed' top='83vh' maxWidth={0.5} right='2vh'>
            <Typography >
                <Link color={ dark ? '#59C8D4' : "#000"} href="#contact" underline="none"><MailIcon /></Link>
            </Typography>
            <Box
                    alignSelf='center'
                    width={5}
                    height={100}
                    bgcolor={ dark ? '#59C8D4' : "#000"}
                />
        </Stack>
        {children}
    </Stack>
    </Paper>
  )
}
