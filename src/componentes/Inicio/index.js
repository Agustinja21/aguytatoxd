import { Box } from '@chakra-ui/react'
import React from 'react'
import portada from "../../imagenes/portada.jpg"

export const Inicio = () => {
  return (
    <Box>
        <img src={portada} alt="inicio"/>
    </Box>
  )
}
