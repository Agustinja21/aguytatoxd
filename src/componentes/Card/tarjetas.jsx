import React from 'react'
import { Card, Text, Image, Stack, Heading, Divider, ButtonGroup, Button, CardBody, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { DataContext } from '../../context/Dataprovider'
import { useContext } from 'react'

export const Cards = ({id, name, text, price, photo, title1, description1, title2, description2}) => {

    const value = useContext(DataContext);
    const addCarrito = value.addCarrito;



    
  return (
    <Card maxW='sm'>
    <CardBody>
        <Image w={900}
        src={photo}
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
    <ButtonGroup spacing='2' m={5}>
    <Popover>
            <PopoverTrigger>
                <Button>Informacion del propietario</Button>
            </PopoverTrigger>
    <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader> { title1 } </PopoverHeader>
    <PopoverBody> { description1 } </PopoverBody>
    </PopoverContent>
    </Popover>
        <Popover>
            <PopoverTrigger>
                <Button onClick={() => addCarrito(id)}>Añadir al carrito</Button>
            </PopoverTrigger>
    <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader > { title2 } </PopoverHeader>
    <PopoverBody> { description2 } </PopoverBody>
    </PopoverContent>
    </Popover>
    </ButtonGroup>
    </Card>
  )
}


