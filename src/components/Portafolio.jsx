import { Box, Divider, Flex, Heading, Icon } from "@chakra-ui/react";
import { BsBriefcase } from "react-icons/bs";
import CardPoject from "./CardPoject/CardPoject";
import pojectPoke from '../assets/PokeApp.webp'
import bbApp from '../assets/BlockbusterApp.webp'
import Vgame from '../assets/VideoGameApp.webp'
import TodoApp from '../assets/TodoApp_.webp'

function Portafolio() {
    return (
        <Box bg={{ base: '#15152af2', md: '#0b0d1e' }} w={'100%'} color='white' overflowY={'scroll'}>
            <Box w={'90%'} margin={'0 auto'} >
                <Flex justifyContent={'space-between'} alignItems={'center'} marginTop={'4rem'}>
                    <Heading as={'h2'} color={'teal'}>Portafolio</Heading>
                    <Icon as={BsBriefcase} color={'teal'} boxSize={'2.5rem'}></Icon>
                </Flex>
                <Divider variant={'dashed'} margin={'0.5rem auto 2rem auto'} />
                <Flex flexDirection={{ base: 'column', lg: 'row' }}>
                    <CardPoject bg={pojectPoke} link='https://pokemon-gabox18.vercel.app/' title={'PokeApp'} description={'App de pokemon - Poryecto individual Henry'} />
                    <CardPoject bg={bbApp} link='https://blockbuster-pf.vercel.app/' title={'BlockbusterApp'} description={'App de streaming de peliculas por suscripcion'} />
                </Flex>
                <Divider m={'2rem'} />
                <Flex flexDirection={{ base: 'column', lg: 'row' }} marginBottom={'2rem'}>
                    <CardPoject bg={Vgame} link='https://github.com/Gabox18/PI-VideoGames' title={'Video Game App'} description={'[ EN DESARROLLO ] App de Video Juegos'} />
                    <CardPoject bg={TodoApp} link='https://todo-react-typescript-gabox18.vercel.app/' title={'Todo App - TypeScript'} description={'Ejercicio Clasico de ToDo'} />
                </Flex>
            </Box>
        </Box>
    )
}

export default Portafolio