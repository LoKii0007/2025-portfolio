import { createContext, useState } from "react";

export const GlobalContext = createContext()

export function GlobalContextProvider({children}){

    const [darkTheme, setDarkTheme] = useState(false)

   return(
    <GlobalContext.Provider value={{darkTheme, setDarkTheme}} >
        {children}
    </GlobalContext.Provider>
   )
}