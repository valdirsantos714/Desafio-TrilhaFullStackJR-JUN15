import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

export const useGlobalContext = () => {
    const context = useContext(GlobalContext)

    //Precisa garantir que não é underfined
    if (!context) {
        throw new Error("Está underfined o context");
    }

    return context;
}