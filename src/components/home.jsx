import { Box, Button, Grid, GridItem, Heading, IconButton, Image, Stack } from '@chakra-ui/react'
import NavMovile from './navMovile'
import profile from '../assets/profilePhoto.jpg'
import { ArrowForwardIcon, EmailIcon, HamburgerIcon } from '@chakra-ui/icons'

function Home() {


  return (
    <Box>
      <Box display={{ base: 'block', md: 'none' }}>
        <NavMovile />
      </Box>

      <Grid
        h='100vh'
        templateRows='repeat(6, 1fr)'
        templateColumns='repeat(5, 1fr)'
      >
        <GridItem rowSpan={3} colSpan={1} bg='brand.primary' minW='200px' display={{ base: 'none', md: 'block' }} p={'2px'}>
          <Image objectFit='cover' src={profile} alt={'gabriel ferrer'} boxSize='100%' />
        </GridItem>

        <GridItem colSpan={{ base: 6, md: 4 }} rowSpan={6} bg='primary'>
          main
        </GridItem>

        <GridItem bg='brand.primary' rowSpan={4} display={{ base: 'none', md: 'block' }} >
          <Stack direction='column'>
            <Heading size={'md'}>Gabriel Ferrer</Heading>
            <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid'>
              Home
            </Button>
            <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
              Sobre Mi
            </Button>
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Home