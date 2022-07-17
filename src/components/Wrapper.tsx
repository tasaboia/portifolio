import { Fab, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import { Box } from '@mui/system';

export interface Props  { 
    children: React.ReactNode | React.ReactNode[]
 }

export default function Wrapper({children} : Props) {
  return (
    <Stack>
        <Stack position='fixed' top='70vh' left='1vh' display='flex' flexDirection='row' justifyContent='space-between' alignItems='flex-end'>
            <Stack display='flex' flexDirection='column'>
                <Link href='#'><LinkedInIcon/></Link>
                <Link href='#'><GitHubIcon/></Link>
                <Link href='#'><TwitterIcon /></Link>
                <Link  href='#'><InstagramIcon /></Link>
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
  )
}
