import React from 'react'
import { Avatar, Box,  Grid, Stack, Typography } from '@mui/material'
import { useCustomTheme } from '../../context'
import { useFonts } from 'expo-font';
export default function Skills() {
  const { dark } = useCustomTheme()


  let [fontsLoaded] = useFonts({
    'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  });
  
  return (
    <section id='sobre'>
      <Stack height='100vh' >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Stack width='100%' alignItems={{base:'start', sm:'center'}} spacing={2} paddingLeft={6} paddingTop={10}>
            <Typography fontFamily='Inter-SemiBoldItalic' sx={{fontSize:{xs: '2rem', sm: '3rem'}}}> Habilidades e Ferramentas </Typography>
          </Stack>
          <Stack flexWrap='wrap' width='100%'>
            <Grid  container direction="row" flexWrap='wrap'  sx={{paddingLeft:{ xs: 4, sm: 2}, justifyContent:{xs: 'flex-start', sm:'center'}}}>
              {['React Js','JavaScript', 'TypeScript','HTML5', 'CSS', 'Python', 'Django', 'VS Code', 'Git', 'Illustrator', 'Photoshop'].map((title, key) => (
                <Grid item key={key+'grid'} textAlign='center' >
                    <Avatar key={key} alt="photo perfil" src={require(`../../assets/icons/${title}.png`)} style={{ width:60, height: 'auto'}} />
                    <Typography color={ dark ? '#9093D8' : '#5E5E5F'} padding={1} >{title}</Typography>
                </Grid>
              ))}
            </Grid>
            <Stack  position='absolute' width='100%' height='100vh' justifyContent='center'  alignContent='center' alignItems='flex-end'>
            <Avatar alt="skills" src={require('../../assets/3D/skills.png')} style={{ width:'30%', height: 'auto'}} />
          </Stack>
          </Stack>

        </Box>
    </Stack>
  </section>
  )
}
