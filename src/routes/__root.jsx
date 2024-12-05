import { useState } from "react";

import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import PizzaOfTheDay from "../PizzaOfTheDay";
import { CartContext } from "../context";
import Header from "../Header";


export const Route = createRootRoute({
  component: () => {
    const cartHook = useState([])
    return (
      <>
        <CartContext.Provider value={cartHook}>
          <div>
            <Header />
            <Outlet />
            <PizzaOfTheDay />
          </div>
        </CartContext.Provider>
        <TanStackRouterDevtools />
        <ReactQueryDevtools />
      </>
    )
  }
})