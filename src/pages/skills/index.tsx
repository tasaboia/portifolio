import React from 'react'
import { Avatar, Box,  Grid, Stack, Typography } from '@mui/material'
import { useCustomTheme } from '../../context'

export default function Skills() {
  const { dark } = useCustomTheme()
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
            <Typography  sx={{fontSize:{xs: '3rem', sm: '4rem'}}}> Habilidades e Ferramentas </Typography>
            <Typography color={ dark ? '#9093D8' : '#5E5E5F'} fontSize='1rem'>Minha caixa de ferramentas e coisas que posso fazer:</Typography>
          </Stack>

            <Grid container direction="row" flexWrap='wrap'  sx={{paddingLeft:{ xs: 4, sm: 2}, justifyContent:{xs: 'flex-start', sm:'center'}}}>
              {['React Js','JavaScript', 'TypeScript','HTML5', 'CSS', 'Python', 'Django', 'VS Code', 'Git', 'Illustrator', 'Photoshop'].map((title, key) => (
                <Grid item key={key+'grid'} textAlign='center' >
                    <Avatar key={key} alt="photo perfil" src={require(`../../assets/icons/${title}.png`)} style={{ width:80, height: 'auto'}} />
                    <Typography color={ dark ? '#9093D8' : '#5E5E5F'} padding={1} >{title}</Typography>
                </Grid>
              ))}
            </Grid>
        </Box>
    </Stack>
  </section>
  )
}
