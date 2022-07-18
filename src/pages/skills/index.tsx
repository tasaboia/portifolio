import React from 'react'
import { Avatar, Box,  Grid, Stack, Typography } from '@mui/material'

export default function Skills() {
  return (
    <section id='sobre'>
      <Stack height='100vh' >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Stack width='100%' alignItems={{base:'start', sm:'center'}}spacing={2}  padding={10}>
            <Typography  fontSize='2rem'> Habilidades e Ferramentas </Typography>
            <Typography fontSize='1rem'>Minha caixa de ferramentas e coisas que posso fazer:</Typography>
          </Stack>
          <Stack width='100%' direction='row' display='flex' flexWrap='wrap'  justifyContent='center'  alignItems='center' sx={{marginLeft:{ xs:5, sm: 10}}} > 

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              {['React Js','JavaScript', 'TypeScript','HTML5', 'CSS', 'Python', 'Django', 'VS Code', 'Git', 'Illustrator', 'Photoshop'].map((title, key) => (
                <Grid key={key+'grid'} item xs={6}>
                  
                  <Stack  key={key+'stack'} sx={{ height:{ xs: '30%', md:'30%'}, width:{ xs: '30%', md:'25%'} }}>
                    <Avatar key={key} alt="photo perfil" src={require(`../../assets/icons/${title}.png`)}
                    style={{ width: '40%', height: '100%'}}/>
                  </Stack>  
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Box>
    </Stack>
  </section>
  )
}
