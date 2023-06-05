import { Box } from '@chakra-ui/react'
import React, {useContext} from 'react'
import Logo from "../../imagenes/Logo.png"
import { DataContext } from "../../context/Dataprovider"

export const Carrito = () => {
    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu
    const [carrito, setCarrito] = value.carrito

    const tooglefalse = ()=>{
        setMenu(false);
    }

    const show1 = menu ? "carritos show" : "carritos"
    const show2 = menu ? "carrito show" : "carrito"

    const removeProduct = id =>{
        if(window.confirm("¿Quieres suspender el producto?")){
            carrito.forEach((item, index) =>{
                if(item.id ===id){
                    item.cantidad = 1;
                    carrito.splice(index, 1)
                }                
        })
        setCarrito([...carrito])
        }
    }



  return (
    <Box className={show1}>
        <Box className={show2}>
            <Box className="carrito__close" onClick={tooglefalse}>
                <box-icon name="x" type="solid"></box-icon>
            </Box>
            <h2>SU CARRITO</h2>
            <br /><br /><br />


            <Box className="carrito__center">
                {

                carrito.map((producto)=>(

                    <Box className="carrito__item">
                    <img src={producto.photo} alt="" />
                    <Box>
                        <h3> {producto.name} </h3>
                        <p className="price"> ${producto.price} </p>
                    </Box>
                    <Box>
                        <box-icon name="up-arrow" type="solid"></box-icon>
                        <p className="cantidad">1</p>
                        <box-icon name="down-arrow" type="solid"></box-icon>
                    </Box>
                    <Box className="remove__item" onClick={() => removeProduct(producto.id)}>
                        <box-icon name="trash"></box-icon>
                    </Box>
                </Box>

                ))
            }

            </Box>

            <Box className="carrito__footer">
                <h3> Total: $2324 </h3>
                <button className='btn'>Payment</button>
            </Box>
        </Box>
    </Box>
  )
}
