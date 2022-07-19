import React from 'react'
import { Avatar, Box,  Divider,  Grid, Link, Stack, Typography } from '@mui/material'
import { useCustomTheme } from '../../context'
import { useFonts } from 'expo-font';
import LineTitle from '../../components/LineTitle';
import TitleLine from '../../components/TitleLine';
import TitleBody from '../home/components/TitleBody';

const skills = ['React Js','JavaScript', 'TypeScript','HTML5', 'CSS', 'Python', 'Django', 'VS Code', 'Git', 'Illustrator', 'Photoshop']

const description = "Eu sou Tainá Saboia, formada em Análise de Sistema pela Faculdade de Tecnologia de São Paulo, entrei nessa aventura de desenvolviemnto de software em 2009. Hoje trabalho com desenvolvimento Frontend"
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
          

          <Stack flexWrap='wrap' sx={{  flexDirection:{sx:'column', md: 'row'} }}alignItems='center' justifyContent='center'>
              {/* left */}
            <TitleBody title={"Oi, "} description={description}/>
              {/* right */}
            <Stack sx={{ width:{xs:'90%', md: '50%'}}}> 
              <Link paddingLeft={1} color={ dark ? '#59C8D4' : "#000"} sx={{display:{xs:'none', md:'flex'}}} underline="none" href='https://www.linkedin.com/in/tainasaboia/' target="_blank" rel="noopener noreferrer">
                <LineTitle title={'Clik aqui para ser redirecionado ao Linkedin'}/>
              </Link>
              <Stack alignItems='flex-end' width='50%'  sx={{ display: {xs:'none', sm: 'contents'}}} >
                <Grid container  direction="row" flexWrap='wrap'>
                  {skills.map((title, key) => (
                    <Grid item key={key+'grid'} textAlign='center' >
                        <Stack margin={1} bgcolor={ dark ? '#430049' : '#F3F3F3'} borderRadius={2} width='8rem' height='8rem' alignItems='center' justifyContent='center'>
                          <Avatar key={key} alt="photo perfil" src={require(`../../assets/icons/${title}.png`)} style={{ width:60, height: 'auto'}} />
                          <Typography color={ dark ? '#9093D8' : '#5E5E5F'} padding={1} >{title}</Typography>
                        </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
              <Stack sx={{ display: {xs:'none', sm: 'none'}, width: {xs: '60vh'}}}>
                <Grid container direction="row" flexWrap='wrap'>
                  {skills.map((title, key) => (
                    <Grid item key={key+'grid'} xs={4} padding={2} margin={0.5} boxShadow='rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' >
                       <Stack margin={0.2} > 
                        <Typography>
                          {title}
                        </Typography>
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
