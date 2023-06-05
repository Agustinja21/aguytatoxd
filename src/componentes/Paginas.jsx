import React from 'react'
import { Route, Switch } from "react-router-dom";
import { Inicio } from "./Inicio/index"
import { ProductosLista } from './productos/productos';

export const Paginas = () => {
  return (
    <section>
      <Switch>
        <Route path="/" exact component= {Inicio}/>
        <Route path="/productos" exact component= {ProductosLista}/>
      </Switch>
      </section>
  )
}


