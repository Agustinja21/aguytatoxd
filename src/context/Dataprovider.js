import React, { useState, useEffect, createContext} from "react";
import Data from "../Data"
export const DataContext = createContext();

export const DataProvider = (props)=>{
    const [productos, setProductos] = useState([])
    const [menu, setMenu] = useState(false);
    const [carrito, setCarrito] = useState([])

    useEffect(() =>{
        const producto = Data.items
        if (producto){
            setProductos(producto)
        }else {
            setProductos([])
        }

    }, [])




    const addCarrito = (id) =>{
        const check = carrito.every(item =>{
            return item.id !== id;
        })
        if(check){
            const data = productos.filter(productos=>{
                return productos.id === id
            })
            setCarrito([...carrito, ...data])
        }else{
            alert("El producto se ha añadido al carrito")
        }
    }



    useEffect(() =>{
        const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
        if(dataCarrito){
            setCarrito(dataCarrito)
        } 
    }, [])

    useEffect(() =>{
        localStorage.setItem('dataCarrito', JSON.stringify(carrito))
    }, [carrito])





    const value = {
        productos : [productos],
        menu : [menu, setMenu],
        addCarrito: addCarrito,
        carrito: [carrito, setCarrito]
    }

    

    return (
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}