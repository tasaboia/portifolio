import { Box, Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Projects() {
  return (
    <section id='projects'>
      <Stack>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
        height='100vh'
      >
        <Stack padding={10} textAlign='center'>
          <Typography fontSize='4rem'>Projetos</Typography>

        </Stack>
        <Stack spacing={2} sx={{ display: {xs:'block', sm: 'flex'},  flexDirection:{xs:'column', sm: 'row'}}} alignSelf='center' justifyContent='center'>
            <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={require('../../assets/images/coletiva-background-2.png')}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Importa Coletiva
                </Typography>
              
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={require('../../assets/images/app-background.png')}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Importa Coletiva
                </Typography>
                
              </CardContent>
            </CardActionArea>
          </Card>
      </Stack>
      </Box>
    </Stack>
  </section>
  )
}
