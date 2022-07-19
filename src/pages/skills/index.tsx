import React from 'react'
import { Avatar, Box,  Divider,  Grid, Link, Stack, Typography } from '@mui/material'
import { useCustomTheme } from '../../context'
import { useFonts } from 'expo-font';
import LineTitle from '../../components/LineTitle';
import SkillsItem from '../../components/SkillsItem';

export default function Skills() {
  const { dark } = useCustomTheme()


  let [fontsLoaded] = useFonts({
    'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  });
  
  return (
    <section id='sobre'>
      <Stack>
        <Box
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
            <Stack  sx={{padding:{ sx: 0, md: 5}, width:{xs:'80%', md: '40%'}, alignItems:{xs:'center', md: 'flex-start'}}}>
              <Typography fontFamily='Impact' sx={{fontSize:{xs: '2.5rem', sm: '4rem'}}}> Oi,  </Typography>
              <Typography  color={ dark ? '#9093D8' : '#5E5E5F'}> Um texto aqui sobre mim e minha tragetória nao apenas em programacao mas em desenvolvimento e indicacao par ir ao linkedin Um texto aqui sobre mim e minha tragetória nao apenas em programacao mas em desenvolvimento e indicacao par ir ao linkedin Um texto aqui sobre mim e minha tragetória nao apenas em programacao mas em desenvolvimento e indicacao par ir ao linkedin s</Typography>
            </Stack>
              
              {/* right */}
            <Stack width='50%' > 
              <Link paddingLeft={1} color={ dark ? '#59C8D4' : "#000"} sx={{display:{xs:'none', md:'flex'}}} underline="none" href='https://www.linkedin.com/in/tainasaboia/' target="_blank" rel="noopener noreferrer">
                <LineTitle title={'Clik aqui para ser redirecionado ao Linkedin'}/>
              </Link>
              <Stack alignItems='flex-end' width='50%'  sx={{ display: {xs:'none', sm: 'contents'}}} >
                <Grid container  direction="row" flexWrap='wrap'>
                  {['React Js','JavaScript', 'TypeScript','HTML5', 'CSS', 'Python', 'Django', 'VS Code', 'Git', 'Illustrator', 'Photoshop'].map((title, key) => (
                    <Grid item key={key+'grid'} textAlign='center' >
                        <Stack margin={1} bgcolor={ dark ? '#430049' : '#F3F3F3'} borderRadius={2} width='8rem' height='8rem' alignItems='center' justifyContent='center'>
                          <Avatar key={key} alt="photo perfil" src={require(`../../assets/icons/${title}.png`)} style={{ width:60, height: 'auto'}} />
                          <Typography color={ dark ? '#9093D8' : '#5E5E5F'} padding={1} >{title}</Typography>
                        </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
              <Stack alignItems='flex-end' bgcolor='red' sx={{ display: {xs:'contents', sm: 'none'}, width: {xs: '100%', sm: '50%'}}} >
                <Grid container direction="row" flexWrap='wrap'>
                  {['React Js','JavaScript', 'TypeScript','HTML5', 'CSS', 'Python', 'Django', 'VS Code', 'Git', 'Illustrator', 'Photoshop'].map((title, key) => (
                    <Grid item key={key+'grid'} textAlign='center' width='100%' >
                        <Stack margin={1}> 
                          <SkillsItem title={title} body={'texto aqui'}/>
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
