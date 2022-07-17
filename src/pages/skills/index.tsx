import React from 'react'
import { Avatar, Box, Card, CardContent, CardMedia, ImageList, ImageListItem, ImageListItemBar, List, ListItem, Stack, Typography } from '@mui/material'
import { FlatList } from 'react-native'
import { height } from '@mui/system'

const skillsList = ['DJANGO','GIT','GITHUB', 'HTML5','JAVASCRIPT','PYTHON','REACT', 'TYPESCRIPT']

export default function Skills() {
  return (
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
              {['React Js','JavaScript', 'TypeScript','HTML5', 'CSS', 'Python', 'Django', 'VS Code', 'Git', 'Illustrator', 'Photoshop'].map((title, key) => (
                <Stack  key={key+'stack'} sx={{ height:{ xs: '30%', md:'30%'}, width:{ xs: '30%', md:'25%'} }}>
                  <Avatar key={key} alt="photo perfil" src={require(`../../assets/icons/${title}.png`)}
                  style={{ width: '40%', height: '100%'}}/>
                </Stack>  
              ))}
        </Stack>
      </Box>
  </Stack>
)
}
