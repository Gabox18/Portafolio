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
    Image
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import profile from '../assets/profilePhoto.webp'

function NavMovile() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Flex minWidth='max-content' alignItems='center'>
                <Box p='2' bg={'brand.primary'} width={'100%'}>
                    <Heading size='md' color={'brand.700'}>Gabriel Ferrer</Heading>
                </Box>
                <IconButton ref={btnRef} bg={'brand.primary'} color={'brand.700'} onClick={onOpen} borderRadius={'0'}
                    icon={<HamburgerIcon />}>
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
                <DrawerContent>
                    <Image src={profile} alt={'gabriel ferrer'} width={'12rem'} margin={'0 auto'}/>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default NavMovile