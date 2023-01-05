import "./CardPoject.css"
import { Button, Link, Text, VStack } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

function CardPoject({ title, description, bg, link }) {

    const divStyle = {
        backgroundImage: 'url(' + bg + ')',
        backgroundrRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: ' 50% 0%',
    };
    return (
        <div className={"card"} style={divStyle}>
            <strong> {title}
            </strong>
            <div className="card__body">
                {/* {description} */}
            </div>
            <span>
                <VStack>
                    <Link href={link} isExternal display={'block'}>
                        <Button variant='link' size={'lg'} fontSize={'x-large'} fontWeight={'bold'} color={'#030312'}>Ver Proyecto<ExternalLinkIcon mx='2px' /></Button>
                    </Link>
                    <Text color={"white"} fontSize='0.7em' p={' 0 5rem'}>{description}</Text>
                </VStack>
            </span>
        </div>
    )
}

export default CardPoject