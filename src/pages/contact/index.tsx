import React from 'react'
import { Avatar, Box, Button, FormControl, FormHelperText, InputLabel, Paper, Stack, TextField, Typography } from '@mui/material'
import Footer from '../footer'
import { useCustomTheme } from '../../context'

import { useFonts } from 'expo-font';
import LineTitle from '../../components/LineTitle';

export default function Contact() {
  const {dark} = useCustomTheme()
  let [fontsLoaded] = useFonts({
    'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  })
 
  return (
    <section id='contact'>
      <Stack
      display='flex'
      margin={10}
    >
      <Stack flexWrap='wrap' flexDirection='row' justifyContent='center'>
        <Stack display='block' bgcolor ={dark ? '#430049' : 'white'} padding={4} boxShadow={2} borderRadius={10} >
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
        </Stack>
        <Stack  sx={{ order: {xs: -1 ,sm: 0} , marginLeft:{xs: 0, md:5}}}>
          <LineTitle title='Entre em contato'/>
          <Typography  fontFamily='Impact'  sx={{  fontSize: { xs: '2rem', sm: '3rem', md:'4rem' } }}>Vamos conversar</Typography>
          <Typography width='80%' color={ dark ? '#9093D8' : '#5E5E5F'} fontSize='1rem'> Preencha o formulário abaixo para esclarermos suas dúvidas e dar início ao seu projeto! </Typography>
        </Stack>
      </Stack>
    </Stack>
      <Stack height='20vh' bgcolor={ dark ? '#430049': 'black' } paddingTop={3} >
        <Typography color={ dark ? '#59C8D4': 'white' }  textAlign='center' >
            © Copyright 2022.
          </Typography>
      </Stack>
    </section>

  ) 
}
