import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Stack, Typography , Link, Avatar} from '@mui/material'
import React from 'react'
import { useFonts } from 'expo-font';
import { useCustomTheme } from '../../context'

export default function Projects() {
  const { dark } = useCustomTheme()
  let [fontsLoaded] = useFonts({
    'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  });
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
          <Typography fontFamily='Inter-SemiBoldItalic' sx={{fontSize:{xs: '2rem', sm: '3rem'}}}>Projetos</Typography>
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
          <Stack  position='absolute' width='100%' height='100vh' justifyContent='flex-end'  alignContent='center' alignItems='flex-end'>
            <Avatar alt="photo perfil" src={require('../../assets/3D/pc.png')} style={{ width:450, height: 'auto'}} />
          </Stack>
      </Box>
    </Stack>
  </section>
  )
}
