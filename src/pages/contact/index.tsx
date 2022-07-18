import React from 'react'
import { Box, Button, FormControl, FormHelperText, InputLabel, Stack, TextField, Typography } from '@mui/material'
import Footer from '../footer'

export default function Contact() {
  
  return (
    <section id='contact'>
      <Stack
      height='100%'
      display='flex'
    >
      <Stack width='100%' alignItems='center' alignSelf='center'>
        <Stack padding={10} textAlign='center'>
          <Typography fontSize='3rem'>
            Entre em contato
          </Typography>
        </Stack>
        <Stack justifyItems='center' sx={{ width: { sx: '60vh', sm: '80vh' } }}>
          <form name="contact" method="POST" data-netlify="true" >
            <input type="hidden" name="form-name" value="contact" />  
            <TextField name='name' id="name" label="Digite seu nome" variant="standard" />
            <TextField name='email' type='email' id="email" label="E-mail" variant="standard" />
            <TextField name="message" id="msg" label="Mensagem" variant="standard" multiline rows={4} />
            <Stack paddingTop={2} alignSelf='flex-end'>
              <Button type='submit' variant="outlined">
                Enviar
              </Button>
            </Stack>
          </form>
        </Stack>
      </Stack>
    </Stack>
    <Footer />
    </section>

  ) 
}
