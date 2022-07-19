import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Stack, Typography , Link, Avatar} from '@mui/material'
import React from 'react'
import { useFonts } from 'expo-font';
import { useCustomTheme } from '../../context'
import LineTitle from '../../components/LineTitle';

// image={require('../../assets/images/coletiva-background-2.png')}
// image={require('../../assets/images/app-background.png')}

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
        paddingY={15}
      >
          <Stack flexDirection='row' flexWrap='wrap' sx={{justifyContent: {xs: 'center', md: 'flex-start'}, }}>

            <Link href="https://web-build-j6nwd1tch-tasaboia.vercel.app" underline="none" target="_blank" rel="noopener noreferrer">
              <Box margin={.5} bgcolor={ dark ? '#430049' : '#F3F3F3'} borderRadius={2} boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' sx={{ width:{xs:'40vh', md:'60vh'}, height:{xs:'60vh' , md: '80vh'}}}>
                <Typography fontFamily='Impact' fontSize='4rem' color='white'>Importa Coletiva</Typography>
                <Avatar variant="square" src={require('../../assets/images/coletiva-background-2.png')} style={{ width: '100%' , height: 'auto'}}/>
                <Typography >Ver mais</Typography>
              </Box>
            </Link>
            <Link href="https://web-build-j6nwd1tch-tasaboia.vercel.app" underline="none" target="_blank" rel="noopener noreferrer">
              <Box margin={.5} bgcolor={ dark ? '#430049' : '#F3F3F3'} borderRadius={2} boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' sx={{ width:{xs:'40vh', md:'60vh'}, height:{xs:'60vh' , md: '80vh'}}} >
                <Typography fontFamily='Impact' fontSize='4rem' color='white'>RMCenter</Typography>
                <Stack justifyContent='flex-end' height='80%'>
                  <Stack spacing={2} direction='row' flexWrap='wrap' bottom={2} marginY={5} justifyContent='center'>
                    <Avatar variant="square" src={require('../../assets/images/rmcenter1.png')} style={{ width: '90%' , height: 'auto'}}/>
                </Stack>
                </Stack>
              </Box>
            </Link>

          <Stack maxWidth='60vh' sx={{order:{xs: -1, md: 0},  width:{xs: '100%', md: '80%'}, marginLeft: {xs: 0, md: 5}}}>
            <Stack>
              <Stack padding={2}>
                <LineTitle title={'Projetos em desenvolvimento'}/>
              </Stack>
              <Typography  fontFamily='Impact' sx={{fontSize:{xs: '2rem', sm: '6rem'}}}> Projetos </Typography>
              <Typography width='80%'> Esses são dois dos projetos que estão em desenvolvimento, as tecnologias usadas para esses projetos 
              </Typography>
              
              </Stack>
            </Stack>
          </Stack>
      </Box>
    </Stack>
  </section>
  )
}
