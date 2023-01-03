import { Box, Divider, Flex, Heading, Icon } from "@chakra-ui/react";
import { BsBriefcase } from "react-icons/bs";
import CardPoject from "./CardPoject/CardPoject";
import pojectPoke from '../assets/PokeApp.webp'
import bbApp from '../assets/BlockbusterApp.webp'

function Portafolio() {
    return (
        <Box bg={'#080816'} w={'100%'} color='white' overflowY={'auto'}>
            <Box w={'90%'} margin={'0 auto'}>
                <Flex justifyContent={'space-between'} alignItems={'center'} marginTop={'4rem'}>
                    <Heading as={'h2'} color={'teal'}>Portafolio</Heading>
                    <Icon as={BsBriefcase} color={'teal'} boxSize={'2.5rem'}></Icon>
                </Flex>
                <Divider variant={'dashed'} margin={'0.5rem auto 2rem auto'} />
                <Flex flexDirection={{base:'column', lg:'row'}}>
                    <CardPoject bg={pojectPoke} link='https://pokemon-gabox18.vercel.app/' title={'PokeApp'} description={'App de pokemon echa como Poryecto individual en bootcamp Henry'}/>
                    <CardPoject bg={bbApp} link='https://blockbuster-pf.vercel.app/' title={'BlockbusterApp'} description={'App de streaming de peliculas por suscripcion'}/>
                </Flex>
            </Box>
        </Box>
    )
}

export default Portafolio