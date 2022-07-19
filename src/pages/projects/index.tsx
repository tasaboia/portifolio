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
              <Box margin={.5} bgcolor={ dark ? '#430049' : '#F3F3F3'}boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' sx={{ width:{xs:'40vh', md:'60vh'}, height:{xs:'60vh' , md: '80vh'}}}>
                <Stack alignItems='center' spacing={2} paddingTop={2}>
                  <Typography fontFamily='Impact' fontSize='3.2rem' color={ dark ? '#9093D8' : 'black'}>Importa Coletiva</Typography>
                  <Typography width='80%' fontSize='1rem' color={ dark ? '#9093D8' : 'black'}>Esses são dois dos projetos que estão em desenvolvimento, as tecnologias usadas para esses projetos Esses são dois dos projetos que estão em desenvolvimento, </Typography>
                </Stack>
                <Avatar variant="square" src={require('../../assets/images/coletiva-background-2.png')} style={{ width: '100%' , height: 'auto'}}/>
              </Box>
              
            </Link>
            <Link href="https://web-build-j6nwd1tch-tasaboia.vercel.app" underline="none" target="_blank" rel="noopener noreferrer">
              <Box  margin={.5} bgcolor={ dark ? '#430049' : '#F3F3F3'}boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' sx={{ width:{xs:'40vh', md:'60vh'}, height:{xs:'60vh' , md: '80vh'}}} >
                <Stack padding={4} spacing={6}  paddingTop={2}>
                  <Typography fontFamily='Impact' fontSize='3.2rem' color={ dark ? '#9093D8' : 'black'}>RMCenter</Typography>
                  <Typography paddingBottom={1} width='80%' fontSize='1rem' color={ dark ? '#9093D8' : 'black'}>Esses são dois dos projetos que estão em desenvolvimento, as tecnologias usadas para esses</Typography>
                </Stack>
                <Avatar variant="square" src={require('../../assets/images/rmcenter1.png')} style={{ width: '100%' , height: 'auto'}}/>
              </Box>
            </Link>

          <Stack maxWidth='60vh' sx={{ order:{xs: -1, md: 0},  width:{xs: '100%', md: '80%'}, marginLeft: {xs: 5, md: 5}}}>
            <Stack>
              <Stack padding={2}>
                <LineTitle title={'Projetos em desenvolvimento'}/>
              </Stack>
              <Typography  fontFamily='Impact' sx={{fontSize:{xs: '4rem', sm: '6rem'}}}> Projetos </Typography>
              <Typography width='80%'  color={ dark ? '#9093D8' : '#5E5E5F'}> Esses são dois dos projetos que estão em desenvolvimento, as tecnologias usadas para esses projetos  Um texto aqui sobre mim e minha tragetória nao apenas em programacao mas em desenvolvimento e indicacao par ir ao linkedin  Um texto aqui sobre mim e minha tragetória nao apenas em programacao mas em desenvolvimento e indicacao par ir ao linkedin 
              </Typography>
              
              </Stack>
            </Stack>
          </Stack>
      </Box>
    </Stack>
  </section>
  )
}
