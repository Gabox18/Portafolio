import React from 'react'
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Box,
    Flex,
    Heading,
    IconButton,
    Image,
    Divider,
    Button,
    Stack,
    Link,
    Text
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import profile from '../assets/profilePhoto.webp'
import { AiOutlineHome, AiOutlineMail, AiOutlinePicRight, AiOutlineUser } from 'react-icons/ai'
import { BsBriefcase } from 'react-icons/bs'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { ImMail } from 'react-icons/im'

function NavMovile({setSeccion}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <Box position={'fixed'} width='100%' zIndex={'1'}>
            <Flex minWidth='max-content' alignItems='center' bg={'brand.primary'} h='3rem'>
                <Box width={'90%'}>
                    <Heading size='lg' color={'white'} height={'100%'} marginLeft={'12%'} textTransform='uppercase'>Gabriel Ferrer</Heading>
                </Box>
                <IconButton ref={btnRef} bg={'brand.primary'} color={'white'} onClick={onOpen} borderRadius={'0'}
                    icon={<HamburgerIcon padding={'0'} w={'20px'} h={'20px'}/>}>
                    Open
                </IconButton>
            </Flex>

            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
                size={'xs'}
            >
                <DrawerOverlay />
                <DrawerContent bg={'brand.primary'} overflow={'auto'}>
                    <Heading size='lg' color={'teal'} textAlign={'center'} paddingTop={'0.8rem'}>Gabriel Ferrer</Heading>
                    <Image src={profile} alt={'gabriel ferrer'} width={'12rem'} margin={'2rem auto'} borderRadius={'full'}
                        marginTop={'1rem'}/>
                    <Divider marginTop={'1rem'} w={'80%'} margin={'0 auto'}/>
                    <Button leftIcon={<AiOutlineHome size={'1.5rem'} />}
                        color='teal'
                        variant='ghost'
                        borderRadius={0}
                        h={'30px'}
                        p={'1.5rem'}
                        iconSpacing={'5px'}
                        fontSize={'1.3rem'}
                        onClick={()=> {
                            setSeccion('home')
                            onClose()
                        }}>
                        Home
                    </Button>

                    <Divider w={'80%'} margin={'0 auto'}/>
                    <Button leftIcon={<AiOutlineUser size={'1.5rem'} />}
                        color='teal'
                        variant='ghost'
                        borderRadius={0}
                        h={'30px'}
                        p={'1.5rem'}
                        iconSpacing={'5px'}
                        fontSize={'1.3rem'}
                        onClick={()=>{
                            setSeccion('sobremi')
                            onClose()
                        }}>
                        Sobre Mi
                    </Button>

                    <Divider w={'80%'} margin={'0 auto'}/>
                    <Button leftIcon={<AiOutlinePicRight size={'1.5rem'} />}
                        color='teal'
                        variant='ghost'
                        borderRadius={0}
                        h={'30px'}
                        p={'1.5rem'}
                        iconSpacing={'5px'}
                        fontSize={'1.3rem'}
                        onClick={()=>{
                            setSeccion('resumen')
                            onClose()
                        }}>
                        Resumen
                    </Button>

                    <Divider w={'80%'} margin={'0 auto'}/>
                    <Button leftIcon={<BsBriefcase size={'1.5rem'} />}
                        color='teal'
                        variant='ghost'
                        borderRadius={0}
                        h={'30px'}
                        p={'1.5rem'}
                        iconSpacing={'5px'}
                        fontSize={'1.3rem'}
                        onClick={()=>{
                            setSeccion('portafolio')
                            onClose()
                        }}>
                        Portafolio
                    </Button>

                    <Divider w={'80%'} margin={'0 auto'}/>
                    <Button leftIcon={<AiOutlineMail size={'1.5rem'} />}
                        color='teal'
                        variant='ghost'
                        borderRadius={0}
                        h={'30px'}
                        p={'1.5rem'}
                        iconSpacing={'5px'}
                        fontSize={'1.3rem'}
                        onClick={()=>{
                            setSeccion('contacto')
                            onClose()
                        }}>
                        Contacto
                    </Button>
                    <Divider w={'80%'} margin={'0 auto'}/>
                    <Stack direction='row' justify={'center'} marginTop={'6rem'} spacing={'1.5rem'}>
                        <Link href='https://www.linkedin.com/in/gabriel-ferrer-villasmil/' isExternal>
                            <FaLinkedin size={'2rem'} color='teal' />
                        </Link>
                        <Link href='https://github.com/Gabox18' isExternal>
                            <FaGithubSquare size={'2rem'} color='teal' />
                        </Link>
                        <Link href='mailto:gefv191@gmail.com?Subject=Buenas%20te%20Contacto%20mediante%20tu%20Portafolio'>
                            <ImMail size={'1.97rem'} color='teal' />
                        </Link>
                    </Stack>
                    <Text fontSize={'9.5pt'} textAlign={'center'} color={'gray'} marginTop={'15px'}>
                        2022 &copy; Gabriel Ferrer
                        <br />
                        All Right Reserved.
                    </Text>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}

export default NavMovile