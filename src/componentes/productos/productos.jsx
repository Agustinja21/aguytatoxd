import React, {useContext} from 'react'
import { Cards } from '../Card/tarjetas'
import { Box } from '@chakra-ui/react'
import { DataContext } from '../../context/Dataprovider'

export const ProductosLista = () => {

  const value = useContext(DataContext)
  const [productos] = value.productos

  console.log(productos)


  return (
    
    <main>
      
    <h1 className='title'>PRODUCTOS</h1>

    <Box className='productos'>

        <Box className='productos-ind'>

    {
      productos.map(producto =>(
        <Cards 
        key={productos.id}
        id={producto.id}
        name={producto.name}
        text={producto.text}
        price={producto.price}
        photo={producto.photo}
        title1={producto.title1}
        description1={producto.description1}
        title2={producto.title2}
        description2={producto.description2}
        
        />
      ))
    }

        </Box>

    </Box>

    </main>
  )
}
