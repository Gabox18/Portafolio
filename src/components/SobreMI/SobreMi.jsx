import React from "react";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Divider, Flex, Heading, Icon, Link, List, ListItem, Text } from '@chakra-ui/react'
import { AiOutlineCloudDownload, AiOutlineUser } from "react-icons/ai";
import "./SobreMi.css"
import Certificados from "../Certificados";
import credeHenry from '../../assets/Henry.webp'
import credeUdemi from '../../assets/udemi.webp'

function SobreMi(props) {
    return (
        <Box bg={{ base: '#15152af2', md: '#0b0d1e' }} w={'100%'} overflowY={'auto'}>
            <Box w={'90%'} margin={'0 auto'}>
                <Flex justifyContent={'space-between'} alignItems={'center'} marginTop={'4rem'}>
                    <Heading as={'h2'} color={'teal'}>Sobre Mi </Heading>
                    <Icon as={AiOutlineUser} color={'teal'} boxSize={'2.5rem'}></Icon>
                </Flex>
                <Divider variant={'dashed'} margin={'0.5rem auto 2rem auto'} />
                <Flex flexDirection={{ base: 'column', md: 'row' }}>
                    <Box w={{ base: '100%', md: '65%' }}>
                        <div className='SubtituloResumen'>
                            <h3>Programador web full stack</h3>
                        </div>
                        <Text align={'justify'} color={'white'} marginTop={'1rem'}>
                            📌Soy Desarrollador Web Full Stack con experiencias trabajando en equipo tanto en proyectos de desarrollo Web, y tambien en otra áreas como atención al cliente.
                            <br /><br />
                            📌Entre mis aptitudes puedo destacar muy buena capacidad para adaptarme a diferentes proyectos y grupos de trabajo, así como también a cumplir objetivos planteados y asignados dentro de los requisitos de un proyecto de desarrollo, siempre brindando mi ayuda a mis compañeros y apoyándome en ellos si surgen dudas , de ser necesario
                            <br /><br />
                            📌En mi experiencia destaco la de este ultimo año que ejercí como estudiante de Desarrollador web Full Stack en Henry donde alcance mis mejores niveles en el conocimiento del desarrollo Back-end y Font-end aplicando las diferentes tecnologías que en cada una hay que conocer , y principalmente el uso a diario de JavaScript.
                        </Text>
                    </Box>
                    <Box w={{ base: '100%', md: '35%' }} p={'0 1.5rem'} marginTop={{ base: '2rem', md: '0px' }}>
                        <div className='SubtituloResumen'>
                            <h3>Informacion Personal</h3>
                        </div>
                        <List spacing={5} marginTop={'1rem'}>
                            <ListItem textAlign={'left'}>
                                <Text fontSize={'2erm'} color='white' display={'inline'} textDecoration='underline teal 3px'>Nombre</Text>
                                <Text fontSize={'1erm'} color='white' display={'inline'}> : Gabriel Ferrer</Text>
                            </ListItem>
                            <ListItem textAlign={'left'}>
                                <Text fontSize={'2erm'} color='white' display={'inline'} textDecoration='underline teal 3px'>Edad</Text>
                                <Text fontSize={'1erm'} color='white' display={'inline'}> : 31 Años</Text>
                            </ListItem>
                            <ListItem textAlign={'left'}>
                                <Text fontSize={'2erm'} color='white' display={'inline'} textDecoration='underline teal 3px'>Residencia</Text>
                                <Text fontSize={'1erm'} color='white' display={'inline'}> : Valencia, Venezuela</Text>
                            </ListItem>
                            <ListItem textAlign={'left'}>
                                <Text fontSize={'2erm'} color='white' display={'inline'} textDecoration='underline teal 3px'>Email</Text>
                                <Text fontSize={'1erm'} color='white' display={'inline'}> : Gefv1891@gmail.com</Text>
                            </ListItem>
                            <ListItem textAlign={'left'}>
                                <Text fontSize={'2erm'} color='white' display={'inline'} textDecoration='underline teal 3px'>Telefono</Text>
                                <Text fontSize={'1erm'} color='white' display={'inline'}> : +(58) 424-4208549</Text>
                            </ListItem>
                        </List>
                        <Link href="./CV visual Gabriel Ferrer.pdf" download={''} p='2.5rem 0'>
                            <Button w={'100%'} variant='outline' marginTop={'1rem'} colorScheme='teal' leftIcon={<AiOutlineCloudDownload size={'20px'} />}>Descargar CV</Button>
                        </Link>
                    </Box>
                </Flex>
            </Box>
            <Box w={'70%'} m={'3rem auto'}>
                <div className='SubtituloResumen'>
                    <h3>Certificados</h3>
                </div>
                <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' color={'white'}>
                                    Full Stack Web Developer
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Certificados img={credeHenry} title={'Henry'} url={'https://certificates.soyhenry.com/cert?id=a2fa9900-eee8-4d3b-8ee7-f4bb8a94ca09'}/>
                        </AccordionPanel>
                    </AccordionItem>
                
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' color={'white'}>
                                    SAP ABAP Programación Iniciación
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Certificados img={credeUdemi} title={'Udemy'} url={'https://www.udemy.com/certificate/UC-7Y45RJHE/'}/>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' color={'white'}>
                                    SAP Conceptos e iniciación
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Certificados img={credeUdemi} title={'Udemy'} url={'https://www.udemy.com/certificate/UC-BCV2FBXI/'}/>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        </Box>
    )
}

export default SobreMi