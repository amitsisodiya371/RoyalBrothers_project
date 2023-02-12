import {  createContext,useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [location,setLocation] = useState("")
    const [terms,setTerms] = useState(false)
    const [pick,setPick] = useState({})
    const [drop,setDrop] = useState({})
    const [s,setS] = useState(0)
    return(
        <AppContext.Provider value={{pick,setDrop,setPick,drop,location,setLocation,s,setS,terms,setTerms}}>
            {children}
        </AppContext.Provider>
    )
}