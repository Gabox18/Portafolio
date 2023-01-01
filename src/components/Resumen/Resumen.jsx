import { Box, Divider, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import { AiOutlinePicRight } from "react-icons/ai";
import "./Resumen.css"

function Resumen() {
    return (
        <Box bg={'#080816'} w={'100%'} overflowY={'scroll'}>
            <Box w={'80%'} margin={'0 auto'}>
                <Flex justifyContent={'space-between'} alignItems={'center'} marginTop={'3rem'}>
                    <Heading as={'h2'} color={'teal'}>Resumen </Heading>
                    <Icon as={AiOutlinePicRight} color={'teal'} boxSize={'2.5rem'}></Icon>
                </Flex>
                <Divider variant={'dashed'} margin={'0.5rem auto 2rem auto'} />
                <Flex flexDirection={{ base: 'column', md: 'row' }}>
                    <Flex flexDirection={'column'} p='1rem' w={{base:'100%',md:'50%'}}>
                        <Box borderLeft={'teal solid 3px'} color='white' marginBottom={'3rem'}>
                            {/* <span className='left-bar'></span> */}
                            <Text color={'white'} textAlign='left' marginLeft='5px' textDecoration='underline teal 2px'>Oct 2022</Text>
                            <h2 className='tituloh2'>Henry</h2>
                            <h3 className='subtituloh3'>Proyecto Académico - BlockBuster APP</h3>
                            <Text marginLeft='10px' align={'justify'} fontSize='0.91rem'>
                                Proyecto grupal que consiste en la creacion de una lataforma de streaming para alquilar películas y series, y en la cual me desempeñe en :
                                <br /><span className='brResumen'>✨ Creación de formularios controlados</span>
                                <br /><span className='brResumen'>✨ Creación del componente React</span>
                                <br /><span className='brResumen'>✨ Lógica de pasarela de pago con PayPal</span>
                                <br /><span className='brResumen'>✨ Autenticación de terceros con - Auth0</span>
                                <br /><span className='brResumen'>✨ Despliegue de la app</span>
                            </Text>
                            <Text color={'white'} textAlign='left' marginLeft='5px' textDecoration='underline teal 2px'>Sep 2022</Text>
                        </Box>

                        <Box borderLeft={'teal solid 3px'} color='white' marginBottom={'3rem'}>
                            {/* <span className='left-bar'></span> */}
                            <Text color={'white'} textAlign='left' marginLeft='5px' textDecoration='underline teal 2px'>Aug 2022</Text>
                            <h2 className='tituloh2'>Henry</h2>
                            <h3 className='subtituloh3'>Proyecto Académico Individual - Pokémon APP</h3>
                            <Text marginLeft='10px' align={'justify'} fontSize='0.91rem'>
                                APP de Pokémon creado como proyecto individual para el bootcamp de Henry.
                                Mis logros en el proyecto individual:
                                <br /><span className='brResumen'>✨ Creación de servidor</span>
                                <br /><span className='brResumen'>✨ Creación de modelos - Sequelize</span>
                                <br /><span className='brResumen'>✨ Creación de rutas - Express</span>
                                <br /><span className='brResumen'>✨ Creación de formularios controlados</span>
                                <br /><span className='brResumen'>✨ Estilo - Css</span>
                                <br /><span className='brResumen'>✨ Despliegue</span>
                            </Text>
                            <Text color={'white'} textAlign='left' marginLeft='5px' textDecoration='underline teal 2px'>Jul 2022</Text>
                        </Box>

                        <Box borderLeft={'teal solid 3px'} color='white' marginBottom={'3rem'}>
                            {/* <span className='left-bar'></span> */}
                            <Text color={'white'} textAlign='left' marginLeft='5px' textDecoration='underline teal 2px'>sep 2019</Text>
                            <h2 className='tituloh2'>Venezolana de Industria Tecnológica C.A.</h2>
                            <h3 className='subtituloh3'>Técnico PC I</h3>
                            <Text marginLeft='10px' align={'justify'} fontSize='0.91rem'>
                                Mis actividades como Tecnico eran principalmente las de:
                                <br /><span className='brResumen'>✨ Recepción y entrega de equipos</span>
                                <br /><span className='brResumen'>✨ Diagnostico de equipos</span>
                                <br /><span className='brResumen'>✨ Mantenimiento preventivo y correctivo de equipos</span>
                                <br /><span className='brResumen'>✨ Manejo de herramientas ofimáticas para el control de reparaciones de equipos</span>
                            </Text>
                            <Text color={'white'} textAlign='left' marginLeft='5px' textDecoration='underline teal 2px'>Aug 2018</Text>
                        </Box>
                    </Flex>



                    <Flex flexDirection={'column'} p='1rem' w={{base:'100%',md:'50%'}}>
                        <Box borderLeft={'teal solid 3px'} color='white' marginBottom={'3rem'}>
                            {/* <span className='left-bar'></span> */}
                            <Text color={'white'} textAlign='left' marginLeft='5px' textDecoration='underline teal 2px'>Oct 2022</Text>
                            <h2 className='tituloh2'>Bootcamp Henry</h2>
                            <h3 className='subtituloh3'>Programador web full stack</h3>
                            <Text marginLeft='10px' align={'justify'} fontSize='0.91rem'>
                                Bootcamp de Programación+800hs
                                Realización de proyectos como:
                                <br/>📌 Creación de una plataforma/servicio de transmisión OTT para películas y series en línea.
                                <br/>📌 Diseñar y desarrollar una App de Pokémons que incluyera: búsquedas, filtrado, ordenamiento y creación o adición de información

                                <br/>Aptitudes:
                                <br/>✨ Interfaz: React, Redux, CSS, HTML, JavaScript, Redux-Toolkit

                                <br/>✨ Back-end: NodeJs, Express, Sequalize, PostgresSQL, SQL, Postman, TypeScript
                            </Text>
                            <Text color={'white'} textAlign='left' marginLeft='5px' textDecoration='underline teal 2px'>May 2018</Text>
                        </Box>
                        <Box borderLeft={'teal solid 3px'} color='white' marginBottom={'3rem'}>
                            {/* <span className='left-bar'></span> */}
                            <Text color={'white'} textAlign='left' marginLeft='5px' textDecoration='underline teal 2px'>sep 2019</Text>
                            <h2 className='tituloh2'>Instituto Universitario de Tecnologia Valencia</h2>
                            <h3 className='subtituloh3'>T.S.U en Informatica</h3>
                            <Text marginLeft='10px' align={'justify'} fontSize='0.91rem'>
                                <br /><span className='brResumen'>✨ Sistemas Operativos (Privativo y Software Libre), de mayor uso en las empresas</span>
                                <br /><span className='brResumen'>✨ Redes de computadoras en el ámbito local </span>
                                <br /><span className='brResumen'>✨ Programación</span>
                                <br /><span className='brResumen'>✨ Base de Datos</span>
                            </Text>
                            <Text color={'white'} textAlign='left' marginLeft='5px' textDecoration='underline teal 2px'>Aug 2018</Text>
                        </Box>
                    </Flex>
                </Flex>
            </Box>
        </Box>

    )
}

export default Resumen