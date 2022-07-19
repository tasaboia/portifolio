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
        paddingY={10}
      >
          <Stack flexDirection='row' flexWrap='wrap' alignItems='center'>
              <Link href="https://web-build-j6nwd1tch-tasaboia.vercel.app" underline="none" target="_blank" rel="noopener noreferrer">
                <Box margin={.5} bgcolor={ dark ? '#430049' : '#CCCCCC'} width='600' height='60vh'>
                  <Avatar src={require('../../assets/images/coletiva-background-2.png')} style={{ width: 300}}/>
                </Box>
              </Link>
              <Link href="https://web-build-j6nwd1tch-tasaboia.vercel.app" underline="none" target="_blank" rel="noopener noreferrer">
                <Box margin={.5} bgcolor={ dark ? '#430049' : '#CCCCCC'} width='600' height='60vh'>
                  <Avatar src={require('../../assets/images/coletiva-background-2.png')} style={{ width: 300}}/>
                </Box>
              </Link>

              <Stack padding={5}  width='50%'>
                <Stack padding={2}>
                  <LineTitle title={'Algum texto'}/>
                </Stack>
                <Typography  fontFamily='Impact' sx={{fontSize:{xs: '2rem', sm: '3rem'}}}> Projetos </Typography>
                <Typography width='80%'> uma pequena texot sobre todo o projeto e como foi interessante trabalhar com novos defasio
                </Typography>
              </Stack>
          </Stack>
      </Box>
    </Stack>
  </section>
  )
}
