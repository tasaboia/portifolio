import { Box, Stack, Typography , Link, Avatar} from '@mui/material'
import React from 'react'
import { useFonts } from 'expo-font';
import { useCustomTheme } from '../../context'
import LineTitle from '../../components/LineTitle';
import TitleLine from '../../components/TitleLine';

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
          <Stack flexDirection='row' flexWrap='wrap' sx={{justifyContent: {xs: 'center', md: 'flex-start'}}}>
            <Link  sx={{display:{xs:'none', md:'flex'}}}  href="https://web-build-j6nwd1tch-tasaboia.vercel.app" underline="none" target="_blank" rel="noopener noreferrer">
              <Stack margin={.5} bgcolor={ dark ? '#430049' : '#F3F3F3'} boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' sx={{ width:{xs:'40vh', md:'60vh'}, height:{xs:'60vh' , md: '80vh'}}}>
                <Stack alignItems='center' spacing={2} paddingTop={2}>
                  <Typography fontFamily='Impact' fontSize='3.2rem' color={ dark ? '#9093D8' : 'black'}>Importa Coletiva</Typography>
                  <Typography width='80%' fontSize='1rem' color={ dark ? '#9093D8' : 'black'}> Projeto Mobile First, desenvolvido com React Js, JavaScript, Typescript, Native Base, React Query e Backend em C# e controle de versão GitHub</Typography>
                </Stack>
                <Avatar variant="square" src={require('../../assets/images/coletiva-background-2.png')} style={{ width: '100%' , height: 'auto'}}/>
              </Stack>
              
            </Link>
            <Link  sx={{display:{xs:'none', md:'flex'}}} underline="none" target="_blank" rel="noopener noreferrer">
              <Stack margin={.5} bgcolor={ dark ? '#430049' : '#F3F3F3'}boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' sx={{ width:{xs:'40vh', md:'60vh'}, height:{xs:'60vh' , md: '80vh'}}} >
                <Stack paddingX={2}  paddingTop={2}>
                  <Typography fontFamily='Impact' fontSize='3.2rem' color={ dark ? '#9093D8' : 'black'}>RMCenter</Typography>
                  <Typography paddingBottom={1} width='80%' fontSize='1rem' color={ dark ? '#9093D8' : 'black'}>Projeto desenvolvido em Expo Go para mobile, as principais tecnologias React Native, JavaScript, TypeScript, React Query, backend desenvolvido em Django</Typography>
                </Stack>
                <Avatar variant="square" src={require('../../assets/images/rmcenter1.png')} style={{ width: '100%' , height: 'auto'}}/>
              </Stack>

            </Link>
            <Link color={ dark ? '#9093D8' : '#5E5E5F'}  margin={1} sx={{display:{xs:'flex', md:'none'}}}  href="https://web-build-j6nwd1tch-tasaboia.vercel.app" underline="none" target="_blank" rel="noopener noreferrer">
              <Stack padding={5} bgcolor={ dark ? '#430049': 'black' }  width='100%'boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'> 
                <TitleLine title='Importa Coletiva'  body='Projeto desenvolvido em React Js, Native Base, React Query e backend em C# '/>
              </Stack>
            </Link>
            <Link color={ dark ? '#9093D8' : '#5E5E5F'}  margin={1}  sx={{display:{xs:'flex', md:'none'}}}   underline="none" target="_blank" rel="noopener noreferrer">
              <Stack bgcolor={ dark ? '#430049': 'black' } padding={5}  width='100%' boxShadow= 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'> 
                <TitleLine title='RMCenter' body='Projeto desenvolvido em React Native, React Query e o backend em Django'/>
              </Stack> 
            </Link>
          <Stack  sx={{ order:{xs: -1, sm: 0},  width:{xs: '100%', md: '25%'}, marginLeft: {xs: 5, md: 5}}}>
            <Stack>
              <Stack padding={2}>
                <LineTitle title={'Projetos em desenvolvimento'}/>
              </Stack>
              <Typography  fontFamily='Impact' sx={{fontSize:{xs: '4rem', sm: '6rem'}}}> Projetos </Typography>
              <Typography width='80%'  color={ dark ? '#9093D8' : '#5E5E5F'}>  Projetos desenvolvidos do início com as melhores tecnologias atuais no mercado, e com as principais funcionalidades para um sistema como Login por Autenticação, Context, Acesso a API usando a biblioteca React Query e Axios. 
              </Typography>
              
              </Stack>
            </Stack>
          </Stack>
      </Box>
    </Stack>
  </section>
  )
}
