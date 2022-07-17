import { Avatar, Button, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useFonts } from 'expo-font';

  
export default function Home() {
  
  let [fontsLoaded] = useFonts({
    'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  });
  return (
    <Stack padding={10} height='100vh'>
      <Box
        flexWrap='wrap'
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
        justifyContent='center'
        alignItems='center'
        height='100%'
      >
        <Stack 
          sx={{ maxWidth:{ xs: '100%', sm: '50%'}}}
          textAlign={{
            xs: 'center',
            sm: 'center',
            md: 'end'
          }} 
          spacing={2}
        >
          <Typography fontSize='1rem'> Tainá Saboia </Typography>
          <Typography fontFamily='Inter-SemiBoldItalic' 
            sx={{ 
            fontSize: { xs: '2rem', sm: '3rem', md:'4rem' }
            }}> 
            Frontend Developer
          </Typography>
          <Typography  fontSize='1rem'> I'm a Front-end Web Developer so I can work on projects that influence people all over the world.</Typography>
          <Stack paddingTop={2} maxWidth={200} alignSelf='flex-end'>
            <Button variant="outlined" onClick={() => console.log('aqui')} >Let's talk</Button>
          </Stack>
        
        </Stack>
        
        <Stack 
          sx={{ 
            display: { xs: 'flex', sm: 'flex' },
            padding: {xs:2, sm: 5, md: 10 }
          }}
          direction='row'
          justifyContent='center'
          >
          <Avatar alt="photo perfil" src="https://tainasaboia.netlify.app/images/profile-photo.png"
            style={{ 
                minWidth: 250,
                minHeight: 250,
                maxWidth: 350,
                maxHeight: 350,
              }} />
        </Stack>
      </Box>
      
    </Stack>
  )
}
