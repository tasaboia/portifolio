import { Avatar, Button, Link, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useFonts } from 'expo-font';
import { useCustomTheme } from '../../context';

  
export default function Home() {
  const {dark} = useCustomTheme()
  let [fontsLoaded] = useFonts({
    'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  });
  return (
    <section id='home'>
    <Stack 
      position='static'
    >
      <Box
        margin={10}
        flexWrap='wrap'
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
        justifyContent='center'
        alignItems='center'
      >
        <Stack 
        sx={{ width:{ xs: '100%', lg: '40%'},
          textAlign:{
            xs: 'center',
            sm: 'center',
            md: 'end'
          },
        }}

          spacing={2}
        >
          <Typography color={ dark ? '#9093D8' : '#7A7A7A'} fontSize='1rem'> Tainá Saboia </Typography>
          <Typography fontFamily='Impact' 
            sx={{ 
            fontSize: { xs: '2.5rem', sm: '3rem', md:'4rem' }
            }}> 
            Desenvolvedora Frontend
          </Typography>
          <Stack
            sx={{ 
              width:{ xs: '100%', sm: '40%'},
              alignSelf: {
                xs: 'center',
                md: 'flex-end'
            }}}>
            <Typography color={ dark ? '#9093D8' : '#5E5E5F'} fontSize='1rem'> Eu sou uma Desenvolvedora Frontend para trabalhar em projetos que podem influenciar pessoas por todo o mundo.</Typography>
          </Stack>
          <Stack paddingTop={2} maxWidth={200}  
            sx={{ 
              alignSelf: {
                xs: 'center',
                md: 'flex-end'
            }}}>
            <Typography >Let's talk</Typography>
          </Stack>
        
        </Stack>
        
        <Stack 
          sx={{ 
            display: { xs: 'flex', sm: 'flex' },
            maxWidth:{ xs: '100%' , sm: '50%'},
            padding: {xs:2, sm: 5, md: 10 }
          }}
          direction='row'
          justifyContent='center'
          >
           <Avatar variant="square" style={{ width: '88%', height: 'auto'}} src={require('../../assets/images/profile-photo.png')}/>
              
        </Stack>
      </Box>
      
    </Stack>
    </section> 
  )
}
