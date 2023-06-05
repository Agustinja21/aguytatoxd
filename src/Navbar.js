import React from 'react'
import { Card, Text, Image, Stack, Heading, Divider, ButtonGroup, Button, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

function Navbar({ name, text, price, photo}) {
    return (
        <Card maxW='sm'>
    <CardBody>
        <Image
        src={photo}
        alt='Green double couch with wooden legs'
        borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
        <Heading size='md'>{ name }</Heading>
        <Text>
            { text }
        </Text>
        <Text color='blue.600' fontSize='2xl'>
            ${ price }
        </Text>
        </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
        <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue'>
            Buy now
        </Button>
        <Button variant='ghost' colorScheme='blue'>
            Add to cart
        </Button>
        </ButtonGroup>
    </CardFooter>
    </Card>
)
}

export default Navbar