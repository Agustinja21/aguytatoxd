import React, {useContext} from 'react'
import { Box } from '@chakra-ui/react'
import Logo from "../../imagenes/Logo.png"
import 'boxicons'
import { Link } from 'react-router-dom'
import { DataContext } from "../../context/Dataprovider"

export const Header = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito] = value.carrito;

  console.log(menu);

  const toogleMenu = () =>{
    setMenu(!menu)
  }


  return (
    <header>
      <Box className="menu">
        <box-icon name="menu"></box-icon>
      </Box>
      <Link to="/">
      <Box className='logo'>
        <img src={Logo} alt='logo' width="150"/>
      </Box>
      </Link>
      <ul>
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/productos">PRODUCTOS</Link>
        </li>
      </ul>
      <Box className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className='item__total'>{carrito.length}</span>
      </Box>
      </header>
  )
}
