import "./CardPoject.css"
import { Button, Link } from "@chakra-ui/react";
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
                {description}
            </div>
            <span>
                <Link href={link} isExternal>
                <Button variant='link' colorScheme='red' size={'lg'} fontSize={'lg'} fontWeight={'bold'}>Ver Proyecto<ExternalLinkIcon mx='2px'/></Button> 
                </Link>  
            </span>
        </div>
    )
}

export default CardPoject