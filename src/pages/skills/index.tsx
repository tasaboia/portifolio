import React from 'react'
import { Avatar, Box,  Divider,  Grid, Stack, Typography } from '@mui/material'
import { useCustomTheme } from '../../context'
import { useFonts } from 'expo-font';
import LineTitle from '../../components/LineTitle';

export default function Skills() {
  const { dark } = useCustomTheme()


  let [fontsLoaded] = useFonts({
    'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  });
  
  return (
    <section id='sobre'>
      <Stack>
        <Box
          height='100vh' 
          flexWrap='wrap'
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
          justifyContent='center'
          alignItems='center'
        >
          

          <Stack  flexWrap='wrap' sx={{  flexDirection:{sx:'column', md: 'row'} }}alignItems='center' justifyContent='center'>
              {/* left */}
            <Stack width='40%' sx={{padding:{ sx: 0, md: 5}}}>
              <Typography fontFamily='Impact' sx={{fontSize:{xs: '1.5rem', sm: '3rem'}}}> Habilidades e Ferramentas </Typography>
            </Stack>
              
              {/* right */}
            <Stack width='50%' > 
              <LineTitle title={'Algum texto'}/>
              <Stack alignItems='flex-end' width='50%'  sx={{ display: {xs:'none', sm: 'contents'}}} >
                <Grid container  direction="row" flexWrap='wrap'>
                  {['React Js','JavaScript', 'TypeScript','HTML5', 'CSS', 'Python', 'Django', 'VS Code', 'Git', 'Illustrator', 'Photoshop'].map((title, key) => (
                    <Grid item key={key+'grid'} textAlign='center' >
                        <Stack margin={1} bgcolor={ dark ? '#430049' : '#CCCCCC'} width='8rem' height='8rem' alignItems='center' justifyContent='center'>
                          <Avatar key={key} alt="photo perfil" src={require(`../../assets/icons/${title}.png`)} style={{ width:60, height: 'auto'}} />
                          <Typography color={ dark ? '#9093D8' : '#5E5E5F'} padding={1} >{title}</Typography>
                        </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
              <Stack alignItems='flex-end' sx={{ display: {xs:'contents', sm: 'none'}}} >
                <Grid container direction="row" flexWrap='wrap'>
                  {['React Js','JavaScript', 'TypeScript','HTML5', 'CSS', 'Python', 'Django', 'VS Code', 'Git', 'Illustrator', 'Photoshop'].map((title, key) => (
                    <Grid item key={key+'grid'} textAlign='center' xs={5}>
                        <Stack margin={1} bgcolor='#000' >
                          <Typography color={ dark ? '#9093D8' : '#5E5E5F'} padding={1} >{title}</Typography>
                        </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </Stack>
          </Stack>
        </Box>
    </Stack>
  </section>
  )
}
