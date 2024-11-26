import { createContext, useState } from "react";

export const GlobalDataContext= createContext()
export const GlobalDataProvider=({children})=>{
    const [text, setText]=useState("salam")
return(
    <GlobalDataContext.Provider value={{text}}>
        {children}
    </GlobalDataContext.Provider>
)
}