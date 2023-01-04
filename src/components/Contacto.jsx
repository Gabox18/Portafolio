import { Box, Divider, Flex, Heading, Icon, IconButton, Link, Text } from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai";
import { SiGmail, SiWhatsapp } from "react-icons/si";

function Contacto(){
    return(
        <Box bg={'#080816'} w={'100%'} color='white' overflowY={'auto'}>
            <Box w={'90%'} margin={'0 auto'}>
                <Flex justifyContent={'space-between'} alignItems={'center'} marginTop={'4rem'}>
                    <Heading as={'h2'} color={'teal'}>Contacto</Heading>
                    <Icon as={AiOutlineMail} color={'teal'} boxSize={'2.5rem'}></Icon>
                </Flex>
                <Divider variant={'dashed'} margin={'0.5rem auto 2rem auto'} />
                    <Box flexDirection={'column'} p='1rem'>
                        <div className='SubtituloResumen'>
                            <h3>Escribeme</h3>
                        </div>
                    </Box>
                    <Flex flexDirection={{base:'column',sm:'row'}} h={'15rem'} justifyContent={'space-around'} m={{base:'6rem',sm:'0 3rem'}}>
                        <Box w={'100%'}>
                            <Link href='https://api.whatsapp.com/send/?phone=584244208549&text=Hola%20te%20contacto%20por%20tu%20portafolio&type=phone_number&app_absent=0' isExternal>
                                <IconButton icon={<SiWhatsapp size={'10rem'}/>} variant={'ghost'} colorScheme='whatsapp'w={'80%'} h='80%'/>
                                <Text>WhatsApp</Text>
                            </Link>
                        </Box>
                        <Box w={'100%'} marginTop={{base:'2rem',sm:'0'}}>
                            <Link href='mailto:gefv191@gmail.com?Subject=Buenas%20te%20Contacto%20mediante%20tu%20Portafolio' isExternal>
                                <IconButton icon={<SiGmail size={'10rem'}/>} variant={'ghost'} colorScheme='red'w={'80%'} h='80%'/>
                                <Text>Correo</Text>
                            </Link>
                        </Box>
                    </Flex>
            </Box>
        </Box>
    )
}

export default Contacto