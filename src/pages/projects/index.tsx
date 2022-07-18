import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material'
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
          <Grid container sx={{ paddingLeft:{xs:15, sm: 1} , flexDirection: {xs: 'column', sm: 'row'}}} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent='center'>
            <Grid item>
              <Card sx={{ maxWidth: 250 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="150"
                    image={require('../../assets/images/coletiva-background-2.png')}
                    alt="Importa Coleta"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Importa Coletiva
                    </Typography>
                  
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item>
              <Card sx={{ maxWidth: 250 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="150"
                    image={require('../../assets/images/app-background.png')}
                    alt="RMCenter App"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Importa Coletiva
                    </Typography>
                    
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
      </Box>
    </Stack>
  </section>
  )
}
