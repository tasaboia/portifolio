import React from 'react'
import { Avatar, Box, Button, FormControl, FormHelperText, InputLabel, Paper, Stack, TextField, Typography } from '@mui/material'
import Footer from '../footer'
import { useCustomTheme } from '../../context'

import { useFonts } from 'expo-font';

export default function Contact() {
  const {dark} = useCustomTheme()
  let [fontsLoaded] = useFonts({
    'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  })
 
  return (
    <section id='contact'>
      <Stack
      height='100vh'
      display='flex'
    >
      <Stack width='100%' paddingTop={10} alignItems='center' >
        <Stack textAlign='center' >
          <Typography fontSize='3rem' fontFamily='Inter-SemiBoldItalic'>
            Entre em contato
          </Typography>
          <Typography paddingX={5} paddingY={2} color={ dark ? '#9093D8' : '#5E5E5F'} fontSize='1rem'> Preencha o formulário abaixo para esclarermos suas dúvidas e dar início ao seu projeto! </Typography>
        </Stack>
        <Stack sx={{display: {xs: 'none', md: 'contents'}}}>
          <Stack  position='absolute' width='100%' height='100vh' justifyContent='center'  alignContent='center' alignItems='flex-start'>
              <Avatar alt="photo perfil" src={require('../../assets/3D/talk-2.png')} style={{ width:'25%', height: 'auto'}} />
            </Stack>
            <Stack  position='absolute' width='100%' height='100vh' justifyContent='center'  alignContent='center' alignItems='flex-end'>
              <Avatar alt="photo perfil" src={require('../../assets/3D/talk.png')} style={{ width:'25%', height: 'auto'}} />
            </Stack>
        </Stack>
        <Box  marginY={5}  bgcolor ={dark ? '#9093D8' : ''} padding={4} boxShadow={2} borderRadius={10} >
          <Stack justifyItems='center' sx={{ width: { sx: '60vh', sm: '80vh' } }}>
              <FormControl>
                <TextField name='name' id="name" label="Digite seu nome" variant="standard" />
                <TextField name='email' id="email" label="E-mail" variant="standard" />
                <TextField name='message' id="msg" label="Mensagem" variant="standard" multiline rows={4} />
                <Stack paddingTop={2} alignSelf='flex-end'>
                  <Button type='submit' variant="outlined">
                    Enviar
                  </Button>
                </Stack>
              </FormControl>
          </Stack>
        </Box>

      </Stack>
    </Stack>
      <Stack height='10vh' bgcolor={ dark ? '#9093D8': 'black' } paddingTop={3} >
        <Typography color={ dark ? '#59C8D4': 'white' }  textAlign='center' >
            © Copyright 2022.
          </Typography>
      </Stack>
    </section>

  ) 
}
