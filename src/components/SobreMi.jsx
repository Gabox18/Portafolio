import React from "react";
import { Box, Divider, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import { AiOutlineUser } from "react-icons/ai";

function SobreMi(props) {
    return (
        <Box bg={'#080816'} h={'100vh'} w={'100%'}>
            <Box w={'80%'} margin={'0 auto'}>
                <Flex justifyContent={'space-between'} alignItems={'center'} marginTop={'3rem'}>
                    <Heading as={'h2'} color={'teal'}>Sobre Mi </Heading>
                    <Icon as={AiOutlineUser} color={'teal'} boxSize={'2.5rem'}></Icon>
                </Flex>
                <Divider variant={'dashed'} margin={'0.5rem auto'} />
                <Flex>
                    <Box>
                        <Heading as={'h3'} size={'md'} color={'white'}> Programador web full stack </Heading>
                        <Text align={'justify'} color={'white'} marginTop={'1rem'}>
                            📌Soy Desarrollador Web Full Stack con experiencias trabajando en equipo tanto en proyectos de desarrollo como en otra áreas como atención al cliente.
                            <br/>
                            📌Entre mis aptitudes puedo destacar muy buena capacidad para adaptarme a diferentes proyectos y grupos de trabajo, así como también a cumplir objetivos planteados y asignados dentro de los requisitos de un proyecto de desarrollo, siempre brindando mi ayuda a mis compañeros y apoyándome en ellos si surgen dudas , de ser necesario
                            <br/>
                            📌En mi experiencia destaco la de este ultimo año que ejercí como estudiante de Desarrollador web Full Stack en Henry donde alcance mis mejores niveles en el conocimiento del desarrollo Back-end y Font-end aplicando las diferentes tecnologías que en cada una hay que conocer , y principalmente el uso a diario de JavaScript.
                        </Text>
                    </Box>
                    {/* <Box>
                        <Heading as={'h3'} size={'md'} color={'white'}> Informacion Personal </Heading>
                    </Box> */}
                </Flex>
            </Box>
        </Box>
    )
}

export default SobreMi