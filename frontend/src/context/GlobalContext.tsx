import { Dispatch, ReactElement, SetStateAction, createContext, useState } from "react";

interface GlobalContextProps {
    apiKey: string;
    setApiKey: Dispatch<SetStateAction<string>>;
    idUser: number;
    setIdUser: Dispatch<SetStateAction<number>>;
}

export const GlobalContext = createContext<GlobalContextProps | undefined>(undefined)

interface GlobalProviderProps {
    children: ReactElement
}
export const GlobalProvider = ({children}: GlobalProviderProps) => {

    const [apiKey, setApiKey] = useState<string>("");
    const [idUser, setIdUser] = useState<number>(0);

    return (
        <GlobalContext.Provider value={{apiKey, setApiKey, idUser, setIdUser}}>
            {children}
        </GlobalContext.Provider>
    )
}