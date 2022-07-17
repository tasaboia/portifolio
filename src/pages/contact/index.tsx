import { Button, FormControl, FormHelperText, InputLabel, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

export default function Contact() {
  return (
    <Stack
      height='100vh'
      padding={10}
    >
      <Stack height='100%'>
        <Stack textAlign='center'>
          <Typography fontSize='4rem'>Entre em contato</Typography>
        </Stack>
        <Stack spacing={2} >
          <FormControl sx={{maxWidth:{sx: '100%', md: '50%'}}}>
            <TextField name='name' id="standard-basic" label="Digite seu nome" variant="standard" />
            <TextField name='email' id="standard-basic" label="Digite e-mail" variant="standard" type='email'/>
            <TextField  
              name='menssage'
              id="standard-basic" 
              label="Mensagem" 
              variant="standard" 
              multiline
              rows={4}/>
              <Stack paddingTop={2} maxWidth={200} alignSelf='flex-end'>
                <Button variant="outlined" type='submit' onClick={() => console.log('aqui')} >Enviar</Button>
              </Stack>
          </FormControl>
        </Stack>
      </Stack>
    </Stack>
  )
}
