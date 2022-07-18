import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Stack, Typography , Link} from '@mui/material'
import React from 'react'
import { useCustomTheme } from '../../context'

export default function Projects() {
  const { dark } = useCustomTheme()

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
        <Stack paddingTop={10} textAlign='center'>
          <Typography fontSize='4rem'>Projetos</Typography>
        </Stack>
          <Grid container sx={{ paddingLeft:{xs:0, sm: 1} , flexDirection: {xs: 'column', sm: 'row'}}} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} textAlign='center' justifyContent='center'>
            <Grid item sx={{ alignSelf:{xs:'center'}}}>
              <Link href="https://web-build-j6nwd1tch-tasaboia.vercel.app" underline="none" target="_blank" rel="noopener noreferrer">
                <Card sx={{ maxWidth: 250 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="150"
                      image={require('../../assets/images/coletiva-background-2.png')}
                      alt="Importa Coleta"
                    />
                    <CardContent>
                      <Typography color='black' gutterBottom variant="h6" component="div">
                        Importa Coletiva
                      </Typography>
                    
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
            <Grid item sx={{ alignSelf:{xs:'center'}}}>
              <Card sx={{ maxWidth: 250 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="150"
                    image={require('../../assets/images/app-background.png')}
                    alt="RMCenter App"
                  />
                  <CardContent>
                    <Typography  color='black' gutterBottom variant="h6" component="div">
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
