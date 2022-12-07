import { Box, Button, Divider, Grid, GridItem, Image, Stack } from '@chakra-ui/react'
import NavMovile from './navMovile'
import profile from '../assets/profilePhoto.webp'
import Bg from '../assets/fondo-home.webp'
import { AiOutlineHome, AiOutlineUser, AiOutlinePicRight, AiOutlineMail } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";


function Home() {


  return (
    <Box>
      <Box display={{ base: 'block', md: 'none' }}>
        <NavMovile />
      </Box>

      <Grid
        h='100vh'
        templateRows='repeat(6, 1fr)'
        templateColumns='repeat(6, 1fr)'
      >
        <GridItem rowSpan={2} colSpan={1} bg='brand.primary' display={{ base: 'none', md: 'block' }} p={'2px'}>
          <Image objectFit='contain' src={profile} alt={'gabriel ferrer'} />
        </GridItem>

        <GridItem colSpan={{ base: 6, md: 5 }} rowSpan={6} backgroundColor={'rgb(0 0 0 / 80%)'}>
          <Image objectFit='cover' src={Bg} alt={'fondo Home'} h={'100vh'} w={'100%'}/> 
        </GridItem>

        <GridItem bg='brand.primary' rowSpan={5} display={{ base: 'none', md: 'block' }} >
          <Stack direction='column'>
            {/* <Heading size={'sm'} marginBottom={'5px'} color={'white'}>Gabriel Ferrer</Heading> */}
            <Divider />
            <Button leftIcon={<AiOutlineHome size={'20px'} />} colorScheme='teal' variant='ghost' borderRadius={0}>
              Home
            </Button>
            <Divider />
            <Button leftIcon={<AiOutlineUser size={'20px'} />} colorScheme='teal' variant='ghost' borderRadius={0}>
              Sobre Mi
            </Button>
            <Divider />
            <Button leftIcon={<AiOutlinePicRight size={'20px'} />} colorScheme='teal' variant='ghost' borderRadius={0}>
              Resumen
            </Button>
            <Divider />
            <Button leftIcon={<BsBriefcase size={'20px'} />} colorScheme='teal' variant='ghost' borderRadius={0}>
              Portafolio
            </Button>
            <Divider />
            <Button leftIcon={<AiOutlineMail size={'20px'} />} colorScheme='teal' variant='ghost' borderRadius={0}>
              Contacto
            </Button>
            <Divider />
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Home