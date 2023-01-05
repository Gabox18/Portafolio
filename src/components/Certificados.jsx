import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Button, Grid, GridItem, Heading, Image, Link } from "@chakra-ui/react";

function Certificados({img,title,url}) {
    return (
        <Grid
            h='60px'
            w={{base:'80%', md:'40%'}}
            margin='auto'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(3, 1fr)'
        >
            <GridItem rowSpan={2} colSpan={1}>
                <Image objectFit='cover' h={'100%'} src={img} alt={'logo credencial'}/>
            </GridItem>

            <GridItem colSpan={2}>
                <Heading as={'h4'} color={'white'} fontSize={'1.3rem'}>{title}</Heading>
            </GridItem>

            <GridItem colSpan={2}>
                <Link href={url} isExternal display={'block'}>
                    <Button variant='outline' size={{base:'xs',md:'md'}} fontSize={'1rem'} w='90%' colorScheme='teal'>Credencial<ExternalLinkIcon mx='2px' /></Button>
                </Link>
            </GridItem>
            
        </Grid>
    )
}

export default Certificados