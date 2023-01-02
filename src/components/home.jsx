import { Box, Button, Divider, Flex, Grid, GridItem, Image, Stack, Link, Text } from '@chakra-ui/react'
import NavMovile from './navMovile'
import profile from '../assets/profilePhoto.webp'
import Bg from '../assets/fondo-home1.webp'
import { AiOutlineHome, AiOutlineUser, AiOutlinePicRight, AiOutlineMail } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import LetterHome from './letterHome/LetterHome';
import SobreMi from './SobreMI/SobreMi';
import { useState } from 'react';
import Resumen from './Resumen/Resumen';

function Home() {

  let [seccion,setSeccion ] =useState('home')
  console.log(seccion)

  return (
    <Box>
      <Box display={{ base: 'block', md: 'none' }}>
        <NavMovile setSeccion={setSeccion}/>
      </Box>

      <Grid
        h='100vh'
        templateRows='repeat(6, 1fr)'
        templateColumns='repeat(6, 1fr)'
      >
        <GridItem rowSpan={2} colSpan={1} bg='brand.primary' display={{ base: 'none', md: 'block' }} p={'2px'}>
          <Image objectFit='cover' h={'100%'} w={'100%'} src={profile} alt={'gabriel ferrer'} />
        </GridItem>

        <GridItem colSpan={{ base: 6, md: 5 }} rowSpan={6} boxSizing={'content-box'}>
          <Box h={'100vh'} bgImage={`url(${Bg})`} bgRepeat={'no-repeat'} bgSize={'cover'}>
            <Flex bg={'rgb(0 0 0 / 10%)'} h={'100vh'} justifyContent={'center'}>
              {seccion==='home'
              ? <LetterHome/>
              :seccion==='sobremi'
              ? <SobreMi/>
              :seccion==='resumen'
              ?<Resumen/>
              :<></>}
              
             
            </Flex>
            {/* <Image objectFit='cover' src={Bg} alt={'fondo Home'} h={'100vh'} w={'100%'} /> */}
          </Box>
        </GridItem>

        <GridItem bg='brand.primary' rowSpan={4} display={{ base: 'none', md: 'block' }} >
          <Stack direction='column'>
            {/* <Heading size={'sm'} marginBottom={'5px'} color={'white'}>Gabriel Ferrer</Heading> */}
            <Divider />
            <Button leftIcon={<AiOutlineHome size={'20px'} />} 
              colorScheme='teal' 
              variant='ghost' 
              borderRadius={0} 
              h={'30px'} 
              iconSpacing={'5px'}
              onClick={()=>{setSeccion('home')}}>
              Home        
            </Button>

            <Divider />

            <Button leftIcon={<AiOutlineUser size={'20px'} />} 
              colorScheme='teal' 
              variant='ghost' 
              borderRadius={0} 
              h={'30px'} 
              iconSpacing={'5px'}
              onClick={()=>{setSeccion('sobremi')}}>
              Sobre Mi  
            </Button>

            <Divider />

            <Button leftIcon={<AiOutlinePicRight size={'20px'} />} 
              colorScheme='teal' 
              variant='ghost' 
              borderRadius={0} 
              h={'30px'} 
              iconSpacing={'5px'}
              onClick={()=>{setSeccion('resumen')}}>
              Resumen   
            </Button>

            <Divider />

            <Button leftIcon={<BsBriefcase size={'20px'} />} 
              colorScheme='teal' 
              variant='ghost' 
              borderRadius={0} 
              h={'30px'} 
              iconSpacing={'5px'}>
              Portafolio
            </Button>

            <Divider />

            <Button leftIcon={<AiOutlineMail size={'20px'} />} 
            colorScheme='teal' 
            variant='ghost' 
            borderRadius={0} 
            h={'30px'} 
            iconSpacing={'5px'}>
              Contacto  
            </Button>

            <Divider />

          </Stack>

          <Stack direction='row' justify={'center'} marginTop={'6rem'}>
            <Link href='https://www.linkedin.com/in/gabriel-ferrer-villasmil/' isExternal>
              <FaLinkedin size={'1.5rem'} color='teal' />
            </Link>
            <Link href='https://github.com/Gabox18' isExternal>
              <FaGithubSquare size={'1.5rem'} color='teal' />
            </Link>
            <Link href='mailto:gefv191@gmail.com?Subject=Buenas%20te%20Contacto%20mediante%20tu%20Portafolio'>
              <ImMail size={'1.43rem'} color='teal' />
            </Link>
          </Stack>
          <Text fontSize={'9pt'} textAlign={'center'} color={'gray'} marginTop={'15px'}>
            2022 &copy; Gabriel Ferrer
            <br />
            All Right Reserved.
          </Text>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Home